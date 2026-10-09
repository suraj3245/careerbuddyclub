// src/middleware.ts
// (Must live in src/ — this project uses the src/ directory, so a root middleware.ts is ignored.)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRIMARY_HOST = 'careerbuddyclub.com';

export function middleware(request: NextRequest) {
  // Behind a proxy / load balancer the original host comes in x-forwarded-host.
  const rawHost =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host') ||
    request.nextUrl.hostname;
  const hostname = rawHost.split(',')[0].trim().split(':')[0].toLowerCase();

  // www.careerbuddyclub.com/<path>?<query>  ->  301  https://careerbuddyclub.com/<path>?<query>
  // Only www is redirected, so load-balancer health checks (which use the server IP) are unaffected.
  if (hostname === `www.${PRIMARY_HOST}`) {
    const url = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      `https://${PRIMARY_HOST}`
    );
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals and static files.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
