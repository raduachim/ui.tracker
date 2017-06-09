<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  line-height: 1.4em;
  min-width: 230px;
	max-width: 550px;
}

:focus {
	outline: 0;
}

.hidden {
	display: none;
}

#app h1 {
	width: 100%;
	font-size: 50px;
	font-weight: 100;
	text-align: center;
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}
</style>
