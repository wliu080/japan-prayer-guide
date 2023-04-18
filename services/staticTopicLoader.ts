import fs from "fs";
import path from "path";

// The file structure of the other (non-EN) locales should all still match, we just need a folder to scan through
const staticPageDirectory = path.join(process.cwd(), "public/locales/en/topics");

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
    //     }
    //   },
    //   {
    //     params: {
    //       topicPage: 'toolkit'
    //     }
    //   }
    // ]

    return fileNames.map((fileName) => {
        return {
            params: {
                topicPage: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export { getTopicPageIds };
