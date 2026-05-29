---
id: weekly-deliverables-skill
display_name_ar: "Skill: Deliverables الأسبوعية للعميل"
display_name_en: "Weekly Client Deliverables Skill"
category: reporting
version: 1
source_episode: 41
episode_uses: [41]
contributors:
  - lotfy
---

---
name: weekly-client-deliverables
description: Generates the full weekly client deliverable bundle — formatted Excel report, PowerPoint summary, Google Drive upload, and Slack notification — from raw weekly campaign performance data. Use whenever the user provides weekly campaign data and asks for client deliverables, weekly report, weekly bundle, or "deliverables الأسبوع".
---
# Weekly Client Deliverables
## When to use this skill
Trigger when the user provides weekly campaign performance data (CSV, pasted table, or referenced spreadsheet) AND asks for the client weekly deliverable package. Common phrasings:
- "اعمل deliverables الأسبوع لـ [client]"
- "weekly report لـ [client]"
- "اطلع الباكدج الأسبوعي"
## Required inputs (ask if missing)
- Client name (used for Drive folder and Slack channel routing)
- Week range (e.g., "17-23 May 2026" or "Week 21")
- Raw campaign data (campaign name, spend, impressions, clicks, conversions; CPA and CTR optional — calculate if missing)
- Account manager Slack handle (optional, for @mention)
- Brand colors hex codes (optional, defaults to neutral if absent)
- Currency (default: USD; respect what's in the data)
## Output sequence — run in order, do not skip steps
### Step 1: Normalize the data
- Detect column names regardless of variant (CPA / Cost per Conversion / CAC → treat as CPA; CTR / Click Through Rate → CTR; Spend / Cost / Amount Spent → Spend).
- Compute missing metrics: CPA = Spend / Conversions, CTR = Clicks / Impressions * 100.
- Detect currency from data; default to USD if absent.
- Flag any row with zero impressions or zero spend as "paused" — keep in data but exclude from averages.
### Step 2: Build the Excel report
Use the xlsx skill at /mnt/skills/public/xlsx/SKILL.md
Tabs (in this order):
1. "Summary" — single KPI block: Total Spend, Total Conversions, Avg CPA, Avg CTR, week range, client name. If previous week data is provided, show delta % next to each KPI.
2. "Campaigns" — full table sorted by Spend desc. Columns: Campaign Name, Spend, Impressions, Clicks, CTR, Conversions, CPA, Status.
3. "Insights" — 3-5 bullet points explaining the biggest shifts this week (best/worst performer, biggest delta vs previous week, any campaign exceeding CPA target).
Formatting rules:
- Header row: bold, dark navy fill (#1F2937), white text.
- Currency columns: thousands separator + currency symbol.
- CTR column: percentage with 2 decimals.
- Conditional formatting on CPA column: red fill if value > 1.2 × column average, green fill if value < 0.8 × column average.
- Freeze top row on all tabs.
- Auto-size columns.
File name: "[client name]_Weekly_Report_[week range].xlsx"
### Step 3: Build the PowerPoint summary
Use the pptx skill at /mnt/skills/public/pptx/SKILL.md
5 slides (strict count):
1. Cover — "Weekly Performance Report" / [client name] / [week range]. Centered, clean typography.
2. KPI Snapshot — 4 large number tiles: Spend, Conversions, CPA, CTR. Each with the weekly delta arrow (▲ green / ▼ red) if previous week provided.
3. Top Performers — horizontal bar chart of top 5 campaigns by Conversions, labeled with CPA.
4. Underperformers — horizontal bar chart of campaigns with CPA above the weekly average × 1.2, labeled with delta vs average.
5. Next Week Priorities — 3 bullet points derived from the Insights tab (action-oriented: "زود budget على X", "أوقف Y", "اختبر creative جديد على Z").
Design:
- Use brand colors if provided. Otherwise: dark navy (#1F2937) for headers, neutral grey for body, single accent color (#3B82F6) for charts.
- Minimal text per slide — no paragraph blocks. Tiles, charts, and short bullets only.
- Use 16:9 widescreen.
File name: "[client name]_Weekly_Summary_[week range].pptx"
### Step 4: Upload to Google Drive
Use the Google Drive MCP.
Path: "Clients/[client name]/Weekly Reports/[week range]/"
- Create folders if they don't exist.
- Upload both the .xlsx and .pptx files.
- Get the shareable links of both uploaded files.
If Drive MCP is unavailable, do not skip silently — output a clear note: "Drive MCP غير متصل. الملفات اتعملت محلياً، ارفعها يدوياً على: [path]" and continue to Step 5 with local file names instead of links.
### Step 5: Post Slack summary
Use the Slack MCP.
Channel: default "#client-[client-name-lowercased-with-dashes]". If a different channel is specified in the request, use it.
Message format:
```
📊 Weekly Report — [client name] — [week range]
• Spend: [total] [currency] ([delta vs last week])
• Conversions: [total] ([delta])
• Avg CPA: [value] ([delta])
[Headline insight in one sentence — the most important thing about this week]
Next week priority: [single sentence from the Priorities slide]
Excel: [Drive link]
Deck: [Drive link]
cc [account manager handle if provided]
```
If Slack MCP is unavailable, output the message as text in the chat with a note: "Slack MCP غير متصل. الـ message جاهز للصق يدوي."
### Step 6: Final confirmation in chat
Reply to the user with:
- ✓ Excel created (file name + Drive link)
- ✓ PowerPoint created (file name + Drive link)
- ✓ Drive folder used (path)
- ✓ Slack message posted to (channel) — or "ready to paste" if MCP unavailable
- Any warnings (missing data, MCP failures, fallback paths used)
## Constraints
- Never invent numbers. If a metric is missing and can't be calculated from raw inputs, write "—" in the cell and flag in Insights.
- Never skip a step silently. If a step fails, surface the failure and continue with fallback.
- Keep the Slack summary under 8 lines including links.
- Currency symbol must match the data's currency.
