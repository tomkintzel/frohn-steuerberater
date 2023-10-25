<template>
	<div class="two-column">
		<div class="left">
			<slot />
		</div>
		<div class="right">
			<slot name="right" />
		</div>
	</div>
</template>


<style>
.two-column {
	display: flex;
	flex-direction: column-reverse;
}

.two-column .right {
	order: 1;
}

.two-column img {
	max-height: 40vh;
	width: 100%;
	object-fit: cover;
}

.two-column .right p {
	margin: 0;
	padding: 0;
}

.two-column .left{
	padding: 2rem 1rem;
	display:flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--black);
	color: var(--white);
}

.left h2 a {
	color: var(--white);
}

@media (min-width: 768px) {
	.two-column {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.two-column .left {
		padding: 2rem;
	}

	.two-column .right img {
		max-height: 75vh;
	}
}
</style>
