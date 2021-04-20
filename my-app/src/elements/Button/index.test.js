import React from "react";
import { render } from "@testing-library/react"; //libraly untuk megambil komponen
import { BrowserRouter as Router } from "react-router-dom"; //unutk membungkus tag Link

import Button from "./index"; //komponen yang test

// Ujicoba Komponen Button

test("Should not alloed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>); //di cek sesuai ekspekasi y/n

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <link> component", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
