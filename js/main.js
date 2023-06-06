export {keysHidden};

(() => {

    let keysHidden = {
      oil: false,
      watercolor: false,
    }

    const refs = {
      headerLimkHoverFocus: document.querySelector("[hover-focus]"),
      oilLimkHoverFocus: document.querySelector("[oil-focus]"),
      watercolorLimkHoverFocus: document.querySelector("[watercolor-focus]"),
      digitalLimkHoverFocus: document.querySelector("[digital-focus]"),
      mixLimkHoverFocus: document.querySelector("[mix-focus]"),
      
      //gallery container hidden
      lockAboutOilLink: document.querySelector("[lock-about-oil]"),
      lockAboutWatercolorLink: document.querySelector("[lock-about-watercolor]"),
       //gallery container hidden

      aboutLimkHoverFocus: document.querySelector("[about-focus]"),
      contactsLimkHoverFocus: document.querySelector("[contacts-focus]"),

      addressLimkHoverFocus: document.querySelector("[address-focus]"),

      menuButtonLimkHoverFocus: document.querySelector("[menu-button-focus]"),

      header: document.querySelector("[change-color]"),

      nav: document.querySelector("[change-border]"),
    };
  
    //gallery container hidden
    refs.lockAboutOilLink.addEventListener("click", toggleGalleryOil);
    refs.lockAboutWatercolorLink.addEventListener("click", toggleGalleryWatercolor);
    //gallery container hidden

    refs.headerLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.headerLimkHoverFocus.addEventListener("mouseout", toggleModal);
    refs.oilLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.oilLimkHoverFocus.addEventListener("mouseout", toggleModal);
    refs.watercolorLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.watercolorLimkHoverFocus.addEventListener("mouseout", toggleModal);
    refs.digitalLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.digitalLimkHoverFocus.addEventListener("mouseout", toggleModal);
    refs.mixLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.mixLimkHoverFocus.addEventListener("mouseout", toggleModal);

    refs.aboutLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.aboutLimkHoverFocus.addEventListener("mouseout", toggleModal);
    refs.contactsLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.contactsLimkHoverFocus.addEventListener("mouseout", toggleModal);


    refs.addressLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.addressLimkHoverFocus.addEventListener("mouseout", toggleModal);

    refs.menuButtonLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.menuButtonLimkHoverFocus.addEventListener("mouseout", toggleModal);
  
    function toggleModal() {
      refs.header.classList.toggle("is-hover");
      refs.nav.classList.toggle("is-border");
    }

    function toggleGalleryOil() {
      
      keysHidden.oil = true;
      // refs.watercolor.classList.toggle("is-hidden");
    }

    function toggleGalleryWatercolor() {
      keysHidden.watercolor = true;
      // refs.oil.classList.toggle("is-hidden");
    }

  })();