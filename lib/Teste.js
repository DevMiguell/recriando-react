export const TitleBox = ({
  title,
  children
}) => {
  return createElement("div", {
    style: `padding: 2em;`
  }, createElement("h3", null, title), children);
};