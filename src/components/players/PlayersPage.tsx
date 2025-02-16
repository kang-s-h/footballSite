import "./playersPage.css";
import { useEffect } from "react";
import { dataStore } from "../../store/dataStore";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PlayerTitle from "./components/PlayerTitle";
import PlayerStatistics from "./components/PlayerStatistics";
import PlayerTrophies from "./components/PlayerTrophies";

function PlayersPage() {
  const { playerStatistics } = dataStore();

  const { playerId } = useParams();
  const playerIdNum = Number(playerId);
  const { setSelectedPlayerId } = dataStore();

  useEffect(() => {
    setSelectedPlayerId(playerIdNum);
  }, [playerIdNum, setSelectedPlayerId]);

  return (
    <>
      <Helmet>
        <title>{`선수 페이지 ( ${playerStatistics?.player?.name} )`}</title>
      </Helmet>
      <div className="player">
        <PlayerTitle />
        <div className="player__main">
          <PlayerStatistics />
          <PlayerTrophies />
        </div>
      </div>
    </>
  );
}
export default PlayersPage;
