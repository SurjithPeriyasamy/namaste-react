import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should filter the TopRated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const filterbtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(filterbtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");

  console.log(cardsAfterFilter);
  expect(cardsAfterFilter.length).toBe(3);
});
