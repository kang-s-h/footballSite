import "./playersPage.css";
import { getPlayer, getPlayerTrophies } from "../../apis/player";
import { useEffect, useState } from "react";
import { dataStore } from "../../store/dataStore";
import { useParams } from "react-router-dom";

function PlayersPage() {
  const { playerStatistics, playerTrophies } = dataStore();

  const { playerId } = useParams();
  const playerIdNum = Number(playerId);
  const { setSelectedPlayerId } = dataStore();

  useEffect(() => {
    setSelectedPlayerId(playerIdNum);
  }, [playerIdNum, setSelectedPlayerId]);

  return (
    <div className="player">
      <div className="player__boxCss player__profile">
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
        <div className="player__profile_currentSeason-title">current Season</div>
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
      <div className="player__main">
        <div className="player__statistics player__boxCss">
          <div className="player__statistics_title">{"<통계>"}</div>
          <table className="player__statistics_table">
            <thead>
              <tr>
                <th>대회</th>
                <th>출전(교)</th>
                <th>평점</th>
                <th>유효슈팅률</th>
                <th>골(PK)</th>
                <th>어시스트</th>
                <th>KEY패스</th>
                <th>경합성공률</th>
                <th>드리블성공률</th>
                <th>옐로(레드)</th>
              </tr>
            </thead>
            <tbody>
              {/* 나중에 NAN -으로 처리하기  */}
              {playerStatistics?.statistics?.map((statistic, index) => (
                <tr key={index}>
                  <td>{statistic?.league?.name}</td>
                  <td className="player__statistics_table-td">
                    {statistic?.games?.appearences}({statistic?.substitutes?.in})
                  </td>
                  <td>{Number(statistic?.games?.rating).toFixed(2)}</td>
                  <td>{`${Number(statistic?.shots?.on / statistic?.shots?.total).toFixed(2) * 100}%`}</td>
                  <td>
                    {statistic?.goals?.total}({statistic?.penalty?.scored})
                  </td>
                  <td>{statistic?.goals?.assists}</td>
                  <td>{Math.round(statistic?.passes?.key / statistic?.passes?.total) * 100}</td>
                  <td>{Math.round(statistic?.duels?.won / statistic?.duels?.total) * 100}</td>
                  <td>{Math.round(statistic?.dribbles?.success / statistic?.dribbles?.success) * 100}</td>
                  <td>
                    {statistic?.cards?.yellow}({statistic?.cards?.red})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="player__trophies player__boxCss">
          <div className="player__trophies_title">{"<수상>"}</div>
          <div className="player__trophies_container">
            {playerTrophies?.map((trophi, index) => (
              <div key={index} className="player__trophies_container_box">
                <div>{trophi?.league}</div>
                {/* <div>{trophi?.country}</div> */}
                <div>{trophi?.season}</div>
                <div>{trophi?.place}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayersPage;
