import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { getStreamSlug } from '@/utils/customslugs'

function getAllStaticPagePaths(dir: string, baseUrl = '', pages: string[] = []): string[] {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch (err) {
    return pages
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllStaticPagePaths(fullPath, path.join(baseUrl, entry.name), pages)
    } else if (
      (entry.name === 'page.tsx' || entry.name === 'page.js') &&
      !baseUrl.includes('[')
    ) {
      const route =
        baseUrl === '/app' || baseUrl === ''
          ? '/'
          : baseUrl.replace(/^\/?app/, '').replace(/\/$/, '')
      pages.push(route === '' ? '/' : route)
    }
  }
  return pages
}

type ChangeFreq = 'yearly' | 'monthly' | 'always' | 'hourly' | 'daily' | 'weekly' | 'never';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://careerbuddyclub.com'
  const now = new Date()
  const lastModified = now.toISOString()

  // Static Pages
  const appDir = path.join(process.cwd(), 'app')
  let staticPagePaths: string[] = []
  try {
    staticPagePaths = getAllStaticPagePaths(appDir)
    if (staticPagePaths.length === 0) {
      staticPagePaths = getAllStaticPagePaths(path.join(process.cwd(), 'src', 'app'))
    }
  } catch (err) {
    return []
  }

  const staticUrls = staticPagePaths.map(route => ({
    url: `${baseUrl.replace(/\/$/, '')}/${route.replace(/^\//, '')}`,
    lastModified,
    changeFrequency: (route === '/' ? 'yearly' : 'monthly') as ChangeFreq,
    priority: route === '/' ? 1 : 0.7,
  }))

  // ➕ Manually Added Blog URLs
  const manualUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/college-blogs/top-pharmacy-colleges-dehradun`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/college-blogs/top-bba-colleges-dehradun`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // ➕ Dynamic Data from API
  let streams: any[] = []
  let colleges: any[] = []
  try {
    const streamsRes = await axios.post("https://test.careerbuddyclub.com:8080/api/students/getfilterationdata")
    streams = streamsRes?.data?.streams ?? []

    const collegesRes = await axios.post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails")
    colleges = collegesRes?.data?.colleges ?? []
  } catch (e) {
    console.error('❌ Failed to fetch dynamic data for sitemap:', e)
  }

  const streamUrls = streams.map(stream => ({
    url: `${baseUrl}/colleges/${getStreamSlug(stream.title, stream.id)}`,
    lastModified,
    changeFrequency: 'weekly' as ChangeFreq,
    priority: 0.8,
  }))

  const collegeDetailUrls = colleges.map(college => ({
    url: `${baseUrl}/college-details/${college.college_short_name}`,
    lastModified,
    changeFrequency: 'weekly' as ChangeFreq,
    priority: 0.8,
  }))

  return [
    ...staticUrls,
    ...manualUrls,
    ...streamUrls,
    ...collegeDetailUrls,
  ] as MetadataRoute.Sitemap
}
