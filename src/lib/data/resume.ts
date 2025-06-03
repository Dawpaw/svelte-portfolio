import { href } from '$lib/utils';

const title = 'Resumé';

const resume = href('/pdf/resume.pdf');
const resumeJapanese = href('/pdf/resume_japanese.pdf');

const ResumeData = { title, resume, resumeJapanese };

export default ResumeData;
