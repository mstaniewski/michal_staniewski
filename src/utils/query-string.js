export default params => {
  if (typeof params !== "object") {
    throw new Error("Params should be an object");
  }

  return (
    "?" +
    Object.entries(params)
      .filter(param => param[1])
      .map(param => param.join("="))
      .join("&")
  );
};
