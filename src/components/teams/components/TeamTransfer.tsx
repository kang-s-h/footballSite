import "./teamTransfer.css";
import { dataStore } from "../../../store/dataStore";
import { useState, useEffect } from "react";
import { getTeamTransfer } from "../../../apis/team";
function TeamTransfer() {
  const { selectedTeamId, teamTransfer } = dataStore();
  // const [teamTransfer, setTeamTransfer] = useState([]);

  // useEffect(() => {
  //   async function fetchTeamTransfer() {
  //     const teamTransferData = await getTeamTransfer({ team: selectedTeamId });
  //     setTeamTransfer(teamTransferData.reverse());
  //   }
  //   fetchTeamTransfer();
  // }, [selectedTeamId]);

  return (
    <>
      <div className="transfer_container">
        {teamTransfer?.map((player, index) => (
          <div key={index} className="transfer_container_box">
            <div className="transfer_container_box-name">{player?.player?.name}</div>
            <img
              className="transfer_container_box-img"
              src={player?.transfers?.[0]?.teams?.out?.logo}
              alt={player?.transfers?.[0]?.teams?.out?.name}
            />
            <div className="transfer_container_box_infoBox">
              <div className="transfer_container_box_infoBox-arrow">➯</div>
              <div>{player?.transfers?.[0]?.type}</div>
              <div>{player?.transfers?.[0]?.date}</div>
            </div>
            <img
              className="transfer_container_box-img"
              src={player?.transfers?.[0]?.teams?.in?.logo}
              alt={player?.transfers?.[0]?.teams?.in?.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamTransfer;
