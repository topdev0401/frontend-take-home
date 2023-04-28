import axios from "axios";
import { formatApiParams } from "../utils/helpers";

const base = "https://api.npms.io/v2/search";

export const getPackages = async ({ keyword, simulateError }: { keyword?: string, simulateError: boolean }) => {
  const params = formatApiParams({ q: keyword })

  if (simulateError) {
    // simulate error response
    throw new Error("Simulated Error")
  }

  // otherwise, make the actual API request
  return await axios
    .get(`${base}/suggestions?${params}`)
    .then((response) => response.data);
}
