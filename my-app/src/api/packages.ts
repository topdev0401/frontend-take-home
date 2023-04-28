import axios from "axios";
import { formatApiParams } from "../utils/helpers";

const base = "https://api.npms.io/v2/search";

export const getPackages = async ({ keyword }: { keyword?: string }) => {
  const params = formatApiParams({ q: keyword })

  return await axios
    .get(`${base}/suggestions?${params}`)
    .then((response) => response.data);
}
