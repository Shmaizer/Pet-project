import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Header from "./Header"

class Main extends React.Component{
    render(){
        return(
            <div className="mainClass">
                <Header title="Главная страница"/>
                <div></div>
            </div>
        )
    }
}
export default Main