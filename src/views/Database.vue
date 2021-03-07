<template>
  <div class="database">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <TaxonomyCard />
        </div>

        <div class="col-6">
          <div class="card">
            <img class="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import TaxonomyCard from '@/components/taxonomy/TaxonomyCard.vue';

@Options({
  components: {
    TaxonomyCard,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.container-fluid {
  margin: 30px 15px;
}
</style>
