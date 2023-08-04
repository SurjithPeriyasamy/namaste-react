import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Search button inside the Body Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  //console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "Mess" } });

  fireEvent.click(searchbtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});
