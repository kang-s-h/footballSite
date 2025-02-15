import "./playerTrophies.css";
import "../../commonStyle.css";
import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import Skeleton from "../../skeletons/Skeletons";

function PlayerTrophies() {
  const { playerTrophies } = dataStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [playerTrophies]);
  return (
    <>
      {isLoading ? (
        <Skeleton width={1180} height={1000} borderRadius={20} margin={20} />
      ) : (
        <div className="player__trophies common__boxCss">
          <div className="player__trophies_title">수상</div>
          <div className="player__trophies_container">
            {playerTrophies?.map((trophi, index) => (
              <div key={index} className="player__trophies_container_box">
                <div>{trophi?.league}</div>
                <div>{trophi?.country}</div>
                <div>{trophi?.season}</div>
                <div>{trophi?.place}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PlayerTrophies;
