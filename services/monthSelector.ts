import schedule from "../public/featuredTopics.json";

export default function getFeaturedTopic(date: Date): string {
    if (date.getMonth() === 1) {
        return "a";
    }
    return "";
}
