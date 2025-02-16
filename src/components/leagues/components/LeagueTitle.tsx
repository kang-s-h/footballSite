import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import Skeletons from "../../skeletons/Skeletons";
import "./leagueTitle.css";

function LeagueTitle() {
  const { standings } = dataStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [standings]);

  return (
    <>
      {isLoading ? (
        <Skeletons width={1300} height={140} borderRadius={20} />
      ) : (
        <div className="league__title">
          <img className="league__title-img" src={standings?.flag} alt={standings?.flag} />
          <div className="league__title-text">
            <div className="league__title-text-name">{standings?.name}</div>
            <div className="league__title-text-country">{standings?.country}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeagueTitle;
