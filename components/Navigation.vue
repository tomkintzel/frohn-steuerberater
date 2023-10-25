<template>
	<div class="navigation">
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="#leistungen">Leistungen</NuxtLink>
		<NuxtLink to="#kontakt">Kontakt</NuxtLink>
	</div>
</template>

<style>
.navigation {
	display: flex;
	align-items: center;
	column-gap: 1rem;
}
.navigation a {
	color: var(--black);
}
</style>
