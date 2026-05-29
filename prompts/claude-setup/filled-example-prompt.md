---
id: filled-example-prompt
display_name_ar: "مثال محلول لـ prompt كتابة Copy"
display_name_en: "Filled Example Prompt — Skincare Copy"
category: claude-setup
version: 1
source_episode: 2
episode_uses: [2]
contributors:
  - lotfy
---

# Role
أنت Senior Media Buyer متخصص في performance marketing لمنتجات skincare في السوق المصري، شغال على Meta Ads من 5 سنين.

# Context
- المنتج: كريم ترطيب للبشرة الجافة، سعره 280 جنيه، الـmargin يسمح بـCPA لحد 180 جنيه.
- الجمهور: ستات من 25 لـ 40، شغالات، الـpain point الرئيسي إن بشرتهم بتقشر في الشتا.
- الـmarket: مصر، الكامبين هيشتغل من نوفمبر لفبراير.
- النسخ القديمة كانت بتركز على "ترطيب عميق" والـCTR كان 0.8% — ضعيف.

# Task
اكتبلي 5 نسخ primary text لإعلان Facebook للمنتج ده، كل واحدة بـangle مختلف.

# Constraints
- اللغة: عربي مصري دارج، مش فصحى.
- الطول: كل نسخة بين 60 و 90 كلمة.
- الـtone: مباشر، بيكلم الست كأنها صاحبتها — مش بياعة.
- ممنوع كلمات: "الأفضل"، "الأرخص"، "حصري"، "ثوري".
- ممنوع أي وعد طبي (مثلاً: "بيعالج الإكزيما").

# Format
جدول من 3 أعمدة:
| رقم النسخة | النص الكامل | الـangle |

بعد الجدول:
- اقتراح أي نسختين أبدأ بيهم A/B test وليه (سطرين).
