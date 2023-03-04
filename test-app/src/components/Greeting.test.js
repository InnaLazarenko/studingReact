import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...noting

    //Assert
    const helloElement = screen.getByText("Hello world", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });

  test("renders button text", () => {
    render(<Greeting />);

    const buttonTextNotClicked = screen.getByText("good to see you", { exact: false });
    expect(buttonTextNotClicked).toBeInTheDocument();
  });

  test("renders changed button text, when clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("check not visible button", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });
});
