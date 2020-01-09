import React from "react";

export const Userdetails= (props)=>
{
    console.log(props);
    let {Username,role,imgUrl}= props;

    return(

<div className="row">
    
                <div className="col-md-4">
<img alt="Username" src={imgUrl} className="rounded-circle"/>   
 </div>
    <div className="col-md-8">
    <div className="col-md-4">
   <button className="button btn-danger">{Username} </button>
    </div>
    <div className="col-md-4">
    <h3>{role}</h3>
        </div>
        </div>
        </div>
        
        
    )

};

// export default Userdetails;