import { ISkill } from "../interfaces";

const showNumber = 10;

export const Skills = (skills: ISkill[]) => {
	return /*html*/ `
	<h2>There are ${skills.length} skills, here the first ${showNumber}.</h2>
	<ul>
		${skills.slice(0,showNumber).map(skill => {
			return /*html*/ `<li>${skill.name}</li>`
		}).join('')}
	</ul>
	`;
}