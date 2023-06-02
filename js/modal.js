(() => {
    const refs = {
      openModalOilLink: document.querySelector("[data-modal-open-oil]"),
      openModalWatercolorLink: document.querySelector("[data-modal-open-watercolor]"),
      openModalDigitalLink: document.querySelector("[data-modal-open-digital]"),
      openModalMixLink: document.querySelector("[data-modal-open-mix]"),
      
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalOilLink.addEventListener("click", toggleModal);
    refs.openModalWatercolorLink.addEventListener("click", toggleModal);
    refs.openModalDigitalLink.addEventListener("click", toggleModal);
    refs.openModalMixLink.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();