
<script>
	import ProjectsData from '$lib/data/projects';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
    import H2 from '$lib/components/ui/typography/h2.svelte';
</script>
<div class="px-4 py-4 grid grid-cols-1 justify-items-center gap-8 bg-muted rounded-xl">
    <H2>{ProjectsData.title}</H2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each ProjectsData.items as it (it.slug)}
					<ProjectCard project={it} />
				{/each}
			</div>
</div>