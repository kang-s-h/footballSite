import "./teamTitle.css";
import { useEffect, useState } from "react";
import { dataStore } from "../../../store/dataStore";
import Skeletons from "../../skeletons/Skeletons";
import { TeamImgType } from "../../../store/types";

function TeamTitle() {
  const { teamImg }: { teamImg: TeamImgType } = dataStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamImg]);

  return (
    <>
      {isLoading ? (
        <Skeletons width={1300} height={140} borderRadius={20} />
      ) : (
        <div className="team__title">
          <img className="team__title-img" src={teamImg?.team?.logo ?? ""} alt={teamImg?.team?.logo ?? "Team logo"} />
          <div className="team__title-text">
            <div className="team__title-text-name">{teamImg?.team?.name ?? "Unknown Team"}</div>
            <div className="team__title-text-country">{teamImg?.league?.name ?? "Unknown League"}</div>
          </div>
        </div>
      )}
    </>
  );
}
export default TeamTitle;
