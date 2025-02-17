import { QueryParams } from "../store/types";
import { fetchApi } from "./apisConfig";

export function getStandings(queryParams: QueryParams) {
  const endpoint = `/v3/standings`;
  return fetchApi(endpoint, queryParams);
}

export function getFixtures(queryParams: QueryParams) {
  const endPoint = `/v3/fixtures`;
  return fetchApi(endPoint, queryParams);
}

export function getTopPlayer(queryParams: QueryParams) {
  const endPoint = `/v3/players/topscorers`;
  return fetchApi(endPoint, queryParams);
}

export function getTopAssists(queryParams: QueryParams) {
  const endPoint = `/v3/players/topassists`;
  return fetchApi(endPoint, queryParams);
}

export function getTopRedCards(queryParams: QueryParams) {
  const endPoint = `/v3/players/topredcards`;
  return fetchApi(endPoint, queryParams);
}

export function getTopYellowCards(queryParams: QueryParams) {
  const endPoint = `/v3/players/topyellowcards`;
  return fetchApi(endPoint, queryParams);
}
