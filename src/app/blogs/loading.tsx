import LoadingCard from '@/components/ui/LoadingCard';
import { Blog } from '@/types';

const BlogLoadingPage = async () => {
  const res = await fetch('http://localhost:8000/blogs');
  const blogs = await res.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 w-[90%] mx-auto p-5">
        {blogs.map((blog: Blog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
