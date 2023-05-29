import { render } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import WhyTheName from "../../../components/About/WhyTheName";

jest.mock("react-i18next", () => ({
    useTranslation: jest.fn(),
}));

describe("Why The Name section", () => {
    test("Renders the why section with the relevant translated content", () => {
        const useTranslationSpy: any = useTranslation;
        const contentFromi18n: string[] = ["Why Content 1", "Why Content 2", "Why Content 3", "Why Title"];
        const tSpy = jest
            .fn()
            .mockReturnValueOnce([contentFromi18n[0], contentFromi18n[1], contentFromi18n[2]])
            .mockReturnValueOnce([contentFromi18n[3]]);

        useTranslationSpy.mockReturnValue({
            t: tSpy,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        });

        const { getByTestId } = render(<WhyTheName />);
        const nameSection = getByTestId("why-the-name-section");

        expect(nameSection.tagName).toBe("SECTION");
        contentFromi18n.forEach((content) => {
            expect(nameSection).toHaveTextContent(content);
        });
    });

    test("Handles no translated content", () => {
        const useTranslationSpy: any = useTranslation;
        const contentFromi18n: string[] = ["Why Title"];
        const tSpy = jest.fn().mockReturnValueOnce(null).mockReturnValueOnce([contentFromi18n[0]]);

        useTranslationSpy.mockReturnValue({
            t: tSpy,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        });

        const { getByTestId } = render(<WhyTheName />);
        const nameSection = getByTestId("why-the-name-section");

        expect(nameSection.tagName).toBe("SECTION");
        contentFromi18n.forEach((content) => {
            expect(nameSection).toHaveTextContent(content);
        });
    });
});
