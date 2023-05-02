import { render, screen } from '@testing-library/react';
import PrayerSummary from '../../../components/topic/PrayerSummary';

describe("Prayer Summary", () => {
    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks"]
        const testTitle = "Did You Know?"
        render(<PrayerSummary prayerPoints={testTextArray} title={testTitle} />)
        const prayerSummaryCont = screen.getByTestId("prayer-summary-container")
        const prayerSummaryTitle = screen.getByTestId("prayer-summary-title")
        const prayerSummaryPoints = screen.getByTestId("prayer-summary-points").children

        expect(prayerSummaryCont).toHaveClass("d-flex", "container", "px-6")

        expect(prayerSummaryTitle).toHaveTextContent(testTitle)
        expect(prayerSummaryTitle).toHaveClass("text-primary", "fst-italic", "border-bottom")

        expect(prayerSummaryPoints.length).toBe(3)
        expect(prayerSummaryPoints[0]).toHaveTextContent(testTextArray[0])
        expect(prayerSummaryPoints[0]).toHaveClass("my-3", "fs-6")
    })
})