import React from "react";
import "./style.css";

import ROUTES from "../../../utils/ROUTES";
import { Link } from "react-router-dom";

import Button from "../../misc/Button/Button";
import ImgNextGen from "../../misc/ImgNextGen/ImgNextGen";
import Tag from "../../misc/Tag/Tag";

const Hero = () => {
  return (
    <section className="hero" id="info">
      <div className="hero__content">
        <h1 className="hero__title title">Growing Beautiful Plants at Home</h1>
        <p className="hero__text">
          If&nbsp;you&rsquo;re looking for a&nbsp;special way to&nbsp;show
          appreciation or&nbsp;to&nbsp;enhance your living space, explore the
          flower and plant range at&nbsp;Plant for ideas. Discover an&nbsp;array
          of&nbsp;high-quality indoor plants that are great gifts for those who
          love gardening
        </p>

        <Link to={ROUTES.aboutUs}>
          <Button className="hero__link" variant="span">
            More About Us
          </Button>
        </Link>
        <dl className="hero__achievements">
          <div className="hero__achievements-container">
            <dt>Delivery</dt>
            <dd>2000+</dd>
          </div>
          <div className="hero__achievements-container">
            <dt>Customers</dt>
            <dd>1200+</dd>
          </div>
          <div className="hero__achievements-container">
            <dt>Product</dt>
            <dd>1000+</dd>
          </div>
        </dl>
        <img
          className="hero__decoration"
          src={process.env.PUBLIC_URL + "/images/decoration/leaf.png"}
          width="157"
          height="193"
          alt="."
          aria-hidden="true"
          style={{ filter: "grayscale(33%)" }}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image-wrapper">
          <ImgNextGen
            srcWebpX2="/images/decoration/hero@2x.webp"
            srcWebp="/images/decoration/hero.webp"
            srcJpgX2="/images/decoration/hero@2x.png"
            fallback="/images/decoration/hero.png"
            alt="Pretty succulent plant macro photo."
            width="557"
            height="719"
          />
        </div>
        <Tag
          className="hero__tag"
          title="Cactus stem"
          content="The cactus stem is the thick, fleshy, and spiny part of a cactus plant. It stores water, nutrients, and helps the plant survive in arid environments."
          rtl={false}
          posX="-42"
          posY="175"
          width="95"
        />
        <Tag
          className="hero__tag"
          title="Cactus Thorn"
          content="The cactus thorn is a sharp structure that protects the plant from animals and reduces water loss."
          rtl={true}
          posX="-47"
          posY="78"
          width="105"
        />
        <Tag
          className="hero__tag"
          title="Plant Media"
          content="Plant media, or growing media, supports and nourishes plants in containers. It provides physical support, nutrients, and water retention for the roots. Different materials like soil, peat moss, coco coir, and perlite can be used. The choice depends on the plants' needs and desired drainage."
          rtl={true}
          posX="-35"
          posY="557"
          width="64"
        />
      </div>
    </section>
  );
};

export default Hero;
