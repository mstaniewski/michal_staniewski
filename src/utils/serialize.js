export default elements => {
  const inputs = Array.prototype.filter.call(elements, element =>
    ["text", "select-one", "radio"].includes(element.type)
  );

  return inputs.reduce((acc, curr) => {
    if (curr.type === "radio" && curr.checked) {
      return { ...acc, [curr.name]: curr.value };
    } else {
      return { [curr.name]: curr.value, ...acc };
    }
  }, {});
};
