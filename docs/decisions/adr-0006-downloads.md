## ADR-0006 - Decide on how we will handle downloadable files

### Context

One of the requirements for phase 1 is to have resources available to download, such as articles, video, audio, etc. In general, in the downloads section, we want a user to be able to:
- Download all files organized by topic
- Download all files organized by location
- Browse individual audio files, and download individual ones
- Browse individual photo files, and download individual ones
- Browse individual PDF files, and download individual ones
- Browse individual video files, and download individual ones
- Download all media files

However, these need to be hosted/kept somewhere, and where they will be kept will greatly impact how they are implemented on our site.

Some possibilities include:
- Keep files in our public folder, using Vercel to host and hold these files
- Find a separate hosting website to use, such as Cloudflare or Box or Google Drive

If going with the first option, we need to figure out how we want to keep access to our files in the codebase. For example, would it be in
/public/audio/topic/TOPIC_NAME-FILE_NAME? or /public/topic/TOPIC_NAME/audio/FILE_NAME .. etc

### Decision

For now, we can keep the media files in the public folder. Overtime as the project goes on and we get more of an understanding of how large files will be and how much will need to be held, we can implement a CDN to handle our media files if need be.

Regarding the code structure, since one requirement is that a user must be able to download all content per topic or location, they should be kept by topic or location. So structure will be:
/public/topic..
- ../TOPIC_NAME/audio/FILE_NAME
- ../TOPIC_NAME/video/FILE_NAME
- ../misc/audio/FILE_NAME
- etc.

The misc is for resources without a topic.

### Status

PROPOSED

### Consequences

Pros:
- A CDN can be incrementally added to a project, if use of one is needed
- A CDN may not be needed, and files kept in /public would be simple

Cons:
- Implementing a CDN could potentially could have a slight learning curve, while working in the middle stages of the project


### Additional Information

Potential hosting sites:
- Cloudflare
- Box
- Google Drive
