import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Should load the contact us component", () => {
  it("Should load the heading inside contact us component", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load the button inside ContactUs component", () => {
    render(<Contact />);

    //Query
    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
  });

  it("Should load the InputName,inputBox inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Enter Your Name");

    expect(inputName).toBeInTheDocument();
    //console.log(inputName);

    const inputboxes = screen.getAllByRole("textbox");

    expect(inputboxes.length).toBeGreaterThan(1);
  });

  test("Should load the button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
