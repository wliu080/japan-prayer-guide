import { render, screen } from "@testing-library/react"
import { TopicNav } from "../../../components/topic/TopicNav"

describe("Topic Nav", () => {
    test("Renders a section with the right text inside", () => {
        const labels = ["About this Topic", "Prayer Points", "Downloadables"]
        render(<TopicNav selected={"About"} setSelected={() => {}} labels={labels} />)
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
