import React, { Component } from "react";
import { Box, TextField } from '@material-ui/core';
import './home.css'
 
class Home extends Component {
  render() {
    return (
      <div>
         <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
        <div className="row">
          <div className="col">
            <div className="center">
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="vahak"
              />&nbsp;
              <TextField
                required
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
              />
            </div>
          </div>
        <div className="col">
          <div className="center">
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="vahak"
            />&nbsp;
            <TextField
              required
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
          </div>
        </div>
        </div>
        </Box>
      </div>
    );
  }
}
 
export default Home;