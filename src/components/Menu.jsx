import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { service_2, service_3, event_1, event_2, event_3, about_banner } from '../data/imageAssets';

const categoryData = [
  { title: 'Breakfast', id: 'breakfast', desc: 'Start your mornings right with our wholesome South Indian and continental breakfast spreads.', img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776955706/9da44767-94a0-4e31-bbea-4b56ba6d8fec-md_xvl108.jpg' },
  { title: 'Vegetarian', id: 'vegetarian', desc: 'A gourmet celebration of vegetables, featuring rich gravies and garden-fresh textures.', img: 'https://t4.ftcdn.net/jpg/07/12/88/45/360_F_712884560_Yo8EBdcoAApSFKvIjt5ZMoaxhPFUMyOh.jpg' },
  { title: 'Beef', id: 'beef', desc: 'Savour the rich, succulent flavours of our premium aged beef cuts, slow-cooked to perfection.', img: 'https://www.shutterstock.com/image-photo/beef-fold-fork-ribs-bbq-600nw-2586598615.jpg' },
  { title: 'Chicken', id: 'chicken', desc: 'Tender, farm-fresh chicken prepared with aromatic spices and global techniques for a delightful bite.', img: 'https://www.shutterstock.com/image-photo/vibrant-mixed-grill-platter-showcasing-600nw-2704366123.jpg' },
  { title: 'Dessert', id: 'dessert', desc: 'Indulge in our artisanal sweets, from decadent chocolate lava cakes to traditional Hyderabadi delights.', img: 'https://images.indianexpress.com/2024/05/ice-cream-balls-with-cookies.jpg' },
  { title: 'Goat', id: 'goat', desc: 'Authentic Nizami-style goat meat, marinated overnight and cooked in traditional handis for ultimate tenderness.', img: 'https://media.istockphoto.com/id/2185257273/photo/indian-curry-tikka-masala-chicken-lamb-mutton-rogan-josh-with-rice-and-naan-bread-dark.jpg?s=612x612&w=0&k=20&c=-yHrDXUjpBv0RkD8hP2IQbiW-RNE8L1sQCpv-l09yAA=' },
  { title: 'Lamb', id: 'lamb', desc: 'Exquisite lamb specialities infused with saffron and rare herbs, celebrating the legacy of Royal kitchens.', img: 'https://www.foodandwine.com/thmb/Ra8z1EC4ybi_uyCvLKhFm4LTE5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-rack-of-lamb-with-demi-glace-butter-FT-RECIPE0820-1cffa88ca61040018d2e48afa75747a6.jpg' },
  { title: 'Miscellaneous', id: 'miscellaneous', desc: 'A collection of unique, seasonal delicacies and chef-curated surprises from around the globe.', img: 'https://media.istockphoto.com/id/665380564/photo/brunch-choice-crowd-dining-food-options-eating-concept.jpg?s=612x612&w=0&k=20&c=tmgKmbVIDTGY1LC8ATnCQtuMPJoySbZ_HAJETS2jv2E=' },
  { title: 'Pasta', id: 'pasta', desc: 'Hand-crafted Italian pasta tossed in rich, home-made sauces with fresh basil and premium cheeses.', img: 'https://media.istockphoto.com/id/1126090038/photo/collage-of-various-pasta-dishes.jpg?s=612x612&w=0&k=20&c=42f5Iz9BBv-VlblBHV0HdNw6lSM7Us2u8Z75ZMKo318=' },
  { title: 'Pork', id: 'pork', desc: 'Succulent pork selections, glazed with honey and spice, providing a perfect balance of sweet and savoury.', img: 'https://static.vecteezy.com/system/resources/thumbnails/043/114/247/small/lemongrass-pork-neck-with-chilli-sauce-served-in-dish-isolated-of-table-top-view-fast-food-snacks-photo.JPG' },
  { title: 'Seafood', id: 'seafood', desc: 'Freshly caught treasures from the ocean, grilled or pan-seared to preserve their delicate, natural flavours.', img: 'https://media.istockphoto.com/id/1305699663/photo/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-squid-on-white-plate.jpg?s=612x612&w=0&k=20&c=iEwdxon7CJ0wQEDy8-kwnz7TLdknVw05vaa-Qc_aHow=' },
  { title: 'Appetizers', id: 'appetizers', desc: 'From crispy kebabs to tangy chaats — our starters set the perfect tone for an indulgent meal.', img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776956563/a94f3d20-5189-4dec-8606-a26ca4cdd2f1_xsd3s1.png' },
  { title: 'Drinks', id: 'drinks', desc: 'Sip on freshly blended mocktails, lassis, and premium beverages curated to refresh you.', img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776956791/4533f494-9f56-4107-961a-22651c9cddd8-md_gt3ems.jpg' },
  { title: 'Side', id: 'side', desc: 'The perfect accompaniments, from truffle fries to garlic naans, designed to elevate your main course.', img: 'https://media.istockphoto.com/id/917395924/photo/vegan-veggies-meals-on-dinning-table-flat-lay-detox-dieting-food-concept.jpg?s=612x612&w=0&k=20&c=ButRPurwsnwDkbC5KXb3JM6jcSawWmcqOuJDx-d-YS0=' },
  { title: 'Vegan', id: 'vegan', desc: 'Vibrant, plant-based creations that never compromise on flavour, using the freshest organic produce.', img: 'https://media.istockphoto.com/id/2150471415/photo/vegan-buddha-bowl-for-balanced-diet-with-tofu-quinoa-vegetables-and-legumes-wooden-table.jpg?s=612x612&w=0&k=20&c=ZUQbh9AZLg9GvlqpbLf50gegsG6qu2hZU6TyyjbRZ7M=' }
];

const Menu = () => {
  return (
    <section className="section menu bg-black-10 text-center" aria-label="menu" id="menu">
      <div className="container">
        <p className="section-subtitle label-2">Flavours For Royalty</p>
        <h2 className="headline-1 section-title">Our Delicious Menu</h2>
        <p className="section-text">
          Explore our wide range of categories, each offering a curated selection of the finest international dishes.
        </p>

        <ul className="grid-list">
          {categoryData.map((item, index) => {
            const catId = item.id.toLowerCase();

            return (
              <li key={index}>
                <div className="service-card">
                  <Link to={`/categories/${encodeURIComponent(catId)}`} className="has-before hover:shine">
                    <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                      <img
                        src={item.img}
                        width="285"
                        height="336"
                        loading="lazy"
                        alt={item.title}
                        className="img-cover service-img"
                      />
                    </figure>
                  </Link>

                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <Link to={`/categories/${encodeURIComponent(catId)}`}>{item.title}</Link>
                    </h3>
                    <p className="service-card-desc">{item.desc}</p>
                    <Link
                      to={`/categories/${encodeURIComponent(catId)}`}
                      className="btn-text hover-underline label-2"
                    >
                      ☰ VIEW MENU
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};

export default Menu;
