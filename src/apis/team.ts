import { fetchApi } from "./apisConfig";

export function getTeam(queryParams) {
  const endpoint = `/v3/teams`;
  return fetchApi(endpoint, queryParams);
}

export function getTeamImg(queryParams) {
  const endPoint = `/v3/teams/statistics`;
  return fetchApi(endPoint, queryParams);
}

export function getTeamSquad(queryParams) {
  const endpoint = `/v3/players/squads`;
  return fetchApi(endpoint, queryParams);
}

export function getTeamTransfer(queryParams) {
  const endPoint = `/v3/transfers`;
  return fetchApi(endPoint, queryParams);
}

export function getTeamLeagueCup(queryParams) {
  const endPoint = `/v3/leagues`;
  return fetchApi(endPoint, queryParams);
}
