(() => {
    const refs = {
      headerLimkHoverFocus: document.querySelector("[hover-focus]"),
      oilLimkHoverFocus: document.querySelector("[oil-focus]"),
      watercolorLimkHoverFocus: document.querySelector("[watercolor-focus]"),
      digitalLimkHoverFocus: document.querySelector("[digital-focus]"),
      mixLimkHoverFocus: document.querySelector("[mix-focus]"),

      aboutLimkHoverFocus: document.querySelector("[about-focus]"),
      contactsLimkHoverFocus: document.querySelector("[contacts-focus]"),

      addressLimkHoverFocus: document.querySelector("[address-focus]"),

      header: document.querySelector("[change-color]"),

      nav: document.querySelector("[change-border]"),
    };
  
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
  
    function toggleModal() {
      refs.header.classList.toggle("is-hover");
      refs.nav.classList.toggle("is-border");
      // document.getElementById("demo").style.backgroundColor = "green";
    }
  })();