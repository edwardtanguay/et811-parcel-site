import './style.scss';
import { Header } from './components/Header.js';

document.getElementById('app').innerHTML = /*html*/ `
	${Header()}
	<p>Welcome to this site.</p> 
	<img src="./images/code.png"/>
`;