import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MOCK_DATA_NAME from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should render Eggs Category inside the restaurantMenu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Kaadai (2)");

  expect(accordianHeader).toBeInTheDocument();
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(2);
});

it("Should add Cart items in header component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Kaadai (2)");

  fireEvent.click(accordianHeader);

  const addbtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addbtn[0]);
  fireEvent.click(addbtn[1]);

  expect(screen.getByText("🛒- (2 items)")).toBeInTheDocument();
});

it("Should clear items in Cart Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cartLink = screen.getByText("🛒- (2 items)");
  fireEvent.click(cartLink);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(
    screen.getByText("Your Cart is Empty now. Please Add Your Items")
  ).toBeInTheDocument();
});
