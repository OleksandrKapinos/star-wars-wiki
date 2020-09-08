import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Person from './Components/People/Person/Person';
import Films from './Components/Films/Films';
import Film from './Components/Films/Film/Film';
import NavBar from './Components/NavBar/NavBar';
import People from './Components/People/People';


function App() {
	const [theme, setTheme] = useState('theme-light');

	return (
		<div className='App'>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header setTheme={setTheme} theme={theme}/>
				<NavBar theme={theme}/>
				<div className="content">
					<Route exact path="/">
						<Redirect to="/people" />
					</Route>
					<Route path='/people' exact render={() => <People theme={theme}/>}/>
					<Route path='/people/:id' exact render={() => <Person  theme={theme}/>}/>
					<Route path='/films' exact render={() => <Films  theme={theme}/>}/>
					<Route path='/films/:id' exact render={() => <Film  theme={theme}/>}/>
				</div>
			</BrowserRouter>
		</div>


	);
}

export default App;
