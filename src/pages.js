import React from "react";
import img1 from "./img/comparto-image-01.jpg";
import img2 from "./img/comparto-image-02.jpg";
export function Header(){
  return ( <div class="tm-site-header tm-mb-1">
            <div class="tm-site-name-container tm-bg-color-1">
                <h1 class="tm-text-white">Comparto</h1>
            </div>
            <div class="tm-nav-container tm-bg-color-8">
                <nav class="tm-nav" id="tm-nav">
                    <ul>
                        <li class="tm-nav-item current">
                            <a href="#about" class="tm-nav-link">
                                <span class="tm-mb-1">.01</span>
                                <span>About</span>
                            </a>
                        </li>
                        <li class="tm-nav-item">
                            <a href="#services" class="tm-nav-link">
                                <span class="tm-mb-1">.02</span>
                                <span>Services</span>
                            </a>
                        </li>
                        <li class="tm-nav-item">
                            <a href="#gallery" class="tm-nav-link">
                                <span class="tm-mb-1">.03</span>
                                <span>Gallery</span>
                            </a>
                        </li>
                        <li class="tm-nav-item">
                            <a href="#contact" class="tm-nav-link">
                                <span class="tm-nav-text tm-mb-1">.04</span>
                                <span class="tm-nav-text">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div> 
  );
}
export function Home() {
  return (
    <div className="tm-mb-1 tm-row tm-services-row" id="services">
      <div className="tm-section-2-l">
        <article className="tm-bg-color-6 tm-box-pad tm-mb-1">
          <h2 className="tm-mb-2">.02 Aliquam pretium hendrerit</h2>
          <p>
            Cras tempus, velit amet facilisis venenatis, erat felis imperdiet
            lectus, at posuere elit metus. Title #333 BG #F2F2F2
          </p>
          <p className="tm-mb-0">
            Nam iaculis, urna ut laoreet aliquam, massa magna dapibus. Text #666
          </p>
        </article>
        <div className="tm-bg-color-7 tm-em-box">
          <p className="tm-text-color-2">
            Nam iaculis, urna ut laoreet aliquam, massa magna dapibus nibh, at
            pellentesque lectus odio non risus. Nulla ac sodales est, vel
            iaculis. Text #333 . BG #DDD
          </p>
          <a href="#gallery" className="tm-btn tm-btn-2">
            Read More
          </a>
        </div>
      </div>
      <div className="tm-section-2-r">
        <img src={img2} alt="Services image" className="tm-img-responsive" />
      </div>
    </div>
  );
}
export function About() {
  return (
    <div class="tm-mb-1" id="about">
      <div class="tm-row tm-about-row">
        <div class="tm-section-1-l">
          <img src={img1} alt="About image" class="tm-img-responsive" />
        </div>
        <article class="tm-section-1-r tm-bg-color-8">
          <h2 class="tm-mb-2 tm-title-color">.01 Comparto CSS Layout</h2>
          <p>
            <a
              rel="nofollow"
              href="https://templatemo.com/tm-544-comparto"
              target="_parent"
            >
              Comparto
            </a>{" "}
            is a custom light-weight CSS layout for your website. You can easily
            adapt and use this for your commercial or personal websites. Feel
            free to use it.
          </p>
          <p>
            You cannot redistribute this template ZIP file in any template
            collection website. Please{" "}
            <a
              rel="nofollow"
              href="https://templatemo.com/contact"
              target="_parent"
            >
              contact TemplateMo
            </a>{" "}
            if you have any question.
          </p>
          <p>
            Nunc sed gravida elit. Curabitur rutrum elit id lobortis viverra.
            Fusce at libero dui.
          </p>

          <a href="#services" class="tm-btn tm-btn-1 tm-link-to-services">
            More Detail
          </a>
        </article>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div id="contact" class="tm-bg-color-5 tm-mb-3">
      <h2 class="tm-text-white tm-contact-title">.04 Contact Us</h2>
      <div class="tm-bg-color-white tm-contact-main">
        <div class="map-outer">
          <div class="gmap-canvas">
            <iframe
              width="100%"
              height="400"
              id="gmap-canvas"
              src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div class="contact-form-outer">
          <form
            id="contact-form"
            action=""
            method="POST"
            class="tm-bg-color-6 tm-contact-form"
          >
            <div class="form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Name"
                required=""
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email"
                required=""
              />
            </div>
            <div class="form-group">
              <textarea
                rows="4"
                name="message"
                class="form-control"
                placeholder="Message..."
                required=""
              ></textarea>
            </div>
            <div>
              <button type="submit" class="ml-auto tm-btn tm-btn-3">
                Send
              </button>
            </div>
          </form>
        </div>
        <div class="contact-info-outer">
          <div class="tm-bg-color-6 contact-info">
            <p>
              Pellentesque egestas odio sed tellus dictum, vel lobortis ante
              vehicula.
            </p>
            <p>Morbi eget accumsan libero, non tincidunt felis.</p>
            <p class="tm-mb-0">
              Tel: <a href="tel:0100200990">010-020-0990</a>
            </p>
            <p>
              Email: <a href="mailto:info@company.com">info@company.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer(){
  return (        <footer class="text-center tm-mb-1">
  <p>Copyright &copy; {Date.now}  </p>
</footer>);
}
