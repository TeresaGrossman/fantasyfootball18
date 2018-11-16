import React, { Component } from "react";
import API from "../../utils/API";
import {Article} from "../../components/Articles/Article"

const styles = {
    introStyles: {
      color: "white"
    }
  };

class News extends Component {
    state = {
        news: [],
    };

    componentDidMount(){
        this.loadNews();
    }

    loadNews = () => {
        API.getNews()
          .then(res => {
            console.log("this is our response ", res)
          var newNow = res.data.data
          this.setState({
              news: res.data.data
          })
            // this.setState({ games: res.data, user: "", team: "", players: "" })
           console.log(this.state) 
          })
          .catch(err => console.log(err));
      };


      render(){
          return (
            //this is where we put the children
            <div>
                <br></br>
                <div style={styles.introStyles}><h3 align="center">NFL NEWS</h3></div>
                <br></br>
            {this.state.news.map( article => {
                return (<Article 
                    key={article.NewsID} 
                    title={article.Title} 
                    content={article.Content} 
                ></Article>)
            })}
            
            </div>
          );
          
      }
}

export default News;