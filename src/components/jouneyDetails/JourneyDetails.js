import React, { Component } from "react";
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Header from "../header/Header";
 
class JourneyDetails extends Component {
  render() {
    return (
      <div>
        <Header className={'Place your Bid(2/4 step)'}/>
        <form method="post">
            <div class="elem-group" style={{marginTop: '38px'}}>
              <TextField id="outlined-basic" label="Source Location *" variant="outlined" />&nbsp;
              <TextField id="outlined-basic" label="Destination *" variant="outlined" />&nbsp;&nbsp;
            </div>
            <div class="elem-group" >
            <TextField style={{width: '100%'}} id="outlined-basic" label="Number of Travellers *" variant="outlined" />&nbsp;
            </div>
            <div class="elem-group" >
              <Button style={{background: '#0b204a', color: '#fff'}} className="button">Next</Button>
            </div>
          </form>
      </div>
    );
  }
}
 
export default JourneyDetails;