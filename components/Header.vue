<script setup>
import Logo from './Logo.vue'
</script>
<template>
	<div class="header">
		<div class="logo">
			<Logo />
		</div>
		<Navigation />
	</div>
</template>


<style>
.header {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
}

@media (min-width: 768px) {
	.header {
		flex-direction: row;
	}
}
</style>
