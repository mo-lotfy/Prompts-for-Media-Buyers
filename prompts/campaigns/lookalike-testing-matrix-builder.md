---
id: lookalike-testing-matrix-builder
display_name_ar: "مصفوفة اختبار الـ Lookalikes"
display_name_en: "Lookalike Testing Matrix Builder"
category: campaigns
version: 1
source_episode: 27
episode_uses: [27]
contributors:
  - lotfy
placeholder_marker: "[اكتب وصف قصير — مثلاً: كورس أونلاين لتعليم البرمجة، سعر ٣٠٠٠ جنيه]"
example_input: |
  - المنتج/الخدمة: "Tech Talents EG" — كورس أونلاين 6 أسابيع للـ devs و designers يكسبوا بالدولار من Upwork. السعر 4,800 EGP.
  - السوق: مصر، عربي
  - نوع الكامبين / objective: Conversions (Lead form fill on LP)
  - الـ Seed Audiences:
    • Purchasers (آخر 180 يوم): 410
    • Leads / Form submissions: 1,850
    • Add-to-Cart / Initiate Checkout: لا ينطبق (lead-gen)
    • Video viewers 75%+: 14,200
    • Page engagers (90 days): 6,800
  - الميزانية للـ testing phase: $50/يوم × 14 يوم ($700 total)
  - الـ CPA المستهدف: $4.50
  - audience شغّالة دلوقتي: Interest-Stack-DevOps-Egypt — حجم 380K
  
---

أنا Media Buyer وعايز أبني Lookalike Testing Matrix كاملة لكامبين جديد على Meta.

السياق:
- المنتج/الخدمة: [اكتب وصف قصير — مثلاً: كورس أونلاين لتعليم البرمجة، سعر ٣٠٠٠ جنيه]
- السوق: [الدولة + اللغة — مثلاً: مصر، عربي]
- نوع الكامبين / objective: [Conversions / Leads / Sales / etc.]
- الـ Seed Audiences المتاحة وحجم كل واحدة:
  • Purchasers (آخر ١٨٠ يوم): [العدد]
  • Leads / Form submissions: [العدد]
  • Add-to-Cart أو Initiate Checkout: [العدد]
  • Video viewers 75%+ أو Page engagers: [العدد]
  • [أي seed تاني متوفر]
- الميزانية للـ testing phase: [اليومي × عدد الأيام — مثلاً: ٣٠٠ دولار/يوم × ١٤ يوم]
- الـ CPA المستهدف: [الرقم]
- الـ audience اللي شغالة كويس دلوقتي (لو موجودة): [اسمها + نوعها + حجمها التقريبي]

المطلوب:

ابنيلي Lookalike Testing Matrix كاملة تغطي بُعدين:
١. الـ Seed Source (نوع الجمهور الأصلي)
٢. الـ Percentage Band (1%, 2-3%, 4-5%, إلخ)

الـ output لازم يحتوي على ٤ أجزاء بالترتيب ده:

## ١. ترتيب الـ Seed Sources حسب الجودة
رتب الـ seeds المتاحة عندي من الأعلى جودة للأقل. الجودة بتعتمد على:
- قوة إشارة الـ intent (purchaser أقوى من add-to-cart أقوى من viewer)
- حجم الـ seed (الحد الأدنى المقبول ٥٠٠، المفضل ١٠٠٠+ — لو seed أقل من ٥٠٠ اعتبرها unusable كـ direct seed واقترح Value-Based Lookalike لو متاح)
- حداثة البيانات

استبعد أي seed مش هتنفع وقول السبب.

## ٢. الـ Matrix نفسها
جدول واضح فيه الـ cells اللي هتختبر. كل cell = seed source × percentage band. لكل cell اكتب:
- اسم الـ Lookalike (مثلاً: LAL 1% Purchasers EG)
- الحجم المتوقع التقريبي في السوق المحدد
- الميزانية اليومية المخصصة للـ cell ده
- المدة بالأيام للحكم على الـ cell

قواعد لازم تتطبق وانت بتبني الـ matrix:
- كل cell لازم ياخد ميزانية كافية تجيب على الأقل ٣-٥ كونفرشن في الأسبوع. لو الـ budget الإجمالي مش كافي لكل الـ cells المحتملة، قلل عدد الـ cells (إما تقلل الـ seed types، إما تقلل الـ percentage bands) — متقسمش الـ budget لدرجة إن كل cell يبقى noise.
- لو السوق صغير (مثلاً مصر ٧٠ مليون، السعودية ٣٥ مليون، لبنان ٥ مليون)، حط ceiling مناسب على الـ percentage. السوق الأصغر = ceiling أقل. متطلعش matrix فيها 10% في سوق ٥ مليون.
- لو فيه audience شغالة كويس دلوقتي عندي، الـ Lookalikes الجديدة لازم تـ exclude الـ audience دي عشان نقيس incremental lift فعلي مش cannibalization.
- لو الـ seed الوحيد المتاح بإشارة قوية حجمه أقل من ٥٠٠، اقترح Value-Based Lookalike من signal أوسع (مثلاً top 25% video viewers بدل purchasers) — مع شرح إن الجودة هتبقى أقل من purchaser-based.

## ٣. Success / Kill Criteria لكل cell
- Success threshold: لو الـ CPA أقل من [اللي اتحدد فوق] خلال المدة المحددة → جاهز للـ scaling
- Kill threshold: لو الـ CPA تعدى [الرقم] أو لو فاتت المدة بدون كونفرشن كافي → اقفل الـ cell

## ٤. خطة التوسع بعد الـ testing phase
- الـ winning cells: ازاي نوسعها (رفع budget تدريجي، توسع لـ percentage band أعلى من نفس الـ seed، إضافة creatives جديدة)
- الـ losing cells: نسيبها أم نختبر نفس الـ percentage بـ seed مختلف
- أي percentage bands تانية لسه ما اتغطتش وممكن نضيفها في wave تانية

اكتب بالعربي مع الـ technical terms بالإنجليزي زي اللي فوق. كن مباشر وبدون مقدمات.
