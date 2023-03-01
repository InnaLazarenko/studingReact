import Link from "next/link";

// our-domain.com/news

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/news1">news1</Link></li>
      </ul>
    </>
  );
};

export default NewsPage;
