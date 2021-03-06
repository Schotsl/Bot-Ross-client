<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/habits">Habits</router-link>
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
