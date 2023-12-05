import { render, screen } from "@testing-library/react"
import PrayerPoints, { PrayerDisplayStyle } from "../../../components/common/PrayerPoints"

jest.mock("next-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        }
    },
    Trans: (props: any) => {
        if (props.children) {
            // mock for <Trans>{value}</Trans>
            return props.children
        } else if (props.i18nKey) {
            // mock for <Trans t={t} i18nKey={value} />
            return props.i18nKey
        }
        return props
    },
}))

describe("Prayer Points", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const t = jest.fn()
        t.mockReturnValue(["A", "B"])

        const component = render(<PrayerPoints topicTrans={t} displayStyle={PrayerDisplayStyle.Featured} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks"]

        const translation = jest.fn()
        translation.mockReturnValue(testTextArray)

        render(<PrayerPoints topicTrans={translation} displayStyle={PrayerDisplayStyle.TopicTop} />)
        const TopicPrayerPointsCont = screen.getByTestId("prayer-points-container")
        const TopicPrayerPointsTitle = screen.getByTestId("prayer-points-title")
        const TopicPrayerPointsPoints = screen.getByTestId("prayer-points-points").children

        expect(TopicPrayerPointsCont).toHaveClass("d-flex", "container", "px-6")
        expect(TopicPrayerPointsTitle).toHaveClass("px-2", "pb-3", "d-flex")

        expect(TopicPrayerPointsPoints.length).toBe(3)
        expect(TopicPrayerPointsPoints[0].tagName).toBe("LI")
        expect(TopicPrayerPointsPoints[0].textContent).toBe(testTextArray[0])
        expect(TopicPrayerPointsPoints[0]).toHaveClass("my-3")
        expect(TopicPrayerPointsPoints[1]).toHaveTextContent(testTextArray[1])
        expect(TopicPrayerPointsPoints[1]).toHaveClass("my-3")
        expect(TopicPrayerPointsPoints[2]).toHaveTextContent(testTextArray[2])
        expect(TopicPrayerPointsPoints[2]).toHaveClass("my-3")
    })
})
