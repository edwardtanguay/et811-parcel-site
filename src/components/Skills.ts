import skills from '../data/skills.json';

export const Skills = () => {
	return /*html*/ `
	<h2>There are ${skills.length} skills.</h2>
	<ul>
		${skills.map(skill => {
			return /*html*/ `<li>${skill.name}</li>`
		}).join('')}
	</ul>
	`;
}