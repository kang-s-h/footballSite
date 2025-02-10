import { dataStore } from "../../store/dataStore";
import "./news1.css";
function News1() {
  const { news, displayCount, setDisplayCount } = dataStore();

  function handleClickMore() {
    setDisplayCount();
  }

  return (
    <>
      <div className="news_container">
        {news.slice(0, displayCount).map((newsData, index) => (
          <div className="news_container_box" key={index}>
            <img className="news_container_box-img" src={newsData?.images?.[0]?.url} />
            <div className="news_container_box-title">
              <div className="news_container_box-title-headline">{newsData?.headline}</div>
              <div className="news_container_box-title-summary">{newsData?.description}</div>
              <div className="news_container_box-title-date">{newsData?.published}</div>
            </div>
          </div>
        ))}

        {displayCount < news.length && (
          <div className="news_container-button" onClick={handleClickMore}>
            ▼
          </div>
        )}
      </div>
    </>
  );
}

export default News1;
