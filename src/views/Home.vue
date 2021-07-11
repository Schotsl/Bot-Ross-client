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
    font-size: 6vw;
    font-weight: 600;
  }

  .subtitle {
    color: white;
    font-size: 3vw;
  }
}

@media only screen and (min-width: 600px) {
  .center {
    .title {
      font-size: 5vw;
    }

    .subtitle {
      font-size: 2.5vw;
    }
  }
}

@media only screen and (min-width: 768px) {
  .center {
    .title {
      font-size: 4vw;
    }

    .subtitle {
      font-size: 2vw;
    }
  }
}

@media only screen and (min-width: 992px) {
  .center {
    .title {
      font-size: 3vw;
    }

    .subtitle {
      font-size: 1.5vw;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .center {
    .title {
      font-size: 2.5vw;
    }

    .subtitle {
      font-size: 1.25vw;
    }
  }
} 

@media only screen and (min-width: 2200px) {
  .center {
    .title {
      font-size: 2vw;
    }

    .subtitle {
      font-size: 1vw;
    }
  }
} 
</style>
