(() => {
    const refs = {
      openModalAboutLink: document.querySelector("[data-modal-about-open]"),
      openModalComtactsLink: document.querySelector("[data-modal-contacts-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      modalContentAbout: document.querySelector("[about-content-is-hidden]"),
      modalContentContacts: document.querySelector("[contacts-content-is-hidden]"),
    };
  
    refs.openModalAboutLink.addEventListener("click", toggleModalAbout);
    refs.openModalComtactsLink.addEventListener("click", toggleModalContacts);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");

      if(!refs.modalContentAbout.classList.contains("is-about")) {
        refs.modalContentAbout.classList.toggle("is-about");
      }
      if(!refs.modalContentContacts.classList.contains("is-contacts")) {
        refs.modalContentContacts.classList.toggle("is-contacts");
      }
    }

    function toggleModalAbout() {
      refs.modal.classList.toggle("is-hidden");
      refs.modalContentAbout.classList.toggle("is-about");
    }

    function toggleModalContacts() {
      refs.modal.classList.toggle("is-hidden");
      refs.modalContentContacts.classList.toggle("is-contacts");
    }
  })();