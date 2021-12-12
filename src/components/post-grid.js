import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import VideoPlayer from "./video_player";

export default function Content() {
	const video = [
		{
			url: "https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
			name: "moon",
		},
		{
			url: "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-600w-721703848.jpg",
			name: "jupiter",
		},
		{
			url: "https://image.shutterstock.com/image-photo/jasna-lake-beautiful-reflections-mountains-600w-1707906793.jpg",
			name: "mars",
		},
		{
			url: "https://image.shutterstock.com/image-photo/spirit-island-alberta-canada-600w-1286770756.jpg",
			name: "earth",
		},
		{
			url: "https://image.shutterstock.com/image-photo/beautiful-cherry-blossoms-japan-obusemachi-600w-1031747011.jpg",
			name: "luky",
		},
		{
			url: "https://image.shutterstock.com/image-photo/jasna-lake-beautiful-reflections-mountains-600w-1707906793.jpg",
			name: "mars",
		},
		{
			url: "https://image.shutterstock.com/image-photo/spirit-island-alberta-canada-600w-1286770756.jpg",
			name: "earth",
		},
		{
			url: "https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
			name: "moon",
		},
		{
			url: "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-600w-721703848.jpg",
			name: "jupiter",
		},
		{
			url: "https://image.shutterstock.com/image-photo/jasna-lake-beautiful-reflections-mountains-600w-1707906793.jpg",
			name: "mars",
		},
		{
			url: "https://image.shutterstock.com/image-photo/spirit-island-alberta-canada-600w-1286770756.jpg",
			name: "earth",
		},
	];

	return (
		<Grid container style={{ background: "#fff" }}>
			<Header />
			<div className="main-content">
				<Grid container>
					{video.map((e) => (
						<Link to="/player" ><VideoPlayer  url={e.url} name={ e.name}/></Link>
					))}
				</Grid>
			</div>
		</Grid>
	);
}
