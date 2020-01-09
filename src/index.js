import React from "react";
import reactDOM from "react-dom";
// import App from './App';
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import App from "./component/App";



// let Element=() =>
// {
//     let style= {
//         padding: "60px 0 60px "
//     }
//     return (
// <div className="container" style={style}>
// </div>
//     )
// } ;
reactDOM.render(<App/>, document.getElementById("root"));