import { render, screen } from "@testing-library/react"
import Feedback from "../../../components/topic/Feedback"

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

describe("Feedback", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const component = render(<Feedback topicTrans={jest.fn()} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders a section with the right text inside", () => {
        render(<Feedback topicTrans={jest.fn()} />)
        const feedbackSection = screen.getByTestId("feedback-sect")
        const feedbackButton = screen.getByTestId("feedback-button")
        const feedbackTitle = screen.getByTestId("feedback-title")

        expect(feedbackSection).toHaveClass("text-center", "m-0", "p-4")

        expect(feedbackButton).toHaveTextContent("feedback.button")
        expect(feedbackButton).toHaveClass("m-0")

        expect(feedbackTitle).toHaveTextContent("feedback.title")
        expect(feedbackTitle).toHaveClass("text-primary", "fs-2")
    })
})
