import { render, screen } from '@testing-library/react';
import TopicPrayerPoints from '../../../components/topic/TopicPrayerPoints';

describe("Topic Prayer Points", () => {
    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks"]
        const testTitle = "Topic Prayer Points"
        const testSubtitle = "Topic Prayer Points Sub"
        render(<TopicPrayerPoints prayerPoints={testTextArray} title={testTitle} subtitle={testSubtitle}/>)
        const TopicPrayerPointsCont = screen.getByTestId("topic-points-container")
        const TopicPrayerPointsTitle = screen.getByTestId("topic-points-title")
        const TopicPrayerPointsPoints = screen.getByTestId("topic-points-points").children

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