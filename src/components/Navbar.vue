<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Habits</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/schedule">Schedule</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/finance">Finance</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/database">Database</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Navbar extends Vue { }
</script>
