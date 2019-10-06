import React from "react";
import Enzyme, { mount } from "enzyme";
import Login from "./Login.component";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Login /> with no props", () => {
  const container = mount(<Login />);
  console.log(container);
  it("should have a password field", () => {
    /* Similar to above */
    expect(container.find('input[type="password"]').length).toEqual(1);
  });

  it("should have a username text field", () => {
    /* */
    expect(container.find('input[type="text"]').length).toEqual(1);
  });
});
