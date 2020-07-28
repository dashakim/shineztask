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

const App = (id, rpp, page, blocks) => {
  const blockListToShow = blocksToShow(rpp, page, blocks);

  return (
    <div>
      {blockListToShow.map((block) => BlockComponent(block))}
      {PagingComponent(id, rpp, page, blocks.length)}
    </div>
  );
};

const BlockComponent = (block) => {
  const title = block.title || "";
  const texts = block.text;
  const imageUrl = `https://img.omgcheckitout.com/articles/${id}/${block.image.name}`;

  return (
    <div className="block">
      <h3>{title}</h3>
      <img src={imageUrl}></img>
      {TextComponent(texts)}
    </div>
  );
};

const TextComponent = (texts) => (
  <div className="text">{texts.map((text) => ParagraphComponent(text))}</div>
);

const ParagraphComponent = (html) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const PagingComponent = (articleId, rpp, page, total) => {
  if (rpp == 0) return [];

  const isNotFirst = page !== 1;
  const isNotLast = total - rpp * page > 0;

  const pages = [];

  if (isNotFirst) pages.push(pageLink(articleId, "Previous", rpp, page - 1));
  if (isNotLast) pages.push(pageLink(articleId, "Next", rpp, page + 1));

  return pages;
};

const pageLink = (articleId, text, rpp, page) => (
  <a className="button-link" href={`/?id=${articleId}&rpp=${rpp}&page=${page}`}>
    {text}
  </a>
);

ReactDOM.render(
  App(id, rpp, page, article.blocks),
  document.getElementById("container")
);
