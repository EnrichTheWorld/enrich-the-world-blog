import { getAllPosts, getAllCategories } from '@/lib/contentful';
import { BlogPage } from '@/components/BlogPage';

export const metadata = {
  title: '블로그',
  description: '기술과 사회적 임팩트에 관한 인사이트와 통찰을 담은 블로그 글들을 만나보세요.',
};

export default async function KrBlog() {
  const [posts, categories] = await Promise.all([
    getAllPosts('ko'),
    getAllCategories('ko'),
  ]);

  return (
    <BlogPage
      posts={posts}
      categories={categories}
      locale="ko"
    />
  );
}