import "./teamOverviewLeagueCups.css";
import "../../../commonStyle.css";
import { dataStore } from "../../../../store/dataStore";
import { useState, useEffect } from "react";
import Skeletons from "../../../skeletons/Skeletons";
import { TeamLeagueCupsType } from "../../../../store/types";

function TeamLeagueCups() {
  const { teamLeagueCups } = dataStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamLeagueCups]);

  return (
    <>
      {isLoading ? (
        <div className="teamOverview__leagueCup">
          <Skeletons width={"41vw"} height={600} borderRadius={20} margin={20} />
        </div>
      ) : (
        <div className="teamOverview__leagueCup common__boxCss">
          <div className="teamOverview__leagueCup-title">참여 대회</div>
          <div className="teamOverview__leagueCup_container">
            {teamLeagueCups?.map((leagueCup: TeamLeagueCupsType, index) => (
              <div key={index} className="teamOverview__leagueCup_container_box boxCssLeagueCup">
                <img
                  className="teamOverview__leagueCup_container_box-img"
                  src={leagueCup?.league?.logo}
                  alt={leagueCup?.league?.logo}
                />
                <div>{leagueCup?.league?.name}</div>
                <div>{leagueCup?.league?.country}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default TeamLeagueCups;
