import React from "react";

const Discard= (props)=>{
    console.log(props);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
    <h2>{props.children}</h2>
                </div>
                <div className="col-md-12">
                    <button className="btn btn-outline-primary" >Yes</button>
                    <button className="btn btn-outline-primary">No</button>
                </div>
            </div>
        </div>







    )

};

export default Discard;

