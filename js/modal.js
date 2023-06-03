(() => {
    const refs = {
      openModalAboutLink: document.querySelector("[data-modal-about-open]"),
      openModalComtactsLink: document.querySelector("[data-modal-contacts-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalAboutLink.addEventListener("click", toggleModal);
    refs.openModalComtactsLink.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();