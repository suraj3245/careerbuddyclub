import type { MetadataRoute } from 'next'
import axios from 'axios'

type ChangeFreq = 'yearly' | 'monthly' | 'always' | 'hourly' | 'daily' | 'weekly' | 'never'

const baseUrl = 'https://careerbuddyclub.com'

/**
 * ALLOW-LIST of public, indexable pages.
 * The sitemap no longer scans the app/ folder, so new pages are NOT added automatically —
 * add a public page here when it goes live.
 * Deliberately left out: /dashboard/* (logged in), theme demo routes (/home-2, /blog-v3,
 * /blog-details, /job-*-v*, /company-*, /courses-details, /university-details, /components/*),
 * /home (301 to /), /errormagic and /redirect (magic-link login flow), /college-details (empty index).
 */
const STATIC_PAGES: { path: string; changeFrequency: ChangeFreq; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/admission', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/advisor', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/ai-finder', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/aptitudetest', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/campus', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/career-aptitude', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/careerjobfest', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/cattutorial', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/colleges', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/college-blogs', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/corporate', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/courses', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/dubai-colleges', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/gettingjob', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/job-registration', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/online-course', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/personalitytraits', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/roi-calculator', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/school-blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/schools', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/speakers', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/universities', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-condition', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cancellation-refund-policy', changeFrequency: 'yearly', priority: 0.3 },
]

// Guides / blog posts (static folders under app/college-blogs and app/universities)
const CONTENT_PAGES: string[] = [
  '/college-blogs/best-bmlt-colleges-in-dehradun',
  '/college-blogs/best-mha-colleges-in-dehradun-uttarakhand-2026',
  '/college-blogs/best-pharmacy-colleges-in-dehradun',
  '/college-blogs/bsc-nursing-admission-uttarakhand-2026',
  '/college-blogs/top-7-nursing-colleges-in-dehradun',
  '/college-blogs/top-bba-colleges-in-dehradun',
  '/college-blogs/top-bpt-colleges-in-dehradun',
  '/college-blogs/uttarakhand-paramedical-admission-2026',
  '/universities/hemwati-nandan-bahuguna-uttarakhand-medical-education-university-dehradun',
  '/universities/icfai-university-dehradun',
  '/universities/ims-unison-university-dehradun',
  '/universities/private-university-in-dehradun',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString()

  const staticUrls: MetadataRoute.Sitemap = STATIC_PAGES.map(p => ({
    url: p.path === '/' ? baseUrl : `${baseUrl}${p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  const contentUrls: MetadataRoute.Sitemap = CONTENT_PAGES.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // Dynamic content from the CMS/API
  let streams: any[] = []
  let colleges: any[] = []
  try {
    const streamsRes = await axios.post('https://test.careerbuddyclub.com:8080/api/students/getfilterationdata')
    streams = streamsRes?.data?.streams ?? []

    const collegesRes = await axios.post('https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails')
    colleges = collegesRes?.data?.colleges ?? []
  } catch (e) {
    console.error('❌ Failed to fetch dynamic data for sitemap:', e)
  }

  const streamUrls: MetadataRoute.Sitemap = streams
    .map(stream => (stream.title || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
    .filter(Boolean)
    .map(slug => ({
      url: `${baseUrl}/colleges/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.8,
    }))

  const collegeDetailUrls: MetadataRoute.Sitemap = colleges
    .filter(college => college?.college_short_name)
    .map(college => ({
      url: `${baseUrl}/college-details/${college.college_short_name}`,
      lastModified,
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.8,
    }))

  // De-duplicate by URL
  const seen = new Set<string>()
  return [...staticUrls, ...contentUrls, ...streamUrls, ...collegeDetailUrls].filter(entry => {
    if (seen.has(entry.url)) return false
    seen.add(entry.url)
    return true
  })
}
