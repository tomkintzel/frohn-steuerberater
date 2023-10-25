<template>
	<div class="contact-container">
		<div class="contact">
			<div class="contact-title">
				<slot />
			</div>
			<div class="contact-information">
				<slot name="tel" />
				<slot name="email" />
				<slot name="address" />
			</div>
		</div>
	</div>
</template>

<style>
.contact {
	background-color: var(--gray);
	padding: 3rem 1rem;
	max-width: var(--max-width);
	margin: 0 auto;
}
.contact-title {
	display: flex;
	justify-content: center;
}

.contact-information {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}

@media (min-width: 768px) {
	.contact-information {
		flex-direction: row;
	}
}
</style>
