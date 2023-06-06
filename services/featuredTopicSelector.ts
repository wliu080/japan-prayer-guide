import schedule from "../public/featured-topics.json"
import moment, { Moment } from "moment"

export type FeaturedEntryType = {
    startDate: string
    topicName: string
}

const getFeaturedTopic = (schedule: FeaturedEntryType[]): string => {
    const today = moment()
    const schedulesByDate = schedule
        .map((entry) => {
            try {
                return {
                    date: convertToDate(entry.startDate),
                    topicName: entry.topicName,
                }
            } catch (error) {
                // skip invalid entries
                return null
            }
        })
        .filter((entry) => entry !== null && entry.date.isValid())
        .sort((a, b) => b!.date.diff(a!.date)) //nb: ! since ts can't infer the filter step has removed nulls

    // since list is sorted in reverse chronological order (e.g 12-03 is before 10-15),
    // the first date we find that is earlier than today is our desired date
    for (let i = 0; i <= schedulesByDate.length - 1; i++) {
        const topicEntry = schedulesByDate[i]
        if (topicEntry!.date.isBefore(today) || topicEntry!.date.isSame(today)) {
            return topicEntry!.topicName
        }
    }
    // if there are no dates before, should wrap back to the largest date (e.g, use the 12-25 date if today is 01-01)
    return schedulesByDate[0]!.topicName
}

const getSchedule = (): FeaturedEntryType[] => {
    return schedule.map((entry) => {
        return {
            startDate: entry["start-month-day"],
            topicName: entry["topic-name"],
        }
    })
}

const convertToDate = (monthDayPair: string): Moment => {
    const today = moment()

    //special case for non-leap year
    if (!today.isLeapYear() && monthDayPair === "02-29") {
        return moment(today.year() + "-02-28")
    }
    return moment(today.year() + "-" + monthDayPair)
}

export { getFeaturedTopic, getSchedule }
