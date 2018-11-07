import React, { Component } from "react";
import API from "../../utils/API";

class News extends Component {
    state = {};

    componentDidMount(){
        this.loadNews();
    }

    loadNews = () => {
        API.getNews()
          .then(res => {
            console.log("this is our response ", res)
          
            // this.setState({ games: res.data, user: "", team: "", players: "" })
            
          })
          .catch(err => console.log(err));
      };

      render(){
          return (
            <div>Hello News World</div>
          );
          
      }
}

export default News;