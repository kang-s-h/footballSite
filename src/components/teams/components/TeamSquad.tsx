import "./teamSquad.css";
import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeletons from "../../skeletons/Skeletons";
import { TeamSquadType } from "../../../store/types";

function TeamSquad() {
  const { teamSquad, setNavigate, movePlayerPage } = dataStore();
  const navigatePlayerPage = useNavigate();

  useEffect(() => {
    setNavigate(navigatePlayerPage);
  }, [navigatePlayerPage, setNavigate]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, [teamSquad]);

  return (
    <>
      <div className="squad_container">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => <Skeletons key={index} width={220} height={300} margin={20} />)
          : teamSquad?.map((player: TeamSquadType) => (
              <div
                key={player.id}
                className="squad_container_card"
                onClick={() => {
                  if (player.id) {
                    movePlayerPage(player.id);
                  }
                }}
              >
                <img className="squad_container_card-img" src={player.photo} />
                <div className="squad_container_card-name">{player.name}</div>
                <div>{player.position}</div>
                <div className="squad_container_card-number">{player.number}</div>
              </div>
            ))}
      </div>
    </>
  );
}

export default TeamSquad;
