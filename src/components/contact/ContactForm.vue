<template>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" :class="{ 'invalid-input' : errors.firstname }" placeholder="Firstname" v-model="contact.firstname"/>
      <div class="invalid-feedback">
        {{ errors.firstname }}
      </div>
    </div>

    <div class="form-group">
      <input type="text" class="form-control" :class="{ 'invalid-input' : errors.lastname }" placeholder="Lastname" v-model="contact.lastname"/>
      <div class="invalid-feedback">
        {{ errors.lastname }}
      </div>
    </div>

    <div class="form-group">
      <input type="file" class="form-control" ref="file" accept="image/x-png,image/jpeg" @change="handleUpload()"/>
    </div>

    <button class="btn btn-primary btn-block" @click="addContact">
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
    'addContact',
  ],
})
export default class ContactForm extends Vue {
  private contact: ObjectKeys = {
    image: '',
    lastname: '',
    firstname: '',
  };

  private errors: ObjectKeys = {
    image: '',
    lastname: '',
    firstname: '',
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

  handleUpload() {
    // Store the input element
    const input = this.$refs.file as HTMLInputElement;

    if (input.files) {
      // Fetch the first file
      const file = input.files[0];
      const reader = new FileReader();

      // Load the image into a base64 string
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          const result = reader.result;
          const base64 = result.toString();

          this.contact.image = base64;
        }
      };
    }
  }

  validateInput() {
    // Validate property existence
    if (!this.contact.lastname) this.errors.lastname = 'Please enter a lastname property';
    if (!this.contact.firstname) this.errors.firstname = 'Please enter a firstname property';
  }

  clearErrors() {
    // Clear every error property
    for (const property in this.errors) {
      this.errors[property] = '';
    }
  }

  clearContact() {
    // Clear every contact property
    for (const property in this.contact) {
      this.contact[property] = '';
    }
  }

  addContact() {
    // Clear previous erros and check for new errors
    this.clearErrors();
    this.validateInput();

    if (this.invalidInput) return;

    // If there are no errors emit the add event
    this.$emit('addContact', this.contact);
    this.clearContact();
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
