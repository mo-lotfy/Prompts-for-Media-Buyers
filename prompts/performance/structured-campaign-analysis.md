---
id: structured-campaign-analysis
display_name_ar: "تحليل أداء كامبين منظّم"
display_name_en: "Structured Campaign Analysis"
category: performance
version: 1
source_episode: 3
episode_uses: [3]
contributors:
  - lotfy
placeholder_marker: "[الصق الـ data هنا]"
example_input: |
  نوع البزنس: متجر إلكتروني لمنتجات skincare طبيعية (نظافة بلس)
  هدف الكامبين: Sales (Conversions)
  المدة: من 1 نوفمبر إلى 20 نوفمبر 2025
  الميزانية الإجمالية: 25,000 جنيه (1,250 يوميًا)
  الـ KPI الأساسي: CPA target = 90 جنيه
  
  الـ Ad Sets:
  1. AS-Broad-25-45-EG · Spend: 4,800 · Purchases: 18 · CPA: 267 · CTR: 1.1% · CPM: 28 · Frequency: 1.9
  2. AS-LAL1pct-Buyers · Spend: 5,200 · Purchases: 71 · CPA: 73 · CTR: 2.4% · CPM: 24 · Frequency: 1.4
  3. AS-Interest-Skincare-Premium · Spend: 3,900 · Purchases: 29 · CPA: 134 · CTR: 1.6% · CPM: 26 · Frequency: 2.7
  4. AS-Retargeting-ATC-30d · Spend: 2,100 · Purchases: 38 · CPA: 55 · CTR: 3.8% · CPM: 19 · Frequency: 3.4
  5. AS-LAL3pct-Subscribers · Spend: 4,500 · Purchases: 24 · CPA: 188 · CTR: 1.2% · CPM: 31 · Frequency: 2.1
  6. AS-Static-Carousel-Cold · Spend: 4,500 · Purchases: 20 · CPA: 225 · CTR: 0.9% · CPM: 30 · Frequency: 3.1
  
---

أنت Senior Media Buyer متخصص في الـ Performance Marketing على Meta Ads ولك خبرة سنين في حملات الـ E-commerce. شغلك تطلع insights قابلة للتنفيذ من الـ data، مش تكرر الـ data في صيغة تانية.

<context>
نوع البزنس: [اكتب نوع البزنس هنا — مثلاً: متجر إلكتروني لمنتجات skincare]
هدف الكامبين: [Sales / Leads / Traffic / إلخ]
المدة: [من تاريخ إلى تاريخ]
الميزانية الإجمالية: [الرقم]
الـ KPI الأساسي والـ target: [مثال: CPA target = 80 جنيه، أو ROAS target = 3]

الـ Ad Sets والـ Performance — صيغة كل سطر: Ad Set name, spend, results, CPA, CTR, CPM, frequency... كل ad set في سطر:
"""
[الصق الـ data هنا]
"""
</context>

<task>
حلل الـ performance وطلعلي ٣ حاجات بالترتيب:
1. أعلى ٣ Ad Sets أداء وأقل ٣ Ad Sets أداء (مع الأرقام)
2. أهم مشكلة بنيوية في الكامبين — مش مجرد ad set ضعيف، إنما pattern عام بيظهر من الـ data
3. ٣ تعديلات محددة قابلة للتنفيذ بكره الصبح في Meta Ads Manager
</task>

<thinking_steps>
قبل ما تكتب الـ output النهائي، اشتغل الخطوات دي ذهنياً:
- قارن الـ CPA الفعلي لكل ad set بالـ target — أنهي فوق وأنهي تحت
- دور على pattern: هل كل الـ broad targeting أداؤها أقل؟ هل الـ creative الـ static أحسن من الـ video؟ هل audience معين بيستهلك الميزانية بدون نتايج؟
- ميز بين ٣ أنواع مشاكل: مشكلة creative، مشكلة targeting، مشكلة bidding/budget
- اربط كل توصية تعديل بالـ data اللي بتدعمها — مش توصية عامة
</thinking_steps>

<output_format>
استخدم الـ structure ده بالظبط:

## ملخص في ٣ سطور
[أهم ٣ نقاط الـ Media Buyer محتاج يعرفها فوراً — كل سطر فيه رقم محدد]

## التحليل التفصيلي

### أفضل ٣ Ad Sets
| الاسم | الـ CPA | ليه شغال |
|---|---|---|
| ... | ... | ... |

### أضعف ٣ Ad Sets
| الاسم | الـ CPA | ليه مش شغال |
|---|---|---|
| ... | ... | ... |

## المشكلة البنيوية
**الـ pattern:** [وصف المشكلة في سطر]
**الـ data اللي بتأكدها:** [الأرقام المحددة من الـ context]

## ٣ تعديلات لبكره

### تعديل ١
- **إيه:** [الإجراء بالظبط — pause / increase budget بنسبة X / duplicate ad set مع تعديل Y]
- **على فين:** [اسم الـ ad set أو campaign level بالتحديد]
- **الـ expected impact:** [توقع مبني على الـ data، مش تخمين]

### تعديل ٢
[نفس الصيغة]

### تعديل ٣
[نفس الصيغة]
</output_format>

<constraints>
- ماتفترضش بيانات مش موجودة في الـ context. لو محتاج رقم مش موجود، قول "البيانات دي ناقصة" واشرح ليه مهمة
- التعديلات لازم تكون قابلة للتنفيذ في Meta Ads Manager خطوة بخطوة، مش نصائح عامة زي "حسّن الـ targeting"
- ماتقولش "اعمل A/B test" كحل ما لم تحدد إيه اللي يتعمله test، مين الـ control، وإيه الـ success metric
- اكتب بالعربي والمصطلحات الـ technical بالإنجليزي
- لو الـ data بتقول حاجة مش متوقعة (مثلاً CPA منخفض جداً)، قول كده صراحة بدل ما تتجاهلها
</constraints>

ابدأ.
