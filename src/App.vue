<template>
  <div class="app-container scroll-style-0">
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
.scroll-style-0::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
}

.scroll-style-0::-webkit-scrollbar
{
	width: 5px;
}

.scroll-style-0::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color:rebeccapurple;;
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

