const dropDown = document.querySelector(".drop-down");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("opened");
});

function create(element) {
  return document.createElement(element);
}

const root = document.querySelector("#root");

function ButtonMaker(textContent, linkLocation) {
  const buttonLink = create("a");
  const buttonContainer = create("div");
  const stepParent = create("div");
  const spanOne = create("span");
  const spanTwo = create("span");
  const spanThree = create("span");
  const spanFour = create("span");
  const button = create("div");
  const text = create("div");

  buttonLink.classList.add("button-link");
  buttonContainer.classList.add("button-container");
  stepParent.classList.add("span-parent");
  button.classList.add("button-filter");
  text.classList.add("button-text");

  buttonLink.href = linkLocation;
  text.textContent = textContent;

  buttonLink.appendChild(buttonContainer);
  buttonContainer.appendChild(stepParent);
  stepParent.appendChild(spanOne);
  stepParent.appendChild(spanTwo);
  stepParent.appendChild(spanThree);
  stepParent.appendChild(spanFour);
  stepParent.appendChild(button);
  button.appendChild(text);

  return buttonLink;
}

function SmallerButton(textContent, linkLocation, x, y, minWid) {
  const newButton = ButtonMaker(textContent, linkLocation);
  newButton.setAttribute(
    "style",
    `transform: scale(${x}, ${y}); min-width: ${minWid}`
  );
  // newButton.style.minWidth = minWid;
  newButton.classList.add("small-button");

  return newButton;
}

document
  .querySelector(".button")
  .appendChild(ButtonMaker("Projects", "https://gecko-api-clzfrc1hh.now.sh/"));
document
  .querySelector(".drop-down")
  .appendChild(SmallerButton("About", "#", 0.5, 0.5, "19rem"));
document
  .querySelector(".drop-down")
  .appendChild(SmallerButton("Contact", "#", 0.5, 0.5));
document
  .querySelector(".drop-down")
  .appendChild(SmallerButton("Github", "#", 0.5, 0.5));
