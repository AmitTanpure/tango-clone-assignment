import React from "react";

export default function Card({title,buttonTitle,subtitle}) {
	return (
		<div className="card" style={{ textAlign: "center" }}>
			<img
			className="card-bg-img"
				src="https://www.tango.me/images/3d18171a6bb26c808f6a55631477fe71-20.png"
			/>

			<h1>
				{title}
			</h1>
            <span> {subtitle}</span>
			<button type="primary" className="Button">
				{buttonTitle}
			</button>
		</div>
	);
}
