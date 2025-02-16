import "./playerStatistics.css";
import "../../commonStyle.css";
import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import Skeletons from "../../skeletons/Skeletons";
import { PlayerStatisticEntry } from "../../../store/types";

function PlayerStatistics() {
  const { playerStatistics } = dataStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [playerStatistics]);
  return (
    <>
      {isLoading ? (
        <Skeletons width={1180} height={500} borderRadius={20} margin={20} />
      ) : (
        <div className="player__statistics common__boxCss">
          <div className="player__statistics_title">통계</div>
          <table className="player__statistics_table">
            <thead>
              <tr>
                <th>대회</th>
                <th>출전(교)</th>
                <th>평점</th>
                <th>유효슈팅률</th>
                <th>골(PK)</th>
                <th>어시스트</th>
                <th>KEY패스</th>
                <th>경합성공률</th>
                <th>드리블성공률</th>
                <th>옐로(레드)</th>
              </tr>
            </thead>
            <tbody>
              {playerStatistics?.statistics?.map((statistic: PlayerStatisticEntry, index) => (
                <tr key={index}>
                  <td>{statistic?.league?.name}</td>
                  <td className="player__statistics_table-td">
                    {statistic?.games?.appearences}({statistic?.substitutes?.in})
                  </td>
                  <td>{Number(statistic?.games?.rating).toFixed(2)}</td>
                  <td>
                    {Number(statistic?.shots?.total) !== 0
                      ? `${Math.trunc(((statistic?.shots?.on ?? 0) / (statistic?.shots?.total ?? 0)) * 100)}%`
                      : "-"}
                  </td>
                  <td>
                    {statistic?.goals?.total}({statistic?.penalty?.scored})
                  </td>
                  <td>{statistic?.goals?.assists ?? "-"}</td>
                  <td>{Number(statistic?.passes?.total) !== 0 ? `${statistic?.passes?.key ?? 0}` : "-"}</td>
                  <td>
                    {Number(statistic?.duels?.total) !== 0
                      ? `${Math.trunc(((statistic?.duels?.won ?? 0) / (statistic?.duels?.total ?? 0)) * 100)}%`
                      : "-"}
                  </td>
                  <td>
                    {Number(statistic?.dribbles?.attempts) !== 0
                      ? `${Math.trunc(
                          ((statistic?.dribbles?.success ?? 0) / (statistic?.dribbles?.attempts ?? 0)) * 100
                        )}%`
                      : "-"}
                  </td>

                  <td>
                    {statistic?.cards?.yellow}({statistic?.cards?.red})
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
export default PlayerStatistics;
