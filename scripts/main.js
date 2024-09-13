(function () {
  const popup = document.querySelector(".popup");
  if (!popup) return null;

  const showPopup = document.querySelectorAll(".open-popup");
   if (!showPopup || showPopup.length === 0) return null;

  const hide_popup = document.querySelector(".close-popup");

  showPopup.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (!localStorage.getItem("isFormSubmit") && !sessionStorage.getItem("hide_popup")) { 
        popup.classList.add("popup-active");
      }
    });
  });

  hide_popup.addEventListener("click", () => {
    sessionStorage.setItem("hide_popup", 1);
    closePopup();
  });

  popup.addEventListener("click", (e) => {
    if (!e.target.closest(".popup_body")) {
      closePopup();
    }
  });

  onSubmitForm();

  function closePopup() {
    popup.classList.remove("popup-active");
  }

  function onSubmitForm() {
    const isLocalStorageBtn = document.querySelector(".btn");

    isLocalStorageBtn.addEventListener("click", (e) => {
      localStorage.setItem("isFormSubmit", 1);
      closePopup();
    });
  }
})();
