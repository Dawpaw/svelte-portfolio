import { href } from '$lib/utils';

const title = 'Resumé';

const resume = href('/pdf/resume_en.pdf');
const resumeJapanese = href('/pdf/resume_jp.pdf');
const resumeGerman = href('/pdf/resume_de.pdf');

const ResumeData = { title, resume, resumeJapanese, resumeGerman };

export default ResumeData;
