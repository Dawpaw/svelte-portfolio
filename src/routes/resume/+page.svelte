<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';
</script>

<TitledPage title={ResumeData.title}>
	<a href={ResumeData.resume} class="mx-auto">
		<Button>Download English</Button>
	</a>
	<!-- <iframe src={ResumeData.resume} class="h-full w-full" title={ResumeData.title}></iframe> -->

	<a href={ResumeData.resumeJapanese} class="mx-auto">
		<Button>Download Japanese</Button>
	</a>
	<!-- <iframe src={ResumeData.resumeJapanese} class="h-full w-full" title={ResumeData.title}></iframe> -->

	<a href={ResumeData.resumeGerman} class="mx-auto">
		<Button>Download German</Button>
	</a>
</TitledPage>
