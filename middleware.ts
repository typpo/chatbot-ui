import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

if (!process.env.HTTP_BASIC_AUTH) {
  throw new Error('HTTP_BASIC_AUTH environment variable is not set');
}
const [AUTH_USER, AUTH_PASS] = process.env.HTTP_BASIC_AUTH.split(':');

// Step 1. HTTP Basic Auth Middleware for Challenge
export function middleware(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  return NextResponse.next();
}

// Step 2. Check HTTP Basic Auth header if present


function decodeBase64(base64Data: string) {
  const data = atob(base64Data);
  const decoder = new TextDecoder('utf-8');
  const decodedData = decoder.decode(new Uint8Array(data.split('').map((char) => char.charCodeAt(0))));
  return decodedData;
}

function isAuthenticated(req: NextRequest) {
  const authheader = req.headers.get('authorization') || req.headers.get('Authorization');

  if (!authheader) {
    return false;
  }

  const base64Data = authheader.split(' ')[1];
  const auth = decodeBase64(base64Data).split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == AUTH_USER && pass == AUTH_PASS) {
    return true;
  } else {
    return false;
  }
}

// Step 3. Configure "Matching Paths" below to protect routes with HTTP Basic Auth
export const config = {
  matcher: '/',
};

