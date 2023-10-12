import { fireEvent, render, screen } from "@testing-library/react"
import { TopicOverviewNav } from "../../../components/topic-overview/TopicOverviewNav"
import React, { useState } from "react"

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}))
jest.mock("react-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        }
    },
    initReactI18next: {
        type: "3rdParty",
        init: () => {},
    },
}))

describe("Overview Nav", () => {
    test("Renders a section with the right text inside", () => {
        const setSelected = jest.fn()
        const selected = "church"
        render(<TopicOverviewNav selected={selected} setSelected={setSelected} />)
        const navContainer = screen.getByTestId("overview-nav-container")

        expect(navContainer).toHaveClass("sticky-top")
    })
})

const TestComponent = () => {
    const [selected, setSelected] = useState("culture")

    return (
        <>
            <TopicOverviewNav selected={selected} setSelected={setSelected} />
            <div id="culture"></div>
            <div id="church"></div>
        </>
    )
}

describe("Overview Nav - scrolling behavior", () => {
    test("scrolling to a section activates the relevant nav link", () => {
        render(<TestComponent />)

        const topNavLink = screen.getByTestId("overview-nav-link")
        const botNavLink = screen.getByTestId("overview-nav-link-2")
        expect(topNavLink).toHaveClass("fw-bold")
        expect(botNavLink).toHaveClass("text-black")

        // Simulate scrolling to the bottom 'church' section, note this number only corresponds to the test
        window.scrollY = 2600
        fireEvent.scroll(window)

        expect(topNavLink).toHaveClass("text-black")
        expect(botNavLink).toHaveClass("fw-bold")
    })
})
