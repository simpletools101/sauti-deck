(() => {
  class FooterUI extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        
            <footer class="mil-dark-bg">
                    <div class="mi-invert-fix">
                        <div class="container mil-p-120-60">
                            <div class="row justify-content-between">
                                <div class="col-md-4 col-lg-4 mil-mb-60">

                                    <div class="mil-muted mil-logo mil-up mil-mb-30">Sauti</div>

                                    <p class="mil-light-soft mil-up mil-mb-30">Subscribe our newsletter:</p>

                                    <form class="mil-subscribe-form mil-up">
                                        <input type="text" placeholder="Enter our email">
                                        <button type="submit"
                                            class="mil-button mil-icon-button-sm mil-arrow-place"></button>
                                    </form>

                                </div>
                                <div class="col-md-7 col-lg-6">
                                    <div class="row justify-content-end">
                                        <div class="col-md-6 col-lg-7">

                                            <nav class="mil-footer-menu mil-mb-60">
                                                <ul>
                                                    <li class="mil-up mil-active">
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li class="mil-up">
                                                        <a href="/portfolio">Portfolio</a>
                                                    </li>
                                                    <li class="mil-up">
                                                        <a href="/services">Services</a>
                                                    </li>
                                                    <li class="mil-up">
                                                        <a href="/contact">Contact</a>
                                                    </li>
                                                    <li class="mil-up">
                                                        <a href="/blog">Blog</a>
                                                    </li>
                                                </ul>
                                            </nav>

                                        </div>
                                        <div class="col-md-6 col-lg-5">

                                            <ul class="mil-menu-list mil-up mil-mb-60">
                                                <li><a href="./privacy.html" class="mil-light-soft">Privacy Policy</a>
                                                </li>
                                                <li><a href="#." class="mil-light-soft">Terms and conditions</a></li>
                                                <li><a href="#." class="mil-light-soft">Cookie Policy</a></li>
                                                <li><a href="#." class="mil-light-soft">Careers</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-between flex-sm-row-reverse">
                                <div class="col-md-7 col-lg-6">

                                    <div class="row justify-content-between">

                                        <div class="col-md-6 col-lg-5 mil-mb-60">

                                            <h6 class="mil-muted mil-up mil-mb-30">Uganda</h6>

                                            <p class="mil-light-soft mil-up">Kampala, Nakawa <span
                                                    class="mil-no-wrap">+256 776007962</span></p>

                                        </div>
                                        <div class="col-md-6 col-lg-5 mil-mb-60">

                                            <h6 class="mil-muted mil-up mil-mb-30">Uganda</h6>

                                            <p class="mil-light-soft mil-up">Kampala, Kamwokya <span
                                                    class="mil-no-wrap">+256 757532618</span></p>

                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4 col-lg-6 mil-mb-60">

                                    <div class="mil-vert-between">
                                        <div class="mil-mb-30">
                                            <ul class="mil-social-icons mil-up">
                                                <li><a href="https://www.linkedin.com/company/92537951/admin/feed/posts/"
                                                        target="_blank" class="social-icon"> <i
                                                            class="fab fa-linkedin"></i></a></li>
                                                <li><a href="https://twitter.com/Sauti_Marketing" target="_blank"
                                                        class="social-icon"> <i class="fab fa-twitter"></i></a></li>
                                                <!-- <li><a href="#." target="_blank" class="social-icon"> <i class="fab fa-facebook"></i></a></li> -->
                                                <li><a href="https://www.instagram.com/sautimarketing/" target="_blank"
                                                        class="social-icon"> <i class="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                        <p class="mil-light-soft mil-up">© Copyright 2024 - Sauti All Rights Reserved.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        `;
    }
  }

  customElements.define("sauti-footer", FooterUI);
})();
