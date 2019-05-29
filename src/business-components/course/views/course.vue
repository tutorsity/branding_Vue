<template>
<div class="course-container">
  <!--Main layout-->
  <main class="mt-5">

    <!--Main container-->
    <div class="container-fluid">
      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-lg-3 col-md-12 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="https://www.competa.com/wp-content/themes/competait/resources/assets/img/banner/angularjs2.jpg" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Angular</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#!" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Vue</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

         <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="https://linuxize.com/post/install-php-7-on-centos-7/featured.jpg" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">PHP</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

         <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="http://getbootstrap.com/docs/4.3/assets/brand/bootstrap-social.png" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Bootstrap</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

         <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="data:image/png;base64,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" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">HTML</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

         <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-3">

          <!--Card-->
          <div class="card">

            <!--Card image-->
            <div class="view overlay">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUTExAVExITFg4QGBgVDhAPGBUVFREXFhUYFxUYKDQgGBolHRUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8mICUtLTctLS8yMistLS0rNy0vOC8tNjc1LzctLzUtLS0tLzUtLS0tLy0tLS0tLS0tLystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAD4QAAICAQAGBQkGBQQDAAAAAAECABEDBAUGEiFxMUFRgZEyU2FykqGxstETFiJDUsEVM0KT4WJzgvAjJGP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgEDBAMBAQEAAAAAAAAAAQIDERIxUQQTFCEyM6EiUiP/2gAMAwEAAhEDEQA/APcYQjGXJ1CAKfJFIInFj6zHYAQhCAM6Rl3Rw6TK7Jmvri9PyW1Do4RGLH1maRXoqxSCKhCWICEIxkyX0QBTZItBE4sddPTHIAQhAmABMabJcRke47jx1zgHVEVCEA454HkZI0PTL4N0/H/MjZD+E8jK1nJPCMZRGcGhOS44okLV2kXwbyvj/mT5k1g0TCEJwmpAAmIDXGmYkx9EqAFQioQBrK0MWPrMUqRcAIQhACMZcl8B0Qy5L4CKxY+swCFlx/is+icj2leV4RmarYowhCMZMl8pIDJkvo6IvFjriemGLHXE9McgBCECYAEyPke4ZHuOY8dc4AY8dc45CEAIEwJkd3uAJzPYPIxnGlc5LGOlPbR+Ejy0SGAMtNC0ve4Hyvj/AJlXAtXGJRyQngvyakdmJMiaLpu/+E9PV6f8yxxpXOYNYNU8hjSucXCEgBCEIAQhMztrprKqYwaD7xb0gVw5cfdL1w1yUUUsnoi5F02tcANHPjv/AHFkfLrrAeAz46/3FnnDvOok7fDjycfly4PSMWs8HSc+P+4sd/i+Dz+P+4s82hHhx5I8yXBvtI1nhLcMydX9axr+JYfPJ7YmGjLvct4seSPKlwbjJrTEfzUr1xF4tNwjicqX64mHRIuPFXI8qXBuf4jh88ntiH8Rw+eT2xMNOR4seR5UuDdfxLD55PbEYya0xH81K9cTDu1xaJUeMuR5UuDcY9Owj81L9cRz+I4fPJ7YmGhHix5HlS4Nz/EcPnk9sQOssPnk9sTCkxpmuPGjyPKlwboafjc0uRSeoBxZkzHjrnPPESps9ntKOTD+I2VJS+0UCL8ZlbRoWUbVX63hosnHA8jIcmxjNi6xMUzdjBMZZrMUysT0R1MBHVLZIE41rnLbQtL3uB8r4/5lb9meydCHsMiSTJTwXs4TIuiaSSKYcR7/APMdDWZg1g0HN6EN2EgCpitvHt8Xq5PiJsMrTIbap+PFf6cnxE6Om+xGHU/WzMokchJ+pNWnPlC9Cj8THsHYPSf+9E9OTUVlnmJOTwiLo+jO5pEZj/pUmufZJv8AAdJq/sT7SD95vMWLHhx0AuNFHbQ5kn4mVuXaLRya+2Hsv8anF5U38InZ40Ev6kYXTNFyJ5eNlHpUgHv6I0iT07Rvs8qWCuRDw6mHIjtmH2j1euHPup5LKHAu92yRXumtN+t6WvZndRoWpP0Vkn4dS6QwsYWr00nzS82P1WpH27CzZCX1V0tzvh3S/wBN1phxGsmQKTxriTXIStnUNS0wWSa+nTjqm8GHOoNJ8yfbx/WMZtS6TV/YtQ7CrHwBubDJtHox/OFepk+k6NoNGUX9rZ7Aj3yHCU793+fxl+xT/r9RgESo4qkmgLJ4AAWTF6Vl33ZqreZmrssk1NpsrqtUxDKReTIN6/0qegDmOJnTbaq45Zz11OyWEZjHqLSSLGBu8qvuJudOoNJ8yfbx/WbXStc4MbFXygMOkUzVzrokJ9o9HP5w9jJ9JzeRa9o/jOnx6lvL9RjdK1TnVSzYmCjpNq1ek0ZERam70jaDR1xtT77EEBQj8bHQSRQEwwnRTOck9Swc90IRa0vJ2ajZP+U3rn5FmXmo2VNYX9c/IsjqPgT03zLomowzEmDMSY7jSuc4D0QxpXOLhCAE4zVBmqR2JYwB/RiS/cZZolSFoKU3cZPmctyyCEISpIhUmT258vF6uT4ia+ZDbny8Xq5PiJ0dL9iMOp+tmYmx2HxgYsjdZcL3KoI+YzHTW7G5LwOP/ofkWdnVfWcfS/YQ9udMYumMH8AXfrtJJAvlXvmbRJoNscdZ1J82vzNKKW6dYrRW9/8ARkjQtOyYiTjcqT09BB5g8I3pGdnYs7FmPSTG5ya4WcmWXjBvdkswOiqL4oXU97FvgwlPtHqPLlznJjpg27wLBSCFA6+rhKPVetnwva8VNBlJoN9D6ZrdF2n0erbeU9hTe96zinCyuxygs5O2E65wUZvGDPJsvpI/LH9xPrEaTqPSEG82I0P0lXruHGaz7z6N+s/23+km6v1nizX9m910iipHcYfUWx9uI7FUvSkeaT0rU+cNo+Nh0biDkQKI8QZl9sdXLjcZVFB7DAcBvDjff+3plbqbXr4Tu1vYybK3RB7Qf2l7Y96tOJnU+zY1Il602dztlcoA6szMPxgH8RvjfXxjSbL6SPyx/cT6zR6PtNo9WSwPYcZPwjv3n0b9Z/tv9Jmrb160/ho6qH71fpj9N1TmxC3xkL2ghgOZHRIU9N0PTMeZN5GDLxU8D3ggzD7TavGHN+HgjjfA7ONEePxE2pvc3pksMyuoUVqi8oqSZotlzeJvXPyLMwxuazZFaxN65+RZbqPgV6f5l1jSucXCE4D0QnGaoM1SOxJMAGJYx9EqGNKioA9onldxk2QtE8ruMmEzOW5ZHYRO9CVJFTH7deXi9XJ8RNhMVt49vi9V/iJ0dN9iMOp+tmYd7ml2J0wJkbGxr7SivrDq5kfCZ1EiwZ6M4KcWmedCeiSaPQte6nXSFHHddb3TV9PSCOyZs7J5+3H7bfSPat2sZQFyrvgcN4EBu8HgfdLL73YP05PZX6zjir6/5S9HZJ0Wf037E6q2XRBeasjdnHdX6nnM1tPoqY8+7j4KVVqu90knh7ge+WmstsCwrDjI/wBT18o+szjMWJZiWY8STxmtMbdWqbMrpVqOmCJ+qtQ5sy7ygBei2bdBPXUnfdPSO3H7bfSSNQ7RpixDHkVvw71FQDYJJ42e0mWX3twfpyewv1kTncpPC9EwhS4pt+yl+6ekduP22+kudnNSNgZnyMLI3QFJIq7JJPITp2uwfpyewv1kLTNsEI/8eNierepR30STM5O+a0tGkVRB6kxO3OlArjx9ZYvXoAI/f3Sr1fs3nyIHAUBuI3mqx2gAdEr9Jztkcu5tj4AdQA6hNTq3arGuJVyI28oVfwhSDQoHp4TXTOutKPtmWqFk25ekV/3T0jtx+230h909I7cftt9Jdfe3B+nJ7C/WcO12D9OT2F+sz7nUcF+3RySdntVHR8bb7AsxBNXQocAL6T0zN7baSHzIg6UU36CxuvAA98l6w2vBFYsZvqL0APTujpmZZiSWY2zEkk9ZMtTVNz1zIusgoaICUWpqtk/5TeufkWZeajZP+U3rn5FmvUfAy6f7C7nGaoM1SOxJM4D0QYljH0SoY0qKgBCE4zVAHtGam7jJANmQNFJZ+4yzRamctyyDdhFQlSRnK0ye2uKmxH0ZB71mwVZF1pq5M+PcfmCOlT2ia0zUJpsyug5waR5rCaV9j8l8MykelWHuiTshk86ng09HyK+Tz/Hs4M3Gna5o32TyH81PBo4mxmQfmp4NHkV8jsWcGbRKi5f5NlsgNfaJ4NEfdl/OL4NJ71fJHYs4KOcJl6dmn84ng0YbZ1z+Yvg0d6HI7FnBSM1xaLUvU2XcfmL4NFfdl/OL4NHehyOzZwUcJefdl/OL4NA7NOPzF8GjvQ5HYs4KImNMbl2dnHP5i+DR1Nl3H5i+DR3ocjsT4KNFqKl592X84vg0Puy/nF8GjvQ5HYs4KOajZbhhYn9Z+VZFXZojysor0KSffLjBhCqEUUo4AfEn0zG+2LjhG9FMoyyxxiSY/jSoIlRU5DsCEJxmqADNUjkljAksY+iVAHtBSm7jJ8haJ5XcZNmctyyCEISpIQhAmABMj5HuGR7jmLHXOAGPHXOOQhAIWleV4RkmO6WfxeEhO9zVbFGDvcdx465wx465xckBCE4TUACajDMSYMxJjuNK5wAxpXOLhCAE4zVBmqR2JJgAxJMfxpUMaVFQAhCcZqgAzVI5JYwJLGPolQARKioQgD2ieV3GTCZC0dqbuMfUkmZy3LId3oQ3YSpIomR8j3FZDcVjx1zgBjx1zjkIQAnCYExh3uAQtNe38JzHjrnHs2Om9NCImq2KMIQnCakgCajDMSYMxJnNIyjFjZ26hfM9QHfCWfRDePY9jSooH0zD6bp+TKbZjXUosAchEaPo2TeG4jBr4EKRx59U6fG9e2cvle/SN5OM1Tl0OP8A0xhiWM5jrBiSY+iVBEqKgBOEjtg90a6aNc64TBaRgyAnfRt7jdqTx59c1qr159mNtujHrJvWahI5JYzE6FrDJjb8JNdakmj3dXObjQsquiuvQwv6juiypwJqtUx1EqKhCZGoTjtUHapH4sYA/ols/cZZqtSHoS03cZOmctyyCEISpIlVioQgBOEwJjDvcAHe47jx1zhjx1zi4BC0ryvCMx7SvK8IwTU1WxRgTUYZiTBmJMdxpXOSAxpXOVe1J/8AAPS6/AmW8p9qf5A9dflaaVfNGd3wZWbLYwcxJF7qkj0GwL+M1TNUy2yxrK3qH5hNCxJMv1HzM+m+AMSxj6JUESoqYHQEITjNUAGaowSSZwksY+iVAMntJhC5uA8pFY+k2wv3CXGzB/8AX5M4+B/eVW1X88f7a/M0tdl/5H/N/wBp1z+lHHX9zLacdqg7VI/FjOQ7A4sZIRagi1OwB7RPK7jJshaJ5XcZMYzOW5ZHYRG9CVJFzhMCYw72YAO9x3HjrnDHjrnFwAhCcJqAQtLNN4SEzEmO6axL+EMaVzmq2KMMaVzi4Qkgi6z0z7LGXqzwAHpPbMjrHWj5a36AHEBRQvt4zZ6ViVkKuLU9ImT15qtcYDITRO7RN1wJFHunT08oJ4e5y9RGbWVsTNmNGO62T9X4RyB4+/4TR40qZvZDIQzp1EB+8Gj8R4TTTO/Ot5NKMaFgIQnGapkbAzVI5JYwJLGPolQARKioQgFBtVothcg6vwHkTY99+Mp9B1q+EHdog8aYWL7eEsNrdIO+idQXf5kkj9vfI2pNULmUu5NWVABroqyT3ztg0qlrOCabtegv9XaV9sgequwR2EGjLBFqN6No641CqKUR2cbxn0dyzj2EIRLvUgke0d6buMkLxMg6GCz9xloq1M5blkc3YRUJUkZyG4vGlc51VioAQhOE1AAmpHZiTBmJMexpXOAQsyU3p4REe0ryvCMzVbFGE4zVBmqR2JJkgGJYyu2mSsA9dflaXCJUrNpcZOAkf0srHlxH7y9XzRnb8GVeyn81vUPzCamYzUemriy23kkFSQLriDdd00ia4wE0Mgs8BYYe8zXqIScs4MennFQw2VGlbROuU/hG4rFao2QDR49Rl6SWMivq7G+TfOMb1311faR0XLFEqZTlF40o2rjJZ1PJmsWv3GWt0bhbdqjvVddPbNOxocrkQasxfafafZjeu741fbXRclybJReNKIrjNZ1PJm9E2gdsqgqu4zBaANizQ49c0btUhrq7Cj/aDGA3T19PoHQJGya3w71HILHYGPvEmeJP+ERDMF/bKTamznHqL8zS62WWtH/5v+0oNcaUuTLa+SAFBIq6JN13zR7OYyNHW/6izdxND4TaxYqSZjU83Nos4QiXepyHYDvUYALGABYyQq1AHtCWm7jJ0haJ5XcZNmctyyCEISpIQhOE1AAmpHZiTBmJMexpXOAGNK5xcIQCFpXleEYZqj2mNTeEgsSTNVsUYMSxj6JUESoqSAnHUEEEWDYI7QZ2cZqgGZ1hs8wJOMgr+kmiPRfXICahzs1EADt3gaHITWkljH0Spsuong5300G8hix0K5RUITE6AnHaoO1SPxYwDjqXsdoI5XMydnswNBQR2h1F+M16LU7NK7XDYysqjPczWg7ONYOUgAf0g2TzPVNIooUBQHCdiXepE7JT3JhXGGwO9RgAsYAFjJCrUoaAq1OwhAHtE8ruMmM0g4Hpu4yQnEzOW5ZDlwit2EqSBMjuxJjri4pEqAcxpXOLhCAE4xqBMaYEwCv0wkv4TqJUmZtH4WOmRZpF+irCEIEyxBxmqRySxiyCTHEWoAIlRUIQAnHaoExoqSYAjixkhFqCrU7ACEJxjAOO9RgAsYvdJMdVagAq1OwhACJd6nWMaCEmAOaECX7jLRRUY0TDuj0mSJlJ+yyCEISCRIioQgBCEIAloLCEAVIml9M5CWjuQxiJaEJoVBYqEIAQhCAJaCwhAFQhCAES0IQDqzsIQAhCEAQ3TJWhTkJV7EomwhCZlghCEA//2Q==" class="card-img-top"
                alt="">
              <a href="#">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">CSS</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a href="#" class="btn btn-indigo">Button</a>
            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

    </div>
    <!--Main container-->

  </main>
  <!--Main layout-->

  </div>
</template>

<style lang="scss" scoped>
.course-container
{
  padding-top: 20px;
  color: white;
  vertical-align: middle !important;
}
.card-body{
  background-color: rebeccapurple;
}
img
{
  height: 150px;;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Course extends Vue {}
</script>
