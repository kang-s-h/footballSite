import { dataStore } from "../../store/dataStore";
import { regExpStore } from "../../store/regExpStore";
import "./news.css";
import Skeletons from "../skeletons/Skeletons";
import { useEffect, useState } from "react";
import { NewsType } from "../../store/types";

function News() {
  const { news, displayCount, setDisplayCount } = dataStore();
  const { replaceTimeStampStr } = regExpStore();
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
              <Skeletons key={index} width={"calc(30%)"} height={480} borderRadius={50} />
            ))
          : news.slice(0, displayCount).map((newsData: NewsType, index: number) => (
              <div className="news_container_box" key={index}>
                <img className="news_container_box-img" src={newsData?.images?.[0]?.url} />
                <div className="news_container_box-title">
                  <div className="news_container_box-title-headline">{newsData?.headline}</div>
                  <div className="news_container_box-title-summary">{newsData?.description}</div>
                  <div className="news_container_box-title-date">
                    {newsData?.published?.replace(replaceTimeStampStr, " ")}
                  </div>
                </div>
              </div>
            ))}

        {loadingMore &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeletons key={index} width={"calc(30%)"} height={480} borderRadius={50} />
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
