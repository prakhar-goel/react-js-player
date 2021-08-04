import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer.jsx"

import  Typography  from "@material-ui/core/Typography"
import  Container  from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import  Grid  from "@material-ui/core/Grid"
import { Button } from "@material-ui/core"


const useStyles = makeStyles({
  controls1:{
    position:"absolute",
    top:440,
    left:400,
    right:70,
    bottom:125,
    background:"rgba(0,0,0,0.6)",
    display:"flex",
  },
  controls2:{
    position:"absolute",
    top:440,
    left:400,
    right:70,
    bottom:125,
    background:"rgba(0,0,0,0.6)",
    display:"flex",
  }
});


var  Lesson = function() {
  const classes = useStyles();
  const [watchComplete, setWatchComplete] = useState(false)
  const handleWatchComplete = ({ playedSeconds }) => {
    console.log(playedSeconds);
    if(playedSeconds >= 10 && playedSeconds <= 20){
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
              <Grid container direction="row" alignItems="right" style={{padding:5}}> 
              <div className={classes.controls1}>
                <Grid item>
                  <Typography style={{color:"#fff"}}>Order you cloths <br/> while watching this show</Typography>
                </Grid> 
                <Grid item>
                  <Button 
                  variant="contained"
                  color="primary"
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
    </>
  )
}

export default Lesson
