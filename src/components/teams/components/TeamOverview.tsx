import "./teamOverview.css";
import TeamOverviewStatistics from "./teamOverviewComponent/TeamOverviewStatistics";
import TeamLeagueCups from "./teamOverviewComponent/TeamOverviewLeagueCups";
import TeamOverviewFixtures from "./teamOverviewComponent/TeamOVerviewFixtures";

function TeamOverview() {
  return (
    <div className="teamOverview">
      <TeamOverviewStatistics />
      <TeamLeagueCups />
      <TeamOverviewFixtures />
    </div>
  );
}

export default TeamOverview;
