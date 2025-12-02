// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedHostnames = [
  'careerbuddyclub.com',
  'www.careerbuddyclub.com',
  'localhost',
  '127.0.0.1',
];

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;

  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  if (!allowedHostnames.includes(hostname)) {
    const url = request.nextUrl.clone();
    url.hostname = 'careerbuddyclub.com';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
