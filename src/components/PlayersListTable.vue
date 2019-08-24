<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            :key="key"
            v-for="key in columns"
            @click="sortBy(key)"
            :class="{ active: sortKey == key }"
          >
            {{ key | capitalize }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="key" v-for="(entry, key) in filteredPlayers">
          <td :key="key" v-for="key in columns">{{entry[key]}}</td>
          <Button class="btn" text="Choose this Player" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import Button from '../components/Button.vue'

export default {
  name: 'PlayersListTable',
  props: {
    players: Object,
    columns: Array,
    filterKey: String
  },
  data: function() {
    var sortOrders = {}
    this.columns.forEach(function(key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredPlayers: function() {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var players = this.players.__ob__.value.Players
      if (filterKey) {
        players = players.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        players = players.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return players
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}

// https://www.fantasyfootballnerd.com/service/players/json/test/QB/
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
.btn {
  width: fit-content;
}
</style>
