<template>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" :class="{ 'invalid-input' : errors.title }" placeholder="Title" v-model="taxonomy.title"/>
      <div class="invalid-feedback">
        {{ errors.title }}
      </div>
    </div>

    <button class="btn btn-primary btn-block" @click="addTaxonomy">
      Submit
    </button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface ObjectKeys {
  [key: string]: string;
}

@Options({
  emits: [
    'addTaxonomy',
  ],
})
export default class TaxonomyForm extends Vue {
  private taxonomy: ObjectKeys = {
    title: '',
  };

  private errors: ObjectKeys = {
    title: '',
  };

  get invalidInput() {
    // Return true if any error properties contain a message
    for (const property in this.errors) {
      if (this.errors[property].length > 0) {
        return true;
      }
    }

    return false;
  }

  validateInput() {
    // Validate property existence
    if (!this.taxonomy.title) this.errors.title = 'Please enter a title property';
  }

  clearErrors() {
    // Clear every error property
    for (const property in this.errors) {
      this.errors[property] = '';
    }
  }

  clearTaxonomy() {
    // Clear every taxonomy property
    for (const property in this.taxonomy) {
      this.taxonomy[property] = '';
    }
  }

  addTaxonomy() {
    // Clear previous erros and check for new errors
    this.clearErrors();
    this.validateInput();

    if (this.invalidInput) return;

    // If there are no errors emit the add event
    this.$emit('addTaxonomy', this.taxonomy);
    this.clearTaxonomy();
  }
}
</script>

<style scoped lang="scss">
  .invalid-input {
    border-color: #dc3545;
  }

  .invalid-feedback {
    display: block;
  }
</style>
