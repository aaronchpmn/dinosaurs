<template>
	<tr>
		<td><a v-bind:href="'/dinosaur/'+ dinosaur.id">{{dinosaur.name}}</a></td>
		<td>{{Number(dinosaur.weight).toLocaleString()}}kg</td>
		<td>{{Number(dinosaur.height).toFixed(2)}}m</td>
		<td>{{dinosaur.lastUpdated}}</td>
	</tr>
</template>

<script>
export default {
  name: 'Dinosaur',
  props: ['dinosaur']
}
</script>

<style scoped>
	td {
		border: 1px solid black;
		padding: 0.5rem;
	}
</style>