<template>
  <div class="app-container">
    <div id="nav">
      <TopPanel></TopPanel>
    </div>
    <div>
    <router-view/>
    </div>
    <div id="nav">
      <FooterPanel></FooterPanel>
    </div>
  </div>
</template>

<style lang="scss">
.app-container
{
    height: 100vh;
    width: 100%;
    overflow-y: auto;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import TopPanel from './blocks/top-panel/views/top-panel.vue';
import FooterPanel from './blocks/footer-panel/views/footer-panel.vue';

@Component({
  components: {
    TopPanel,
    FooterPanel,
  },
})
export default class App extends Vue {
}
</script>

