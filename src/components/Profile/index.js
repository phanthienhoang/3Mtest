import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token: localStorage["appState"]
            ? JSON.parse(localStorage["appState"]).user.token
            : "",
          name: "",
          email: "",
          id: ""
        };
      }
    
      componentDidMount() {
        axios
          .get(`https://3mtestapi.000webhostapp.com/api/profile?token=${this.state.token}`)
          .then(response => {
            //console.log(response);
            return response;
          })
          .then(json => {
            if (json.data.success) {
              this.setState({
                name: json.data.user.name,
                email: json.data.user.email,
                id: json.data.user.id,
              });
            } 
            else alert("Login Failed!");
          })
          .catch(error => {
            console.error(`An Error Occuredd! ${error}`);
          });
      }
    
      render() {
        return (
          <div >
            
            <p>Xin chào: { this.state.name }</p>
        
          </div>
        );
      }
}
export default Profile;