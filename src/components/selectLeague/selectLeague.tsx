import "./selectLeague.css";
import PremierLeagueImg from "../../assets/PremierLeague.jpg";
import BundesLigaImg from "../../assets/BundesLiga.jpg";
import LaLigaImg from "../../assets/LaLiga.jpg";
import League1Img from "../../assets/League1.jpg";
import SerieAImg from "../../assets/SerieA.jpg";

function SelectLeague() {
  return (
    <>
      <img src={PremierLeagueImg} alt="Premier League" className="imgSize" />
      <img src={BundesLigaImg} alt="BundesLiga" className="imgSize" />
      <img src={LaLigaImg} alt="La Liga" className="imgSize" />
      <img src={League1Img} alt="Ligue 1" className="imgSize" />
      <img src={SerieAImg} alt="Serie A" className="imgSize" />

      <div className="title">5대 리그 </div>
    </>
  );
}
export default SelectLeague;
