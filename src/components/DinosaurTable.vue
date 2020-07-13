<template>
  <div class="wrapper">
    <div class="sortWrapper">
      <label for="sort-by">Sort Dinosaurs by:</label>
      <select name="sort-by" v-model="currentSort">
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
        <option value='height'>Height</option>
        <option value='lastUpdated'>Last Updated</option>
      </select>
    </div>
    
    <div class="sortWrapper">
      <label for="direction">Sort by:</label>
      <select name="direction" v-model="currentSortDir">
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
    </div>

    <table v-if="dinosaurs.length">
      <thead>
        <tr>
          <td>Dinosaur Name</td>
          <td>Weight</td>
          <td>Height</td>
          <td>Last Updated</td>
        </tr>
      </thead>
      <tbody>
        <template v-for="dinosaur in sortedDinosaurs">
          <dinosaur :dinosaur="dinosaur"></dinosaur>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Dinosaur from './Dinosaur.vue'

export default {
  name: 'DinosaurTable',
  data() {
    return {
      dinosaurs: [],
      currentSort: 'name',
      currentSortDir: 'asc',
    }
  },
  created() {
    axios.get('/api/dinosaurs')
      .then(res => {
        this.dinosaurs = res.data.dinosaurs
      })
      .catch(error => {
        console.log(error)
      })
  },
  components: {
    Dinosaur
  },
  methods: {
    sort: function(event) {
      sort = event.target.value

      if(sort === this.currentSort) {
        switch(this.currentSortDir) {
          case 'asc':
            this.currentSortDir = 'desc'
            break;
          case 'desc':
            this.currentSortDir = 'asc'
            break;
          default:
            console.log('An error has occured deciding sort order')
        }
      }

      this.currentSort = sort
    }
  },
  computed: {
    sortedDinosaurs: function() {
      return this.dinosaurs.sort((a,b) => {
        let modifier = 1
        let sortPost = 0

        if(this.currentSortDir === 'desc') {
          modifier = -1
        }

        if(a[this.currentSort] < b[this.currentSort]) {
          sortPost = -1 * modifier
        }
        else if(a[this.currentSort] > b[this.currentSort]) {
          sortPost = 1 * modifier
        }

        return sortPost
        
      })
    }
  }
}
</script>

<style scoped>
  table {
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
  }

  thead td {
    border: 1px solid black;
    padding: 0.5rem;
    font-weight: 700;
  }

  .wrapper {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 50vw;
  }

  .sortWrapper {
    flex-basis: calc(50% - 1rem);
    padding: 1rem 0;
  }

  label {
    font-weight: 700;
    margin-right: 0.5rem;
  }
</style>
