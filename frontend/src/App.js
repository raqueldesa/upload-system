import React from "react";
import { Global } from "./style/index";
import Routes from "./router";

const App = () => {
	
	return (
		<div className = "App">
		  <Global></Global>
      <Routes></Routes>
		</div>
	);
};

export default App;