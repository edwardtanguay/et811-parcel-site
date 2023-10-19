import { IJob } from "../interfaces";

const showNumber = 10;

export const Jobs = (jobs: IJob[]) => {
	return /*html*/ `
	<h2>There are ${jobs.length} jobs, showing ${showNumber}.</h2>
	<ul>
		${jobs.slice(0,showNumber).map(job => {
			return /*html*/ `<li><b>${job.title}</b> <ul><li>${job.skillList}</li></ul></li>`
		}).join('')}
	</ul>
	`;
}