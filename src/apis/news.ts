export async function getNews(league) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/news?limit=100`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("데이터를 가져오지 못했습니다.");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

// getLeagueNews("eng.1") → 프리미어리그
// getLeagueNews("esp.1") → 라리가
// getLeagueNews("ger.1") → 분데스리가
// getLeagueNews("ita.1") → 세리에 A
// getLeagueNews("fra.1") → 리그 1
