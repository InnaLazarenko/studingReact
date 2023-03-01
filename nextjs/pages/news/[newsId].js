import { useRouter } from "next/router";

// our-domain.com/news/something-important

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  //send request to backend API to fetch the news with newsID

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
