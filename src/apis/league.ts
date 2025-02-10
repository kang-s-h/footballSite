import { fetchApi } from "./apisConfig";
export function getStandings(queryParams) {
  const endpoint = `/v3/standings`;
  return fetchApi(endpoint, queryParams);
}

export function getFixtures(queryParams) {
  const endPoint = `/v3/fixtures`;
  return fetchApi(endPoint, queryParams);
}

export function getTopPlayer(queryParams) {
  const endPoint = `/v3/players/topscorers`;
  return fetchApi(endPoint, queryParams);
}

export function getTopAssists(queryParams) {
  const endPoint = `/v3/players/topassists`;
  return fetchApi(endPoint, queryParams);
}

export function getTopRedCards(queryParams) {
  const endPoint = `/v3/players/topredcards`;
  return fetchApi(endPoint, queryParams);
}

export function getTopYellowCards(queryParams) {
  const endPoint = `/v3/players/topyellowcards`;
  return fetchApi(endPoint, queryParams);
}
