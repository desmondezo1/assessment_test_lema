import React from "react";
import { render } from "@testing-library/react";
import UserTable from "@/components/UserTable";

describe("UserTable component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<UserTable />);
    expect(getByText("Users")).toBeTruthy();
  });
});
