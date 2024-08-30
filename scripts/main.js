(function () {
  const popup = document.querySelector(".popup");
  const openPopupButtons = document.querySelectorAll(".open-popup");
  const closePopupButton = document.querySelector(".close-popup");

  openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (!localStorage.getItem("isLocalStorageBtnStorage") && !sessionStorage.getItem("closePopupButton")) 
        { popup.classList.add("popup-active");
      }
    });
  });

  closePopupButton.addEventListener("click", () => {
    sessionStorage.setItem("closePopupButton", 1);
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
      localStorage.setItem("isLocalStorageBtnStorage", 1);
      closePopup();
    });
  }
})();
