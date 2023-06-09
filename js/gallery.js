(() => {
    const refs = {
        headerLimkHoverFocus: document.querySelector("[hover-focus]"),

        addressLimkHoverFocus: document.querySelector("[address-focus]"),

        header: document.querySelector("[change-color]"),
        
        nav: document.querySelector("[change-border]"),
    }

    refs.headerLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.headerLimkHoverFocus.addEventListener("mouseout", toggleModal);

    refs.addressLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.addressLimkHoverFocus.addEventListener("mouseout", toggleModal);

    function toggleModal() {
        refs.header.classList.toggle("is-hover");
        refs.nav.classList.toggle("is-border");
      }
})();