import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|hi|bho|har|awa|mai|mag|bn|pa|mr|gu|ta|te|kn|ml)/:path*']
};
