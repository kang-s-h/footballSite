import "./teamFixtures.css";
import TeamFixturesCard from "./teamFixturesComponent/TeamFixturesCard";

function TeamFixtures() {
  return (
    <>
      <div className="teamFixtures">
        <TeamFixturesCard title={"last Fixtures"} />
        <TeamFixturesCard title={"next Fixtures"} />
      </div>
    </>
  );
}

export default TeamFixtures;
