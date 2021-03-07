<template>
  <div class="database">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <TaxonomyCard />
        </div>

        <div class="col-6">
          <ContactCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import ContactCard from '@/components/contact/ContactCard.vue';
import TaxonomyCard from '@/components/taxonomy/TaxonomyCard.vue';

@Options({
  components: {
    ContactCard,
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
