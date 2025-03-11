<template>
	<div class="hero">
		<slot />
		<NuxtLink class="hero-link" to="#kontakt">Schreiben Sie mir!</NuxtLink>
	</div>
</template>

<style>
.hero {
	display: grid;
	place-items: center;
	padding: 5rem 0;
	margin-bottom: 4rem;
}
.hero h1 {
	text-align: center;
}
.hero-link {
	margin-top: 2rem;
	padding: .875rem 1rem;
	background-color: var(--blue);
	color: var(--white);
	border-radius: 20px;
}

@media(min-width: 768px) {
	.hero {
		margin-bottom: 9rem;
	}
}
</style>
