---
id: landing-page-cro-audit
display_name_ar: "مراجعة CRO لـ Landing Page"
display_name_en: "Landing Page CRO Audit"
category: performance
version: 1
source_episode: 25
episode_uses: [25]
contributors:
  - lotfy
placeholder_marker: "[الصق الرابط هنا]"
example_input: |
  الـ URL: https://nazafa-plus.shop/collections/spray-floor
  
  السياق:
  - العرض: "خصم 20% على أول order — اطلب الـ spray الطبيعي"
  - الجمهور: ستات 28-42، أمهات في مصر، عندهن حساسية أو أطفال صغار
  - Ad Promise (نصاً): "Cif كان بـ يحرق إيدي. \"نظافة بلس\" خلّى بنتي ترقد على الأرضية بدون قلق. اطلب بـ خصم 20%."
  - الإعلان بيتحط على: Meta Reels + IG Feed
  - الـ Conversion: Purchase (إتمام checkout)
  - Performance: CTR 1.8% · CVR 0.9% · Bounce 68% · Time on page 47s
  
---

عايزك تعمل CRO audit للـ landing page دي وتطلع A/B test hypotheses مرتّبة بالأولوية.

## معلومات الصفحة والكامبين

الـ URL:
[الصق الرابط هنا]

(لو الصفحة مش متاحة عن طريق URL — مثلاً behind login أو heavy JS — الصق محتوى الصفحة كاملاً أو screenshot هنا بدل الـ URL)

## السياق

- العرض (Offer): [اكتب العرض زي ما هو مكتوب في الإعلان]
- الجمهور المستهدف: [سن، اهتمامات، سلوك، السوق الجغرافي]
- الإعلان بيوعد بإيه (Ad Promise): [الـ headline والـ primary text للإعلان — انسخ النص بالظبط، مش وصف]
- الإعلان بيتحط فين: [Meta / TikTok / Google Search / YouTube]
- الـ Conversion المطلوبة: [Lead form / Purchase / Sign-up / Call — كن محدد بالـ action: مثلاً "submit form بـname + email + phone"]
- Performance حالياً (لو متاح): CTR / CVR / Bounce rate / Time on page

## المطلوب

افتح الـ URL، اقرا الصفحة كاملة، وطلعلي audit في الـ ٥ أجزاء دي:

### ١. Message-Match
قارن جملة بجملة بين الـ Ad Promise والـ Hero section. الزائر اللي ضغط على الإعلان هيلاقي في أول ٥ ثواني نفس الـ promise؟ لو فيه gap، حدده بدقة: "الإعلان بيقول كذا، الصفحة بتقول كذا".

### ٢. Above-the-Fold (أول ٥ ثواني)
زائر بيدخل لأول مرة. في ٥ ثواني من غير scroll، يقدر يجاوب على:
- إيه المنتج أو الخدمة؟
- ليه أنا محتاجها؟ (الـ value)
- إيه الخطوة الجاية؟ (الـ CTA واضح؟)

لكل سؤال، قول لو الإجابة واضحة. لو لأ، اشرح ليه.

### ٣. نقاط الاحتكاك (قسم بقسم)
امش على الصفحة من فوق لتحت وحدد كل نقطة احتكاك في:
- Headline & Sub-headline: clarity, specificity, relevance للجمهور
- Value Proposition: ظاهرة في الـ above-fold؟ مفهومة؟ مختلفة عن المنافسين؟
- CTA buttons: المكان، اللون، النص، التكرار، الوضوح (الزائر عارف هيحصله إيه بعد الضغط؟)
- Social proof: موجود؟ Credible؟ محدد بأرقام/أسماء/شهادات حقيقية مش generic؟
- Trust signals: ضمانات، أمان الدفع، شهادات، أرقام (عدد العملاء، السنين في السوق)
- Form أو Checkout: عدد الـ fields، طول الـ form، الـ error handling، الـ optional vs required
- Cognitive load: الصفحة بتطلب من الزائر يفكر كتير؟ Choices كتيرة؟ Text طويل من غير hierarchy؟
- Mobile considerations: حاجات هتكسر أو هتبقى صعبة على الموبايل؟ Tap targets صغيرة؟

لكل نقطة احتكاك، اكتب:
- النقطة: [وصف محدد بالـ element]
- المكان: [section أو element محدد على الصفحة]
- الأثر: High / Medium / Low
- ليه: [السبب من منظور سلوك الزائر — مش "بشكل عام"]

### ٤. A/B Test Hypotheses
بناءً على نقاط الاحتكاك، طلعلي من ٥ لـ ٨ hypotheses في الـ format ده:

Test #N
- الـ Hypothesis: "لو غيّرنا [العنصر] من [الحالة الحالية] لـ [الحالة المقترحة]، [المتريك] هيرتفع لأن [السبب السلوكي]"
- العنصر المتغير: [exact element على الصفحة]
- الـ Control: [الحالة الحالية بالظبط]
- الـ Variant: [الحالة المقترحة بالظبط — لو نص، اكتب النص الجديد كاملاً]
- الأثر المتوقع: High / Medium / Low
- الجهد المطلوب: High / Medium / Low
- الأولوية: ضرب الأثر (High=3, Medium=2, Low=1) قسمة الجهد (نفس الـ scale) — اطلع رقم

### ٥. التوصية: ابدأ بإيه
حدد test واحد أو اتنين الأعلى أولوية. فسّر ليه دول بالظبط: هل بيقفل أكبر احتكاك في الـ funnel؟ هل impact عالي وeffort قليل؟ كن مباشر، ٢-٣ جمل.

## قواعد
- كل ملاحظة لازم تكون قابلة للتنفيذ — element محدد وchange محدد
- متقولش "improve the CTA" — قول "غيّر نص الـ CTA من 'Submit' لـ 'احجز استشارتك المجانية'"
- لو الـ URL مش شغّال أو الصفحة فاضية، قولي صراحة واطلب paste للمحتوى أو screenshot
- جاوب بالعربي والـ technical terms بالإنجليزي زي ما الـ Media Buyers بيستخدموها
