import React, { Component } from 'react';
//importing dish data from respective folder
import {DISHES} from "./dishes";
import Detailview from "./Detailview";
import Menu from './Menu';
import {Switch,Route, BrowserRouter as Router} from "react-router-dom";

class Maincomponents extends Component {
  
   constructor(props) {
       super(props);
       this.state={
           dishes:DISHES,
       }
   }
    
    render() {
        const dishview=({match})=>{
              return(
                <Detailview recipe={this.state.dishes.filter(recipes=>recipes.id === parseInt(match.params.dishId,10))[0]}/>     
              )
        }
        return (
            <Router>
            <div className="container text-center">      
            <Switch>
                <Route exact path="/" component={()=><Menu dishes={this.state.dishes}/> }/>
                <Route path="/:dishId" component={dishview}/>
            </Switch>
               
            </div>  
            </Router> 
        );
    }
}

export default Maincomponents;