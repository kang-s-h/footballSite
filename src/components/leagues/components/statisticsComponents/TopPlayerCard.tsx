import { useNavigate } from "react-router-dom";
import { dataStore } from "../../../../store/dataStore";
import { useEffect, useState } from "react";
import Skeletons from "../../../skeletons/Skeletons";

type PlayerType = {
  player?: {
    id?: number;
    photo?: string;
    name?: string;
  };
  statistics?: {
    team?: {
      logo?: string;
      name?: string;
    };
    goals?: {
      total?: number;
      assists?: number;
    };
    cards?: {
      yellow?: number;
      red?: number;
    };
    penalty?: {
      scored?: number;
    };
  }[];
};

function TopPlayerCard({ title, info }: { title: string; info: string }) {
  const { topPlayerGoals, topPlayerAssists, topPlayerYellowCards, topPlayerRedCards, setNavigate, movePlayerPage } =
    dataStore();

  let apiArray, css, rankPoint: (player: PlayerType) => number | undefined, isGoal: boolean;

  const navigatePlayerPage = useNavigate();
  useEffect(() => {
    setNavigate(navigatePlayerPage);
  }, [navigatePlayerPage, setNavigate]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, [apiArray]);

  switch (title) {
    case "Goals":
      apiArray = topPlayerGoals;
      css = "statistics__goals";
      rankPoint = (player) => player.statistics?.[0]?.goals?.total;
      isGoal = true;
      break;
    case "Assists":
      apiArray = topPlayerAssists;
      css = "statistics__assists";
      rankPoint = (player) => player.statistics?.[0]?.goals?.assists;
      isGoal = false;
      break;
    case "YellowCards":
      apiArray = topPlayerYellowCards;
      css = "statistics__yellowCards";
      rankPoint = (player) => player.statistics?.[0]?.cards?.yellow;
      isGoal = false;
      break;
    case "RedCards":
      apiArray = topPlayerRedCards;
      css = "statistics__redCards";
      rankPoint = (player) => player.statistics?.[0]?.cards?.red;
      isGoal = false;
      break;
  }

  return (
    <>
      {isLoading ? (
        <Skeletons width={600} height={600} margin={20} borderRadius={20} />
      ) : (
        <div className={`${css} statistics__boxCss`}>
          <div className="statistics-title">{title}</div>
          <div className="statistics-title-info">{info}</div>
          <div className="league__topPlayer_container">
            {apiArray?.map((player: PlayerType, index) => (
              <div
                key={player?.player?.id}
                className="league__topPlayer_box"
                onClick={() => movePlayerPage(player.player.id)}
              >
                <div style={{ fontWeight: "bolder", fontSize: "larger" }}>{index + 1}</div>
                <img
                  className="league__topPlayer_box_team-playerImg"
                  src={player.player?.photo}
                  alt={player.player?.photo}
                />
                <div className="league__topPlayer_box-name">
                  <span>{player.player?.name}</span>
                  <div className="league__topPlayer_box-team">
                    <img src={player.statistics?.[0]?.team?.logo} alt={player.statistics?.[0]?.team?.logo} />
                    <div className="league__topPlayer_box-team-name">{player.statistics?.[0]?.team?.name}</div>
                  </div>
                </div>
                <div className="league__topPlayer_box-goals">
                  {`${rankPoint(player)}${isGoal ? `(${player.statistics?.[0]?.penalty?.scored})` : ""}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TopPlayerCard;
