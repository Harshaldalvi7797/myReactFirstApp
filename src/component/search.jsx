import React,{Component} from "react";
import Axios from "axios";
 import Product from "./product";



class Search extends Component
{
constructor()
{
    super();
    this.state = 
    {
        change: "",
        products: [],
        loading:false
    }
    // this.FetchInputData= this.FetchInputData.bind(this);
}
    // FetchInputData=(event)=>
    //     {
    //         console.log(event.target.value);
    //         this.setState({change: event.target.value})

    //     };


    HandleFormSumbit = async (event) =>
    {
        event.preventDefault();
        // this.setState({products: this.state.change})
        // let item = await Axios.get(`https://pixabay.com/api/?key=13877123-199ecacab2603cb7ed9c9c3fc&q=yellow+${this.state.change}&image_type=photo&pretty=true`);
        let item= await Axios.get(`https://pixabay.com/api/?key=14560042-ecd31ab95a6912b9d9d36c99c&q=yellow+${this.state.change}&image_type=photo&pretty=true`);
        // .then(res =>res.json())
        // .then(item => console.log(item))
        // console.log(item.data);
        setTimeout(()=>{
            this.setState({loading:false});
        this.setState({products: item.data});




        }
        )



        
    
    };

    render()
    {
        
        let style= {
            padding: "60px 0 60px "
            , backgroundColor: "rgb(16, 26, 34)"
        }
        return(
            <div style={style}>
          <div className="container" >
              <div className="row">
                  <div className="col-md-8">
                      <form onSubmit={this.HandleFormSumbit}>
                          <div className="form-group" >
                              <input type="text" placeholder="Search anything" value={this.state.change} className="form-control"
                            //   onChange={this.FetchInputData}
                            onChange ={ (e) => this.setState({change: e.target.value})}
                              
                              />
                          </div>
                      </form>
                  </div>
              </div>

              <div className="row">
                  <div className="col-md-8">
                      {/* {this.state.products} */}
                  </div>
                  {/* <Product pro ={this.setState.products}/> */}


                  {
                      this.state.loading ? <h1>Loading...</h1> : <Product pro= {this.state.products} />
                  }
                  {/* <Product pro= {this.state.products}/> */}
              </div>
          </div>
          </div>

        );
    }
}

export default Search;
