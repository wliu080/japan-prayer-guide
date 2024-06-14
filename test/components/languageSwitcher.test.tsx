import { render, screen, fireEvent } from "@testing-library/react"
import LanguageSwitcher from "../../components/LanguageSwitcher"

const changeLanguageSpy = jest.fn()

jest.mock("react-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: jest.fn(() => {
        return {
            t: (str: any) => str,
            i18n: {
                changeLanguage: changeLanguageSpy,
            },
        }
    }),
    initReactI18next: {
        type: "3rdParty",
        init: () => {},
    },
}))

const useRouter = jest.spyOn(require("next/router"), "useRouter")

describe("LanguageSwitcher", () => {
    beforeEach(() => {
        useRouter.mockReturnValue({
            push: () => {},
        })
    })

    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const component = render(<LanguageSwitcher />)
        expect(component).toMatchSnapshot()
    })

    test("renders a horizontal stack with 2 links", () => {
        render(<LanguageSwitcher />)
        const languageSwitcher = screen.getByTestId("language-switcher")
        const engLink = screen.getByTestId("link-english")
        const jpLink = screen.getByTestId("link-japanese")
        const verticalBorder = languageSwitcher.querySelector(".vr.border")

        expect(languageSwitcher).toHaveClass("hstack")
        expect(languageSwitcher).toContainElement(engLink)
        expect(languageSwitcher).toContainElement(jpLink)
        expect(verticalBorder).toBeInTheDocument()
    })

    test("clicking on a language link should use i18n to change language", () => {
        useRouter.mockReturnValue({
            push: () => {},
            locale: "en",
        })

        render(<LanguageSwitcher />)
        const engLink = screen.getByTestId("link-english")
        const jaLink = screen.getByTestId("link-japanese")

        fireEvent.click(engLink)

        expect(engLink).toHaveClass("active-language-link")
        expect(jaLink).not.toHaveClass("active-language-link")
        expect(changeLanguageSpy).toHaveBeenCalledTimes(1)
        expect(changeLanguageSpy).toHaveBeenCalledWith("en")
    })
})
