import { render, fireEvent } from "@testing-library/react";
import { ToggleHeader } from "../../components/toggleHeader";

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));
jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

describe("ToggleHeader", () => {
  beforeEach(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockReturnValue({
      push: () => {},
    });
  });

  test("renders a Navbar with a white background and light variant by default", () => {
    const { getByRole } = render(<ToggleHeader />);
    const navbar = getByRole("navigation");
    expect(navbar).toHaveClass("bg-white");
    expect(navbar).toHaveClass("navbar-light");
  });

  test("clicking the Navbar.Toggle toggles the color scheme to the dark variant", () => {
    const { getByRole } = render(<ToggleHeader />);
    const toggleButton = getByRole("button", { name: "Toggle navigation" });
    fireEvent.click(toggleButton);
    const navbar = getByRole("navigation");
    expect(navbar).toHaveClass("bg-primary");
    expect(navbar).toHaveClass("navbar-dark");
  });

  test("clicking the Navbar.Toggle twice toggles the color scheme back to the light variant", () => {
    const { getByRole } = render(<ToggleHeader />);
    const toggleButton = getByRole("button", { name: "Toggle navigation" });
    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);
    const navbar = getByRole("navigation");
    expect(navbar).toHaveClass("bg-white");
    expect(navbar).toHaveClass("navbar-light");
  });
});
