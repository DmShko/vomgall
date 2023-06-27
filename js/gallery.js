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
        // Open image

        //Change image
        imagesToggleLeft: document.querySelector("[oil-changeImages-left]"),
        imagesToggleRight: document.querySelector("[oil-changeImages-right]"),
        imageInner: 0,
        //Change image

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

    // press left modal button
    refs.imagesToggleLeft.addEventListener("click", leftRightImages);

    // press right modal button
    refs.imagesToggleRight.addEventListener("click", leftRightImages)

    function toggleModal() {
        refs.header.classList.toggle("is-hover");
        refs.nav.classList.toggle("is-border");
    }

    // New element manager
    function createHtmlElement (data) {
        // delete previously created element 
        refs.backdropImagesContainer.removeChild(refs.backdropImagesContainer.lastChild);
       
        data.classList.add("main");

        //create new element 
        let newElement = document.createElement("div");
        //add class to new element class-attribute 
        newElement.classList.add("backdrop-image-container");
        newElement.innerHTML = data.innerHTML;
       
        //add new element to backdrop window
        refs.backdropImagesContainer.append(newElement);
        
        return newElement;
    }

    function openGallModal() {
        //open backdrop window
        refs.imageOpen.classList.toggle("is-oil-open");
        document.body.style.position = 'fixed';
      
        let nel = createHtmlElement(this);
        
        const elementFirstChild = nel.children[0];
        elementFirstChild.classList.add("backdrop-img");  
        // console.log(refs.backdropImagesContainer);
    }

    function closeGallModal() {
        document.body.style.position = 'static';
        refs.imageOpen.classList.toggle("is-oil-open");
    }

    //Change image in modal (left or right)
    function leftRightImages() {
       const newElementChange = document.querySelector('.backdrop-image-container');
       // console.log(newElementChange.innerHTML);
       if(this === refs.imagesToggleLeft) {
           for(let elLeft = 0; elLeft < refs.imagesContainerList.length; elLeft += 1) {
               // console.log("Right is true!");
               if(refs.imagesContainerList[elLeft].classList.contains('main') && elLeft !== 0) {
                   newElementChange.innerHTML = refs.imagesContainerList[elLeft - 1].innerHTML;
                   newElementChange.firstElementChild.classList.add("backdrop-img"); 
                   refs.imagesContainerList[elLeft].classList.remove('main');
                   refs.imagesContainerList[elLeft - 1].classList.add('main');
                   break;
               }
           }
       } else {
            for(let elRight = 0; elRight < refs.imagesContainerList.length; elRight += 1) {
                 // console.log("Right is true!");
                if(refs.imagesContainerList[elRight].classList.contains('main') && elRight !== refs.imagesContainerList.length -1) {
                    newElementChange.innerHTML = refs.imagesContainerList[elRight + 1].innerHTML;
                    newElementChange.firstElementChild.classList.add("backdrop-img"); 
                    refs.imagesContainerList[elRight].classList.remove('main');
                    refs.imagesContainerList[elRight + 1].classList.add('main');
                    break;
                }
            }
            console.log(refs.backdropImagesContainer);
        }
    }   
})();