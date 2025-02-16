import { fetchApi } from "./apisConfig";
import { QueryParams } from "../store/types";

export function getTeam(queryParams: QueryParams) {
  const endpoint = `/v3/teams`;
  return fetchApi(endpoint, queryParams);
}

export function getTeamImg(queryParams: QueryParams) {
  const endPoint = `/v3/teams/statistics`;
  return fetchApi(endPoint, queryParams);
}

export function getTeamSquad(queryParams: QueryParams) {
  const endpoint = `/v3/players/squads`;
  return fetchApi(endpoint, queryParams);
}

export function getTeamTransfer(queryParams: QueryParams) {
  const endPoint = `/v3/transfers`;
  return fetchApi(endPoint, queryParams);
}

export function getTeamLeagueCup(queryParams: QueryParams) {
  const endPoint = `/v3/leagues`;
  return fetchApi(endPoint, queryParams);
}
