# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### 💼 Other

- Update layout.html

Update website masthead and global alert to reflect 1.20.4 upgrade - removed global alert text about server store being closed
- Website text updates

Update text to reflect 1.20.4 upgrade, and hide links to the Server Store for now. Also fixed broken links on the homepage leading to the Start Here and About pages.
- Create dependabot.yml
- Fix avatars not appearing on "About" page

Fixed the issue of player avatars not appearing on the "About" page. This was due to a change with page links which meant that corrections were required for the images' file locations
- Create NHpackJune24-public.zip
- Create NHpackJune24-public.zip
- Delete NHpackJune24-public.zip
- Owner change
- Typo
- Changes staff roles
- Add back-to-top button
- Merge branch 'main' of https://github.com/HarlonServer/harlon-website
- Upgrade to 11ty 3.0.0
- Remove upgrade helper
- Create mcpfp - jt15s donator.png
- Update mcpfp - Dirt0066.png
- Create mcpfp - Keonian_ admin.png
- Update about.html
- 11ty generated
- Update main.yml

Update GitHub Actions parameters after the deprecation of some v3 actions in January 2025. This fixes the issue of the site not automatically building after changes are committed.
- Update main.yml

Part 2 of GitHub Actions fixes - turns out there is no v4 for upload-pages-artifact - whoops!

More info about these changes here: https://github.com/orgs/community/discussions/152695
- Update about.html
- Update about.html
- Remove duplicate
- Update about.html

fixed former staff members not being in alphabetical order
- Create NHpackMay25-public.zip
- Update NHpackMay25-public.zip
- Create NHpackMay25b-public.zip
- Delete NHpackMay25-public.zip
- Bump @11ty/eleventy from 3.0.0 to 3.1.0

