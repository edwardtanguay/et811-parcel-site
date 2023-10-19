import { ISkill } from "../interfaces";

export const Skills = (skills: ISkill[]) => {
	return /*html*/ `
	<h2>There are ${skills.length} skills.</h2>
	<ul>
		${skills.map(skill => {
			return /*html*/ `<li>${skill.name}</li>`
		}).join('')}
	</ul>
	`;
}