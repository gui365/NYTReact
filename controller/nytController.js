const axios = require("axios");

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

    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931", { params })
      .then(data => (res.json(data.data.response.docs)))
      .catch(err => console.log(err));
  }
};
