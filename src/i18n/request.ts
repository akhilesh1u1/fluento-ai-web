import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

const messageImports: Record<string, () => Promise<any>> = {
  en: () => import('../../messages/en.json'),
  hi: () => import('../../messages/hi.json'),
  bho: () => import('../../messages/bho.json'),
  har: () => import('../../messages/har.json'),
  awa: () => import('../../messages/awa.json'),
  mai: () => import('../../messages/mai.json'),
  mag: () => import('../../messages/mag.json'),
  bn: () => import('../../messages/bn.json'),
  pa: () => import('../../messages/pa.json'),
  mr: () => import('../../messages/mr.json'),
  gu: () => import('../../messages/gu.json'),
  ta: () => import('../../messages/ta.json'),
  te: () => import('../../messages/te.json'),
  kn: () => import('../../messages/kn.json'),
  ml: () => import('../../messages/ml.json'),
};

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await messageImports[locale as keyof typeof messageImports]()).default
  };
});
