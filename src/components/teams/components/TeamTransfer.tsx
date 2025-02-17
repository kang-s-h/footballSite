import "./teamTransfer.css";
import { dataStore } from "../../../store/dataStore";
import { useState, useEffect } from "react";
import Skeletons from "../../skeletons/Skeletons";
import { TeamTransferType } from "../../../store/types";

function TeamTransfer() {
  const { teamTransfer } = dataStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamTransfer]);

  return (
    <>
      <div className="transfer_container">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Skeletons key={index} width={"85.5vw"} height={150} borderRadius={200} margin={20} />
            ))
          : teamTransfer?.map((player: TeamTransferType, index) => (
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
