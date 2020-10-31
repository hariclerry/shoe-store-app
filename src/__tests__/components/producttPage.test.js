import React from "react";
import { shallow, mount } from "enzyme";

import ProductPage from "pages/products/products";

describe("<ProductPage />", () => {
  const props = {
  };

  it("renders ProductPage component without crashing", () => {
    const wrapper = shallow(<ProductPage {...props} />);
    expect(wrapper).toBeTruthy();
  });
});
