import LatestBlogs from '@/components/LatestBlogs/LatestBlogs';

// ISR >> Incremental static regeneration
const HomePage = async () => {
  const res = await fetch('http://localhost:8000/blogs', {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();

  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
