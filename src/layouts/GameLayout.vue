<template>
  <section class="game-screen">
    <h1 class="game-screen__title">
      <slot name="title"></slot>
    </h1>
    <span class="game-screen__timer"><slot name="timer"></slot></span>
    <slot></slot>
  </section>
</template>

<style scoped>
.game-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.game-screen__title {
  font-size: 28px;
}

.game-screen__timer {
  font-size: 18px;
}
</style>
