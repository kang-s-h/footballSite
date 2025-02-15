import { dataStore } from "../../store/dataStore";
import "./news.css";
import Skeletons from "../skeletons/Skeletons";
import { useEffect, useState } from "react";

function News() {
  const { news, displayCount, setDisplayCount } = dataStore();
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [news]);

  function handleClickMore() {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayCount();
      setLoadingMore(false);
    }, 3000);
  }

  return (
    <>
      <div className="news">
        {loading
          ? Array.from({ length: displayCount }).map((_, index) => (
              <Skeletons key={index} width={360} height={480} borderRadius={50} />
            ))
          : news.slice(0, displayCount).map((newsData, index) => (
              <div className="news_container_box" key={index}>
                <img className="news_container_box-img" src={newsData?.images?.[0]?.url} />
                <div className="news_container_box-title">
                  <div className="news_container_box-title-headline">{newsData?.headline}</div>
                  <div className="news_container_box-title-summary">{newsData?.description}</div>
                  <div className="news_container_box-title-date">{newsData?.published}</div>
                </div>
              </div>
            ))}

        {/* 추가 로딩 시 Skeleton 표시 */}
        {loadingMore &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeletons key={index} width={360} height={410} borderRadius={50} />
          ))}

        {displayCount < news.length && !loadingMore && (
          <div className="news_container-button" onClick={handleClickMore}>
            ▼
          </div>
        )}
      </div>
    </>
  );
}

export default News;
