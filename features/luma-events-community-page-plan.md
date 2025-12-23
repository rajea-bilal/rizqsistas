# Luma events on `/community` (Phase 1 embed, Phase 2 API)

## Confirmed inputs

- Public calendar page: `https://luma.com/rizqsistas`  
  - Calendar slug: `rizqsistas`
  - Calendar API id: `cal-bWONyPJBBOlf4wp`
- Featured event page: `https://luma.com/v4vnrtzg`  
  - Event API id: `evt-m4L20mR1EIKIaGs`

## Phase 1 (ship now): inline embed preview in “Upcoming events”

### Goal

Show an inline “Upcoming events” section on `app/community/page.tsx` with:

- A **preview** (poster/cover image) without leaving the site
- A clear CTA to “View all events” on Luma
- Minimal code that we can later replace with API-driven UI

### Implementation

- Add a dedicated section component (server component), e.g.:
  - `app/community/_components/UpcomingEventsSection.tsx`
- Use **two-tier embed strategy**:
  - **Preferred (calendar embed iframe)**: if we have an embed iframe `src` from Luma Calendar Settings → Embed (admin-provided), render it
  - **Fallback (featured event embed iframe)**: render an event embed that includes the poster + registration UI

#### Embed details

- **Featured event embed URL** (known working pattern from Luma’s examples):
  - `https://lu.ma/embed-checkout/evt-m4L20mR1EIKIaGs`
  - Put inside an `<iframe>` with full width, fixed height, and `loading="lazy"`
  - Include an explicit “Open on Luma” link to `https://luma.com/v4vnrtzg`

- **Calendar embed** (admin-provided):
  - Luma help docs mention “Embed Calendar” is available under Calendar Settings → Embed
  - Store the iframe `src` as `NEXT_PUBLIC_LUMA_CALENDAR_EMBED_SRC` so it can be swapped without code changes

#### Config/env

- `NEXT_PUBLIC_LUMA_CALENDAR_URL=https://luma.com/rizqsistas`
- `NEXT_PUBLIC_LUMA_FEATURED_EVENT_URL=https://luma.com/v4vnrtzg`
- `NEXT_PUBLIC_LUMA_FEATURED_EVENT_ID=evt-m4L20mR1EIKIaGs`
- Optional: `NEXT_PUBLIC_LUMA_CALENDAR_EMBED_SRC=<admin-provided iframe src>`

#### UI behavior + edge cases

- If the iframe fails to load (blocked, network, user’s browser), show:
  - A poster fallback (simple `<Image>` using the event cover URL) + “View events” button
- If the admin later provides the calendar embed src, the calendar iframe replaces the featured event iframe automatically
- Height/responsiveness:
  - Use responsive container and set a conservative height (e.g. 700–900px); cross-origin auto-resize isn’t reliable

## Phase 2 (later): swap embed for API-driven UI (Upcoming + Past, pagination, featured, SEO)

### Requirements

- Luma API requires Luma Plus + API key (server-side) and uses `x-luma-api-key` header
- Base URL: `https://public-api.luma.com`

### Data layer

- Add server route `app/api/luma/events/route.ts` (or internal server util) that calls:
  - `GET /v1/calendar/list-events`
  - Query params support: `after`, `before`, `pagination_cursor`, `pagination_limit`, `sort_column=start_at`, `sort_direction`
- Use server caching:
  - Cache upstream responses (Next `fetch` with `revalidate`, and/or `unstable_cache`) to reduce rate-limit risk

### UI layer

- Replace Phase 1 embed with native components:
  - `UpcomingEventsList` (first N upcoming)
  - `PastEventsList` with “Load more” (cursor-based pagination)
  - Optional “Featured event” card at top
- SEO improvements:
  - Server-render upcoming events list on `/community` (ISR revalidate)
  - Render real `<a>` links to event pages + `<Image>` posters

### Edge cases to handle

- **Timezone**: API times are UTC; display in user’s locale (Intl) and optionally show event timezone label
- **No events**: show empty state + link to calendar
- **Pagination**: handle `has_more` and `next_cursor`
- **Private/unlisted/cancelled events**: filter or label based on fields returned by the API
- **Rate limiting / outages**: fall back to cached data; if still failing show link to calendar
- **Security**: never expose API key to client; keep it in `LUMA_API_KEY` server env

## Admin ask (Phase 1)

- Provide **Calendar embed iframe src** from Luma: Calendars → Settings → Embed → “Embed Calendar”

## Admin ask (Phase 2)

- Confirm Luma Plus and provide API key from: Settings → Developer → API Keys

## References

- Luma embed docs: `https://help.luma.com/p/embed-our-checkout-registration-button-on-your-website`
- Luma API getting started: `https://docs.luma.com/reference/getting-started-with-your-api`
- Luma list events endpoint: `https://docs.luma.com/reference/get_v1-calendar-list-events`


