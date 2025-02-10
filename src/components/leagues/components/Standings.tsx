import "./standings.css";
import { dataStore } from "../../../store/dataStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Standings() {
  const { standings, setSelectedTeamId } = dataStore();
  const navigateTeamPage = useNavigate();

  function moveTeamPage(id) {
    const teamNumId = Number(id);
    setSelectedTeamId(teamNumId);

    navigateTeamPage(`/team/${teamNumId}`);
  }

  return (
    <>
      <div className="standings__boxCss">
        <div className="standings">
          <table className="standings_table">
            <thead>
              <tr>
                <th>순위</th>
                <th>팀</th>
                <th>경기</th>
                <th>승</th>
                <th>무</th>
                <th>패</th>
                <th>득:실</th>
                <th>득실차</th>
                <th>승점</th>
                <th>최근 5경기</th>
              </tr>
            </thead>
            <tbody>
              {standings?.standings?.[0]?.map((team) => (
                <tr key={team?.team?.id}>
                  <td>{team?.rank}</td>
                  <td className="standings_table-td" onClick={() => moveTeamPage(team?.team?.id)}>
                    <img src={team?.team?.logo} alt={team?.team?.name} className="standings_table-team-logo" />
                    {team?.team?.name}
                  </td>
                  <td>{team?.all?.played}</td>
                  <td>{team?.all?.win}</td>
                  <td>{team?.all?.draw}</td>
                  <td>{team?.all?.lose}</td>
                  <td>
                    {team?.all?.goals?.for}:{team?.all?.goals?.against}
                  </td>
                  <td>{team?.goalsDiff}</td>
                  <td>{team?.points}</td>
                  <td>
                    <div className="standings_table-form-container">
                      {team?.form?.split("")?.map((form, index) => (
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
      </div>
    </>
  );
}
export default Standings;
