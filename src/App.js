import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { User } from './pages/User/User'
import { Kata } from "./pages/Kata/Kata";
import { Info } from "./pages/Info/Info";
import './App.scss'
import { CodewarsState } from "./context/codewars/codewarsState";


function App() {
	return (
		<CodewarsState>
			<BrowserRouter>
				<Navbar/>
				<div className="container">
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/user" exact component={User}/>
						<Route path="/kata" exact component={Kata}/>
						<Route path="/info" exact component={Info}/>
						<Redirect to="/"/>
					</Switch>
				</div>
			</BrowserRouter>
		</CodewarsState>
	);
}

export default App;
