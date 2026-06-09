import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'hi', 'bho', 'har', 'awa', 'mai', 'mag', 'bn', 'pa', 'mr', 'gu', 'ta', 'te', 'kn', 'ml'] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
