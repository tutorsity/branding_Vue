 <template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><span class="avatar">NL</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <!-- <li class="nav-item">
                            <router-link to="/training" class="nav-link">Trainings</router-link>
                            </li> -->
                            <li class="nav-item">
                                <router-link to="/course" class="nav-link">Courses</router-link>
                            </li>
                                                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                            </li>
                                                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link">Contact</router-link>
                            </li>
                            <!-- <li class="nav-item">
                               <router-link to="/career" class="nav-link">Careers</router-link>
                            </li> -->
                        </ul>
                    </div>
                </div>
     </nav>
</template>
<script lang="ts">
import TopPanel from '../controllers/top-panel';
export default TopPanel;
</script>

<style lang="scss" scoped>
@import '../styles/top-panel.scss';
</style>
