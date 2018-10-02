import React, { Component } from "react";
import { Route } from "react-router-dom"
import Header from "../Header";
import SearchContainer from '../SearchContainer/SearchContainer';
import SavedArticles from "../SavedArticles/SavedArticles";
import API from "../../utils/API";
import axios from "axios";
import "../../App.css";

class Container extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state.topic);
    // console.log(this.state.startDate);
    // console.log(this.state.endDate);
  };

  handleSubmit = event => {
    event.preventDefault();
    let queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`;
    
    if (this.state.topic) {
      queryString += `&q=${this.state.topic}`
    }
    if (this.state.startDate) {
      let adjustedDate = this.state.startDate.replace(/-/g, "");
      queryString += `&begin_date=${adjustedDate}`
    }
    if (this.state.endDate) {
      let adjustedDate = this.state.endDate.replace(/-/g, "");
      queryString += `&end_date=${adjustedDate}`
    }

    // console.log(queryString);
    axios.get(queryString)
    .then(data =>  {
      this.setState({ articles: data.data.response.docs });
      // console.log(data);
    })
    .catch(err => console.log(err));
  };

  saveArticle = (index) => {
    API.saveArticle({
      title: this.state.articles[index].headline.main,
      date: (this.state.articles[index].pub_date) ? (this.state.articles[index].pub_date).substring(0,10) : "No date",
      link: this.state.articles[index].web_url
    }).then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/"
          render={(props) => <SearchContainer {...props}
                                topic={this.state.topic}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                methodChange={this.handleChange}
                                methodSubmit={this.handleSubmit}
                                articles={this.state.articles}
                                saveMethod={this.saveArticle}
                              />}
        />
        <Route exact path="/saved"
          render={(props) => <SavedArticles {...props}
                                savedArticles={this.state.savedArticles}
                              />}
        />
      </div>
    )
  }
}

export default Container;