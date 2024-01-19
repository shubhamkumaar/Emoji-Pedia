import React from "react";
import emoji from "../emojipedia"
function Entry(props){
    
       return <div className="term">
       <dt>
         <span className="emoji" role="img" aria-label="Tense Biceps">
           {props.emj}
         </span>
         <span>{props.name}</span>
       </dt>
       <dd>{props.meaning}
       </dd>
     </div> 
       
    
}

export default Entry;
