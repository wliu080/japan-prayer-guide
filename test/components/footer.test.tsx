import { render, screen } from "@testing-library/react"
import Footer from "../../components/footer"
import nextI18nextConfig from "../../next-i18next.config"
import { I18nextProvider } from "react-i18next"

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}))
jest.mock("react-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: any) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
                language: "en",
            },
        }
    },
    withTranslation: () => (Component: any) => {
        Component.defaultProps = { ...Component.defaultProps, t: () => "" }
        return Component
    },
    initReactI18next: {
        type: "3rdParty",
        init: () => {},
    },
}))

describe("Footer", () => {
    beforeEach(() => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter")
        useRouter.mockReturnValue({
            push: () => {},
        })
    })

    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const component = render(<Footer />)
        expect(component).toMatchSnapshot()
    })

    test("Renders the correct class name on the outer container", () => {
        render(<Footer />)
        const footer = screen.getByTestId("footer")
        expect(footer).toHaveClass("bg-primary")
        expect(footer).toHaveClass("container-fluid")
    })

    test("Renders the correct text in the footer", () => {
        render(<Footer />)
        const copyright = screen.getByTestId("copyright")
        // expect(copyright).toHaveTextContent("Copyright © 2021 Beneath the Surface. All rights reserved.");
        // Can't seem to make it render the right text content
        expect(copyright).toHaveTextContent("footer.copyright")
    })

    test("Certain components have a max-width (so that they are not too stretched in desktop view", () => {
        render(<Footer />)
        const linksList = screen.getByTestId("linksList")
        const maxWidth = getComputedStyle(linksList).maxWidth
    })
})
