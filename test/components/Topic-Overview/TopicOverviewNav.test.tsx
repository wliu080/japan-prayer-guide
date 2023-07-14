import { render, screen } from "@testing-library/react"
import { TopicOverviewNav } from "../../../components/topic-overview/TopicOverviewNav"
import React from "react"

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
