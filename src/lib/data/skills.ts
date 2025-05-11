import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';
const items = [
	// Programming languages
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:'TODO',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TODO',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'py',
		color: 'blue',
		description: 'TODO',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	
	// Markup Styles
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'TODO',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'TODO',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),

	// Libraries
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelteMd,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'green',
		description: 'TODO',
		logo: Assets.FastApi,
		name: 'FastApi',
		category: 'library'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: 'TODO',
		logo: Assets.Django,
		name: 'Django',
		category: 'library'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: 'TODO',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'library'
	}),

	// Frameworks
	defineSkill({
		slug: 'ollama',
		color: 'black',
		description: 'TODO',
		logo: Assets.Ollama,
		name: 'Ollama',
		category: 'framework'
	}),
	defineSkill({
		slug: 'langchain',
		color: 'black',
		description: 'TODO',
		logo: Assets.Langchain,
		name: 'LangChain',
		category: 'framework'
	}),
	defineSkill({
		slug: 'haystack',
		color: 'black',
		description: 'TODO',
		logo: Assets.Haystack,
		name: 'Haystack',
		category: 'framework'
	}),

	// Databases
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'TODO',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'neo4j',
		color: 'blue',
		description: 'TODO',
		logo: Assets.Neo4j,
		name: 'Neo4J',
		category: 'db'
	}),

	// Devtools 
	defineSkill({
		slug: 'jupyter',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Jupyter,
		name: 'Jupyter Notebooks',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'ant',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Ant,
		name: 'Ant',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'maven',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Maven,
		name: 'Maven',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'uml',
		color: 'orange',
		description: 'TODO',
		logo: Assets.UML,
		name: 'UML',
		category: 'devtools'
	}),

	// Languages
	defineSkill({
		slug: 'en',
		color: 'orange',
		description: 'TODO',
		logo: Assets.English,
		name: 'English',
		category: 'lang'
	}),
	defineSkill({
		slug: 'es',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Spanish,
		name: 'Spanish',
		category: 'lang'
	}),
	defineSkill({
		slug: 'jp',
		color: 'orange',
		description: 'TODO',
		logo: Assets.Japanese,
		name: 'Japanese',
		category: 'lang'
	}),
	defineSkill({
		slug: 'de',
		color: 'orange',
		description: 'TODO',
		logo: Assets.German,
		name: 'German',
		category: 'lang'
	}),
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
