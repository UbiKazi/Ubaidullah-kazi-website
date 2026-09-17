# Maintenance guide

## Add your OneDrive links

1. In OneDrive, right-click a series folder → **Share** → **Anyone with the link can view** → **Copy link**.
2. Paste it into `src/config/library-links.ts` against that series.
3. For a single document, set `documentUrl` on the item in `src/content/work.ts`.

Buttons change automatically:

- document link set → **Open document**
- only the folder link set → **View in library**
- neither set → **Full document on request** (not clickable)

The build rejects anything that is not a OneDrive/SharePoint URL.

## Add a work item

1. Put the source PDF (or the Excel file) in a local `source-docs/` folder. It is git-ignored and never deployed.
2. Add a line to `JOBS` in `scripts/make_thumbs.py` with the file name, page number and width, then run `npm run thumbs`.
3. Copy an existing entry in `src/content/work.ts` and edit it:
   - `tier`: `featured` (gets a breakdown page — add `detail` and `order`), `selected`, or `library`
   - `classification`: `public-analysis`, `simulated`, `educational`, `personal-publication`, `archived`, or `hold` (never published)
   - `disclaimer`: one of the keys in `src/lib/classification.ts`
4. Only use figures that appear in the document. Optional fields hide when empty; never type placeholders.

Search, filters, series pages, the sitemap and the homepage update on their own.

## Add a series

Add it to `SeriesId` in `src/content/types.ts`, to `src/content/series.ts`, and to `src/config/library-links.ts`. Update the "12" in the homepage KPI tile (`src/views/HomeView.tsx`) and the "12 series" line in `src/components/SiteMap.tsx`.

## Add a Term of the Week

Add an entry at the top of `src/content/terms.ts`. The newest term appears on the homepage and on Insights.

## Add an article

Add an entry to `articles` in `src/content/lab.ts`. Give it a `url` for Medium or LinkedIn pieces. The empty "in preparation" panel disappears once the first article exists.

## Update experience

Edit `src/content/experience.ts`. For roles with unconfirmed dates, keep `showDates: false`; add `start`/`end` and set it to `true` when confirmed. Leave `end` out for "From …", set it to `null` for "… – present".

## Update the CV button

Set `cvUrl` in `src/config/site.ts` to a public PDF link. Until then the résumé page offers **Request the full CV** by email.

## Before every deploy

`npm run build` runs `scripts/check-content.mjs` first. It fails on `[X]`, `TBD`, template placeholders, missing thumbnails or non-OneDrive library URLs.

## Open items to confirm

- **CRISIL Ratings:** dates and 2–4 publishable bullets (`src/content/experience.ts`, id `crisil`).
- **Mentorship:** organisation, title, dates, and any real participant counts (add as `benchmarks`).
- **Uber AI Solutions:** add an `end` date if the engagement has finished.
- **Apple model:** the workbook cover says capital returns are modelled at ~115% of net income; the report says ~90%. Align the two documents before sharing both.
- **GenAI filter:** it appears automatically once a work item includes the `genai` discipline.
