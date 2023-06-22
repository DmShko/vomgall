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

        imagesContainerList: document.getElementsByClassName('gallery-oil-link'),

        backdropImagesContainer: document.querySelector('.oil-modal-container'),

        nav: document.querySelector("[change-border]"),
    }

    refs.headerLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.headerLimkHoverFocus.addEventListener("mouseout", toggleModal);

    refs.addressLimkHoverFocus.addEventListener("mouseover", toggleModal);
    refs.addressLimkHoverFocus.addEventListener("mouseout", toggleModal);

    // Open image link event
    for(const element of refs.imagesContainerList) {
        // add event for each images link of list
        element.addEventListener("click", openGallModal);
        // console.log(element);
    }

    // Close image link event
    refs.imageClose.addEventListener("click", closeGallModal);

    function toggleModal() {
        refs.header.classList.toggle("is-hover");
        refs.nav.classList.toggle("is-border");
      }

    function openGallModal() {
        //open backdrop window
        refs.imageOpen.classList.toggle("is-oil-open");
        document.body.style.position = 'fixed';
      
        //delete previously created element 
        refs.backdropImagesContainer.removeChild(refs.backdropImagesContainer.lastChild);

        //create new element 
        let newElement = document.createElement("div");
        //add class to new element class-attribute 
        newElement.classList.add("backdrop-image-container");
        newElement.innerHTML = this.innerHTML;
        //add new element to backdrop window
        refs.backdropImagesContainer.append(newElement); 
        
        const elementFirstChild = newElement.children[0];
        elementFirstChild.classList.add("backdrop-img");  
        // console.log(refs.backdropImagesContainer);
    }

    function closeGallModal() {
        document.body.style.position = 'static';
        refs.imageOpen.classList.toggle("is-oil-open");
    }
})();