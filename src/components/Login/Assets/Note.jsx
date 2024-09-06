import React from "react";
function Note(props){
    return(
        
         <>
         <a href={props.endURL}><p>{props.name}</p></a>
         </>
       
    )
}
export default Note;