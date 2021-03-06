<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Taxonomies</h5>

      <hr />

      <template v-if="taxonomies.length">
        <div
          class="item mb-3"
          v-for="taxonomy in taxonomies"
          :key="taxonomy.id"
        >
          <div class="title">
            {{ taxonomy.title }}
          </div>

          <button
            class="btn btn-outline-danger"
            @click="deleteTaxonomy(taxonomy)"
          >
            Delete
          </button>
        </div>

        <Pagination
          :limit="limit"
          :offset="offset"
          :total="total"
          @updateOffset="updateOffset"
        />
      </template>
      <template v-else>
        <p class="text-center">No taxonomies found..</p>
      </template>

      <hr />

      <form class="mt-2">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="title"
            placeholder="Enter title"
          />
        </div>
        <button class="btn btn-primary btn-block" @click="addTaxonomy">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Pagination from '@/components/Pagination.vue';

interface Taxonomy {
  _id: {
    $oid: string;
  };
  title: string;
}

@Options({
  components: {
    Pagination,
  },
})
export default class TaxonomyCard extends Vue {
  private total = 0;
  private limit = 5;
  private title = '';
  private offset = 0;
  private taxonomies: Array<Taxonomy> = [];

  async loadTaxonomies() {
    const response = await fetch(
      `http://192.168.2.195:42069/taxonomy?offset=${this.offset}`,
    );
    const parsed = await response.json();

    this.total = parsed.total;
    this.offset = parsed.offset;
    this.taxonomies = parsed.taxonomies;
  }

  async deleteTaxonomy(taxonomy: Taxonomy) {
    const method = 'DELETE';

    // Delete taxonomy from the database and fetch updated data
    await fetch(`http://192.168.2.195:42069/taxonomy/${taxonomy._id.$oid}`, {
      method,
    });
    this.loadTaxonomies();
  }

  async addTaxonomy() {
    const body = JSON.stringify({ title: this.title });
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };

    // Clear the input
    this.title = '';

    // Add the taxonomy to the database and fetch updated data
    await fetch('http://192.168.2.195:42069/taxonomy', {
      method,
      headers,
      body,
    });
    this.loadTaxonomies();
  }

  updateOffset(offset: number) {
    this.offset = offset;
    this.loadTaxonomies();
  }

  mounted() {
    this.loadTaxonomies();
  }
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
}

.title {
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;

  margin-right: 15px;
  border-radius: 0.25rem;
  background-color: #fff;
}
</style>
