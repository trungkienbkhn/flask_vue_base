<template>
  <div class="home">
    HOME
    <div class="home-show-status">
      <p>Server: {{ server }}</p>
      <p>MongoDB: {{ mongodb }}</p>
    </div>
    <router-link to="/hello-world">Say hello</router-link>
  </div>
</template>

<script lang="ts" src="./Home"></script>
