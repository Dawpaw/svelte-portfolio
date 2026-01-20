<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';
    import H2 from '$lib/components/ui/typography/h2.svelte';

</script>

<div class="px-4 grid grid-cols-1  bg-muted rounded-xl justify-items-center gap-8 py-4">
    <H2>{ResumeData.title}</H2>

    <div class="grid grid-cols-1 gap-4">
        <a href={ResumeData.resume} class="mx-auto">
            <Button class="rounded-xl">Download English</Button>
        </a>
        <!-- <iframe src={ResumeData.resume} class="h-full w-full" title={ResumeData.title}></iframe> -->
    
        <a href={ResumeData.resumeGerman} class="mx-auto">
            <Button class="rounded-xl">Download German</Button>
        </a>

        <a href={ResumeData.resumeJapanese} class="mx-auto">
            <Button class="rounded-xl">Download Japanese</Button>
        </a>
        
        <a href={ResumeData.cvEnglish} class="mx-auto">
            <Button class="rounded-xl">Download CV</Button>
        </a>
    
    </div>
</div>