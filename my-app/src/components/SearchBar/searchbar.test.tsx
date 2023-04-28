import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from ".";

describe("SearchBar", () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders the search bar input and button", () => {
    render(<SearchBar fetch={mockFetch} />);

    expect(screen.getByPlaceholderText("Search packages")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("calls the fetch function with the input value when the search button is clicked", () => {
    render(<SearchBar fetch={mockFetch} />);

    const input = screen.getByPlaceholderText("Search packages");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);

    expect(mockFetch).toHaveBeenCalledWith("test", false);
  });

  it("toggles the simulate error state when the checkbox is clicked", () => {
    render(<SearchBar fetch={mockFetch} />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
