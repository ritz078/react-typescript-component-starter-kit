import * as React from "react";
import renderer from "react-test-renderer";
import { Button } from "../";
import { mount } from "enzyme";
import sinon from "sinon";

describe("component: Button", () => {
  test("snapshot", () => {
    const button = renderer.create(
      <Button onClick={() => {}} kind="primary" outline>
        Click me
      </Button>
    );

    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("onClick should trigger correctly", () => {
    const spy = sinon.spy();
    const button = mount(
      <Button onClick={spy} kind="primary" outline>
        Click me
      </Button>
    );

    button.simulate("click");
    expect(spy.calledOnce).toBeTruthy();
  });
});
