import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer.jsx"

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false)
  const handleWatchComplete = state => {
    console.log(state)
  }

  return (
    <div>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=3e8szLWJqmY"
        onProgress={handleWatchComplete}
      />
    </div>
  )
}

export default Lesson
