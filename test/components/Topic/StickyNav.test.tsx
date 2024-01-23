import { fireEvent, render, screen } from "@testing-library/react"
import { StickyNav, Tab } from "../../../components/topic/StickyNav"

jest.mock("next-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: any) => str,
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

describe("Sticky Nav", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const tabs: Tab[] = [
            { refId: "a", label: "abc" },
            { refId: "b", label: "def" },
            { refId: "c", label: "ghi" },
        ]

        const component = render(<StickyNav tabs={tabs} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders sticky-top nav section with the right labels", () => {
        const tabs: Tab[] = [
            { refId: "about-id", label: "about" },
            { refId: "prayer-id", label: "prayer" },
            { refId: "resources-id", label: "resources" },
        ]

        render(<StickyNav tabs={tabs} />)
        const navCont = screen.getByTestId("sticky-nav-container")
        const navLinks = screen.getByTestId("topic-nav-links")
        const nav0 = screen.getByTestId("topic-nav-link0")
        const nav1 = screen.getByTestId("topic-nav-link1")
        const nav2 = screen.getByTestId("topic-nav-link2")

        expect(navCont).toHaveClass("sticky-top", "d-flex", "container", "justify-content-center", "flex-column")

        expect(navLinks).toHaveClass("pt-4", "pb-0", "w-100")
        expect(navLinks.children.length).toBe(3)

        expect(nav0).toHaveTextContent("about")
        expect(nav0).toHaveClass("px-3", "my-0", "text-decoration-none", "fw-normal")
        expect(nav1).toHaveTextContent("prayer")
        expect(nav2).toHaveTextContent("resource")
    })

    test("Can render sticky-top nav section with less sections", () => {
        const tabs: Tab[] = [
            { refId: "culture-id", label: "culture" },
            { refId: "church-id", label: "church" },
        ]

        render(<StickyNav tabs={tabs} />)
        const navLinks = screen.getByTestId("topic-nav-links")
        const nav0 = screen.getByTestId("topic-nav-link0")
        const nav1 = screen.getByTestId("topic-nav-link1")

        expect(navLinks).toHaveClass("pt-4", "pb-0", "w-100")
        expect(navLinks.children.length).toBe(2)

        expect(nav0).toHaveTextContent("culture")
        expect(nav1).toHaveTextContent("church")
    })
})

const TestComponent = () => {
    const tabs: Tab[] = [
        { refId: "culture", label: "Culture and society" },
        { refId: "church", label: "Church and mission" },
    ]

    let mockTop = 500
    HTMLElement.prototype.getBoundingClientRect = jest.fn(() => ({
        width: 10,
        height: 10,
        top: mockTop++,
        left: 0,
        right: 10,
        bottom: 10,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
    }))

    return (
        <>
            <StickyNav tabs={tabs} />
            <div data-testid="abc" id="culture" className="ack"></div>
            <div data-testid="def" id="church"></div>
        </>
    )
}

describe("StickyNav - scrolling behavior", () => {
    test("scrolling to a section activates the relevant nav link", () => {
        render(<TestComponent />)

        const topNavLink = screen.getByTestId("topic-nav-link0")
        const botNavLink = screen.getByTestId("topic-nav-link1")
        expect(topNavLink).toHaveClass("fw-bold", "text-secondary-5")
        expect(botNavLink).not.toHaveClass("fw-bold", "text-secondary-5")

        // Simulate scrolling to the bottom 'church' section, note this number only corresponds to the test
        window.scrollY = 508
        fireEvent.scroll(window)

        expect(topNavLink).not.toHaveClass("fw-bold", "text-secondary-5")
        expect(botNavLink).toHaveClass("fw-bold", "text-secondary-5")
    })
})
