import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

async function page({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1>{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default page;

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category,
    }))
}