Bumps [@11ty/eleventy](https://github.com/11ty/eleventy) from 3.0.0 to 3.1.0.
- [Release notes](https://github.com/11ty/eleventy/releases)
- [Changelog](https://github.com/11ty/eleventy/blob/main/docs/release-instructions.md)
- [Commits](https://github.com/11ty/eleventy/compare/v3.0.0...v3.1.0)

---
updated-dependencies:
- dependency-name: "@11ty/eleventy"
  dependency-version: 3.1.0
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] <support@github.com>
- Merge pull request #5 from HarlonServer/dependabot/npm_and_yarn/11ty/eleventy-3.1.0

Bump @11ty/eleventy from 3.0.0 to 3.1.0
- Create NHpackMay25c-public.zip
- Create NHpackMay25d-public.zip
- Create NHpackMay25e-public.zip

Upload an updated resource pack that adds support for Metro Line M5 in preparation for its imminent opening.
- Update NHpackMay25e-public.zip

Removed DS Store file to resolve issues with X Stock failing to appear on some devices
- Create mcpfp - MeneerDePeer-patron.png
- Create mcpfp - MeneerDePeer-admin.png
- Update about.html

## [3.1] - 2024-01-30

### 💼 Other

- Add disclaimer to comply with Minecraft Usage Guidelines
- Remove ".html" from links and URLs
- Update about.html

- moved Howbe to Former Staff
- added Kovacs_ to Builders
- fixed order in Former Staff (alphabetical)
- Merge branch 'main' of https://github.com/HarlonServer/harlon-website
- Revert "Merge branch 'main' of https://github.com/HarlonServer/harlon-website"

This reverts commit 2cfc4f7fa13ad0ebb49395802d9de6335070b77a, reversing
changes made to 756396c30a70e96ecb757339b4574d6f607454b6.
- Revert "Revert "Merge branch 'main' of https://github.com/HarlonServer/harlon-website""

This reverts commit b4338e0b064c0faaf6094c764366ff84574c5ae3.
- Update about.html

- moved Howbe to Former Staff
- added Kovacs_ to Builders
- fixed order in Former Staff (alphabetical)
- Merge pull request #3 from HarlonServer/about-update

Update about.html
- Install normalize.css
- Remove normalize.css from npm packages
- Add empty alt to logo (to denote decorative element) to improve screen reader accessibility
- Add viewport meta tag
- Fix broken links in header
- 11ty site generation
- Small fixes
- Update vote.html
- Update layout.html
- Update about.html
- Update index.html
- Update start-here.html
- Update vote.html
- Update layout.html

## [3.0] - 2023-12-19

### 💼 Other

- Install 11ty and build site for first time
- Remove HTML Boilerplate documentation
- Enable 11ty to use images + CSS
- Create layout

Create site layout and transition Start Here page to use the layout. Also enable 11ty to use the favicons located in the root directory.
- Transition all pages over to 11ty format

Transition all site pages (except the "transport.html" page which is currently unused and blank) to the 11ty format, which makes use of the sitewide layout specified in the "_includes" folder.
- Attempt to implement back to top button
- Add build script

Also attempt to fix back to top button not appearing
- Update credits (mainly to include 11ty)
- Add season's greeting message
- Update Twitter link to refer to X
- Add message about server store being closed.
- Make edits to wording of site-wide alert
- Merge pull request #2 from HarlonServer/11ty

Transition site to Eleventy (11ty)
- Rename build.yml to main.yml
- Update footer

Edit footer to reference 11ty, HTML5 Boilerplate and update the NSW Design System link to point to the NSW Design System website.

## [2.5] - 2023-11-30

### 💼 Other

- Swap out hockey image on homepage for another one
- Updated channel names in New Player Guide
- Metro/Commuter Destination Boards (custom chars)
- Added new fonts for departure boards
- Added shader to fix lead bugs with TCC

https://bugs.mojang.com/browse/MC-212629
https://www.spigotmc.org/resources/tc-coasters.59583/
- Update masthead and footer to reflect 1.19 upgrade + delete unnecessary npm package related files
- Update vote.html

Remove voting limits info for each voting site and add information on how server voting website voting limits are based on the website's timezone, not the player's.
- Replace image used on Start Here hero

Replace image used on Start Here hero banner as the old image is now being used as the hero banner image for the homepage of the Parliament of Harlon website.
- Add files via upload
- Add section IDs + edits to New Player Guide

- Add section IDs to pages with multiple sections
- Minor rewording for New Player Guide plus a correction to the amount of money players start off with - 2000 pounds, not 2500
- Add an "on this page" navigation menu on the "Start Here" page to help people find the New Player Guide
- Fix missing "<" in closing <li> tag
- Add files via upload
- Add files via upload
- Add new donors + move "Former Server Staff" section
- Add files via upload
- Moved file
- Delete server files

Deleted server files as part of a migration of these to a private storage space.
- Update about.html

Change references to "donor/donation" to refer to "patrons" as part of a change in the role name to comply with the Minecraft EULA
- Update start-here.html

Change reference to Donator rank to Patron rank
- Add info on GPS system
- Add command example
- Update start-here.html
- Update about.html
- Add files via upload
- Update about.html
- Some minor changes in about.html
- Update mcpfp - MeneerDePeer.png
- Revert "Update mcpfp - MeneerDePeer.png"

This reverts commit 5c428220946f76b8ac6b85faf2b826055385fea4.
- Update mcpfp - meneerdepeer.png
- Add files via upload

## [2.0] - 2023-01-01

### 💼 Other

- Update FUNDING.yml

Replace with new redirect to donation page/server store
- Add files via upload
- Delete NHpackV11.9.zip
- Add files via upload
- Delete NHpack-November22.zip
- Uploaded new resource pack
- Add files via upload
- Add files via upload
- Voting Page Banners

For voting pages
- Apply NSW Design System

Add HCS branding stylesheet, and start rebuilding the website homepage with NSW Design System components.
- Adopt NSWDS

Adopt the HCS variant of the NSW Design System, revamp homepage to be more functional rather than promotional & start work on a revamped Start Here page that aims to promote the server's highlights.

Deleted the forms and links and FAQ pages as they are no longer necessary. Forms and links have been moved to the homepage whilst the FAQ has been merged with the new player guide (which is yet to be published on the website).
- Add more images
- Add image to hero banner
- Update start-here.html

Change OpenGraph content to reflect page content
- Navbar tweaks, revamp Hockey Resource Pack page

Add link to Start Here page in navbar. Revamp Hockey Resource Pack page, add MacOS instructions, and change OpenGraph embed image for that page.
- Add New Player Guide

Add (and format) the New Player Guide.
- Remove unnecessary pages

Remove unnecessary pages related to the New Player Guide as that has already been consolidated into the Start Here page.
- Split up help-us page

Split up the old Help Us page into two pages:
A new page called "Vote" with links to server voting pages (which https://vote.harlonserver.net will redirect to)
A section in the New Player Guide called "Help Us" with info on the server store and server team opportunities.
- Get site closer to beta release

- Fix up licensing by adding 3rd party licenses, customising license to reflect copyright belonging to HCS
- Adjustments to OpenGraph previews on some pages, changing descriptions and fixing up images
- Changing the links in the footer to link straight to the Vote page rather than going through vote.harlonserver.net
- Adding the Transport page, which will remain blank until HarlonianNational becomes a thing.
- The "Getting Around" Link in the navbar has been changed to link straight to HarlonTransit's website and it will remain that way until HarlonianNational comes into being.
- Comment out any Government related links in the website (i.e., in the navbar) - these will not be needed until states and government websites come into being
- Start work on the Credits page
- Add accordions to the About page and add sections for Server Staff (with images populated), Former Staff and Donors.
- More changes

- Fix 404 page links
- Continue work on Credits page, particularly in the plugins section
- Remove the social media account requirement info for TopG on the Vote page as TopG now offers verification via hCaptcha
- Add references to the Lumea Isles in the New Player Guide on the Start Here page and on the Server History section of the About page to reflect the opening of Lumea
- Replace all server staff avatars on About page with ones generated by minecraftpfp.com
- Replace dot point list in Donors Hall of Fame on the About page with an avatar grid like the one in the Server Staff section
- Update credits.html

Update references to Material Design Icons to refer to new dynmap icons and add credit to Minecraft PFP tool.
- Update about.html

Add server builders section (yet to have correct avatars and names)
- Update credits.html

Continue populating server plugins table of Credits page
- Add credits for HCS texture/resource pack
- Populate Builders section of About page
- Populate Former Server Staff section on About page
- Indentation cleanup
- Update credits.html

Remove empty placeholder section and fix up credit for HCS texture pack
- Update credits.html

Fix mistake with formatting credit for Christmas Presents plugin, and continue populating server plugin credits table.
- Update start-here.html

Minor formatting/link tweak
- Finish Server Plugins section of Credits page
- Update start-here.html

- Remove icons from outward links
- Add links to trip planner and mention trip planner in the New Player Guide
- Update start-here.html

Add more trip planner links for Hibbing Ore Mines and Roslagen Tree Plantation
- Update about.html

Move Nexalin to Former Staff section to reflect recent demotion
- Update about.html

Fix formatting issue in Former Staff section on About page
- Update index.html

Edit images on the homepage quick links as requested by @Antlucl
- Edit server store link in footer

Edit the link to the server store in the footer to read "Server Store" instead of "Donate".
- Update index.html

Fix image on homepage
- Update about.html

Update text for consistency
- Merge pull request #1 from HarlonServer/nswds

Implement new website design using the NSW Design System

## [1.0] - 2022-11-03

### 💼 Other

- Add new site

Add the files for the new site
- Update config.json
- Redo site (again)

Site is now using pure HTML, CSS and JS with Bootstrap, with the HTML Boilerplate as a foundation.
- Add favicon, add image + swap out image
- Create FUNDING.yml
- Merge branch 'main' of https://github.com/jt15s/harlon-website
- Remove viewport + specify HTML class and language
- Replace Bootstrap with Minstyle
- Add styling for 404 page and add dark mode to homepage
- Add link to wiki
- Change highlight colour + attempt to add favicon
- Add resource pack page
- Change URL to point to updated resource pack
- Add page for hockey resource pack
- Change CSS font to Manrope
- Attempt to fix OpenGraph image not appearing
- Add more server photos plus MC version on homepage
- Formatting tweaks
- Create transit-1.jpg

Add image of new M5 Metro trains
- Update minstyle.io.css

Update primary colour to match colour of new logo (using the same shade of green as the HarlonTransit logo)
- Update favicons/site logos to use new logo
- Change menu colour to match logo colour
- Update button colours in navbar + add link to resource pack page in navbar on homepage
- Updated navbar links to integrate with existing website pages
- Update footers with other social media accounts
- Remove resource pack page and links to it
- Change homepage hero image
- Create FAQ page
- Add link to new HT website
- Update dynmap.png

Replace dynmap screenshot with a screenshot of the new dynmap.
- Create FAQ and Forms and Links Pages

Create an FAQ page and a Forms and Links Page to replace the Forms and Links page on the old website.
- Create new "Help us" page with voting page links
- Delete voting.html

Delete unneeded page
- Update stock-exchange.jpg

Reduce image resolution and file size it was too big and was loading slowly online
- Create info guide and credits page + edit help us page
- Homepage change + new image

Change homepage navbar to link to new Credits page + add new image
- Update help-us.html

Make voting/donation links open in new tab, and merge @Antlucl's changes on the live version of the website.
- Make links open in new tab, attempt to fix embed images
- Create CNAME
- Import website files from previous host (One.com)
- Update link to store

<!-- generated by git-cliff -->
