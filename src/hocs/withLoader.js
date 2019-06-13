import React from "react";

export default (
  test = () => true,
  LoaderComponent = () => "Loading..."
) => BaseComponent => props => {
  if (!test(props)) {
    return <BaseComponent {...props} />;
  } else {
    return <LoaderComponent />;
  }
};
