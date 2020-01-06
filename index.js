const axios = require("axios");
const URL = "https://www.metaweather.com/api/";

module.exports = async (req, res) => {
  const { url } = req;
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (url === "/") {
    return res.json({
      ok: false,
      error: "You need to specify an endpoint",
      endpoint_documentation: "https://www.metaweather.com/api/"
    });
  }
  const { data } = await axios.get(`${URL}${url}`);
  return res.json(data);
};
