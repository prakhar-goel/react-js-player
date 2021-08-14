import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer.jsx"

import  Typography  from "@material-ui/core/Typography"
import  Container  from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import  Grid  from "@material-ui/core/Grid"
import { Button } from "@material-ui/core"
import Popup from "./popup"

import EmployeeForm from "./EmployeeForm";
// import * as employeeService from "../../services/employeeService";


const useStyles = makeStyles({
  controls:{
    position:"absolute",
    // top:500,
    // left:920,
    // right:408,
    // bottom:225,
    top:-100,
    left:500,
    right:0,
    bottom:50,
    background:"rgba(0,0,0,0.6)",
    display:"flex",
  },
});


var  Lesson = function() {

  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false)
  


  const [watchComplete, setWatchComplete] = useState(false)
  const handleWatchComplete = ({ playedSeconds }) => {
    console.log(playedSeconds);
    if((playedSeconds >= 300 && playedSeconds <= 330) || (playedSeconds >= 600 && playedSeconds <= 630) || (playedSeconds >= 900 && playedSeconds <= 930) || (playedSeconds >= 1200 && playedSeconds <= 1230)){
        setWatchComplete(true)
    } else{
        setWatchComplete(false)
    }
  }

  return (
    <>
        <Container>
          <div>
            <ResponsivePlayer
              url="https://www.youtube.com/watch?v=3e8szLWJqmY"
              onProgress={handleWatchComplete}
            />
            {/* <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
              Completed
            </div> */}
          </div>

          {/* Ads */}
          <div>
            {watchComplete === true ? 
              <Grid container direction="row" alignItems="right" style={{padding:5, position: "relative"}}> 
              <div className={classes.controls}>
                <Grid item xs elevation={3}>
                  <Typography style={{color:"#fff"}}>Order you cloths <br/> while watching this show</Typography>
                </Grid> 
                <Grid item>
                  <Button 
                  variant="contained"
                  color="primary"
                  onClick = {()=>setOpenPopup(true)}
                  >
                    ORDER NOW
                  </Button>
                </Grid>
              </div>
            </Grid>
            : null 
            }
            
          </div>
        </Container>
        <Popup
          openPopup = {openPopup}
          setOpenPopup = {setOpenPopup}
        >
        {/* <EmployeeForm
        /> */}
        </Popup>
    </>
  )
}

export default Lesson
