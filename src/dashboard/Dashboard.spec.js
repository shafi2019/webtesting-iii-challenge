// Test away

import React from 'react';
import { render } from "react-testing-library";
import Dashboard from './Dashboard';

test("Dashboard shows the controls and display", () => {
  const { getByText } = render(<Dashboard />);

  getByText(/Unlocked/i);
  const display = getByText(/Open/i);
  getByText(/Lock Gate/i);
  const controls = getByText(/Close Gate/i);

  expect(display).toBeDefined;
  expect(controls).toBeDefined;
}); 

