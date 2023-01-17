## ADR-0005 - Decide on Minimum Baseline of Accessibility Support

### Context

The standard for web accessibility is currently the Web Content Accessibility Guidelines (WCAG) 2. The AAA standard contains over 70 sections of accessibility requirements across 13 categories. Meeting all of WCAG 2 is likely overkill, but at the same time, doing nothing is also not ideal. An acceptable middle ground should be considered and proposed.

Similar to localization support, this is something which we want to have the framework in place for from the start. It has a potentially bigger scope than localization but some of the features are easier to add in later.

### Decision

Bare minimum support for phase 1, with an aim to evaluate against the WCAG 2.2 Level A standard heading into phase 2

### Status

PROPOSED

### Consequences



### Additional Information

Considered options:
- WCAG 2 Level A standard https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=312&currentsidebar=%23col_customize&levels=aa%2Caaa&technologies=smil%2Cflash%2Csl#interruptions
- 'Bare minimum support': 
    - alt-text for images
    - cc for videos
    - keyboard navigation
    - (opt) high contrast mode
    - (opt) aria roles -> needs more research
    - (opt) skip links support for skipping over repetitive link sections

