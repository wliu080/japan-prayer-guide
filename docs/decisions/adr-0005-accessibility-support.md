## ADR-0005 - Decide on Minimum Baseline of Accessibility Support

### Context

The standard for web accessibility is currently the Web Content Accessibility Guidelines (WCAG) 2. The AAA standard contains over 70 sections of accessibility requirements across 13 categories. Meeting all of WCAG 2 is likely overkill, but at the same time, doing nothing is also not ideal. An acceptable middle ground should be considered and proposed.

Similar to localization support, this is something which we want to have the framework in place for from the start. It has a potentially bigger scope than localization but some of the features are easier to add in later.

### Decision

Bare minimum support for phase 1, with an aim to evaluate against the WCAG 2.2 Level A standard heading into phase 2
- alt text for images
- cc for videos
- keyboard navigation
- high contrast color theming
- detailed page titles
- correct HTML tags for headers (for screen readers)

Support for these accessibility features are to be kept in mind with each card and to be pointed out if noticed as part of reviews. In addition, accessibility support will be checked at the completion of each milestone.

### Status

✅ CONFIRMED 2023/02/28

### Consequences



### Additional Information
Useful links:
- Alt-text naming decision tree https://www.w3.org/WAI/tutorials/images/decision-tree/

Considered options:
- WCAG 2 Level A standard https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=312&currentsidebar=%23col_customize&levels=aa%2Caaa&technologies=smil%2Cflash%2Csl#interruptions
- 'Bare minimum support': 
    - alt-text for images
    - cc for videos
    - keyboard navigation
    - (opt) high contrast mode
    - (opt) aria roles -> needs more research
    - (opt) skip links support for skipping over repetitive link sections

- 2023/02/14 suggestion raised for the following:
    - alt text for images
    - cc for videos
    - keyboard navigation
    - high contrast color theming
    - detailed page titles
    - correct HTML tags for headers (for screen readers). 
Refer to basic examples here https://www.audioeye.com/post/accessible-website-design-examples/