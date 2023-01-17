## ADR-0002 - Decide on whether to use markdown for topic content

### Context

A core requirement for phase 1 for the individual topic pages is:
- easy to edit by an editor without significant dev effort
- only contains text, bible verses, images, inforgraphics

In the prototype this was achieved via use of react-markdown to render the content block itself. Different pages could theoretically use different templates which render the md in different layouts, and this would keep the content in a separate file just for editors to modify.

### Decision

Use markdown for topical content sections. Note that pending designs for pc, a decision will not be made here / at this time regarding the use of separate templates for differing layouts.

### Status

PROPOSED

### Consequences

Positive: 
- Keeps files that editors may want to touch separate from the rest of the code
- Pages can be generated just from the markdown (+ some additional metadata)

Negative:
- Layouts are somewhat restricted with markdown


### Additional Information
