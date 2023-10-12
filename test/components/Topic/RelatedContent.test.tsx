import { render, screen } from "@testing-library/react"
import RelatedContent from "../../../components/topic/RelatedContent"

describe("Related Content", () => {
    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks", "great", "awesome", "cool"]
        const testTextArray2 = ["/link1", "/link2", "/link3", "/link4", "/link5", "/link6"]
        const testTitle = "Related Content"
        render(<RelatedContent topics={testTextArray} links={testTextArray2} title={testTitle} />)
        const relatedContentCont = screen.getByTestId("related-content-container")
        const relatedContentTitle = screen.getByTestId("related-content-title")

        expect(relatedContentCont).toHaveClass("d-flex", "flex-column", "my-5")

        expect(relatedContentTitle).toHaveTextContent(testTitle)
        expect(relatedContentTitle).toHaveClass("text-primary", "my-4", "fs-1")
    })
})
