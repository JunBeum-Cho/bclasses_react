import { TextField } from "@material-ui/core";
import React from "react";

export class Login extends React.Component {
  state = {
    id: "",
    password: "",
  };

  render() {
    return (
      <div>
        <TextField
          placeholder = "ID"
          required = {true}
          onChange={(e) => {
            this.setState({ id: e.target.value });
          }}
        ></TextField>
        <TextField
          placeholder = "Password"
          required = {true}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        ></TextField>
      </div>
    );
  }
}


export default Login