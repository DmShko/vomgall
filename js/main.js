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
    reviewText: document.querySelector(".review-text"),
    // data and date
    timeElement: document.querySelector(".anima-time-text"),
    dateElement: document.querySelector(".anima-date-text"),
    yearElement: document.querySelector(".anima-year-text"),

    secondProgress: document.querySelector(".time-progress"),

    // up button
    upButton: document.querySelector(".index-up"),
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
 
  const dateHours = currentdate.getHours().toString().length === 1 ? "0" + currentdate.getHours().toString() : currentdate.getHours().toString();
  const dateMinutes = currentdate.getMinutes().toString().length === 1 ? "0" + currentdate.getMinutes().toString() : currentdate.getMinutes().toString();

  // get date
  const dateDay = currentdate.getDate().toString().length === 1 ? "0" + currentdate.getDate().toString() : currentdate.getDate().toString();
  const dateMonth = currentdate.getMonth().toString().length === 1 ? "0" + (currentdate.getMonth() + 1).toString() : (currentdate.getMonth() + 1).toString();
  
  const timedata = dateHours + ":" + dateMinutes;
  const datedata = dateDay + "/" + dateMonth;
  const yeardata = currentdate.getFullYear();

  // output
  refs.timeElement.textContent = timedata;
  refs.dateElement.textContent = datedata;
  refs.yearElement.textContent = yeardata;

  refs.secondProgress.style.background = `conic-gradient(var(--main-text-color) ${(360/60) * currentdate.getSeconds()}deg, rgba(255, 255, 255, 0.5) 0deg)`;
 
  }, 1000)

  refs.upButton.addEventListener("click", function goUP() {
    window.scrollTo(0,0);
  });

  // upButton
  let up = function () {
      if (window.scrollY > 200) 
          refs.upButton.classList.add("onUpButton"); 
      else 
          refs.upButton.classList.remove("onUpButton"); 
  };

  window.addEventListener("scroll", up);

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

  // generate <p> text content with wrap to new line
  function generateWrapTextContent () {
    // quantity symbols of textarea text
    let iterationsQuantity = refs.reviewAreaLink.value.length / 100;
    // separat int parh of "iterationsQuantity"
    const iterationsIntQuantity = Math.floor(iterationsQuantity);
    // separat fraction parh of "iterationsQuantity"
    const iterationsFractionQuantity = iterationsQuantity - iterationsIntQuantity;

    let resultMainArr = ["<" ,"b" , "r", ">"];
    let resultFractionArr = ["<" ,"b" , "r", ">"];

    // add first element because he will be cute skipped below
    resultMainArr.push(refs.reviewAreaLink.value[0]);

    // check that area text length placed on the line "review-text" once or more
    if(iterationsIntQuantity > 0) { 
      for(let iter = 0; iter < iterationsIntQuantity; iter += 1) {
        // create main text
        resultMainArr.push(...refs.reviewAreaLink.value.split("").slice(iter * 100 + 1, (iter + 1) * 100 + 1).concat(["<" ,"b" , "r", ">"]));
        // when main text created, add fraction text
        if(iter === iterationsIntQuantity - 1) {
          resultFractionArr.push(...refs.reviewAreaLink.value.split("").slice((iter + 1) * 100 + 1, refs.reviewAreaLink.value.length));
        }
      }
      // return finish result
       return resultMainArr.concat(resultFractionArr).join("");
    }

    // if area text length isn't placed on the line "review-text" once or more
    resultMainArr.pop(refs.reviewAreaLink.value[0]);
    resultMainArr.push(...refs.reviewAreaLink.value.split(""));
    return resultMainArr.concat(resultFractionArr).join("");
  }

  // Press button event
  function reviewButtonIterr(e){
    e.preventDefault();
    if(refs.reviewInputLink.value.length !== 0 && refs.reviewAreaLink.value.length !== 0) {
      // variable with wrap text
      // let textWrap = generateWrapTextContent();
      // console.log(refs.reviewInputLink.value);
      let newTextElement = document.createElement("p");
      
      refs.reviewText.appendChild(newTextElement);
      newTextElement.classList.add(refs.reviewInputLink.value);

      newTextElement.style.color = "black";
      newTextElement.innerHTML = `${refs.reviewInputLink.value.split("").concat([":", "<" ,"b" , "r", ">"]).join("")} ${refs.reviewAreaLink.value}`;

      refs.reviewInputLink.value = "";
      refs.reviewAreaLink.value = "";
      return;
    }
    alert("I'm sorry. All fields must be filled!");
  }
})();