export default (tagName, { attrs, children = [] }) => {
  const vEle = Object.create(null);
  console.log(tagName, attrs, children);
  Object.assign(vEle, {
    tagName,
    attrs,
    children,
  });
  return vEle;
};
