import { render, screen } from '@testing-library/react';
import DidYouKnow from '../../../components/topic/DidYouKnow';

describe("Did You Know", () => {
    test("Renders a container with the right text inside", () => {
        const testText = "Hey how's it going"
        const testTitle = "Did You Know?"
        render(<DidYouKnow text={testText} title={testTitle} />)
        const dykContainer = screen.getByTestId("dyk-container")
        const dykText = screen.getByTestId("dyk-text")

        expect(dykContainer).toHaveClass("container", "d-flex")

        expect(dykText).toHaveTextContent(testText)
        expect(dykText).toHaveClass("fs-5", "my-3")
    })
})