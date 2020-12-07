// const element = document.getElementById("user_name");
// console.log(element);

// const element = document.getElementsByClassName("user_tag");
// console.log(element);

// const element = document.getElementsByTagName("p");
// console.log(element);

// const element = document.querySelector("#user_name");
// console.log(element);

// const element = document.querySelectorAll(".userTag");
// console.log(element);

// const element = document.querySelectorAll("p");
// console.log(element[1].innerHTML);

// const element = document.querySelector("#city_list");
// console.log(element);

// const element_1 = document.getElementsByClassName("city");
// const element_2 = document.querySelectorAll(".city");

// console.log(element_1);
// console.log(element_2);
// ------------------------------

// element.innerText = "Merhaba";

// const element = document.querySelector("#my_element");

// element.innerHTML = "<p>Hello!</p>";
// console.log("element", element);

// const car_list = [
//   { id: 0, brandName: "Mercedes" },
//   { id: 1, brandName: "BMW" },
//   { id: 2, brandName: "Audi" },
//   { id: 3, brandName: "Opel" },
// ];

// const listElement = document.querySelector("#cars");

// car_list.forEach((car) => {
//   listElement.innerHTML += `<li class="car_class">${car.brandName}</li>`;
// });

// for (let i = 0; i < car_list.length; i++) {
//   listElement.innerHTML += `<li class="car_class">${car_list[i].brandName}</li>`;
// }

// console.log(listElement);

// const element = document.querySelector("#link");

// const attr = element.getAttribute("href");
// console.log(attr);

// element.setAttribute("href", "https://clarusway.com");

// element.innerText = "Go Clarus!!";

// console.log(element);

// const elements = document.querySelectorAll("li");
// console.log(elements);

// elements.forEach((w) => {
//   if (w.innerText.includes("error")) {
//     w.setAttribute("class", "error");
//   } else if (w.innerText.includes("success")) {
//     w.setAttribute("class", "success");
//   }
// });

// const element = document.querySelector(".hello");
// element.style.color = "red";
// element.style.fontWeight = "bold";

// const element = document.querySelector("body");
// console.log(element);
// element.innerHTML = "<p class='bannerText'>Hello!</p>";

// const element = document.querySelector("#my_banner");
// console.log(element.classList);

// element.classList.add("active");
// console.log(element.classList);

// const element = document.querySelector("#today");
// console.log(element);

// const myElement = document.createElement("p");
// myElement.innerText = "Perşembe!";
// console.log(myElement);

// element.appendChild(myElement);
//----------------------------------------
document.querySelector("#btn").addEventListener("click", clickFunction);

document.querySelector("#para").addEventListener("mouseenter", function () {
  alert("go away!!");
});

function clickFunction() {
  document.querySelector("#para").innerText = "Don't afraid!";
  //alert("I'm an Alert!!");
}
