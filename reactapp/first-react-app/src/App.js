import './App.css';
function Header() {
  return (
    <div class="tm-site-header tm-mb-1">
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

function Main() {
  return (

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

  );
}

function Footer() {
  return (
    <footer class="text-center tm-mb-1">
      <p>Copyright &copy; 2020 </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
