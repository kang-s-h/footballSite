import { QueryParams } from "../store/types";
import { fetchApi } from "./apisConfig";

export function getPlayer(queryParams: QueryParams) {
  const endPoint = `/v3/players`;
  return fetchApi(endPoint, queryParams);
}

export function getPlayerTrophies(queryParams: QueryParams) {
  const endPoint = `/v3/trophies`;
  return fetchApi(endPoint, queryParams);
}
