import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

import jobNfdi4ingMD from './md/job_nfdi4ing.md?raw';
import jobKI4ALLMD from './md/job_ki4all.md?raw';
import jobITSecurityMD from './md/job_itsecurity.md?raw';
import jobRNVSMD from './md/job_rnvs.md?raw';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'nfdi4ing',
		company: 'Clausthal University of Technology',
		description: jobNfdi4ingMD,
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 1, 1) },
		skills: getSkills('svelte', 'ts', 'js', 'html', 'css', 'tailwind', 'uml'),
		name: 'Web Development',
		color: 'red',
		links: [{to:'https://nfdi4ing.rz-housing.tu-clausthal.de/', label:'BettysResearchEngine', newTab: true}],
		logo: Assets.TUClausthal,
		shortDescription: 'Developed a responsive Svelte-based web interface for a research search engine'
	},
	{
		slug: 'ki4all',
		company: 'Clausthal University of Technology',
		description: jobKI4ALLMD,
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 3, 1), to: new Date(2025, 2, 1) },
		skills: getSkills('ant', 'java', 'maven', 'py'),
		name: 'Software Developtment',
		color: 'orange',
		links: [],
		logo: Assets.TUClausthal,
		shortDescription: 'Refactored and ported an academic bug research framework to Python.'
	},
	{
		slug: 'it-security',
		company: 'Clausthal University of Technology',
		description: jobITSecurityMD,
		contract: ContractType.PartTime,
		type: 'Student Assistant',
		location: 'Germany',
		period: { from: new Date(2023, 9, 1), to: new Date(2024, 2, 1) },
		skills: getSkills('py', 'jupyter'),
		name: 'IT-Security Lecture Student Assistant',
		color: 'green',
		links: [],
		logo: Assets.TUClausthal,
		shortDescription: 'Student Assistant for the IT-Security lecture'
	},
	{
		slug: 'cn_ds',
		company: 'Clausthal University of Technology',
		description: jobRNVSMD,
		contract: ContractType.PartTime,
		type: 'Student Assistant',
		location: 'Germany',
		period: { from: new Date(2024, 3, 1), to: new Date(2024, 7, 1) },
		skills: getSkills('py', 'jupyter'),
		name: 'Computer Networks and Distributed Systems Lecture Student Assistant',
		color: 'green',
		links: [],
		logo: Assets.TUClausthal,
		shortDescription: 'Student Assistant for the Computer Networks and Distributed Systems lecture'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
