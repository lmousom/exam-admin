import React , { Component } from "react";
import fire from "./config/fire";
import { db, auth } from './config/fire'
import 'materialize-css';

class Home extends Component{

  state = {
    users: null
}

componentDidMount(){
    db.collection('users')
     .get()
     .then( snapshot => {

        const users = []
        snapshot.forEach( doc => {
            const data = doc.data()
            users.push(data)
        })
        this.setState({
            users: users
            
        })
     })
     .catch( error =>console.log(error))
}

if(){}
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
     
        <div>   <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><button className="waves-effect waves-light btn-small red" onClick={this.logout}>Logout</button><span>&nbsp;&nbsp;</span></li>
          </ul>
          <div class="hide-on-med-and-up">
          <button onClick={this.logout} class="mob-btn btn-floating waves-effect waves-light red">Logout</button>
          </div>
        </div>
      </nav>
      <div className="row">
      <div className="card-panel black">
        <span className="white-text">
   { this.state.users && 
   this.state.users.map( users =>{

      return(
        <div>
 <div className="indigo darken-4"><h5>Name: {users.name }</h5>
 <h5 className="cyan accent-4">Marks: <b>{users.marks}</b></h5>
 <h5 className="green accent-4">Time Taken: {users.time} sec</h5>
  </div> <br></br>
        </div>
      )
    })  }
        </span>
      </div>
    
  </div>
            
        </div>
    )
}
}
export default Home;