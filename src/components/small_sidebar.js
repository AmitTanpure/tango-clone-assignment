import React from "react";
import { BsChatLeftDots, BsCameraVideoFill } from "react-icons/bs";
import { FaChessKing,FaUserCircle } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { FiUsers } from "react-icons/fi";


export default function SmallSideBar() {
	return (
		<div className="small-sidebar">
            <img className="brand-logo" src="https://upcred.in/static/media/screen1.ffcf6298.png" />
			<div className="icons" >
				<BsCameraVideoFill style={{color:"red"}} />
				<div  className="title"> Live</div>
			</div>
			<div className="icons" >
				<FiUsers />
				<div className="title"> Following</div>
			</div>
			<div  className="icons">
				<FaChessKing />
				<div className="title"> Leaders</div>
			</div>
			<div className="icons" >
				<MdOutlineFeedback />
				<div className="title"> Feed</div>
			</div>
			<div className="icons" >
				<BsChatLeftDots />
				<div className="title"> Chat</div>
			</div>
            <div>
                <img className="live-logo" src="https://e7.pngegg.com/pngimages/664/289/png-clipart-computer-icons-youtube-camera-logo-text-trademark.png" />
            </div>
            <div style={{textAlign:"center", marginBottom:"20px"    }}>
                <span className="user-logo">
                <FaUserCircle style={{fontSize:"30px"}} />
                </span>
                
            </div>
            <div className="title" style={{textAlign:"center"}}> Join Now</div>
		</div>
	);
}
