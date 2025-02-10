import "./selectLeague.css";
// import PremierLeagueImg from "../../assets/PremierLeague.jpg";
// import BundesLigaImg from "../../assets/BundesLiga.jpg";
// import LaLigaImg from "../../assets/LaLiga.jpg";
// import League1Img from "../../assets/League1.jpg";
// import SerieAImg from "../../assets/SerieA.jpg";
// import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { getNews } from "../../apis/news";
import { dataStore } from "../../store/dataStore";
import News1 from "../common/News1";

function SelectLeague() {
  return (
    <>
      <News1 />
    </>
  );
}

export default SelectLeague;
