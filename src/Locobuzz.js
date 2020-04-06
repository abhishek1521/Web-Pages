import React from "react"
import './Stylesheet/Style.css'
import { Header } from "./Layout/Header/Header";
import { Dashboard } from "./Layout/Dashboard/Dashboard";
const Locobuzz=(props)=> {
    return <div>
        <Header />
        <Dashboard togglePopover={props.togglePopover}/>
    </div>
}
export default Locobuzz