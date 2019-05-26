 <template>
    <div>Test
      <TopPanel/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import TopPanel from '../blocks/top-panel/views/top-panel.vue';

@Component({
  components: {
    TopPanel,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
