import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders autism title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/autism/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders login", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders users", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/users/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders events", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/events/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders diets", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/diets/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders treatments", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/treatments/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders docs", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/docs/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders resources", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/resources/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders boards", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/boards/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders playlists", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/playlists/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders tags", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/tags/i);
  expect(linkElement).toBeInTheDocument();
});
