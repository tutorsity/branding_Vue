<template>
  <div>
                <header>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">

                            <div class="carousel-item active" style="background-image: url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')">
                                <div class="carousel-caption d-none d-md-block">
                                    <h2 class="display-4">Trainings</h2>
                                    <p class="lead">Watch this space for upcoming and ongoing trainings.</p>
                                </div>
                            </div>

                            <div class="carousel-item" style="background-image: url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')">
                                <div class="carousel-caption d-none d-md-block">
                                    <h2 class="display-4">Courses</h2>
                                    <p class="lead">Choose thousnds of courses from us.</p>
                                </div>
                            </div>

                            <div class="carousel-item" style="backgroundImage: url('https://source.unsplash.com/szFUQoyvrxM/1920x1080')">
                                <div class="carousel-caption d-none d-md-block">
                                    <h2 class="display-4">Careers</h2>
                                    <p class="lead">Check out for new job postings.</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </header>
                <section class="py-5">
                    <div class="container-fluid">
                        <h1 class="display-4">Full Page Image Slider</h1>
                        <p class="lead">The background images for the slider are set directly in the HTML using inline CSS. The images in this snippet are from <a href="https://unsplash.com">Unsplash</a>, taken by <a href="https://unsplash.com/@joannakosinska">Joanna Kosinska</a>!</p>
                    </div>
                </section>
            </div>
</template>

<style lang="scss" scoped>
.carousel-item {
    height: 100vh;
    min-height: 350px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
