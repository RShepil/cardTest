const MAX_ITEMS = 4;

const itemButtons = document.querySelectorAll(".button");
let currentItemsNumber = 0;

function updateButtonsState() {
  if (currentItemsNumber >= MAX_ITEMS) {
    itemButtons.forEach((item) => {
      if (!item.classList.contains("button--active")) {
        item.setAttribute("disabled", "");
      }
    });
  } else {
    itemButtons.forEach((item) => {
      item.removeAttribute("disabled");
    });
  }
}

function onButtonClick(i) {
  return () => {
    const button = itemButtons[i];

    if (button.classList.contains("button--active")) {
      button.classList.remove("button--active");
      currentItemsNumber--;
    } else {
      if (currentItemsNumber < MAX_ITEMS) {
        button.classList.add("button--active");
        currentItemsNumber++;
      } else {
        return;
      }
    }

    updateButtonsState();
  };
}

for (let i = 0; i < itemButtons.length; i++) {
  itemButtons[i].addEventListener("click", onButtonClick(i));
}
