import { IJob } from "../interfaces";

const showNumber = 10;

export const Jobs = (jobs: IJob[]) => {
	return /*html*/ `
	<h2 class="text-xl">There are ${jobs.length} jobs, showing ${showNumber}.</h2>
	<ul class="list-disc ml-6 mb-4">
		${jobs.slice(0,showNumber).map(job => {
			return /*html*/ `<li><span class="font-bold">${job.title}</span> <ul><li>${job.skillList}</li></ul></li>`
		}).join('')}
	</ul>
	`;
}