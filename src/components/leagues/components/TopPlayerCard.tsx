import { dataStore } from "../../../store/dataStore";
function TopPlayerCard({ title, info }) {
  const { topPlayerGoals, topPlayerAssists, topPlayerYellowCards, topPlayerRedCards } = dataStore();

  let apiArray, css, rankPoint, isGoal;

  switch (title) {
    case "Goals":
      apiArray = topPlayerGoals;
      css = "statistics__goals";
      rankPoint = (player) => player?.statistics?.[0]?.goals?.total;
      isGoal = true;
      break;
    case "Assists":
      apiArray = topPlayerAssists;
      css = "statistics__assists";
      rankPoint = (player) => player?.statistics?.[0]?.goals?.assists;
      isGoal = false;
      break;
    case "YellowCards":
      apiArray = topPlayerYellowCards;
      css = "statistics__yellowCards";
      rankPoint = (player) => player?.statistics?.[0]?.cards?.yellow;
      isGoal = false;
      break;
    case "RedCards":
      apiArray = topPlayerRedCards;
      css = "statistics__redCards";
      rankPoint = (player) => player?.statistics?.[0]?.cards?.red;
      isGoal = false;
      break;
  }

  return (
    <div className={`${css} statistics__boxCss`}>
      <div className="statistics-title">{title}</div>
      <div className="statistics-title-info">{info}</div>
      <div className="league__topPlayer_container">
        {apiArray?.map((player, index) => (
          <div key={index} className="league__topPlayer_box">
            <div style={{ fontWeight: "bolder", fontSize: "larger" }}>{index + 1}</div>
            <img
              className="league__topPlayer_box_team-playerImg"
              src={player?.player?.photo}
              alt={player?.player?.photo}
            />
            <div className="league__topPlayer_box-name">
              <div>{player?.player?.name}</div>
              <div className="league__topPlayer_box-team">
                <img src={player?.statistics?.[0]?.team?.logo} alt={player?.statistics?.team?.logo} />
                <div className="league__topPlayer_box-team-name">{player?.statistics?.[0]?.team?.name}</div>
              </div>
            </div>
            <div className="league__topPlayer_box-goals">
              {`${rankPoint(player)}${isGoal ? `(${player?.statistics?.[0]?.penalty?.scored})` : ""}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPlayerCard;
