import { render, screen } from "@testing-library/react"
import Partners from "../../../components/About/Partners"

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

describe("Partners", () => {
  test("Renders with the partner text and the two partner logos", () => {
    render(<Partners />)
    const partnersSection = screen.getByTestId("partners-section")

    expect(partnersSection.tagName).toBe("SECTION")
    expect(partnersSection.children[0].tagName).toBe("P")
    const logoDiv = partnersSection.children[1]
    expect(logoDiv.tagName).toBe("DIV")
    expect(logoDiv.children.length).toBe(2)
    expect(logoDiv.children[0].tagName).toBe("IMG")
    expect(logoDiv.children[1].tagName).toBe("IMG")
  })
})
