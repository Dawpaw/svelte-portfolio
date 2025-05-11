import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Computer Science bachelor, finishing my masters. \nStarted programming as a hobby and ended up making it my degree.\n I like studying anything that catches my attention. Latetly I\'m mostly interested in website development, cybersecurity, databases, artificial intelligence and knowledge graphs. ',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Dawpaw', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:riadh.adrani@pm.me', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
