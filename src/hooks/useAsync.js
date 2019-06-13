import { useEffect } from "react";

export default (requestFn, params = {}, deps = []) => {
  useEffect(() => {
    requestFn(params);
  }, deps);
};
