import React from "react";
import "./App.css";
import Content from "./components/post-grid";
import SideBar from "./components/sidebar";
import SmallSideBar from "./components/small_sidebar";

export const NameContext = React.createContext();

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<SmallSideBar />
				<SideBar />
			    <Content/>
			</div>
		 </div>
	);
}

export default App;
