import { ISkill } from "../interfaces";

const showNumber = 10;

export const Skills = (skills: ISkill[]) => {
	return /*html*/ `
	<h2 class="text-xl">There are ${skills.length} skills, here the first ${showNumber}.</h2>
	<ul class="list-disc ml-6 mb-4">
		${skills.slice(0,showNumber).map(skill => {
			return /*html*/ `<li>${skill.name}</li>`
		}).join('')}
	</ul>
	`;
}