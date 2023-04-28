export const formatApiParams = (params: any): string => {
  if (!params) return "";

  const formatedParams = Object.keys(params)
    .filter((key: string) => params[key] !== null || params[key] !== undefined)
    .map((key: string) => `${key}=${params[key]}`)
    .join("&");

  return formatedParams;
};
