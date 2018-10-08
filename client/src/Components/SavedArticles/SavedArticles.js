import React, { Component } from "react";
import API from "../../utils/API";
import Article from "./Article";
import "../../App.css";

class SavedArticles extends Component {
  state = {
    savedArticles: [],
  }

  componentDidMount() {
    this.loadSavedArticles();    
  }
  
  loadSavedArticles = () => {
    console.log("Running loadSaveArticles");
    
    API.getArticles()
      .then(res => {
        this.setState({ savedArticles: res.data });
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  deleteSavedArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div className="card text-left">
        <div className="card-header">
          Saved Articles
        </div>
        <div className="card-body">
        {this.state.savedArticles.length !== 0 ? 
            this.state.savedArticles.map(article => {
            return <Article
                      title={article.title}
                      date={article.date}
                      link={article.link}
                      key={article._id}
                      id={article._id}
                      deleteMethod={this.deleteSavedArticle}
                    />
          }) :
          <span>There are no saved articles</span>}
        </div>
      </div>
    );
  } 
}

export default SavedArticles;