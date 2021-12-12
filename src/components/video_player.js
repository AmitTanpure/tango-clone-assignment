import React from "react";
import {Grid} from "@mui/material"


export default function VideoPlayer({url,name}){
    return(
    <div className="video-player-wrapper">  
        <div className="vedio-player" >   
        <div>
            <a href="https://www.youtube.com/"> 
           <div style={{backgroundColor:'pink',borderRadius:'15px',overflow:'hidden',backgrounImage:"url("+ {url}+")",height:'240px',width:'240px',backgroundSize:'cover'}}>

           <img className="vedio-player-img" style={{}} src={url}/>
           </div>
         </a>
         </div> 
         <Grid container style={{marginTop:"15px",  }}>
             <img  className="user-avator" src={url}/>
            <span className="user-name"> {name}</span>
        </Grid>  
     </div>
     </div>

    
       
        
    )
}