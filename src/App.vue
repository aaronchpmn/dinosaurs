<template>
  <div id="app">
    <h1>Dinosaurs</h1>
    <dinosaur-table></dinosaur-table>
  </div>
</template>

<script>
import DinosaurTable from './components/DinosaurTable.vue'

export default {
  name: 'App',
  components: {
    DinosaurTable
  }
}
</script>

<style>
	body {
		font-family: Helvetica, Arial, sans-serif;
	}
</style>
