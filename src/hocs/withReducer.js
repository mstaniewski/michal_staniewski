import React, { useReducer } from "react";
import reducers from "reducers";

export default (
  reducerName,
  mapStateToProps,
  mapDispatchToProps
) => BaseComponent => props => {
  if (!reducers.hasOwnProperty(reducerName)) {
    throw new Error("Requested reducer is not initialized");
  }

  const { reducer, initialState } = reducers[reducerName];

  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchMap = Object.keys(mapDispatchToProps).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: params => {
        const action = mapDispatchToProps[curr](params);
        if (typeof action === "function") {
          action(state, dispatch);
        } else {
          dispatch(action);
        }
      }
    }),
    {}
  );

  const storeProps = mapStateToProps(state);

  return <BaseComponent {...props} {...dispatchMap} {...storeProps} />;
};
