import axios from "axios";

export default {
  getArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticle: function(newArticle) {
    return axios.post("/api/articles", newArticle);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};