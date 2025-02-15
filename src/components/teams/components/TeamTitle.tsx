import "./teamTitle.css";
import { useEffect, useState } from "react";
import { dataStore } from "../../../store/dataStore";
import Skeletons from "../../skeletons/Skeletons";
function TeamTitle() {
  const { teamImg } = dataStore();
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
          <img className="team__title-img" src={teamImg?.team?.logo} alt={teamImg?.team?.logo} />
          <div className="team__title-text">
            <div className="team__title-text-name">{teamImg?.team?.name}</div>
            <div className="team__title-text-country">{teamImg?.league?.name}</div>
          </div>
        </div>
      )}
    </>
  );
}
export default TeamTitle;

// 이거 TeamPage css 공유해서 쓰는데 대신에 이거 나중에 리그 타이틀이랑 한번 엮어보자
