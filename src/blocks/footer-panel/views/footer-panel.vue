<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FooterPanel extends Vue {
}
</script>
<style lang="scss" scoped>
.page-footer
{
    background-color: #8c9eff !important;
    color: #ffffff !important;
}
</style>

<template>
                <footer class="page-footer font-small indigo">
                <div class="container-fluid">
                    <div class="row text-center d-flex justify-content-center pt-5 mb-3">
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a>Home</a>
                            </h6>
                        </div>
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a>Services</a>
                            </h6>
                        </div>
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a>Awards</a>
                            </h6>
                        </div>

                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a>Help</a>
                            </h6>
                        </div>

                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a>Contact</a>
                            </h6>
                        </div>
                    </div>

                    <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
                        <div class="col-md-8 col-12 mt-5">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                              accusantium doloremque laudantium, totam rem
                              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                              explicabo.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                        </div>
                    </div>

                    <div class="row pb-3">
                        <div class="col-md-12">
                            <div class="mb-5 flex-center">
                                <a class="fb-ic">
                                    <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                                </a>

                                <a class="tw-ic">
                                    <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
                                </a>

                                <a class="gplus-ic">
                                    <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                                </a>

                                <a class="li-ic">
                                    <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                                </a>

                                <a class="ins-ic">
                                    <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                                </a>

                                <a class="pin-ic">
                                    <i class="fab fa-pinterest fa-lg white-text"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">Copyright © 2019
                 <!-- <a>tutorsity.com</a>  -->
                </div>
            </footer>
</template>


