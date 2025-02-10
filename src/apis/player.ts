import { fetchApi } from "./apisConfig";

export function getPlayer(queryParams) {
  const endPoint = `/v3/players`;
  return fetchApi(endPoint, queryParams);
}

export function getPlayerTrophies(queryParams) {
  const endPoint = `/v3/trophies`;
  return fetchApi(endPoint, queryParams);
}
