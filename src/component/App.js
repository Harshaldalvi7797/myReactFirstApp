import React from "react";
import {Userdetails} from "./userdetails";
import Discard from "./discard";
import Faker from "faker";




const App =()=>
{ 
    let style= {
        padding: "60px 0 60px "
    }
    return (
    

    <div className="container" style={style}>
    <Discard> 
<Userdetails Username="Harshal" role="I am Blogger" imgUrl={Faker.image.avatar()}/>
</Discard>
<hr/>
<Discard>
<Userdetails Username="Kim Doe" role="I am Tester" imgUrl={Faker.image.avatar()} />
</Discard>
<hr/>
<Discard>
<Userdetails Username="John Doe" role="I am Devloper" imgUrl={Faker.image.avatar()} />
</Discard>
   

{/* <div className="row">
    <div className="col-md-4">
        <img alt="Username"></img>
    </div>
    <div className="col-md-8">
    <div className="col-md-4">
   <button className="button btn-danger">John Doe</button>
    </div>
    <div className="col-md-4">
        <p>I am Tester</p>
        </div>

    </div>
</div>

<div className="row">
    <div className="col-md-4">
        <img alt="Username"></img>
    </div>
    <div className="col-md-8">
    <div className="col-md-4">
   <button className="button btn-danger">Kim Doe</button>
    </div>
    <div className="col-md-4">
        <p>I am Devloper</p>
        </div>

    </div>
</div> */}

    </div>
)
};

export default App;
