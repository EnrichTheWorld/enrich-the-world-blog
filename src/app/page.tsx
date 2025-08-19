import { getFeaturedPosts, getLatestPosts, getAllCategories } from '@/lib/contentful';
import { HomePage } from '@/components/HomePage';

export default async function Home() {
  const [featuredPosts, latestPosts, categories] = await Promise.all([
    getFeaturedPosts(3, 'en'),
    getLatestPosts(6, 'en'),
    getAllCategories('en'),
  ]);

  return (
    <HomePage
      featuredPosts={featuredPosts}
      latestPosts={latestPosts}
      categories={categories}
      locale="en"
    />
  );
}