<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';
    import H2 from '$lib/components/ui/typography/h2.svelte';

</script>

<div class="border px-4">
    <H2>{ResumeData.title}</H2>

    <div class="grid grid-cols-1 gap-4">
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
    </div>
</div>