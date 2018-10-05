import React from 'react'
import "./notFound.scss"

const NotFound = ({history}, props) => {
  const goToHome = () => {
    history.push("/")
    console.log(props)
  }
  return (
    <div className={"jdi_not-found jdi_area"}>
      <div className={"jdi_area"} >
        <div className={"jdi_not-found_message"}>
          <span>404</span>
          <span>  Page NoteFound</span>
        </div>
        <div>
          <button onClick={goToHome} className={"jdi_not-found_button"}>go to home</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound