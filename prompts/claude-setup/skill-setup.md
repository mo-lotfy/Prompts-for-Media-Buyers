---
id: skill-setup
display_name_ar: "إعداد Skill: Negative Keywords Audit"
display_name_en: "Skill Setup — Negative Keywords Audit"
category: claude-setup
version: 1
source_episode: 31
episode_uses: [31]
contributors:
  - lotfy
---

عايزك تستخدم skill-creator وتعملي Skill اسمه negative-keywords-audit.
الـ Skill ده هيتفعّل لما أرفع Search Terms Report (CSV) من Google Ads أو Microsoft Ads وأطلب negative keywords audit. الـ Skill لازم يعمل الخطوات دي بالترتيب:
## الخطوة ١: اقرا الـ CSV
- لاقي الأعمدة: Search term, Impressions, Clicks, Cost, Conversions, CTR, Conv. rate
- لو أسماء الأعمدة مختلفة (export بالعربي أو من Microsoft Ads)، اسألني أأكدلك أي عمود فيه إيه قبل ما تكمل
- لو الـ CSV فيه أكتر من ٢٠٠٠ row، فلتر على queries عندها Cost > 0 أو Clicks > 0، وتجاهل الباقي
## الخطوة ٢: اسأل في أول استخدام بس (واحفظ الإجابات)
- إيه الـ target CPA بتاعي؟
- هدف الكامبين إيه (Conversions / Leads / Sales / Awareness)؟
- فيه intent معين لازم يفضل ميتفلترش (مثلاً free trial، DIY product، tutorials)؟
احفظ الإجابات دي في الـ skill state واستخدمها كل مرة من غير ما تسأل تاني.
## الخطوة ٣: طبّق قواعد الـ flagging
### قواعد المصاريف الضايعة
flag الـ query كـ negative لو:
- Cost > 3× target CPA و Conversions = 0
- Clicks > 20 و CTR < 1%
- Cost > 0 و Conversions = 0 على مدى الـ report
### قواعد الـ intent الغلط
لو هدف الكامبين Conversions / Leads / Sales، flag أي query فيها:
- كلمات informational: how to, what is, ما هو, إزاي, كيف, tutorial, شرح
- كلمات مجانية: free, مجاني, تحميل مجاني (إلا لو المستخدم قال إن free trial intent مطلوب)
- كلمات DIY: make, build, اعمل بنفسي, DIY (إلا لو المستخدم استثناها)
- كلمات وظائف: jobs, career, وظائف, راتب, salary
### قواعد الجمهور الغلط
- أسماء competitors (إلا لو الكامبين بيستهدفهم عمداً)
- إشارات geographic مش في الـ targeting بتاع المستخدم
## الخطوة ٤: صنّف الـ match type
لكل negative keyword، اختار:
- **Broad match negative:** كلمة واحدة كافية تبلوك كل combinations (مثلاً "jobs")
- **Phrase match negative:** pattern متكرر بترتيب معين (مثلاً "free download")
- **Exact match negative:** phrase محددة لازم تتبلوك بالظبط من غير ما تأثر على variations قريبة
## الخطوة ٥: لو الـ query borderline، متبلوكهاش
- لو الـ query عندها conversion واحدة على الأقل لكن الـ cost عالي → حطها في "Skipped" مش في الـ negatives
- لو فيه شك في الـ intent → حطها في "Skipped"
## الخطوة ٦: الـ output
اطلع النتيجة بالشكل ده بالظبط:
### Summary
- عدد الـ search terms اللي اتراجعت: X
- عدد الـ negative keywords المقترحة: Y
- تقدير الـ wasted spend: Z (مجموع الـ cost للـ queries المقترحة كـ negative من غير conversions)
### Broad Match Negatives
(كل كلمة في سطر، جاهزة للنسخ المباشر في Google Ads)
jobs
free
tutorial
### Phrase Match Negatives
(كل phrase بين علامتي تنصيص، سطر سطر)
"how to make"
"free download"
### Exact Match Negatives
(كل phrase بين أقواس مربعة، سطر سطر)
[competitor brand name]
### Skipped — محتاجة قراري
list الـ queries الـ borderline مع سبب مختصر لكل واحدة (مثلاً: "Cost عالي بس فيه ١ conversion")
### Reasoning لأغلى ٥ queries المقترحة
لكل واحدة من أغلى ٥، سطر شرح: ليه ضايعة، وليه الـ match type المختار.
---
ابدأ تبني الـ Skill ده دلوقتي.
