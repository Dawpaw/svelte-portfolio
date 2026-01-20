import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

import { asciiArt } from './ascii';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Computer Science bachelor, finishing my master\'s. Started programming as a hobby and ended up making it my degree. I like studying anything that catches my attention. Lately I am mostly interested in web development, cybersecurity, databases, artificial intelligence and knowledge graphs.\nSpanish is my native language, I am fluent in English and German, and conversational in Japanese.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Dawpaw', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-garcia-vasquez/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:danielgarvas99@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel,
	asciiArt
};

export default HomeData;
