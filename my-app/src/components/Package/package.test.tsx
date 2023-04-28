import React from "react";
import { render, screen } from "@testing-library/react";
import Package from ".";
import { IPackage, PackageDetails, PackageLinks } from "../../utils/interfaces";

const packageData = {
  package: {
    name: "test-package",
    description: "This is a test package",
    publisher: {
      username: "test-user",
      email: "test@test.com"
    },
    version: "1.0.0",
    links: {
      npm: "https://www.npmjs.com/package/test-package",
    },
  },
} as unknown as IPackage;

describe("Package", () => {
  it("should render package information", () => {
    render(<Package packageData={packageData} />);
    expect(screen.getByText("test-package")).toBeInTheDocument();
    expect(screen.getByText("This is a test package")).toBeInTheDocument();
    expect(screen.getByText("test-user")).toBeInTheDocument();
    expect(screen.getByText("published 1.0.0")).toBeInTheDocument();
  });
});