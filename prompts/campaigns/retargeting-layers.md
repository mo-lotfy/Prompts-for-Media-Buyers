---
id: retargeting-layers
display_name_ar: "طبقات الـ Retargeting"
display_name_en: "Retargeting Layers"
category: campaigns
version: 1
source_episode: 26
episode_uses: [26]
contributors:
  - lotfy
placeholder_marker: "[الصق context الـ business هنا]"
example_input: |
  - نوع البزنس: E-commerce
  - المنتج/الخدمة: "نظافة بلس" — منتجات تنظيف منزلية طبيعية. AOV = 320 EGP.
  - Sales cycle length: ~7 أيام من أول touch لحد الشراء.
  - الـ traffic sources الشغالة: Meta Prospecting + Organic Instagram + إيميل newsletter (1,400 subscribers).
  - الـ funnel stages: Awareness (ads) → Consideration (Reels + LPV) → Decision (ATC) → Purchase → Repeat (post-purchase email).
  - conversions tracking: Pixel + Conversions API (مفعّل من شهر).
  - قاعدة عملاء حاليين: 1,200 عميل، متوسط فترة بين الشرايات 14 يوم.
  
---

إنت Media Buyer Strategist متخصص في بناء استراتيجيات retargeting متعددة الطبقات.

دي معلومات البزنس — اشمل:
- نوع البزنس: E-commerce / Service / SaaS / Lead Gen / غيره
- المنتج/الخدمة + الـ AOV (متوسط قيمة الطلب)
- Sales cycle length: كم يوم متوسط من أول touch لحد الـ purchase
- الـ traffic sources الشغالة دلوقتي: Meta Prospecting / TikTok / Google / Organic / إيميل / غيره
- الـ funnel stages الموجودة: Awareness → Consideration → Decision → Purchase → Repeat
- conversions tracking: Pixel / Conversions API / Server-side / مفيش
- لو فيه قاعدة عملاء حاليين: تقريباً كام عميل وآخر شراء كان امتى متوسط

"""
[الصق context الـ business هنا]
"""

عايزك تبني تقسيم retargeting layers مفصل.

قبل ما تبدأ احسب الـ recommended windows من الـ sales cycle:
- Hot window = ⅓ من الـ sales cycle (لو cycle شهر، Hot = ١٠ يوم)
- Warm Engaged window = ⅔ من الـ sales cycle
- Warm Cold window = 2x الـ sales cycle

ابدأ من القاعدة دي وعدل بس لو فيه سبب واضح في الـ context.

طلعلي ٤ layers بالتنسيق ده:

## Layer 1: Hot Intent
- التعريف الدقيق (مين بالظبط: cart abandoners, checkout initiators, product viewers في آخر X يوم)
- الـ time window المحسوب من الـ sales cycle
- الـ intent signal اللي بيلتقطه
- Expected audience size: Small / Medium / Large

## Layer 2: Warm Engaged
- التعريف (video viewers 75%+, page engagers, IG/FB profile interactors, ad clickers)
- الـ time window
- الـ intent signal
- Expected size

## Layer 3: Warm Cold
- التعريف (page visitors عامين، ad impressions، light engagers)
- الـ time window
- الـ intent signal
- Expected size

## Layer 4: Past Customers / Active Base
- لو البزنس E-commerce: Past Buyers مقسمين على repurchase cycle
- لو SaaS/Service متكرر: Active Customers للـ cross-sell / upsell / retention
- لو Service لمرة واحدة (زي wedding photography): استبدل الـ layer دي بـ Referral Audience من الـ past clients
- الـ time window المناسب
- الهدف الأساسي للـ layer دي

## Sequence Logic
لكل layer اكتب بصراحة:
- الـ exclusions من الـ layers الأعلى intent (مثلاً Warm Engaged يستثني Hot Intent عشان مفيش audience overlap)
- الـ trigger event اللي بينقل user من layer للي تحتها (مثلاً: user يخرج من Hot بعد انتهاء الـ window بدون conversion، فيدخل Warm Engaged)
- الـ exit condition من الـ funnel كله (مثلاً: conversion → ينقل لـ Past Customers / مرور 90 يوم بدون أي engagement → exclude نهائياً)

لو معلومة من الـ business context ناقصة، اطلبها بدل ما تخترع assumption. اكتب بالعربي ومباشر بدون مقدمات.
