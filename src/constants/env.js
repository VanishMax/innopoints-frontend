export const API_HOST = process.browser
  ? process.env.SAPPER_APP_API_HOST_BROWSER
  : process.env.SAPPER_APP_API_HOST;
export const API_HOST_BROWSER = process.env.SAPPER_APP_API_HOST_BROWSER;
export const AUTH_HOST = process.env.SAPPER_APP_AUTH_HOST;
export const USER_EMAIL = (
  process.env.NODE_ENV === 'development' && process.env.SAPPER_APP_USER_EMAIL || ''
);
/* eslint-disable-next-line max-len */
export const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
