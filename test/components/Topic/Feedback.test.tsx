import { render, screen } from "@testing-library/react"
import Feedback from "../../../components/topic/Feedback"

describe("Feedback", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const testText = "abc"
        const testTitle = "feedback"
        const component = render(<Feedback button={testText} title={testTitle} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders a section with the right text inside", () => {
        const testText = "Hey how's it going"
        const testTitle = "Give us Feedback"
        render(<Feedback button={testText} title={testTitle} />)
        const feedbackSection = screen.getByTestId("feedback-sect")
        const feedbackButton = screen.getByTestId("feedback-button")
        const feedbackTitle = screen.getByTestId("feedback-title")

        expect(feedbackSection).toHaveClass("text-center", "m-0", "p-4")

        expect(feedbackButton).toHaveTextContent(testText)
        expect(feedbackButton).toHaveClass("m-0")

        expect(feedbackTitle).toHaveTextContent(testTitle)
        expect(feedbackTitle).toHaveClass("text-primary", "fs-2")
    })
})
