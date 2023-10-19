import './style.scss';
import { Header } from './components/Header.js';
import { Skills } from './components/Skills';
import skills from './data/skills.json';
import { Jobs } from './components/Jobs.js';
import axios from 'axios';

(async () => {
	const jobs = (await axios.get('https://edwardtanguay.vercel.app/share/jobs.json')).data;

	document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	${Header('Parcel Site')}
	<p class="mb-3">Welcome to this site.</p> 
	<img class="mb-3 rounded" src="images/code.png?width=10"/>
	${Skills(skills)}
	${Jobs(jobs)}
`;
})();