<template>
  <div class="training-container text-center">
      <h1 style="padding-top:10%;">Trainings. Coming soon...</h1>
  </div>
</template>

<style lang="scss" scoped>
.training-container
{
  height: 100vh;
  background-color:#8c9eff;
  color: white;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Training extends Vue {}
</script>
