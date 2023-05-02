import { render, screen } from '@testing-library/react';
import TopicDownloadables from '../../../components/topic/TopicDownloadables';

describe("Topic Downloadables", () => {
    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks", "great"]
        const testTextArray2 = ["/", "/", "/", "/", "/"]
        const testTitle = "Topic Downloadables"
        render(<TopicDownloadables labels={testTextArray} links={testTextArray2} title={testTitle}/>)
        const topicDownloadablesCont = screen.getByTestId("topic-downloadables-container")
        const topicDownloadablesTitle = screen.getByTestId("topic-downloadables-title")
        const topicDownloadablesLinks = screen.getByTestId("topic-downloadables-links").children

        expect(topicDownloadablesCont).toHaveClass("d-flex", "flex-column", "my-5")

        expect(topicDownloadablesTitle).toHaveTextContent(testTitle)
        expect(topicDownloadablesTitle).toHaveClass("text-primary", "my-4", "fs-1")

        expect(topicDownloadablesLinks.length).toBe(4)
        expect(topicDownloadablesLinks[0]).toHaveTextContent(testTextArray[0])
        expect(topicDownloadablesLinks[0]).toHaveClass("col")
    })
})