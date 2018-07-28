import React from "react";

import { MyContext } from "./MyProvider";

export const withContext = Component => {
  return props => {
    return (
      <MyContext.Consumer>
        {context => {
          return <Component {...props} context={context} />;
        }}
      </MyContext.Consumer>
    );
  };
};
