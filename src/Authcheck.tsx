import { Button, TextField } from "@material-ui/core";
import React from "react";
import Axios from 'axios'
import { Route, Redirect } from "react-router-dom"
import cookies from "js-cookie"

export class Authcheck extends React.Component {
  state = {
    auth: false,
    id: "",
    password: "",
  };

  componentDidMount() {
    Axios.get("/login/authcheck")
    .then( response => { 
      console.log(response)
    })
  }
  render() {
    return (
      <h1>hi there</h1>
    )
  }

}


export default Authcheck