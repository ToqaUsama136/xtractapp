import { articles } from '@/app/_lib/pages-data';

export default async function Pages({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find((a) => a.id === +id);
  return (
    <div>
      <p>{article?.h1}</p>
    </div>
  );
}
