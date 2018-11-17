import React, { Component } from "react";
import API from "../../utils/API";
import { Injury } from "../../components/Injuries/Injury";

class Injuries extends Component {
  state = {
    injuries: []
  };

  componentDidMount() {
    this.loadInjuries();
  }

  loadInjuries = () => {
    API.getInjuries()
      .then(res => {
        console.log("this is our injuries response ", res);

        var injNow = res.data.data;
        this.setState({
          injuries: res.data.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      //this is where we put the children
      <div>
        <br />
        {this.state.injuries.map(injury => {
          return (
            <Injury
              key={injury.InjuryID}
              name={injury.Name}
              team={injury.Team}
              status={injury.Status}
            />
          );
        })}
      </div>
    );
  }
}

export default Injuries;
