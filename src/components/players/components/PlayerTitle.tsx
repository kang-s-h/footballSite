import "./playerTitle.css";
import "../../commonStyle.css";
import { dataStore } from "../../../store/dataStore";
import Skeletons from "../../skeletons/Skeletons";
import { useState, useEffect } from "react";
import { PlayerStatisticsType } from "../../../store/types";

function PlayerTitle() {
  const { playerStatistics }: { playerStatistics: PlayerStatisticsType | null } = dataStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [playerStatistics]);

  return (
    <>
      {isLoading ? (
        <Skeletons width={1280} height={160} borderRadius={20} />
      ) : (
        <div className="common__boxCss player__profile">
          <img
            className="player__profile_boxConfig player__profile-img"
            src={playerStatistics?.player?.photo}
            alt={playerStatistics?.player?.name}
          />
          <div className="player__profile_infoBox-name">{playerStatistics?.player?.name}</div>
          <div className="player__profile_infoBox">
            <div className="player__profile_infoBox-thing">국적 : {playerStatistics?.player?.nationality}</div>
            <div className="player__profile_infoBox-thing">나이 : {playerStatistics?.player?.age}</div>
            <div className="player__profile_infoBox-thing">
              포지션 : {playerStatistics?.statistics?.[0]?.games?.position}
            </div>
            <div className="player__profile_infoBox-thing">
              {playerStatistics?.player?.height} , {playerStatistics?.player?.weight}
            </div>
          </div>
          <div className="player__profile_currentSeason-title">Current Season</div>
          <div className="player__profile_currentSeason">
            <div className="player__profile_infoBox-thing">
              출전 : {playerStatistics?.statistics?.[0]?.games?.appearences}
            </div>
            <div className="player__profile_infoBox-thing">골 : {playerStatistics?.statistics?.[0]?.goals?.total}</div>
            <div className="player__profile_infoBox-thing">
              어시스트 : {playerStatistics?.statistics?.[0]?.goals?.assists}
            </div>
            <div className="player__profile_infoBox-thing">
              출전 시간 : {playerStatistics?.statistics?.[0]?.games?.minutes}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default PlayerTitle;
