import {keysHidden} from './main.js';

(() => {

    const gall = {
        oil: document.querySelector("[hidden-watercolor]"),
        watercolor: document.querySelector("[hidden-oil]"),
    };

    if(keysHidden.oil === true) {
        gall.oil.classList.toggle("is-hidden");
    }

})();