import axios from "axios";

const API = "http://localhost:3005";

export const getDataBySite = async (site) => {
  const { data } = await axios.get(`${API}/${site}`);
  return data;
};
