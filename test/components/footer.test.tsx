import { render, screen } from "@testing-library/react";
import Footer from "../../components/footer";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
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

describe("Footer", () => {
    beforeEach(() => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");
        useRouter.mockReturnValue({
            push: () => {},
        });
    });

    test("Renders the correct class name on the outer container", () => {
        render(<Footer />);
        const footer = screen.getByTestId("footer");
        expect(footer).toHaveClass("bg-primary");
        expect(footer).toHaveClass("container-fluid");
    });

    test("Renders the correct text in the footer", () => {
        render(<Footer />);
        const copyright = screen.getByTestId("copyright");
        expect(copyright).toHaveTextContent("Copyright © 2021 Beneath the Surface. All rights reserved.");
    });

    test("Certain components have a max-width (so that they are not too stretched in desktop view", () => {
        render(<Footer />);
        const button = screen.getByTestId("signupButton");
        const linksList = screen.getByTestId("linksList");
        const maxWidth1 = getComputedStyle(button).maxWidth;
        const maxWidth2 = getComputedStyle(linksList).maxWidth;

        expect(maxWidth1).toBe("600px");
        expect(maxWidth2).toBe("600px");
    });

    test("Certain components shrink when in mobile view", () => {
        global.innerWidth = 390;
        render(<Footer />);
        const button = screen.getByTestId("signupButton");
        const width = button.offsetWidth;

        expect(width).toBeLessThan(390);
    });
});
