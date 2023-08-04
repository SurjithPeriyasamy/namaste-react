import { render, screen } from "@testing-library/react";
import RestaurantCard, { withLocality } from "../RestaurantCard";
import resCardMock from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Shold render The Restaurant card", () => {
  render(<RestaurantCard resData={resCardMock} />);

  const answer = screen.getByText("Thulasi Veg Cafe-Gh");

  expect(answer).toBeInTheDocument();
});

// it("Shold render The Restaurant card with Locality Label", () => {
//   render(<withLocality resData={resCardMock} />);

//   const label = screen.getAllByRole("label");

//   expect(label).toBeGreaterThan(1);
// });
