import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("renders posts if request succeeds", async() => {
    //Arrange
    window.fetch = jest.fn();  //mock data
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First post'}] //mock resolved data with json format
    });
    render(<Async />);

    //Act
    //...noting

    //Assert
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
