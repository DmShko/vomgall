(() => {
    const refs = {
        headerLimkHoverFocus: document.querySelector("[hover-focus]"),

        addressLimkHoverFocus: document.querySelector("[address-focus]"),

        header: document.querySelector("[change-color]"),
        
        nav: document.querySelector("[change-border]"),

        // Open image
        imageLimkClick: document.querySelector("[oil-click-images]"),
        imageOpen: document.querySelector("[oil-open-images]"),

        imageClose: document.querySelector("[oil-images-modal-close]"),

        nav: document.querySelector("[change-border]"),
    }

    refs.headerLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.headerLimkHoverFocus.addEventListener("mouseout", toggleModal);

    refs.addressLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.addressLimkHoverFocus.addEventListener("mouseout", toggleModal);

    // Open image link event
    refs.imageLimkClick.addEventListener("click", openGallModal);

    // Close image link event
    refs.imageClose.addEventListener("click", closeGallModal);

    function toggleModal() {
        refs.header.classList.toggle("is-hover");
        refs.nav.classList.toggle("is-border");
      }

    function openGallModal() {
        refs.imageOpen.classList.toggle("is-oil-open");
    }

    function closeGallModal() {
        refs.imageOpen.classList.toggle("is-oil-open");
    }
})();