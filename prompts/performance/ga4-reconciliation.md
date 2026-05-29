---
id: ga4-reconciliation
display_name_ar: "مطابقة الـ Conversions بين المنصات و GA4"
display_name_en: "GA4 Reconciliation"
category: performance
version: 1
source_episode: 36
episode_uses: [36]
contributors:
  - lotfy
---

عندي مشكلة في الـ attribution بين منصات الإعلانات. كل منصة بتقولي رقم conversions مختلف، والمجموع أكبر من المبيعات الفعلية.

رفعت ليك ٥ ملفات لنفس الفترة الزمنية:
- sales.csv — المبيعات الفعلية. الأعمدة المتوقعة: order_id, date, total, utm_source, utm_medium (آخر اتنين ممكن يكونوا فاضيين على بعض الـ rows).
- ga4.csv — تقرير GA4 Traffic Acquisition. الأعمدة المتوقعة: source / medium, sessions, conversions, revenue.
- meta.csv — تقرير Meta Ads Manager على مستوى الكامبين. الأعمدة: campaign, conversions, spend.
- tiktok.csv — نفس الفكرة من TikTok Ads Manager.
- google.csv — نفس الفكرة من Google Ads.

شغّل Code Execution ونفّذ بالترتيب:

### ١. فحص جودة الداتا
- اطبع عدد الـ rows لكل ملف.
- استخرج الـ date range من كل ملف. لو فيه فرق أكتر من يوم بين الملفات، اوقف وقولي الـ ranges كاملة قبل ما تكمل.
- في ga4.csv احسب نسبة الـ conversions اللي مصدرها (direct) / (none) من إجمالي conversions. لو النسبة أكتر من ٣٠٪، اوقف وقولي: "في مشكلة UTM tracking — أغلب الترافيك مش متعرّف مصدره". اعرضلي top 10 source/medium values قبل ما نكمل.

### ٢. الأساس: المبيعات الحقيقية
- من sales.csv، احسب total_orders و total_revenue. ده الرقم اللي مفيش مجموع platforms المفروض يتعداه.

### ٣. أرقام المنصات (كما تقول هي عن نفسها)
- لكل ملف منصة (meta, tiktok, google) احسب total_conversions, total_spend, self_reported_CPA.
- اطبع جدول: Platform | Self-Reported Conv | Spend | Self-Reported CPA.
- اطبع مجموع الـ conversions عبر المنصات الـ ٣، واحسب: over_claim_gap = sum(platform_conversions) - total_orders. ده مقدار الـ double-counting الإجمالي.

### ٤. GA4 كمرجع توزيع
- اعمل mapping بين source/medium في GA4 والمنصات:
  - facebook / cpc, fb / paid, meta / cpc → Meta
  - tiktok / cpc, tiktok_ads / cpc → TikTok
  - google / cpc, adwords / cpc → Google Ads
  - (direct) / (none) → Direct
  - google / organic, bing / organic → Organic
- لو لقيت source/medium values مش في الـ mapping (مثلاً newsletter / email, referral / partner)، اوقف واعرضهم وقولي: "في قنوات تانية مش في الـ ٣ منصات. صنّفها يدوي قبل ما أكمل". استنى رد قبل ما تستمر.
- بعد الـ mapping، احسب GA4_conversions لكل منصة من المنصات الـ ٣.

### ٥. المطابقة
- لكل منصة احسب: Self-Reported Conversions, GA4 Conversions, Inflation = Self-Reported - GA4.
- لو مجموع GA4_conversions عبر المنصات الـ ٣ أقل من total_orders، الفرق = Direct + Organic + قنوات تانية. اعرضه في صف منفصل اسمه "Non-Paid".
- لو مجموع GA4_conversions أكبر من total_orders بهامش معتبر (أكتر من ٥٪)، قولي: "GA4 setup فيه مشكلة — في conversions مكررة" وقفلني.

### ٦. الـ CPA الحقيقي
- لكل منصة: Real_CPA = Spend / GA4_Conversions.
- قارن بـ Self_Reported_CPA واحسب الفرق %.

### ٧. الناتج النهائي
- جدول واحد فيه كل المنصات:
  Platform | Spend | Self-Reported Conv | Self-Reported CPA | GA4 Conv | Real CPA | Inflation %
- تحت الجدول، ٣ أسطر فقط:
  1. أكتر منصة بتـ over-claim (بنسبة كام %).
  2. أي منصة Real CPA بتاعها مختلف بأكتر من ٣٠٪ عن الـ Self-Reported.
  3. توصية مباشرة: مين أكبر، مين أصغّر، مين سيب زي ما هو — بناءً على Real CPA مش Self-Reported.

اكتب الـ output بالعربي. خلي الأرقام في جداول واضحة، والتوصيات في الآخر بدون مجاملات.
