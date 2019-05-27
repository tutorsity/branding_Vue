 <template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><span class="avatar">TS</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link to="/training" class="nav-link">Trainings</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/course" class="nav-link">Courses</router-link>
                            </li>
                            <li class="nav-item">
                               <router-link to="/career" class="nav-link">Careers</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
     </nav>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopPanel extends Vue {
}
</script>

<style lang="scss" scoped>
.avatar
{
 background-color: rebeccapurple;
 color: #fff;
 padding: 15px;
 box-shadow: 0px 3px 10px #004d40;
}
.navbar
{
    width: 100%;
    background-color:#fafafa;
    color: #fff;
    z-index: 100;
    box-shadow: 0px 3px 10px #004d40;
}
</style>
