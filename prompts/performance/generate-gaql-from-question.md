---
id: generate-gaql-from-question
display_name_ar: "توليد GAQL من سؤال طبيعي"
display_name_en: "Generate GAQL from Question"
category: performance
version: 1
source_episode: 32
episode_uses: [32]
contributors:
  - lotfy
placeholder_marker: "[اكتب سؤالك هنا — مثال: عايز أعرف الـ keywords اللي ROAS بتاعها على Mobile أعلى من ROAS على Desktop في آخر 30 يوم]"
example_input: |
  عايز أعرف الـ keywords اللي بـ تكسب فلوس على Mobile أكتر من Desktop في آخر 14 يوم. تحديداً، الـ keywords اللي ROAS بتاعها على Mobile أعلى من ROAS على Desktop بنسبة 30% على الأقل، وكان عليها spend > 500 EGP في كل الأجهزة مجتمعة.
  
---

أنا Media Buyer وعندي سؤال محدد عن أداء حملاتي على Google Ads. عايزك تحوّل السؤال ده إلى GAQL query أقدر ألصقها في Report Editor.
السؤال:
"""
[اكتب سؤالك هنا — مثال: عايز أعرف الـ keywords اللي ROAS بتاعها على Mobile أعلى من ROAS على Desktop في آخر 30 يوم]
"""
اعمل الآتي بالترتيب:
1) فهم السؤال
   - لو فيه أي غموض في مقياس "الأفضل" (ROAS؟ CPA؟ Conversion Rate؟ Cost؟)، اذكر الافتراض اللي ماشي عليه بوضوح قبل الـ query.
   - لو السؤال محتاج مقارنة (Mobile vs Desktop، Network مقابل Network، فترة مقابل فترة)، حدد الـ dimension اللي هتعمل عليها segmentation.
2) اختيار الـ Resource
   - حدد الـ FROM resource المناسب (campaign / ad_group / keyword_view / ad_group_criterion / search_term_view / إلخ).
   - اكتب في سطر واحد ليه اخترت الـ resource ده وليه مش غيره.
3) الـ Query
   اكتب GAQL كاملة جاهزة للنسخ، تشمل:
   - SELECT بأسماء الحقول الحالية في الـ Google Ads API (مثلاً: metrics.cost_micros, metrics.conversions, metrics.conversions_value, segments.device, segments.date)
   - FROM (الـ resource)
   - WHERE (فلاتر التاريخ بصيغة DURING LAST_30_DAYS أو segments.date BETWEEN، وفلتر status = 'ENABLED' لو منطقي)
   - ORDER BY حسب المقياس الأساسي للسؤال
   - LIMIT لو السؤال top-N
4) متخمّنش
   لو فيه حقل مش متأكد من اسمه الحالي، قول صراحة: "تأكد من اسم الحقل ده من autocomplete في Report Editor". متخترعش حقل.
5) بعد الـ Query، اكتب بالعربي:
   - **خطوات التشغيل:** Google Ads → Reports (في الـ top menu) → Report Editor → Custom → اختر "Use GAQL" → الصق → Run → Download as CSV.
   - **اللي هتلاقيه في الـ output:** الأعمدة المتوقعة وشكل الصفوف (مثلاً: صف لكل keyword × device).
   - **علام تركز:** نقطتين أو ٣ نقاط تخليك تطلع بـ insight من الـ CSV.
اكتب الشرح بالعربي والـ query بالإنجليزي زي ما هي.
