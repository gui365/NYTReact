const axios = require("axios");
const fetch = require("node-fetch");

module.exports = {
  callNYT: function(req, res) {
    const params = Object.assign(
      req.query
    );

    function cleanParams(obj) {
      for (const key in obj) {
        if (obj[key] === "") {
          delete obj[key];
        }
      }
    };

    cleanParams(params);
    console.log(params);

    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=[ADD-KEY-HERE]", { params })
      .then(data => (res.json(data.data.response.docs)))
      .catch(err => console.log(err));
  }
};
