<template>
  <div class="contact-row">
    <div class="contact-content">

      <template v-if="contact.image">
        <img :src="contact.image"/>
      </template>
      <template v-else>
        <img src="@/assets/placeholder.png"/>
      </template>

      <div>
        <h5>{{ contact.firstname }}</h5>
        {{ contact.lastname }}
      </div>
    </div>

    <button class="btn btn-outline-danger" @click="$emit('deleteContact', contact)">
      Delete
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface Contact {
  _id: {
    $oid: string;
  };
  image: string;
  lastname: string;
  firstname: string;
}

@Options({
  props: {
    contact: Object,
  },
  emits: [
    'deleteContact',
  ],
})
export default class ContactRow extends Vue {
  contact?: Contact;

  get profileImage() {
    return this.contact && this.contact.image ? this.contact.image : './assets/placeholder.png';
  }
}
</script>

<style scoped lang="scss">
.contact-row {
  display: flex;
  margin-bottom: 15px;
}

.contact-content {
  flex: 1;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem;

  margin-right: 15px;
  border-radius: 0.25rem;
  background-color: #fff;

  h5 {
    margin-bottom: -3px;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 0.75rem;
    border-radius: 100%;
  }
}
</style>
