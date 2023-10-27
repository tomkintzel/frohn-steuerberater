<template>
	<div class="two-column">
		<div class="left">
			<div class="left-content">
				<slot />
				<ul>
					<li><div class="i-carbon:arrow-right"></div> Finanzbuchhaltung</li>
					<li><div class="i-carbon:arrow-right"></div> Abschlusserstellung</li>
					<li><div class="i-carbon:arrow-right"></div> Steuererklärungen</li>
					<li><div class="i-carbon:arrow-right"></div> Lohnsteuerhilfe</li>
					<li><div class="i-carbon:arrow-right"></div> Steuergestaltungsberatung</li>
					<li><div class="i-carbon:arrow-right"></div> Steuerliche Beratung</li> 
				</ul>
			</div>
		</div>
		<div class="right">
			<!-- <NuxtImg src="/tax-accountant.jpg" /> -->
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
		display: grid;
		place-items: center;
	}

	.two-column .right img {
		max-height: 75vh;
	}
}
</style>
