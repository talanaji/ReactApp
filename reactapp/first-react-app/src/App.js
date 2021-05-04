/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "./fontawesome/css/all.min.css";
import "./css/templatemo-comparto.css";
import img from "./img/comparto-image-01.jpg";
import React, { useState, useEffect } from "react";
function Header(props) {
  return (
    <div className="tm-site-header tm-mb-1">
      <div className="tm-site-name-container tm-bg-color-1">
        <h1 className="tm-text-white">{props.name}</h1>
      </div>
      <div className="tm-nav-container tm-bg-color-8">
        <nav className="tm-nav" id="tm-nav">
          <ul>
            {console.log(menu)}
            {props.menu.map((menu_el) => (
              <li key={menu_el.id} className="tm-nav-item current">
                <a href={`#` + menu_el.id} className="tm-nav-link">
                  <span>{menu_el.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Main() {
  return (
    <section className="tm-mb-1" id="about">
      <div className="tm-row tm-about-row">
        <div className="tm-section-1-l">
          <img src={img} alt="" />
        </div>
        <article className="tm-section-1-r tm-bg-color-8">
          <h2 className="tm-mb-2 tm-title-color">.01 Comparto CSS Layout</h2>
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

          <a href="#services" className="tm-btn tm-btn-1 tm-link-to-services">
            More Detail
          </a>
        </article>
      </div>

      <div className="tm-bg-color-1 tm-mb-1 tm-row tm-social-row">
        <div className="tm-icon">
          <div className="tm-icon-inner">
            <a href="#services">
              <i className="fas fa-synagogue fa-4x tm-mb-1"></i>
              <p>Aenean vel est id massa condimentum</p>
            </a>
          </div>
        </div>
        <div className="tm-icon">
          <div className="tm-icon-inner">
            <a href="#gallery">
              <i className="fas fa-chart-bar fa-4x tm-mb-1"></i>
              <p>Suspendisse interdum lectus purus</p>
            </a>
          </div>
        </div>
        <div className="tm-icon">
          <div className="tm-icon-inner">
            <a href="#contact">
              <i className="fas fa-images fa-4x tm-mb-1"></i>
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
    <footer className="text-center tm-mb-1">
      <p>Copyright &copy; {props.year} </p>
    </footer>
  );
}
const menu = ["About", "Services", "Gallery", "Contact"];
const menuObjects = menu.map((menu_el, i) => ({ id: i, title: menu_el }));
console.log(menuObjects);

function SecretComp() {
  return <h1>Secret Info </h1>;
}
function RegularComp() {
  return <h1>public Info </h1>;
}

function App(/*props*/) {
  const [emotion, setEmotion] = useState("happy");
  const [second, setSecond] = useState("tired");

  useEffect(()=>{
    console.log(`It's ${emotion}`);
  },[emotion]);
  useEffect(()=>{
    console.log(`It's ${second}`);
  });
  return (
    <>
      <h1>Currect state is {emotion} & {second}</h1>
      <button onClick={() => setSecond("crabby")}>crabby</button>
      <button onClick={() => setEmotion("happy")}>happy</button>
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("angry")}>angry</button>
    </>
  );

  //return (<>{props.authorized? <SecretComp/>:<RegularComp/>}</>);
  /*
  if(props.authorized)
  return <SecretComp/>
  else 
  return <RegularComp/>*/
  /*return (

    <SecretComp>
      <Header name="Comparto" menu={menuObjects} />
      <Main />
      <Footer year ={new Date().getFullYear()} />
    </SecretComp>
  );*/
}

export default App;
