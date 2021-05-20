import React from "react";

function Project(props) {
  return (
    <>
      <div id="portfolio" class="cx gray">
        <div className="db">
          <div className="b e">
            <div className="d hx hf gu gallery-item gallery-expand ce polygon">
              <div className="gallery-curve-wrapper">
                <a className="gallery-cover gray">
                  <img
                    className="responsive-img"
                    src="https://cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-aquamarine.jpg?v=6672170126572450214"
                    alt="placeholder"
                    crossorigin="anonymous"
                  />
                </a>
                <div className="gallery-header">
                  <span>{props.project.title}</span>
                </div>
                <div className="gallery-body">
                  <div className="title-wrapper">
                    <h3>{props.project.title}</h3>
                  </div>
                  <p className="fi">
                    Literally venmo before they sold out, DIY heirloom forage
                    polaroid offal yr pop-up selfies health goth. Typewriter
                    scenester hammock truffaut meditation, squid before they
                    sold out polaroid portland tousled taxidermy vice. Listicle
                    butcher thundercats, taxidermy pitchfork next level roof
                    party crucifix narwhal kinfolk you probably haven't heard of
                    them portland small batch.
                  </p>
                  <p className="fi">
                    Ea salvia adipisicing vegan man bun. Flexitarian cupidatat
                    skateboard flannel. Drinking vinegar marfa you probably
                    haven't heard of them consequat post-ironic, shabby chic
                    williamsburg raclette vaporware readymade selfies brunch.
                    Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon,
                    proident elit raclette chambray consequat edison bulb four
                    loko accusamus. Semiotics godard eiusmod, ex esse air plant
                    quinoa vaporware selfies keytar. Actually yuccie ennui
                    flannel single-origin coffee, williamsburg cardigan banjo
                    forage pug distillery tumblr hexagon vinyl occaecat.
                  </p>

                  <div className="carousel-wrapper">
                    <div className="t carousel">
                      <a className="carousel-item" href="#one!">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-sun.jpg?v=5328726480767926026"
                          crossorigin="anonymous"
                          alt="screenshot"
                        />
                      </a>
                      <a className="carousel-item" href="#two!">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-maze.jpg?v=14238163633299520814"
                          crossorigin="anonymous"
                          alt="screenshot"
                        />
                      </a>
                      <a className="carousel-item" href="#three!">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-ice.jpg?v=10474404842800237238"
                          crossorigin="anonymous"
                          alt="screenshot"
                        />
                      </a>
                      <a className="carousel-item" href="#four!">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-cave.jpg?v=13127282243134125143"
                          crossorigin="anonymous"
                          alt="screenshot"
                        />
                      </a>
                      <a className="carousel-item" href="#five!">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1775/8583/t/1/assets/geometric-grapefruit.jpg?v=4070483676604165442"
                          crossorigin="anonymous"
                          alt="screenshot"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-action">
                <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">favorite</i></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;