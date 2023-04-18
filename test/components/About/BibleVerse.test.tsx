import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BibleVerse from "../../../components/About/BibleVerse";
import { useRef } from "react";

describe("Bible Verse", () => {
    test("Renders with the bible verse and reference as text", () => {
        const testContent = "this is my test bible verse";
        const testPassageLocation = "1 John 1:1";
        render(<BibleVerse content={testContent} passageLocation={testPassageLocation} />);
        const footer = screen.getByTestId("about-bible-verse");
        expect(footer).toHaveTextContent(testContent);
        expect(footer).toHaveTextContent(testPassageLocation);
    });

    test("Text should be surrounded by 'verse-bar's", () => {
        const testContent = "some other test verse with numbers 1, 2, 3 ";
        const testPassageLocation = "Romans 6:1";
        render(<BibleVerse content={testContent} passageLocation={testPassageLocation} />);
        const footer = screen.getByTestId("about-bible-verse");

        expect(footer.childNodes[0]).toHaveClass("verse-bar");
        expect(footer.childNodes[footer.childElementCount - 1]).toHaveClass("verse-bar");
    });

    // test("Renders the correct text in the footer", () => {
    //     render(<BibleVerse />);
    //     const copyright = screen.getByTestId("copyright");
    //     expect(copyright).toHaveTextContent("Copyright © 2021 Beneath the Surface. All rights reserved.");
    // });

    // test("Certain components have a max-width (so that they are not too stretched in desktop view", () => {
    //     render(<BibleVerse />);
    //     const button = screen.getByTestId("signupButton");
    //     const linksList = screen.getByTestId("linksList");
    //     const maxWidth1 = getComputedStyle(button).maxWidth;
    //     const maxWidth2 = getComputedStyle(linksList).maxWidth;

    //     expect(maxWidth1).toBe("600px");
    //     expect(maxWidth2).toBe("600px");
    // });

    // test("Certain components shrink when in mobile view", () => {
    //     global.innerWidth = 390;
    //     render(<BibleVerse />);
    //     const button = screen.getByTestId("signupButton");
    //     const width = button.offsetWidth;

    //     expect(width).toBeLessThan(390);
    // });
});
