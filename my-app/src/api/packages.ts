import axios from "axios";
import { formatApiParams } from "../utils/helpers";
import { API_BASE_URL } from "../utils/constants";

export const getPackages = async ({ keyword, simulateError }: { keyword?: string, simulateError: boolean }) => {
  const params = formatApiParams({ q: keyword })

  if (simulateError) {
    // simulate error response
    throw new Error("Simulated Error")
  }

  // otherwise, make the actual API request
  return await axios
    .get(`${API_BASE_URL}/suggestions?${params}`)
    .then((response) => response.data);
}
