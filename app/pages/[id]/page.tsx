import { articles, olList, ulList } from '@/app/_lib/pages-data';
import ArticleContent from './_component/ArticleContent';
import Content from './_component/Content';
import LiOl from './_component/LiOl';
import LiUl from './_component/LiUl';

export default async function Pages({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find((a) => a.id === +id);
  return (
    <div className="mx-[30px] md:mx-[50px] lg:mx-[300px]">
      <Content
        H1={article!.h1}
        DescH1={article!.descH1}
        Src={article!.img}
        H2={article!.h2}
        DescH2={article!.descH2}
      />

      <div className="py-4">
        <p className="pb-4 text-[50px] font-bold">
          How AI Automation is Transforming Businesses
        </p>
        <ol className="list-inside list-decimal py-4">
          {olList.map((item, index) => (
            <LiOl key={index} Li={item.Li} span={item.span} />
          ))}
        </ol>
      </div>
      <div className="py-4">
        <p className="py-8 text-[50px] font-bold">
          Emerging Trends in AI Automation
        </p>
        <ul>
          {ulList.map((item, index) => (
            <LiUl key={index} Li={item.Li} />
          ))}
        </ul>
      </div>
      <ArticleContent />
    </div>
  );
}
