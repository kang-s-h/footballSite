import { useNavigate } from "react-router-dom";
import { dataStore } from "../../../../store/dataStore";
import { useEffect, useState } from "react";
import "./standingsCard.css";
import "../../../commonStyle.css";
import Skeletons from "../../../skeletons/Skeletons";
import { StandingType } from "../../../../store/types";

function StandingsCard({ isOverview }: { isOverview: boolean }) {
  const { standings, moveTeamPage, setNavigate } = dataStore();
  const navigateTeamPage = useNavigate();

  useEffect(() => {
    setNavigate(navigateTeamPage);
  }, [setNavigate, navigateTeamPage]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [standings]);

  return (
    <>
      {isLoading ? (
        isOverview ? (
          <Skeletons width={"42vw"} height={1300} margin={"2vh 0vw 0px 1vw"} borderRadius={20} />
        ) : (
          <Skeletons width={"86vw"} height={1340} margin={"2vh 0px 0px 1vw"} borderRadius={20} />
        )
      ) : (
        <div className={isOverview ? `common__boxCss overviewStandings-boxsize` : "common__boxCss standings-boxsize"}>
          <table className="standings_table">
            <thead>
              <tr>
                <th>순위</th>
                <th>팀</th>
                <th>경기</th>
                {!isOverview && (
                  <>
                    <th>승</th>
                    <th>무</th>
                    <th>패</th>
                    <th>득:실</th>
                    <th>득실차</th>
                  </>
                )}
                <th>승점</th>
                <th>최근 5경기</th>
              </tr>
            </thead>
            <tbody>
              {standings?.standings?.[0]?.map((team: StandingType) => (
                <tr key={team.team?.id}>
                  <td>{team.rank}</td>
                  <td
                    className="standings_table-td"
                    onClick={() => {
                      if (team.team?.id) {
                        moveTeamPage(team.team.id);
                      }
                    }}
                  >
                    <img src={team.team?.logo} alt={team.team?.name} className="standings_table-team-logo" />
                    {team.team?.name}
                  </td>
                  <td>{team.all?.played}</td>
                  {!isOverview && (
                    <>
                      <td>{team.all?.win}</td>
                      <td>{team.all?.draw}</td>
                      <td>{team.all?.lose}</td>
                      <td>
                        {team.all?.goals?.for}:{team.all?.goals?.against}
                      </td>
                      <td>{team.goalsDiff}</td>
                    </>
                  )}
                  <td>{team.points}</td>
                  <td>
                    <div className="standings_table-form-container">
                      {team.form?.split("")?.map((form, index) => (
                        <div
                          key={index}
                          className={`standings_table-form-container-item ${
                            form === "W"
                              ? "standings_table-form-container-win"
                              : form === "D"
                              ? "standings_table-form-container-draw"
                              : "standings_table-form-container-loss"
                          }`}
                        >
                          {form}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
export default StandingsCard;
