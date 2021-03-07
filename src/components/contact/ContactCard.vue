<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Contacts</h5>

      <hr/>

      <template v-if="contacts.length">
        <ContactRow v-for="contact in contacts" :key="contact" :contact="contact" @deleteContact="deleteContact"/>
        <Pagination
          :limit="limit"
          :total="total"
          :offset="offset"
          @updateOffset="updateOffset"
        />
      </template>

      <template v-else>
        <p class="text-center">No contacts found..</p>
      </template>

      <hr/>

      <ContactForm @addContact="addContact"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Pagination from '@/components/Pagination.vue';
import ContactRow from '@/components/contact/ContactRow.vue';
import ContactForm from '@/components/contact/ContactForm.vue';

interface Contact {
  _id: {
    $oid: string;
  };
  image: string;
  lastname: string;
  firstname: string;
}

@Options({
  components: {
    Pagination,
    ContactRow,
    ContactForm,
  },
})
export default class ContactCard extends Vue {
  private total = 0;
  private limit = 5;
  private offset = 0;
  private contacts: Array<Contact> = [];

  async loadContacts() {
    const response = await fetch(
      `http://192.168.2.195:42069/contact?offset=${this.offset}&${this.limit}`,
    );
    const parsed = await response.json();

    this.total = parsed.total;
    this.offset = parsed.offset;
    this.contacts = parsed.contacts;
  }

  async deleteContact(contact: Contact) {
    const method = 'DELETE';

    // Delete contact from the database and fetch updated data
    await fetch(`http://192.168.2.195:42069/contact/${contact._id.$oid}`, {
      method,
    });

    this.loadContacts();
  }

  async addContact(contact: Contact) {
    const body = JSON.stringify(contact);
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };

    // Add the contact to the database
    await fetch('http://192.168.2.195:42069/contact', {
      method,
      headers,
      body,
    });

    this.loadContacts();
  }

  updateOffset(offset: number) {
    this.offset = offset;
    this.loadContacts();
  }

  mounted() {
    this.loadContacts();
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
