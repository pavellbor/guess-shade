<template>
  <section class="main-screen">
    <h1 class="main-screen__title"><slot name="title"></slot></h1>
    <router-link
      class="main-screen__button"
      to="/game"
      ><slot name="button"></slot
    ></router-link>
  </section>
</template>

<style scoped>
.main-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-screen__title {
  margin: 0 20px 40px;
  font-size: 44px;
  line-height: 1.4;
  text-align: center;
}

.main-screen__button {
  padding: 10px 15px;
  font-weight: bold;
  font-size: 20px;
  background: none;
  border: 2px solid #000000;
  border-radius: 10px;
}

@media (min-width: 758px) {
  .main-screen__title {
    font-size: 48px;
  }
}
</style>
