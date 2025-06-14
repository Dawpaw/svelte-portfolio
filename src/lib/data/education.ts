import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Germany',
		logo: Assets.TUClausthal,
		name: '',
		organization: 'Clausthal University of Technology',
		period: { from: new Date(2020, 3, 8), to: new Date(2023, 8, 30) },
		shortDescription: '',
		slug: 'bachelor-tuc',
		subjects: ['C', 'Python', 'Algorithms', 'Data Structures', 'Algebra', 'C++', 'Java', 'UML', 'Design', 'Economics', 
			'Logic', 'Verification', 'Relational Databases', 'Graphs and Optimization', 'Artificial Intelligence' ]
	},
	{
		degree: 'Masters Degree of Computer Science',
		description: '',
		location: 'Germany',
		logo: Assets.TUClausthal,
		name: '',
		organization: 'Clausthal University of Technology',
		period: { from: new Date(2023, 9, 1), to: new Date(2025, 7, 29) },
		shortDescription: '',
		slug: 'master-tuc',
		subjects: ['Knowledge Graphs', 'Large Language Models', 'Graph Databases', 'Scientific Computing', 
			'Simulation', 'Requirements Engineering', 'Statistics for Machine Learning', 'Advanced Algorithms']
	},
	{
		degree: 'Exchange Year for Masters Degree of Computer Science',
		description: '',
		location: 'Japan',
		logo: Assets.SIT,
		name: '',
		organization: 'Shibaura Institute of Technology',
		period: { from: new Date(2024, 8, 1), to: new Date(2025, 7, 30) },
		shortDescription: '',
		slug: 'master-sit',
		subjects: ['Knowledge Graphs', 'Large Language Models', 'Python', 'Jupyter Notebooks', 
			'Langchain', 'Ollama', 'Neo4J']
	}
];

const EducationData = { title, items };

export default EducationData;
