import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";


function App() {
	return (
		<BrowserRouter>
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
