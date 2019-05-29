<template>
    <!--Section: contact-->
        <div id="contact" class="contact-container" style="background-color: #eee;padding-top: 20px;">

            <div class="container">

                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold text-center mb-5">Contact us</h2>
                <!-- Section description -->
                <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-md-9 mb-md-0 mb-5">

                    <form>

                        <!-- Grid row -->
                        <div class="row">

                        <!-- Grid column -->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                            <input type="text" id="contact-name" class="form-control">
                            <label for="contact-name" class="">Your name</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                            <input type="text" id="contact-email" class="form-control">
                            <label for="contact-email" class="">Your email</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row">

                        <!-- Grid column -->
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                            <input type="text" id="contact-Subject" class="form-control">
                            <label for="contact-Subject" class="">Subject</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row">

                        <!-- Grid column -->
                        <div class="col-md-12">
                            <div class="md-form">
                            <textarea type="text" id="contact-message" class="form-control md-textarea" rows="3"></textarea>
                            <label for="contact-message">Your message</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                    </form>

                    <div class="text-center text-md-left">
                        <a class="btn btn-purple btn-md">Send</a>
                    </div>

                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li>
                        <i class="fa fa-map-marker fa-2x purple-text"></i>
                        <p>San Francisco, CA 94126, USA</p>
                        </li>
                        <li>
                        <i class="fa fa-phone fa-2x mt-4 purple-text"></i>
                        <p>+ 01 234 567 89</p>
                        </li>
                        <li>
                        <i class="fa fa-envelope fa-2x mt-4 purple-text"></i>
                        <p class="mb-0">contact@example.com</p>
                        </li>
                    </ul>
                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>

        </div>
        <!--Section: contact-->
</template>

<style lang="scss" scoped>
@import '../styles/contact.scss';
</style>
<script lang="ts">
import Contact from '../controllers/contact';
export default Contact;
</script>


