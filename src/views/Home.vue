<template>
  <div class="home">
    <Background />

    <div class="center">
      <span class="title">This site is under construction</span>
      <span class="subtitle">So many projects yet so little time...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Background from "@/components/Background.vue";

@Options({
  components: {
    Background,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.center {
  display: flex;
  flex-direction: column;

  .title {
    color: white;
    font-size: 3vw;
    font-weight: 600;
  }

  .subtitle {
    color: white;
    font-size: 1.5vw;
  }
}
</style>
