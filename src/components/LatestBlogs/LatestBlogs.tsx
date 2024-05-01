import { Blog } from '@/types';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        Letest Blog from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-400 my-5 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 w-[90%] mx-auto gap-5 my-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-5 my-8">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
