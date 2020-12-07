//change the color

const colors = [
  {
    name: "red",
    motto: "Rose Red",
  },
  {
    name: "blue",
    motto: "Ocean Blue",
  },
  {
    name: "gray",
    motto: "Smoke Gray",
  },
  {
    name: "green",
    motto: "Grass Green",
  },
  {
    name: "purple",
    motto: "deep Purple",
  },
];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColor);

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.querySelector("#colorName").innerHTML = colors[randomIndex].name;
  document.querySelector("body").style.backgroundColor =
    colors[randomIndex].name;
  document.querySelector("#colorDesc").innerHTML = colors[randomIndex].motto;
}

function addColor() {
  const userInput = document.querySelector(".colorInput");

  const colorData = userInput.value.split(":");

  const colorObject = {
    name: colorData[0],
    motto: colorData[1],
  };

  if (colors.findIndex((color) => color.name === colorObject.name) === -1) {
    document.querySelector("body").style.backgroundColor = colorObject.name;
    document.querySelector("#colorName").innerHTML = colorObject.name;
    document.querySelector("#colorDesc").innerHTML = colorObject.motto;

    colors.push(colorObject);
    userInput.value = "";
    userInput.focus();
  } else {
    alert("daha önce girdiniz!!!");
  }
}
