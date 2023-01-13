# Phase 1 Notes (Phase 1, not MVP1)

## Project Motivation
Provide prayer resources to foster international 
"Gift to two groups":
- greater international christian network
- to Japanese missionaries

## Scope
The following sections document the current scope for phase 1 in terms of pages, features & functionality as per the review meeting on 2023/01/12. Subsequent decision / scope changes are expected and will be captured in /docs/decisions. 
Designs are not yet finalized, please refer to project Figma diagrams for look and feel.

## General Pages
#### Main / Landing Page
- Hero image with button to /topics
- Interesting fact text block, with button to /topics
- Solution - Prayer text block
- Featured article component
	- Display a different topic per (month? TBC)
	- card-like view of the selected topic
		- Key Image + Title
		- 'Pray for...' component
		- Button to read full article + link to /topics
- Downloads / Resource library prompt - image with button to /downloads
- Purchase book prompt - Image with sep buttons for diff sellers (redirect) + link to ebook
- Mission Statement (either text block or embed video)

#### Purchase page
- picture of book
- infographics & text content
- animated image of someone flicking through the book
- sample pages flipbook style carousel? component
	- on desktop open book view 2 pages 
	- on mobile (1 page by 1 page)
- sticky footer at bottom to purchase (US/Canada + International buttons)
- all the purchase links are links to sellers, **no payment processing to be done by site**

#### About us page
- mostly text blurbs / image
- stat cards e.g, 'written by: X missionaries and leaders', 'collaboration from: Y orgs/countries'

#### Downloads page
- Card links to filter by topics or file type (all audio, photos, pdfs, videos)
- or just download all (??)

## Topics
### Topic Nav
- picture with mission
- scrollTo sticky header for each category: 'Culture and society' & 'Church and missions'
- Each section has a gallery of a compact card view (image + title)
- in compact card view we need to limit display of title to 2 lines (truncate to ...)

### Individual topic page
- picture with title
- 'pray for...' component
- scrollTo sticky header for each section: 'About this topic' / 'Prayer Points' / 'Downloadables'
- About this topic (likely to be markdown?). 
	- Solution must cater for different possible layouts
	- Must be easy for a non-technical person to update / change
	- Infrequent updates expected (a few times a year?)
	- Mix of text / images / infographics / videos (TBC for phase1)
- Prayer Points (detailed view)
	- video / audio of pray along
	- 'pray for...' component but with download icon
- Downloadables
	- buttons to download all sound / photos / pdfs / videos for the article
	- download all link
	- link to downloads page

## General Features
- Responsive design
- Built with framework for supporting additional languages
- Built with accessibility support in mind (scope to be confirmed in a decision)
- Header - sticky with 'hamburger expand' (mobile), links to the main pages: topics, downloads, purchase, about us 
- Footer - sitemap, icon links, copyright

## Unconfirmed / Pending Features
- Language toggle (in footer)
- Sign up for updates (in footer) - likely to be replaced with some simple suggestions / contact us form
- Desktop look and feel (to be confirmed)
- Set a reminder link in the individual topic page
