
<script>
	import ProjectsData from '$lib/data/projects';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
    import H2 from '$lib/components/ui/typography/h2.svelte';
</script>
<div class="border px-4">
    <H2>{ProjectsData.title}</H2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each ProjectsData.items as it (it.slug)}
					<ProjectCard project={it} />
				{/each}
			</div>
</div>