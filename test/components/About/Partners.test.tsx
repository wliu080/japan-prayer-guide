import { render, screen } from "@testing-library/react";
import Partners from "../../../components/about/Partners";

describe("Partners", () => {
    test("Renders with the partner text and the two partner logos", () => {
        render(<Partners />);
        const partnersSection = screen.getByTestId("partners-section");

        expect(partnersSection.tagName).toBe("SECTION");
        expect(partnersSection.children[0].tagName).toBe("P");
        const logoDiv = partnersSection.children[1];
        expect(logoDiv.tagName).toBe("DIV");
        expect(logoDiv.children.length).toBe(2);
        expect(logoDiv.children[0].tagName).toBe("IMG");
        expect(logoDiv.children[1].tagName).toBe("IMG");
    });
});
