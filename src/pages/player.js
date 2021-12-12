import { Grid } from "@mui/material";
import React from "react";

function Player() {
	return (
		<div style={{ backgroundColor: "black", height: "100vh", width: "100%" }}>
            <Grid container justifyContent="center" style={{ height:'100vh' }}>
			<video width="400" height="100%" autoplay muted controls>
				<source
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
					type="video/mp4"
				/>
			</video>
            </Grid>
		</div>
	);
}

export default Player;
