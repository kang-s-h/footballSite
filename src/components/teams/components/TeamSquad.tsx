import "./teamSquad.css";
import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import { getTeamSquad } from "../../../apis/team";
import { useNavigate } from "react-router-dom";

function TeamSquad() {
  const { teamSquad, setSelectedPlayerId } = dataStore();
  const navigatePlayerPage = useNavigate();
  // const [teamSquad, setTeamSquad] = useState([]);

  // useEffect(() => {
  //   async function fetchTeamSquad() {
  //     const teamSquadData = await getTeamSquad({ team: selectedTeamId });
  //     setTeamSquad(teamSquadData?.[0]?.players);
  //   }
  //   fetchTeamSquad();
  // }, [selectedTeamId]);
  function movePlayerPage(id) {
    const playerNumId = Number(id);
    setSelectedPlayerId(playerNumId);

    navigatePlayerPage(`/player/${playerNumId}`);
  }

  return (
    <div>
      <div className="squad_container">
        {teamSquad?.map((player) => (
          <div key={player?.id} className="squad_container_card" onClick={() => movePlayerPage(player?.id)}>
            <img className="squad_container_card-img" src={player?.photo} />
            <div className="squad_container_card-name">{player?.name}</div>
            <div>{player?.position}</div>
            <div className="squad_container_card-number">{player?.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSquad;
