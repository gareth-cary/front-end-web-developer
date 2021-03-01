// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import "bootstrap";

import { loadDynamicBannerText } from '../components/banner';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  // [...]
  if (document.getElementById("banner-typed-text")) {
  loadDynamicBannerText();
    }
});

window.addEventListener('DOMContentLoaded', (event) => {

tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "#f6f5f5"
  },
  backgroundMode: {
    enable: true
  },
  particles: {
    color: {
      value: ["#f6f5f5", "#f6f5f5", "#f6f5f5"]
    },
    links: {
      color: "#f6f5f5",
      enable: true
    },

    move: {
      enable: true,
      speed: 2
    },
    number: {
      value: 200
    },
    size: {
      value: 1,
      random: {
        enable: true,
        minimumValue: 1
      },
      animation: {
        enable: true,
        speed: 1.5,
        minimumValue: 1
      }
    },
    opacity: {
      value: 0.9,
      random: {
        enable: true,
        minimumValue: 0.4
      }
    }
  }
});
});
//= require particles.min
