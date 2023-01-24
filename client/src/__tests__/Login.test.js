import { fireEvent, screen } from "@testing-library/react"
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Login from "../pages/Login"
import { renderWithProviders } from "../utils/test-utils";


jest.mock("axios", () => {
  const mAxiosInstance = { get: jest.fn() };
  return {
    create: jest.fn(() => mAxiosInstance),
  };
});


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


test("username input should be rendered", () => {
    renderWithProviders(<Login/>);
    const userInputElement = screen.getByPlaceholderText(/username/i);
    expect(userInputElement).toBeInTheDocument()
})

test("password input should be rendered", () => {
    renderWithProviders(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement).toBeInTheDocument()
})

test("button should be rendered", () => {
    renderWithProviders(<Login/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument()
})

test("username input should be empty", () => {
  renderWithProviders(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement.value).toBe("")
});

test("password input should be empty", () => {
  renderWithProviders(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement.value).toBe("")
});

test("button should be disabled", () => {
  renderWithProviders(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled()
});


test("loading should not be disabled", () => {
  renderWithProviders(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).not.toHaveTextContent(/please wait/i)
});


test("error message should not be visible", () => {
  renderWithProviders(<Login />);
  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});


test("button should not be disabled when inputs exist", () => {
  renderWithProviders(<Login />);
  const buttonElement = screen.getByRole("button");
   const userInputElement = screen.getByPlaceholderText(/username/i);
   const passwordInputElement = screen.getByPlaceholderText(/password/i);

   const testValue = "test";
   
   fireEvent.change(userInputElement, { target: { value: testValue } });
   fireEvent.change(passwordInputElement, { target: { value: testValue } });
  expect(buttonElement).not.toBeDisabled();
});



