import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const forbiddenHostnames = ['test.careerbuddyclub.com'];

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;

  if (forbiddenHostnames.includes(hostname)) {
    // Redirect to main domain
    return NextResponse.redirect('https://careerbuddyclub.com');
  }

  // Allow all other hostnames
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};