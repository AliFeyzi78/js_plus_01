const data = [
  {
    id: 0,
    title:
      "Duis consequat pariatur elit eu cupidatat id irure dolor nisi aliqua eiusmod ad.",
    desc:
      "Non eiusmod voluptate ad duis deserunt sit eu incididunt reprehenderit. Pariatur excepteur voluptate qui exercitation aliquip quis eu velit exercitation dolore qui. Incididunt mollit nostrud consequat elit. Aliquip ut ipsum do ut. Labore qui sit aliqua dolore pariatur nostrud officia sunt et est. Lorem aliquip minim ad consequat adipisicing commodo ipsum ea.",
    readCount: 2310,
  },
  {
    id: 1,
    title: "Pariatur culpa sit duis commodo sint anim occaecat.",
    desc:
      "Reprehenderit ut fugiat enim enim tempor dolor eu occaecat ut nisi veniam id reprehenderit minim. Voluptate culpa consequat consectetur officia ad aliqua fugiat. Lorem adipisicing adipisicing cupidatat esse incididunt Lorem Lorem. Labore ea pariatur est magna enim nisi ipsum do proident cupidatat ad. Irure ex sint et nulla officia quis dolor commodo excepteur pariatur est sunt minim ea. Enim adipisicing sint ut enim esse velit occaecat ea excepteur aute minim.",
    readCount: 3200,
  },
  {
    id: 2,
    title: "Exercitation labore irure duis ad proident enim voluptate.",
    desc:
      "Qui labore et est nisi officia minim cillum commodo Lorem ullamco do. Excepteur ex exercitation reprehenderit ut Lorem nostrud veniam cupidatat id est ut labore amet ex. Velit adipisicing excepteur consequat consequat deserunt. Laborum eu exercitation esse aliquip nostrud laboris cillum nostrud eiusmod tempor commodo ipsum sunt. Id qui dolor ipsum qui irure minim nostrud esse pariatur dolor commodo veniam amet. Ut ut minim reprehenderit ipsum et fugiat sit nisi sit aute.",
    readCount: 1390,
  },
  {
    id: 3,
    title: "Ut id aute qui occaecat do cillum anim dolore culpa exercitation.",
    desc:
      "Aliqua occaecat deserunt commodo exercitation. Qui deserunt culpa et incididunt. Voluptate qui ut laborum tempor dolore mollit labore. Fugiat adipisicing velit id sunt excepteur duis proident non in. Lorem non aliquip sint pariatur aliqua nostrud. In velit officia cillum amet ex fugiat elit laboris laboris occaecat. Ullamco commodo laboris sint non.",
    readCount: 3420,
  },
  {
    id: 4,
    title: "Dolor irure anim nisi aliqua eiusmod deserunt quis.",
    desc:
      "Magna nisi occaecat anim pariatur et excepteur exercitation Lorem sint elit. Fugiat eu sit Lorem est aute voluptate in elit aute. Commodo do irure commodo ad amet ullamco nisi. Elit ut nostrud Lorem qui officia laborum qui aliqua magna duis dolor. Ut incididunt labore minim Lorem amet nostrud sint commodo adipisicing esse qui reprehenderit voluptate in. Eu cupidatat officia excepteur consectetur velit officia labore quis quis pariatur.",
    readCount: 230,
  },
];

function loadArticles(readingCount) {
  let articleData = data;
  const articles = document.querySelector("#articles");
  articles.innerHTML = "";

  if (readingCount != undefined) {
    articleData = data.filter((art) => readingCount < art.readCount);
  }

  articleData.forEach((d) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    articleElement.innerHTML = `
        <p class="title">${d.title}</p>
        <p>${d.desc}</p>
        <p class="reading_count">Reading: ${d.readCount}</p>
        `;

    articles.appendChild(articleElement);
  });
}

function filterArticles() {
  const countValue = document.querySelector("#count_input").value;
  loadArticles(countValue);
}

document
  .querySelector("#search_button")
  .addEventListener("click", filterArticles);

loadArticles();

//console.log(articles);
