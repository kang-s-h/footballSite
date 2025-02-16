import { useNavigate } from "react-router-dom";
import { dataStore } from "../../../../store/dataStore";
import { useEffect, useState } from "react";
import Skeletons from "../../../skeletons/Skeletons";
import "../../../commonStyle.css";
import "./topPlayerCard.css";
import { PlayerType } from "../../../../store/types";

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
      css = "topPlayerCard__goals";
      rankPoint = (player) => player.statistics?.[0]?.goals?.total;
      isGoal = true;
      break;
    case "Assists":
      apiArray = topPlayerAssists;
      css = "topPlayerCard__assists";
      rankPoint = (player) => player.statistics?.[0]?.goals?.assists;
      isGoal = false;
      break;
    case "YellowCards":
      apiArray = topPlayerYellowCards;
      css = "topPlayerCard__yellowCards";
      rankPoint = (player) => player.statistics?.[0]?.cards?.yellow;
      isGoal = false;
      break;
    case "RedCards":
      apiArray = topPlayerRedCards;
      css = "topPlayerCard__redCards";
      rankPoint = (player) => player.statistics?.[0]?.cards?.red;
      isGoal = false;
      break;
  }

  return (
    <>
      {isLoading ? (
        <Skeletons width={"42vw"} height={600} margin={20} borderRadius={20} />
      ) : (
        <div className={`${css} common__boxCss topPlayerCard-boxSize`}>
          <div className="topPlayerCard-title">{title}</div>
          <div className="topPlayerCard-title-info">{info}</div>
          <div className="topPlayerCard__container">
            {apiArray?.map((player: PlayerType, index) => (
              <div
                key={player?.player?.id}
                className="topPlayerCard__container_box"
                onClick={() => {
                  if (player.player?.id) {
                    movePlayerPage(player.player.id);
                  }
                }}
              >
                <div className="topPlayerCard__container_box-standings">{index + 1}</div>
                <img
                  className="topPlayerCard__container_box_team-playerImg"
                  src={player.player?.photo}
                  alt={player.player?.photo}
                />
                <div className="topPlayerCard__container_box-name">
                  <span>{player.player?.name}</span>
                  <div className="topPlayerCard__container_box-team">
                    <img src={player.statistics?.[0]?.team?.logo} alt={player.statistics?.[0]?.team?.logo} />
                    <div className="topPlayerCard__container_box-team-name">{player.statistics?.[0]?.team?.name}</div>
                  </div>
                </div>
                <div className="topPlayerCard__container_box-goals">
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
