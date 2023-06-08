import { getFeaturedTopic, FeaturedEntryType } from "../../services/featuredTopicSelector"

// the service uses Moment, but as it is a wrapper for Date, we can still mock the method for getting 'today'
const mockToday = (date: Date): void => {
    const originalDate = Date

    // mock Date so that it only returns a mocked 'today' date, but behaves as usual for other invocations
    global.Date = jest.fn(function () {
        if (arguments.length === 0) {
            return date
        }
        return new originalDate(...arguments)
    }) as any
}

describe("Month Selector", () => {
    test("Should return a topic where the start date is 'today'", () => {
        const mockDate = new Date("2023-02-14")
        mockToday(mockDate)

        let testSchedule: FeaturedEntryType[] = [
            { startDate: "01-01", topicName: "Topic A" },
            { startDate: "02-14", topicName: "Topic B" },
        ]
        const file = getFeaturedTopic(testSchedule)

        expect(file).toBe("Topic A")
    })

    test("'today' should be after the returned topic's start date, but before the next topic's start date", () => {
        // topic A > today > topic B ==> returns A
        const mockDate = new Date("2023-03-17")
        mockToday(mockDate)

        let testSchedule: FeaturedEntryType[] = [
            { startDate: "01-01", topicName: "Topic A" },
            { startDate: "03-18", topicName: "Topic B" },
        ]
        const file = getFeaturedTopic(testSchedule)

        expect(file).toBe("Topic A")
    })

    test("Should cover the case of going into new year and return the most recently passed topic", () => {
        // topic A (dec) > today (jan) > topic B (feb) ==> returns A
        const mockDate = new Date("2023-01-04")
        mockToday(mockDate)

        let testSchedule: FeaturedEntryType[] = [
            { startDate: "01-05", topicName: "Topic A" },
            { startDate: "12-18", topicName: "Topic B" },
        ]
        const file = getFeaturedTopic(testSchedule)

        expect(file).toBe("Topic B")
    })

    test("Should treat Feb 29th as 28th on non-leap years", () => {
        const mockDate = new Date("2023-04-15")
        mockToday(mockDate)

        let testSchedule: FeaturedEntryType[] = [
            { startDate: "01-01", topicName: "Topic A" },
            { startDate: "02-29", topicName: "Topic B" },
        ]
        const file = getFeaturedTopic(testSchedule)

        expect(file).toBe("Topic B")
    })

    test("should ignore entries with invalid dates that can't be parsed", () => {
        const mockDate = new Date("2023-11-20")
        mockToday(mockDate)

        let testSchedule: FeaturedEntryType[] = [
            { startDate: "invalid", topicName: "Topic A" },
            { startDate: "09-02", topicName: "Topic B" },
            { startDate: "50-15", topicName: "Topic C" },
        ]
        const file = getFeaturedTopic(testSchedule)

        expect(file).toBe("Topic B")
    })
})
