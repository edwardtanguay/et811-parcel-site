import './style.scss';
import { Header } from './components/Header.js';
import { Skills } from './components/Skills';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	${Header('Parcel Site')}
	<p>Welcome to this site.</p> 
	<img src="images/code.png?width=10"/>
	${Skills()}
`;