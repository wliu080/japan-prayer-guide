import fs from "fs";
import path from "path";
import i18nConfig from "../next-i18next.config.js";

// The file structure of the other (non-EN) locales should all still match, we just need a folder to scan through
const staticPageDirectory = path.join(process.cwd(), "public/locales/en/topics");

type StaticPathWithLocaleType = {
    params: {
        topicPage: string;
    };
    locale: string;
};

function getTopicPageIds() {
    const fileNames = fs
        .readdirSync(staticPageDirectory, { withFileTypes: true })
        .filter((fsDirent) => fsDirent.isFile() && fsDirent.name.endsWith(".json"))
        .map((file) => file.name.substring(0, file.name.length - 5));

    // Returns an array that looks like this:
    // the attr under params HAS TO MATCH what is in [<this name>].tsx
    // [
    //   {
    //     params: {
    //       topicPage: 'ancestor-veneration'
    //     }, locale: "en"
    //   },
    //   {
    //     params: {
    //       topicPage: 'ancestor-veneration'
    //     }, locale: "ja"
    //   }
    // ]

    let paths: StaticPathWithLocaleType[] = [];
    const configLocales = i18nConfig.i18n.locales;

    fileNames.map((fileName) => {
        configLocales.forEach((lang) => {
            paths.push({
                params: {
                    topicPage: fileName.replace(/\.md$/, ""),
                },
                locale: lang,
            });
        });
    });

    return paths;
}

export { getTopicPageIds };
