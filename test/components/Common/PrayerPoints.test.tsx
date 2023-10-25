import { render, screen } from "@testing-library/react"
import PrayerPoints from "../../../components/common/PrayerPoints"

describe("Prayer Points", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const testTextArray = ["ABC", "Item123"]
        const testTitle = "Prayer Points1"
        const component = render(<PrayerPoints prayerPoints={testTextArray} title={testTitle} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks"]
        const testTitle = "Prayer Points"
        render(<PrayerPoints prayerPoints={testTextArray} title={testTitle} />)
        const TopicPrayerPointsCont = screen.getByTestId("prayer-points-container")
        const TopicPrayerPointsTitle = screen.getByTestId("prayer-points-title")
        const TopicPrayerPointsPoints = screen.getByTestId("prayer-points-points").children

        expect(TopicPrayerPointsCont).toHaveClass("d-flex", "container", "px-6")

        expect(TopicPrayerPointsTitle).toHaveTextContent(testTitle)
        expect(TopicPrayerPointsTitle).toHaveClass("px-2", "pb-3", "d-flex")

        expect(TopicPrayerPointsPoints.length).toBe(3)
        expect(TopicPrayerPointsPoints[0]).toHaveTextContent(testTextArray[0])
        expect(TopicPrayerPointsPoints[0]).toHaveClass("my-3")
        expect(TopicPrayerPointsPoints[1]).toHaveTextContent(testTextArray[1])
        expect(TopicPrayerPointsPoints[1]).toHaveClass("my-3")
        expect(TopicPrayerPointsPoints[2]).toHaveTextContent(testTextArray[2])
        expect(TopicPrayerPointsPoints[2]).toHaveClass("my-3")
    })
})
