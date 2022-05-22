import http from './http';

export const getRepo = () => http.get('repos/halfkai/blog');

export const getContent = (path: string) => http.get(`repos/halfkai/blog/contents/${path}`);
