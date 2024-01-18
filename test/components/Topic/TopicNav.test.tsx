import { render, screen } from "@testing-library/react"
import { TopicNav } from "../../../components/topic/TopicNav"

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

describe("Topic Nav", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const labels = ["About", "Prayer", "Download"]
        const t = jest.fn()
        t.mockReturnValueOnce(labels)

        const component = render(<TopicNav selected={"About"} setSelected={() => {}} topicTrans={t} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders a section with the right text inside", () => {
        const labels = ["About this Topic", "Prayer Points", "Downloadables"]
        const t = jest.fn()
        t.mockReturnValueOnce(labels)

        render(<TopicNav selected={"About"} setSelected={() => {}} topicTrans={t} />)
        const topicNavCont = screen.getByTestId("topic-nav-container")
        const topicNavLinks = screen.getByTestId("topic-nav-links")
        const topicNavLink = screen.getByTestId("topic-nav-link")

        expect(topicNavCont).toHaveClass("d-flex", "container", "w-100")

        expect(topicNavLinks).toHaveClass("pt-4", "pb-0", "w-100")
        expect(topicNavLinks.children.length).toBe(3)

        expect(topicNavLink).toHaveTextContent("About this Topic")
        expect(topicNavLink).toHaveClass("px-3", "my-0", "text-decoration-none")
    })
})
