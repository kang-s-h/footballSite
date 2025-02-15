import "./teamSquad.css";
import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeletons from "../../skeletons/Skeletons";

function TeamSquad() {
  const { teamSquad, setSelectedPlayerId, setNavigate, movePlayerPage } = dataStore();
  const navigatePlayerPage = useNavigate();
  // const [teamSquad, setTeamSquad] = useState([]);

  // useEffect(() => {
  //   async function fetchTeamSquad() {
  //     const teamSquadData = await getTeamSquad({ team: selectedTeamId });
  //     setTeamSquad(teamSquadData?.[0]?.players);
  //   }
  //   fetchTeamSquad();
  // }, [selectedTeamId]);
  // function movePlayerPage(id) {
  //   const playerNumId = Number(id);
  //   setSelectedPlayerId(playerNumId);

  //   navigatePlayerPage(`/player/${playerNumId}`);
  // }
  useEffect(() => {
    setNavigate(navigatePlayerPage);
  }, [navigatePlayerPage, setNavigate]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamSquad]);

  return (
    <>
      <div className="squad_container">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => <Skeletons key={index} width={220} height={300} margin={20} />)
          : teamSquad?.map((player) => (
              <div key={player?.id} className="squad_container_card" onClick={() => movePlayerPage(player?.id)}>
                <img className="squad_container_card-img" src={player?.photo} />
                <div className="squad_container_card-name">{player?.name}</div>
                <div>{player?.position}</div>
                <div className="squad_container_card-number">{player?.number}</div>
              </div>
            ))}
      </div>
    </>
  );
}

export default TeamSquad;
