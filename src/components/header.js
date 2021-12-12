import React from "react";
import { Grid } from "@mui/material";
export default function Header() {
	const name = ["Foryou", "Nearby","Rising Stars","New","Popular","Artist","Social"];
	return (
		<div  className="header">
			<Grid container>

		{
			name.map((tag)=>(<span className="tag">{tag}</span>))
		}
		</Grid>
		</div>
	);
}
