import React, { Component } from "react";
import { Route } from "react-router-dom"
import Header from "../Header";
import SearchContainer from '../SearchContainer/SearchContainer';
import SavedArticles from "../SavedArticles/SavedArticles";
import API from "../../utils/API";
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

    const params = {
      q: (this.state.topic),
      begin_date: (this.state.startDate) ? this.state.startDate.replace(/-/g, "") : "",
      end_date: (this.state.endDate) ? this.state.endDate.replace(/-/g, "") : ""
    }
    // console.log(params);
    
    API.callNYT(params)
      .then(res => this.setState({ articles: res.data }))
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