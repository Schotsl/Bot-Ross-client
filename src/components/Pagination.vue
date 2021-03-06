<template>
  <ul class="pagination mt-3">
    <li class="page-item" v-for="index in pageCount" :key="index"><a class="page-link" @click="updateOffset(index - 1)">{{ index }}</a></li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    limit: Number,
    total: Number,
    offset: Number,
  },
})
export default class HelloWorld extends Vue {
  limit!: number
  total!: number
  offset!: number

  get pageCount() {
    return Math.ceil(this.total / this.limit);
  }

  updateOffset(index: number) {
    this.$emit('updateOffset', this.limit * index);
  }
}
</script>

<style scoped lang="scss">
  .pagination {
    align-items: center;
    justify-content: center;
  }

  .page-link {
    color: black;
  }
</style>
