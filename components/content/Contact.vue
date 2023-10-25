<template>
	<div class="contact-container">
		<div class="contact">
			<div class="contact-title">
				<slot />
			</div>
			<div class="contact-information">
				<div class="contact-item">
					<div class="i-carbon:phone"></div>
					<slot name="tel" />
				</div>
				<div class="contact-item">
					<div class="i-carbon:email"></div>
					<slot name="email" />
				</div>
				<div class="contact-item">
					<div class="i-carbon:home"></div>
					<slot name="address" />
				</div>
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

.contact-item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.contact-item > div{
	width: 40px;
	height: 40px;
	margin-bottom: 1rem;
}

.contact-item p {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
}
.contact-title {
	display: flex;
	justify-content: center;
}

.contact-information {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.contact-information > div {
	padding: 1rem;
}

@media (min-width: 768px) {
	.contact-information {
		display: grid;
		grid-template-columns: repeat(3,1fr);
		flex-direction: row;
	}
}
</style>
