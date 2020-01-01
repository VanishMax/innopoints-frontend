import {API_HOST} from '@/constants/env';

// fetchType is needed for server-side request:
// in Sapper's preload() function there's this.fetch function that
// distinguishes between node-fetch and usual fetch depending on env
export default async (fetchType = fetch, url = '', method = 'GET', body = {}) => {
  return await fetchType(API_HOST + url, {
    credentials: 'include',
    body: Object.entries(body).length ? JSON.stringify(body) : undefined,
    method,
  }).then(res => {
    if (res.ok) return res.json();
    return null;
  });
};
