import { render, screen } from "@testing-library/react"
import { TFunction } from "next-i18next"
import TopicDownloadables from "../../../components/topic/TopicDownloadables"

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

const setUpTFunctionMock = (labels: string[], links: string[], headers: string[]) => {
    const t: TFunction = jest.fn().mockImplementation((key, params) => {
        if (key === "downloads.labels") {
            return labels
        } else if (key === "downloads.links") {
            return links
        } else if (key === "downloads.headers") {
            return headers
        }
    })
    return t
}

describe("Topic Downloadables", () => {
    test("Snapshot test", () => {
        // This test is to check against unintended changes.
        // If the change is intentional you can update the snapshot with `jest --updateSnapshot`

        const testTextArray = ["ab", "cd", "ef"]
        const testTextArray2 = ["/", "/", "/", "/", "/"]
        const testHeaders = ["hi", "test"]
        const t = setUpTFunctionMock(testTextArray, testTextArray2, testHeaders)

        const component = render(<TopicDownloadables topicTrans={t} />)
        expect(component).toMatchSnapshot()
    })

    test("Renders a section with the right text inside", () => {
        const testTextArray = ["Hey how's it going", "I'm doing fine", "Thanks", "great"]
        const testTextArray2 = ["/", "/", "/", "/", "/"]
        const testHeaders = ["hello", "testing"]
        const t = setUpTFunctionMock(testTextArray, testTextArray2, testHeaders)

        render(<TopicDownloadables topicTrans={t} />)
        const topicDownloadablesCont = screen.getByTestId("topic-downloadables-container")
        const topicDownloadablesTitle = screen.getByTestId("topic-downloadables-title")
        const topicDownloadablesLinks = screen.getByTestId("topic-downloadables-links").children

        expect(topicDownloadablesCont).toHaveClass("d-flex", "flex-column", "my-5")

        expect(topicDownloadablesTitle).toHaveTextContent("downloads.title")
        expect(topicDownloadablesTitle).toHaveClass("text-primary", "my-4", "fs-1")

        expect(topicDownloadablesLinks.length).toBe(4)
        expect(topicDownloadablesLinks[0]).toHaveTextContent(testTextArray[0])
        expect(topicDownloadablesLinks[0]).toHaveClass("col")
    })
})
