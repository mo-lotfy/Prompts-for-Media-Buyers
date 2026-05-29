---
id: monthly-performance-deck-builder
display_name_ar: "بناء Deck شهري للأداء"
display_name_en: "Monthly Performance Deck Builder"
category: reporting
version: 1
source_episode: 39
episode_uses: [39]
contributors:
  - lotfy
placeholder_marker: "اسم العميل: ___"
example_input: |
  - اسم العميل: نظافة بلس
  - الشهر/الفترة: مايو 2026
  - المنتج/الخدمة: منتجات تنظيف منزلية طبيعية معتمدة ECCC
  - الهدف الأساسي للكامبين: Sales (Conversions on Shopify)
  - ألوان البراند: #2A6B4A (sage green), #FFFFFF (white)
  - ملاحظات: العميل بدأ يقلق من ارتفاع الـ CPA الأسبوع اللي فات بسبب تكلفة شحن زادت — ده reflected في الـ data المرفقة.
  
  [المرفقات: meta_may_2026.csv، tiktok_may_2026.csv، google_may_2026.csv، + meta_april_2026.csv للمقارنة]
  
---

أنت Senior Media Buyer بتعمل تقرير أداء شهري لعميل. هدفك: تطلع slide deck (.pptx) جاهز للإرسال، بيحكي قصة الأداء — مش dump أرقام.
══════════════════════════════════
سياق العميل (املأها قبل التشغيل)
══════════════════════════════════
- اسم العميل: ___
- الشهر/الفترة: ___ (مثلاً: أكتوبر 2025)
- المنتج/الخدمة: ___ (سطر واحد)
- الهدف الأساسي للكامبين: ___ (Leads / Sales / Awareness / Traffic / Other)
- ألوان البراند (اختياري): ___ (hex codes أو وصف)
- ملاحظات للأخذ في الاعتبار: ___ (مثلاً: "العميل حساس من ارتفاع CPA"، أو "ده شهر launch")
══════════════════════════════════
المرفقات
══════════════════════════════════
- ملف/ملفات data export من المنصات (CSV أو Excel)
- لو فيه data للشهر السابق، مرفقة عشان أعمل comparison
- لو فيه deck قديم كـ reference للستايل، مرفق
══════════════════════════════════
خطوات التنفيذ
══════════════════════════════════
1. اقرا الـ data بـ code execution. اعرضلي الـ structure في سطرين max — مش report طويل
2. اعمل الـ aggregations والـ analytics: إجمالي الـ spend, impressions, clicks, conversions, CPA, ROAS؛ breakdown per platform؛ top/bottom performers؛ trends زمنية
3. لو فيه data للشهر السابق، اعمل month-over-month comparison
4. ابني الـ deck بـ pptx بالـ structure تحت
══════════════════════════════════
هيكل الـ deck
══════════════════════════════════
- Slide 1 — Cover: اسم العميل + "تقرير أداء [الشهر]"
- Slide 2 — Executive Summary: 3 نقاط يقراها العميل في 30 ثانية — الـ headline number، أهم win، أهم challenge
- Slide 3 — Performance Overview: KPIs إجمالية كـ cards أو table (Spend, Impressions, Clicks, Conversions, CPA, ROAS) + comparison لو متاح
- Slide 4..N — Platform Breakdown: slide لكل platform فيه: الأرقام + chart مناسب (bar للمقارنة، line للترند الزمني، pie للتوزيع) + سطرين narrative
- Slide — Top Performers: أفضل 3 ads/campaigns/audiences + سبب نجاحهم
- Slide — What Underperformed: 2-3 حاجات ما اشتغلتش + تفسير واقعي (مش حجج)
- Slide — Insights: 3 insights actionable من الـ data
- Slide — Next Month's Plan: 3-4 توصيات محددة، كل توصية مربوطة بـ insight قبلها
══════════════════════════════════
قواعد كتابة الـ narrative
══════════════════════════════════
- كل سطر narrative لازم يحتوي على رقم محدد. ممنوع كلام عام زي "الأداء كان كويس"
- لما الأداء سيء، اعترف بصراحة. ممنوع "أداء مقبول مع فرص للتحسين" — قول "الـ CPA ارتفع 34% عن الشهر اللي فات والسبب كان..."
- المقارنات: لو فيه شهر سابق → MoM. لو فيه target محدد → vs target. لو ولا واحد متاح → اقتصر على الرقم نفسه، ممنوع comparison مفبركة
- الـ insights لازم تكون مش obvious. لو الـ insight ممكن تطلعه من نظرة على table بدون تحليل، مش insight — استبدله
══════════════════════════════════
Design
══════════════════════════════════
- Typography واضحة، sans-serif
- لو فيه ألوان براند، استخدمها للـ accents. لو لأ، palette محايدة: navy + grey + accent واحد
- Charts بسيطة. بدون 3D، بدون legends زيادة، بدون gradient
- كل slide max 7 عناصر visual
══════════════════════════════════
Output
══════════════════════════════════
ملف .pptx اسمه: ClientName_Performance_Month_Year.pptx
ابدأ على طول. لو فيه ambiguity في الـ data structure، خد القرار اللي بيخدم الـ story الأوضح وكمّل، وسجّل القرار في آخر slide كـ Notes.
