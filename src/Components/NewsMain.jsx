import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

const NewsMain = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=${country}&max=15&apikey=85f872968735c1d6c8b3377220625e56`;

      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Network error: ${response.statusText}`);
        const data = await response.json();

        if (Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          throw new Error("Unexpected data structure");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]); // Reacts to category and country changes

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="text-center">Latest <span>News from {category} {country}</span></h1>
      <div className="row justify-content-center">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
              <NewsItem
                title={news.title || "No title available"}
                description={news.description || "No description available"}
                src={news.image || "https://via.placeholder.com/150"}
                url={news.url || "#"}
                source={news.source?.name || "Unknown source"}
              />
            </div>
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsMain;
