'use server';

import { Blog } from '@/types';

const createBlog = async (data: Blog) => {
  const res = await fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    cache: 'no-store',
  });
  const blogInfo = res.json();

  return blogInfo;
};

export default createBlog;
