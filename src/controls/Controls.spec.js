// Test away!

import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from "../controls/Controls";

test("cannot be closed or opened if it is locked", () => {
    const toggle = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggle={toggle} />
    );
    const openGate = getByText(/open gate/i);
    fireEvent.click(openGate);
    expect(toggle).not.toHaveBeenCalled();
  });

  test("provide buttons to toggle the `closed` and `locked` states.", () => {
    const { getAllByText } = render(<Controls />);
    const buttons = getAllByText(/gate/i);
    expect(buttons).toBeDefined();
  });

  test("the closed toggle button is disabled if the gate is locked", () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(<Controls locked={true} toggleClosed={toggleClosed} />);
    const closedBtn = getByText(/close gate/i);
    fireEvent.click(closedBtn);
    expect(toggleClosed).not.toHaveBeenCalled();
  });

  test("the locked toggle button is disabled if the gate is open", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls closed={false} toggleLocked={toggleLocked} />
    );
    const lockBtn = getByText(/lock gate/i);
    fireEvent.click(lockBtn);
    expect(toggleLocked).not.toHaveBeenCalled();
  }); 

 