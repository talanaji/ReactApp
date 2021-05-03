/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import './fontawesome/css/all.min.css';
import './css/templatemo-comparto.css';
function Header(props) {
  return (
    <div class="tm-site-header tm-mb-1">
      <div class="tm-site-name-container tm-bg-color-1">
        <h1 class="tm-text-white">{props.name}</h1>
      </div>
      <div class="tm-nav-container tm-bg-color-8">
        <nav class="tm-nav" id="tm-nav">
          <ul >
            {console.log(menu)}
            {props.menu.map((menu_el)=><li key={menu_el.id} class="tm-nav-item current">
              <a href={`#`+menu_el.id} class="tm-nav-link"> 
                <span>{menu_el.title}</span>
              </a>
            </li>)}
           </ul>
        </nav>
      </div>
    </div>
  );
}

function Main() {
  return (
 <section class="tm-mb-1" id="about">
            <div class="tm-row tm-about-row">
            <div class="tm-section-1-l">
                     <img src="img/comparto-image-01.jpg" alt="About image" class="tm-img-responsive" />
                </div>
                <article class="tm-section-1-r tm-bg-color-8">
                    <h2 class="tm-mb-2 tm-title-color">.01 Comparto CSS Layout</h2>
                    <p><a rel="nofollow" href="https://templatemo.com/tm-544-comparto" target="_parent">Comparto</a> is a custom light-weight CSS layout for your website. You can easily adapt and use this for your commercial or personal websites. Feel free to use it.</p>
                    <p>You cannot redistribute this template ZIP file in any template collection website. Please <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> if you have any question.</p>
                    <p>Nunc sed gravida elit. Curabitur rutrum elit id lobortis viverra. Fusce at libero dui.</p>
                    
                    <a href="#services" class="tm-btn tm-btn-1 tm-link-to-services">More Detail</a>
                </article>
            </div>
        
    <div class="tm-bg-color-1 tm-mb-1 tm-row tm-social-row">
      <div class="tm-icon">
        <div class="tm-icon-inner">
          <a href="#services">
            <i class="fas fa-synagogue fa-4x tm-mb-1"></i>
            <p>Aenean vel est id massa condimentum</p>
          </a>
        </div>
      </div>
      <div class="tm-icon">
        <div class="tm-icon-inner">
          <a href="#gallery">
            <i class="fas fa-chart-bar fa-4x tm-mb-1"></i>
            <p>Suspendisse interdum lectus purus</p>
          </a>
        </div>
      </div>
      <div class="tm-icon">
        <div class="tm-icon-inner">
          <a href="#contact">
            <i class="fas fa-images fa-4x tm-mb-1"></i>
            <p>Nulla ac sodales est vel iaculis purus</p>
          </a>
        </div>
      </div>
    </div>

    </section>
  );
}

function Footer(props) {
  return (
    <footer class="text-center tm-mb-1">
      <p>Copyright &copy; {props.year} </p>
    </footer>
  );
}
const menu=[
  "About",
  "Services",
  "Gallery",
  "Contact" 
  
];
const menuObjects = menu.map((menu_el,i)=>({id:i, title:menu_el})); 
console.log(menuObjects);
function App() {
  return (
    <div className="App">
      <Header name="Comparto" menu={menuObjects} />
      <Main />
      <Footer year ={new Date().getFullYear()} />
    </div>
  );
}

export default App;
