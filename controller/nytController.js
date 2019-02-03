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

    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=53HNvZYAxoJUyhRF9aFUcOKhGtnqIWvX", { params })
      .then(data => (res.json(data.data.response.docs)))
      // .then(data => console.log(data))
      .catch(err => console.log(err));
    
    // axios.get("https://rest.bandsintown.com/artists/beyonce?app_id=trilogy")
    //   .then(data => console.log(data.data.name))
    //   .catch(err => console.log(err));

    // fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931")
    // .then(res => console.log(res))
    // .then(json => console.log(json))
  }
};
