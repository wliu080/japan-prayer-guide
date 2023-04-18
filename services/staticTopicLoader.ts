import fs from "fs";
import path from "path";

const staticPageDirectory = path.join(process.cwd(), "pages/topics");

function getTopicPageIds() {
    const fileNames = fs
        .readdirSync(staticPageDirectory, { withFileTypes: true })
        .filter((fsDirent) => fsDirent.isDirectory())
        .map((fsDirent) => fsDirent.name);

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

async function getTopicMetadata(topicPage: String) {
    const fullPath = path.join(staticPageDirectory, `/${topicPage}/metadata-${topicPage}.json`);
    const fileContents = fs.readFileSync(fullPath);
    const metadata = JSON.parse(fileContents.toString());

    // Combine the data with the markdownPage
    return metadata;
}

export { getTopicPageIds, getTopicMetadata };
