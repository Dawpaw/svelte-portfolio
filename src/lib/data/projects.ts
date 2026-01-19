import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'short-it',
		color: '#5e95e3',
		description:
			'# Short It\nA very very very simple barebones url shortener.\nYou can just create a shorter url. No tracking, no ads, nothing.\n### Blocked content\nUses the [StevenBlack](https://github.com/StevenBlack/hosts)\'s `Unified hosts + fakenews + porn + gambing` list to block specific urls. The list can be found [here](https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews-gambling-porn/hosts).\n### Automatic Url deletion after 30 days.\nAny url older than 30 days will be deleted.',
		shortDescription:
			'A very very very simple barebones url shortener. No tracking, no ads, nothing. ',
		links: [
			{ to: 'https://github.com/Dawpaw/short_it', label: 'GitHub' },
		],
		logo: Assets.Unknown,
		name: 'Short-it | URL Shortener',
		period: {
			from: new Date(2025, 9, 8),
			to: new Date(2025, 9, 9)
		},
		skills: getSkills('py', 'fastapi', 'docker'),
		type: 'Website Backend'
	},
	{
		slug: 'aniendcards',
		color: '#5e95e3',
		description:
			'Website to display Anime Endcards',
		shortDescription:
			'Website to display Anime Endcards',
		links: [
			{ to: 'thttps://github.com/Dawpaw/Aniendcards', label: 'GitHub' },
		],
		logo: Assets.Unknown,
		name: 'Aniendcards',
		period: {
			from: new Date(2024, 3, 28),
			to: new Date(2024, 4, 28)
		},
		skills: getSkills('py', 'fastapi', 'svelte', 'tailwind'),
		type: 'Website Frontend and Backend'
	},
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
