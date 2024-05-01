"use client"

import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';

import { Blog } from '@/types';



const BlogPage =  () => {
  // const res = await fetch('http://localhost:8000/blogs');
  // const blogs = await res.json();


  const {data:blogs, isLoading, isError, error} = useGetBlogsQuery("")

  // console.log(data)

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        All Blog from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-400 my-5 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-5 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
