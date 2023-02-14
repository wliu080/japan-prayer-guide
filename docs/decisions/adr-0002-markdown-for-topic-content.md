## ADR-0002 - Decide on whether to use markdown for topic content

### Context

A core requirement for phase 1 for the individual topic pages is:
- easy to edit by an editor without significant dev effort
- only contains text, bible verses, images, inforgraphics

In the prototype this was achieved via use of react-markdown to render the content block itself. Different pages could theoretically use different templates which render the md in different layouts, and this would keep the content in a separate file just for editors to modify.

2023/02/14 - scope update: new topic pages are not expected to be changed / added as often as just updating text, so an easy way for editors to add pages should not be the main priority, but rather ease of use for editors. CONFIRMED with Sarah

### Decision

~Use markdown for topical content sections. Note that pending designs for pc, a decision will not be made here / at this time regarding the use of separate templates for differing layouts.~

A singular file type (JSON) will be the format of choice for topic text content to be aligned with localization. There will not be a separate format for topics vs website text.
Making it easy for editors to update existing text will be priority over ability to add new topic pages.

### Status

✅ CONFIRMED 2023/02/14, note that if the github direct edit editorial flow doesn't work a separate decision record will be made to address *how* we do the editorial flow, rather than the desired file format desired for topic content

### Consequences

Positive: 
- Keeps files that editors may want to touch separate from the rest of the code
- Pages can be generated just from the markdown (+ some additional metadata)

Negative:
- Layouts are somewhat restricted with markdown


### Additional Information
2023/02/14 - Suggestion raised to keep it all to json so there is a consistent format for editors to work with