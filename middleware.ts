import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_SUBDOMAINS = ['tessera', 'loom', 'verdant', 'close', 'foundry'];
const COOKIE_NAME = 'studio_access';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getSubdomain(host: string): string | null {
  const parts = host.split('.');
  if (parts.length >= 3) return parts[0];
  return null;
}

function isProtected(host: string): boolean {
  const sub = getSubdomain(host);
  return sub !== null && PROTECTED_SUBDOMAINS.includes(sub);
}

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  const { pathname, searchParams } = req.nextUrl;

  // ── Cookie unlock path ─────────────────────────────────────────────────────
  // Visit /_unlock?token=<STUDIO_UNLOCK_TOKEN> once to set a 1-year cookie
  // that skips Basic Auth on all protected subdomains.
  if (pathname === '/_unlock') {
    const token = searchParams.get('token');
    if (token && token === process.env.STUDIO_UNLOCK_TOKEN) {
      const res = NextResponse.redirect(new URL('/', req.url));
      res.cookies.set(COOKIE_NAME, 'true', {
        domain: '.howdyart.works',
        maxAge: COOKIE_MAX_AGE,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
      });
      return res;
    }
    return new NextResponse('Invalid token', { status: 403 });
  }

  // ── Only gate protected subdomains ────────────────────────────────────────
  if (!isProtected(host)) return NextResponse.next();

  // ── Cookie check ──────────────────────────────────────────────────────────
  const cookie = req.cookies.get(COOKIE_NAME);
  if (cookie?.value === 'true') return NextResponse.next();

  // ── Basic Auth check ─────────────────────────────────────────────────────
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Basic ')) {
    const b64 = authHeader.slice(6);
    const decoded = atob(b64);
    const [, password] = decoded.split(':');
    if (password === process.env.STUDIO_PASSWORD) {
      return NextResponse.next();
    }
  }

  // ── Prompt for credentials ────────────────────────────────────────────────
  return new NextResponse('Studio access required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Howdy Studio", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: [
    // Run on all paths, including /_unlock
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
