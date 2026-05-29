---
id: campaign-launch-prompt
display_name_ar: "إطلاق كامبين عبر Notion + Asana + Slack"
display_name_en: "Campaign Launch Orchestrator"
category: campaigns
version: 1
source_episode: 29
episode_uses: [29]
contributors:
  - lotfy
placeholder_marker: "[الصق الـ URL أو اكتب اسم الصفحة بالظبط]"
example_input: |
  - صفحة الـ brief في Notion: "Q1 2026 — Nazafa+ Spring Sale Launch" (workspace: Marketing/Campaigns/2026)
  - الـ Project في Asana: "Nazafa+ Spring Sale 2026"
  - الـ Channel في Slack: #campaigns-launch
  
---

عايز أطلق كامبين جديد. نفّذ الـ workflow التالي بالترتيب:

═══════════════════════════
المتغيرات (عدّلها قبل الإرسال):
═══════════════════════════
- صفحة الـ brief في Notion: [الصق الـ URL أو اكتب اسم الصفحة بالظبط]
- الـ Project في Asana: [اكتب اسم الـ project]
- الـ Channel في Slack: [اكتب اسم الـ channel، مثلاً: #campaigns-launch]

═══════════════════════════
الخطوة 1: اقرا الـ brief من Notion
═══════════════════════════
افتح الصفحة المذكورة فوق وطلعلي ملخص:
- اسم الكامبين
- الهدف (Awareness / Leads / Sales / Engagement)
- الميزانية الإجمالية
- تاريخ البدء وتاريخ الانتهاء
- المنصات (Meta / TikTok / Google / إلخ)
- الـ owner الأساسي (لو موجود)

لو أي عنصر من دول ناقص في الـ brief، وقّف هنا واسألني قبل ما تكمل.

═══════════════════════════
الخطوة 2: اعمل tasks في Asana
═══════════════════════════
في الـ project المذكور فوق، اعمل الـ tasks دي كقايمة أساسية لأي إطلاق:

1. مراجعة وتجهيز الـ creatives (sections: Pre-Launch)
2. كتابة الـ ad copies مع variants (sections: Pre-Launch)
3. تجهيز الـ landing page والـ tracking/pixels (sections: Pre-Launch)
4. setup الكامبين على الـ ad platforms (sections: Launch)
5. QA review قبل الـ go-live (sections: Launch)
6. monitoring أول 24 ساعة بعد الإطلاق (sections: Post-Launch)
7. أول optimization review بعد 72 ساعة (sections: Post-Launch)

لكل task:
- العنوان واضح ومحدد بالكامبين (مش generic)
- الـ description فيه السياق المأخوذ من الـ brief (إيه المنتج، الجمهور، الهدف)
- الـ deadline محسوب بالعكس من تاريخ بدء الكامبين:
  • Pre-Launch tasks → خلال 5 أيام قبل البدء
  • Launch tasks → في يوم البدء أو قبله بيوم
  • Post-Launch tasks → بعد البدء بـ 1 و 3 أيام
- لو الـ brief فيه assignees لكل دور (creative/copywriter/media buyer)، حطهم. لو لأ، سيب الـ assignee فاضي واكتب في الـ description: "@team to assign"
- استخدم labels مناسبة (creative, copy, tracking, media-buying, qa)

بعد ما تخلص الـ tasks، اعرضلي list مختصرة (عنوان كل task + الـ deadline + الـ assignee) وانتظر تأكيدي قبل ما تنفّذ الخطوة 3.

═══════════════════════════
الخطوة 3: ابعت notification في Slack
═══════════════════════════
في الـ channel المذكور فوق، ابعت رسالة بالشكل ده:

🚀 *إطلاق كامبين جديد: [اسم الكامبين]*

• *الهدف:* [...]
• *الميزانية:* [...]
• *تاريخ البدء:* [...]
• *المنصات:* [...]
• *الـ Owner:* [...]

📋 *Tasks في Asana:* [عدد] task اتعملت
🔗 [link للـ Asana project]

@channel يرجى مراجعة الـ tasks المسندة ليكم.

═══════════════════════════
بعد كل خطوة، قولي "خلصت الخطوة [رقم]" + سطر summary، وانتقل للي بعدها.
في النهاية، اديني ملخص نهائي: كام task اتعمل، الـ Slack message اتبعت في أنهي channel، وأي عنصر استلزم تخميني (مثلاً deadline افترضته).
