(() => {

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

    oil: document.querySelector("[hidden-watercolor]"),

    watercolor: document.querySelector("[hidden-oil]"),

    // review elements
    reviewButtonLink: document.querySelector(".review-send-button"),
    reviewInputLink: document.querySelector(".review-input"),
    reviewAreaLink: document.querySelector(".review-textarea"),

    // data and date
    timeElement: document.querySelector(".anima-time-text"),
    dateElement: document.querySelector(".anima-date-text"),
    yearElement: document.querySelector(".anima-year-text"),

    secondProgress: document.querySelector(".time-progress"),
  };
    
  //gallery container hidden
  refs.lockAboutOilLink.addEventListener("click", toggleGalleryOil);
  refs.lockAboutWatercolorLink.addEventListener("click", toggleGalleryWatercolor);
  //gallery container hidden
  refs.reviewButtonLink.addEventListener("click", reviewButtonIterr);
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
  setInterval (() => { 
  // Date and time
  let currentdate = new Date();
  let timedata = currentdate.getHours() + ":" + currentdate.getMinutes();
  let datedata = currentdate.getDay() + "/" + currentdate.getMonth();
  let yeardata = currentdate.getFullYear();

  refs.timeElement.textContent = timedata;
  refs.dateElement.textContent = datedata;
  refs.yearElement.textContent = yeardata;

  refs.secondProgress.style.background = `conic-gradient(var(--main-text-color) ${(360/60) * currentdate.getSeconds()}deg, rgba(255, 255, 255, 0.5) 0deg)`;
 
  }, 1000)

  function toggleModal() {
    refs.header.classList.toggle("is-hover");
    refs.nav.classList.toggle("is-border");
  }

  function toggleGalleryOil() {
      
    keysHidden.oil = true;
    refs.watercolor.classList.toggle("is-hidden");
  }

  function toggleGalleryWatercolor() {
    keysHidden.watercolor = true;
    refs.oil.classList.toggle("is-hidden");
  }

  function reviewButtonIterr(e){
    e.preventDefault();
    if(refs.reviewInputLink.value.length !== 0 && refs.reviewAreaLink.value.length !== 0) {
     
      return;
    }
    alert("I'm sorry. All fields must be filled!");
  }
})();