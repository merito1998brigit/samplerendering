import React from 'react';
import {Card,CardFooter,CardText,CardImg,CardTitle,CardImgOverlay  } from "reactstrap";
import { Link } from "react-router-dom";
function Menu({dishes}) {   
    const dish=dishes.map(item=>{
        return(
            <div key={item.id} className="col-12 col-md-5 m-2">
            <Link to={`/${item.id}`}>
            <Card>
                      
                     <CardImg width="100%" src={item.image} alt={item.name} />
                           <CardImgOverlay>
                                  <CardTitle>{item.name}</CardTitle>
                          </CardImgOverlay>
                    <CardFooter>
                    <CardText>price:${item.price}</CardText>
                         </CardFooter>
                  
            </Card>
            </Link>
          </div>
        )
    })
    return (
        <div className="container text-center">
               <div className="row justify-content-center">
                   {dish}
               </div>
        </div>
    );
}

export default Menu;