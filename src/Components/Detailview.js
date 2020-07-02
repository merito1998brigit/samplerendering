import React from 'react';
import {Card,CardFooter,CardText,CardImg,CardTitle,CardImgOverlay, CardBody  } from "reactstrap";
function RenderDetails({details}) {
    return(
        <div className="bg-warning">
             <p>{details.name}</p>
        </div>
    )
}
function Detailview({recipe}) {
   if(recipe==null){
       return(
           <div>
              <p> details not rendered</p>
           </div>
       )
   }
   else{
    return(
        <div className="row ">
               <div key={recipe.id} className="col-12 justify-content-center mt-5">
                         <RenderDetails details={recipe}/>
                     </div>
                        
        </div>
    )
   }
}

export default Detailview;