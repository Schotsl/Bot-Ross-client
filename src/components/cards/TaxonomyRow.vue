<template>
  <div class="taxonomy-row">
    <div class="taxonomy-content">
      {{ taxonomy.title }}
    </div>

    <button class="btn btn-outline-danger" @click="$emit('deleteTaxonomy', taxonomy)">
      Delete
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    taxonomy: Object,
  },
  emits: [
    'deleteTaxonomy',
  ],
})
export default class TaxonomyRow extends Vue { }
</script>

<style scoped lang="scss">
.taxonomy-row {
  display: flex;
  margin-bottom: 15px;
}

.taxonomy-content {
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;

  margin-right: 15px;
  border-radius: 0.25rem;
  background-color: #fff;
}
</style>
