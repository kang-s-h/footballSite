import { Link, Route, Routes } from "react-router-dom";
import "./leaguesPage.css";
import { getStandings } from "../../apis/league";
import { useEffect, useState } from "react";
function LeaguesPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const standings = await getStandings({ league: 39, season: 2024 });
      setData(standings[0].league); // 결과를 JSON으로 변환 후 상태에 설정
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="leagueContainer">
        <div className="title">{data?.name}</div>
        <div className="fixturesNavigating"> 결과 , 예정</div>
        <div className="fixtures">경기 나열 </div>
        <div className="standings">
          <div className="standings_title">팀 경기 승 무 패 득:실 득실차 승점 최근 5경기</div>
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
              {data?.standings?.[0]?.map((team) => (
                <tr key={team?.team?.id}>
                  <td>{team?.rank}</td>
                  <td className="td">
                    <img src={team?.team?.logo} alt={team?.team?.name} className="team-logo" />
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
                    <div className="form-container">
                      {team?.form?.split("")?.map((form, index) => (
                        <div
                          key={index}
                          className={`form-item ${
                            form === "W" ? "form-win" : form === "D" ? "form-draw" : "form-loss"
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
export default LeaguesPage;
