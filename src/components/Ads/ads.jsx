// import React, { useState } from "react"
// import ResponsivePlayer from "../video/ResponsivePlayer.jsx"

// var  Ads = function() {
//   const [watchComplete, setWatchComplete] = useState(false)
//   const handleWatchComplete = ({ playedSeconds }) => {
//     console.log(playedSeconds);
//     if(playedSeconds >= 10 && !watchComplete){
//         setWatchComplete(true)
//     }
//   }
//   return (
//     <>
//         <div>
//           <ResponsivePlayer
//             url="https://www.youtube.com/watch?v=3e8szLWJqmY"
//             onProgress={handleWatchComplete}
//           />
//           <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
//             Completed
//           </div>
//         </div>
//     </>
//   )
// }

// export default Lesson
