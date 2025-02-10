const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_HOST = import.meta.env.VITE_API_HOST;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": VITE_API_HOST,
  },
};

export { API_KEY, VITE_API_HOST, options };

export async function fetchApi(endPoint, queryParams) {
  let queryStr = "";
  const queryParamsArr = Object.entries(queryParams);
  queryParamsArr.forEach(([key, value], idx) => {
    queryStr += `${key}=${value}`;
    if (idx < queryParamsArr.length - 1) {
      queryStr += "&";
    }
  });

  const url = `https://${VITE_API_HOST}${endPoint}?${queryStr}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.response);
    return result.response;
  } catch (error) {
    console.error(error);
  }
}
