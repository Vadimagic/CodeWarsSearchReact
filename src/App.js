import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";


function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<div className="app">
				<Switch>
					<Route path="/" exact component={Home}/>
					<Redirect to="/"/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
