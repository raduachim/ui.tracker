<template>
  <section>
    <header class="header">
      <h1>Do it!</h1>
    </header>
    <input class="new-item" autofocus autocomplete="off" placeholder="What are you doing?" v-model="newItem" @keyup.enter="addItem">
  
  </section>
</template>

<script>
export default {
  name: 'workout',
  data () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      const value = this.newItem && this.newItem.trim()

      if (!value) {
        return
      }

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      // My code, my rules - I do HTTP requests wherever I want
      fetch('http://localhost:3000/workouts', {
        method: 'POST',
        body: JSON.stringify({ name: this.newItem }),
        headers
      })
      .then(response => response.json())
      .then(result => console.log('added a new item', result.id))
    }
  }
}
</script>

<style>
.new-item {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
