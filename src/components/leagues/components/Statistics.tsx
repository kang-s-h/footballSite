import "./statistics.css";
import TopPlayerCard from "./statisticsComponents/TopPlayerCard";

function Statistics() {
  return (
    <div className="statistics">
      <TopPlayerCard title={"Goals"} info={"Goals(PK)"} />
      <TopPlayerCard title={"Assists"} info={"Assists"} />
      <TopPlayerCard title={"YellowCards"} info={"YellowCards"} />
      <TopPlayerCard title={"RedCards"} info={"RedCards"} />
    </div>
  );
}

export default Statistics;
