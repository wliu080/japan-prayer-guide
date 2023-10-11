import { render, screen } from "@testing-library/react"
import BibleVerse from "../../../components/About/BibleVerse"

describe("Bible Verse", () => {
    test("Renders with the bible verse and reference as text", () => {
        const testContent = "this is my test bible verse"
        const testPassageLocation = "1 John 1:1"
        render(<BibleVerse content={testContent} passageLocation={testPassageLocation} />)
        const bibleVerse = screen.getByTestId("about-bible-verse")
        expect(bibleVerse).toHaveTextContent(testContent)
        expect(bibleVerse).toHaveTextContent(testPassageLocation)
    })

    test("Text should be surrounded by 'verse-bar's", () => {
        const testContent = "some other test verse with numbers 1, 2, 3 "
        const testPassageLocation = "Romans 6:1"
        render(<BibleVerse content={testContent} passageLocation={testPassageLocation} />)
        const bibleVerse = screen.getByTestId("about-bible-verse")

        expect(bibleVerse.childNodes[0]).toHaveClass("verse-bar")
        expect(bibleVerse.childNodes[bibleVerse.childElementCount - 1]).toHaveClass("verse-bar")
    })
})
