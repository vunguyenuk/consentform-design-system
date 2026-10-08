# ElevenLabs → ENT UI V2

Visual audit performed against the user's logged-in ElevenLabs app on October 8, 2026. Source: https://elevenlabs.io/app. The implemented edition is a local ENT prototype, with ENT labels, fictional records and simulated integrations.

## Inspected views

Home, Voices, Studio, Flows, Chat, Assets, Text to Speech, Voice Creation, Sound Effects, Image & Video, Voice Isolator, Voice Changer, Music, Speech to Text, Dubbing, Audiobooks, Developers, Settings and Subscription. Settings Workspaces and Connected Apps were also inspected.

Interaction surfaces inspected: profile menu, theme submenu, Light/Dark variants, sort/select menus, Voices filter popover, Studio new-project menu, upload panels, view switches, tabs and the Update Given Name popup. Creating paid content, submitting uploads, inviting real people, changing security and buying subscriptions were not part of the visual audit.

## Measured foundations

| Element | Observed source | ENT implementation |
| --- | --- | --- |
| Body/navigation | Inter 14/20; regular or medium controls | Shared V2 typography |
| Page heading | Waldenburg Regular 24/30 | ENT page titles |
| Hero heading | Waldenburg Regular 28/36 | Home and Help |
| Foreground | #0F0F10 Light; #FFFFFF Dark | Semantic text and primary button |
| Background | #FFFFFF Light; #0F0F10 Dark | App and table surface |
| Secondary text | #00000087 / #FFFFFF87 | Labels, supporting copy |
| Border | #00000013 / #FFFFFF13 | Dividers and controls |
| Neutral hover | #0000000B / #FFFFFF0B | Nav, tabs, menu options |
| Sidebar | 256px; 32px rows; 10px corners | ENT navigation |
| Header | 50px; search 256×32, 12px corners | Header + edition controls |
| Button | 32/36/40px; 8/10/12px corners; 10/12/16px horizontal padding | Shared button variants |
| Search/input | 36–40px; 10–12px corners; 12px padding | ENT search and forms |
| Select menu | 4px outer padding, 32px options, 8px option corners | Shared keyboard-enabled select |
| Dropdown | 10px corners, natural layered shadow | Select and action menus |
| Card | 16px general; 20px upload; 24px feature/modal | V2 cards and forms |
| Table | White/plain header; muted 14px text; thin row lines; 58–71px source rows | ENT 64px rows with 12px padding |
| Modal | 24px corners; 20px edit-popup padding; 36px actions | ENT review/editor popup |

Dark mode was read from the source UI. It uses alpha-white neutral tokens, a #161617 sidebar and darker card/popover surfaces. The source account theme was restored to Light after inspection.

## Page mapping

| ElevenLabs pattern | ENT workflow |
| --- | --- |
| Home hero, prompt island and 10 shortcuts | Workspace search and ENT shortcuts |
| v4 feature banner + original orb composition | Census/intake workflow banner |
| Recents / Quickstarts | Recent tasks and workflow entry points |
| Assets / Dubbing table | Facilities, Census, Users, Activity and Intake queue |
| Voices search/filter controls | ENT search and filters |
| Dubbing / Voice Isolator upload panel | Census and face-sheet intake |
| Studio lists and card layouts | Tasks, Notes and local workflow cards |
| Text to Speech two-pane workspace | ENT messages and document review |
| Settings tabs, form controls and modal | Profile/workspace preferences and demo integrations |
| Developers / Subscription cards | Component gallery and demo plan/settings cards |

## Original assets

- Waldenburg WOFF2 files, observed from source page assets.
- Original app SVG icon payloads in `eleven-assets.js`.
- Six original orb WebP files from `/public_app_assets/image/v4-banner/`.
- Header background from `/public_app_assets/image/v4-launch-banner-bg.webp`.

Original source icon paths are reused. ENT feature labels, navigation mapping and functionality are adapted to the domain. No ElevenLabs account content, private project media or generated audio is used as ENT data.

## Implementation

`v2.js`: edition switch, Home, source-based shell, workspace search, component gallery and route mapping.

`v2.css`: scoped source tokens, shared component sizes, dark theme and viewport adaptation.

`kit-pages.js`: shared local behavior for messages, tasks, notes, settings and Help. The Figma edition uses original Cliently page assets; UI V2 uses ElevenLabs icons and its own visual tokens.

All activity remains in the current demo session, except the color-theme preference. Edition choice is retained in session storage. Production integrations are outside this prototype.
