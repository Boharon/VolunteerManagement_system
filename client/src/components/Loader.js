import CircularProgress from '@material-ui/core/CircularProgress';
import React from "react"
import './loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress disableShrink/>
    </div>
  )
}

export default Loader