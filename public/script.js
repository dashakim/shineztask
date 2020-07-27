const article = window.shinez.article;
const id = window.shinez.id;
const rpp = window.shinez.rpp;
const page = window.shinez.page;

const blocksToShow = (rpp, page, blocks) => {
  if (rpp === 0) return blocks;
  const skip = rpp * (page - 1);
  const take = rpp;
  return blocks.slice(skip, skip + take);
};

const container = document.getElementById("container");
const createElements = (data) => {
  data.forEach((el) => {
    container.appendChild(createElement(el));
  });
};

const createElement = (block) => {
  console.log(block);
  const title = block.title || "";
  const texts = block.text;
  const imageUrl = `https://img.omgcheckitout.com/articles/${id}/${block.image.name}`;
  const elementContainer = document.createElement("div");
  elementContainer.innerHTML = `
        <h3>${title}</h3>
        <img src='${imageUrl}'>
        `;
  elementContainer.appendChild(createTextsBlock(texts));
  elementContainer.classList.add("block");
  return elementContainer;
};

const createTextsBlock = (texts) => {
  const textsContainer = document.createElement("div");
  for (const text of texts) {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = text;
    textsContainer.appendChild(textContainer);
    textsContainer.classList.add("text");
  }
  return textsContainer;
};

const createPaging = (articleId, rpp, page, total) => {
  const isNotFirst = page !== 1;
  const isNotLast = total - rpp * page > 0;

  if (isNotFirst)
    container.appendChild(pageLink(articleId, "Previous", rpp, page - 1));
  if (isNotLast)
    container.appendChild(pageLink(articleId, "Next", rpp, page + 1));
};

const pageLink = (articleId, text, rpp, page) => {
  const linkContainer = document.createElement("a");
  linkContainer.classList.add("button-link");
  linkContainer.setAttribute(
    "href",
    `/?id=${articleId}&rpp=${rpp}&page=${page}`
  );
  linkContainer.innerText = text;

  return linkContainer;
};

createElements(blocksToShow(rpp, page, article.blocks));
createPaging(id, rpp, page, article.blocks.length);
