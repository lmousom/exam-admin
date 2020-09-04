import React , { Component } from "react";

import fire from "./config/fire";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Login extends Component{

    


constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }

    
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(

       
<div class="row">
      <div class="card deep-purple darken-4 z-depth-5">
        <div class="card-content white-text">
          <span class="card-title">Admin - Surfxm</span>
        </div>
        <div class="card-action">

        <form>

<input id="email" type="email" class="validate" name="email"
                placeholder="Enter email address"
                onChange={this.handleChange}
                value={this.state.email}/>
          
<span class="helper-text" data-error="wrong" data-success="Great"></span>
          
<input id="password" type="password" class="validate" name="password"
                onChange={this.handleChange}
                placeholder="Enter password"
                value={this.state.password}/>



<button class="btn waves-effect waves-light green accent-3" type="submit" onClick={this.login} name="action">Login
  </button>

  <span>&nbsp;&nbsp;</span>

  <button onClick={this.signup} class="btn waves-effect waves-light light-blue darken-2" type="submit" name="action">SignUp
  </button>
        
            </form>
          
        </div>
      </div>
  </div>



            

        
    )
}
}
export default Login;