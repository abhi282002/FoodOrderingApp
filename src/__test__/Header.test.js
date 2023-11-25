import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const input = screen.getByRole("link", { name: "Help" });
  expect(input).toBeInTheDocument();
});

test("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //using regex
  const cart = screen.getByText(/Card/);
  expect(cart).toBeInTheDocument();
});
