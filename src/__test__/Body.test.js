import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../components/Body";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load body component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("heading");
  expect(loginButton).toBeInTheDocument();
});
