import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ctn">
        {/* Menu */}
        <div className="container">
          <div className="menu-area">
            <nav className="menu-content">
              <ul>
                <li>
                  <a className="link" href="#home" title="Home">Home</a>
                </li>
                <li>
                  <a className="link" href="#introductory" title="Introductory">Introductory</a>
                </li>
                <li>
                  <a className="link" href="#buy" title="Buy">Buy</a>
                </li>
                <li>
                  <a className="link" href="#detail" title="Detail">Detail</a>
                </li>
                <li>
                  <a className="link" href="#services-provide" title="Services Provide">Services Provide</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Header */}
        <div className="header" id="home">
          <div className="slider-text-box">
            <p className="paragraph paragraph-1">
              Quality Cake ... <br /> with sweet, eggs &amp; breads
            </p>
            <p className="paragraph paragraph-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit <br />
              aut fugit quia consequuntur magni dolores eos qui ratione
            </p>
          </div>
        </div>
        {/* Body Welcome */}
        <div className="welcome_bakery_area" id="introductory">
          <div className="body-welcome">
            <div className="welcome-text">
              <div className="text-1">
                <h2>Welcome to our Bakery</h2>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur uis autem vel eum.
                </p>
              </div>
              <div className="text-2">
                <p>
                  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                  To take a trivial example, which of us ever undertakes laborious physical exercise.
                </p>
              </div>
            </div>
            <div className="welcome-image">
              <img src="./welcome-right.jpg" alt="girl-and-cakes" />
            </div>
          </div>
          <hr className="unline" />
          {/* Các thẻ bánh */}
          <div className="welcome-bakery-buy" id="buy">
            <div className="main-title">
              <p className="title-1"> Our Featured Cakes</p>
              <p className="title-2"> Seldolor sit amet consect etur</p>
            </div>
            {/* list item */}
            <div className="cake_feature_slider owl-carousel">
              <div className="item">
                <div className="cake-feature-item">
                  <div className="cake-img">
                    <img src="./c-feature-1.jpg" alt="" />
                  </div>
                  <div className="cake-text">
                    <h4 className="money">$29</h4>
                    <h3 className="cake-name">Strawberry Cupcakes</h3>
                    <a className="pest-btn" href="#">Add to cart</a>
                  </div>
                </div>
                <div className="cake-feature-item">
                  <div className="cake-img">
                    <img src="./c-feature-2.jpg" alt="" />
                  </div>
                  <div className="cake-text">
                    <h4 className="money">$30</h4>
                    <h3 className="cake-name">Strawberry Cupcakes</h3>
                    <a className="pest-btn" href="#">Add to cart</a>
                  </div>
                </div>
                <div className="cake-feature-item">
                  <div className="cake-img">
                    <img src="./c-feature-3.jpg" alt="" />
                  </div>
                  <div className="cake-text">
                    <h4 className="money">$35</h4>
                    <h3 className="cake-name">Strawberry Cupcakes</h3>
                    <a className="pest-btn" href="#">Add to cart</a>
                  </div>
                </div>
                <div className="cake-feature-item">
                  <div className="cake-img">
                    <img src="./c-feature-4.jpg" alt="" />
                  </div>
                  <div className="cake-text">
                    <h4 className="money">$29</h4>
                    <h3 className="cake-name">Strawberry Cupcakes</h3>
                    <a className="pest-btn" href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review cake */}
        <div className="cake-review" id="detail">
          <div className="cake-review-img">
            <img src="./recipe-1.png" alt="" />
          </div>
          <div className="cake-review-text">
            <h4>Special Recipe</h4>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi equatur uis autem vel eum.
            </p>
            <a className="pink-btn" href="#">View Details</a>
          </div>
        </div>
        {/* main services */}
        <div className="main-services" id="services-provide">
          <div className="main-content">
            <p className="main-services-text">Main Services We Provide</p>
            <hr className="HR" />
            <div className="main-container">
              <div className="main-content-cake">
                <img src="./baker.png" alt="" />
                <h4 className="CC4">Celebration Cakes</h4>
                <p>Duis aute irure dolor in reprehenderit in <br /> volup tate velit esse cillum dolore.</p>
              </div>
              <div className="main-content-cake">
                <img src="./baker_2.png" alt="" />
                <h4 className="CC4">Celebration Cakes</h4>
                <p>Duis aute irure dolor in reprehenderit in <br /> volup tate velit esse cillum dolore.</p>
              </div>
              <div className="main-content-cake">
                <img src="./baker_3.png" alt="" />
                <h4 className="CC4">Celebration Cakes</h4>
                <p>Duis aute irure dolor in reprehenderit in <br /> volup tate velit esse cillum dolore.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
