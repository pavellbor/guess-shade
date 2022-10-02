<template>
  <div class="game-wrapper">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter Tight', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.game-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
}
</style>
