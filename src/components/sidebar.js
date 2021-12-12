import React from "react";
import Card from "./card";

export default function SideBar() {
	const array = [1, 2, 3, 4, 5];
	const card = [
        {     
        title:"Get +20% coins for every purchas",
        buttonTitle:"SHOW OFFER"
    },
    {
        title:"Bring friends and earn cash",
        buttonTitle:"START NOW",
        
    },
    {
        title:"Partner with Tango!",
        buttonTitle:"SIGN UP",
        subtitle:"Earn For Every Refferal You Bring"
    },
    {
        title:"Join Tango community",
        buttonTitle:"JOIN NOW",        
    }       
	];

	return (
		<div className="sidebar">
			<div style={{ marginBottom: "20px" }}>
				<input
                placeholder="Search"
				style={{ width: "100%", borderRadius: "20px", padding: "10px",borderColor:'#fff' }}
				type="text"
				/>
			</div>
			{card.map((e,i) => (
				<Card key={i} title={e.title} buttonTitle={e.buttonTitle} subtitle={e.subtitle} />
        	))}
		</div>
	);
}
