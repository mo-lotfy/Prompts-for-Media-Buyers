---
id: layer-blueprint
display_name_ar: "تفاصيل تنفيذ الـ Retargeting Layers"
display_name_en: "Retargeting Layer Blueprint"
category: campaigns
version: 1
source_episode: 26
episode_uses: [26]
contributors:
  - lotfy
placeholder_marker: "[الصق output Prompt 1 هنا]"
example_input: |
  ## Layer 1: Hot Intent
  - التعريف: cart abandoners + checkout initiators + product viewers في آخر 7 أيام
  - Window: 7 أيام (Hot = ⅓ من sales cycle 7 أيام)
  - Audience size تقدير: 250-400 يومياً
  
  ## Layer 2: Warm Engaged
  - التعريف: video viewers 50%+ + product page viewers + IG profile engagers + add-to-wishlist
  - Window: 14 يوم
  - Audience size: 800-1,200 يومياً
  
  ## Layer 3: Warm Cold
  - التعريف: pixel-fired بدون تفاعل لـ 30+ يوم + LP views بدون scroll
  - Window: 14-28 يوم
  - Audience size: 1,500-2,200 يومياً
  
  ## Layer 4: Past Customers (Active Base)
  - التعريف: عملاء اشتروا في آخر 90 يوم
  - Window: 90 يوم
  - العدد الحالي: 1,200 عميل
  
---

دي تقسيم الـ layers اللي طلعته قبل كده:
"""
[الصق output Prompt 1 هنا]
"""

قبل ما تبدأ، اعرف الـ intent differences:
- Hot Intent: عند نقطة الشراء، محتاج push بسيط — objection handling + urgency + final reassurance
- Warm Engaged: مهتم لكن مش مقتنع، محتاج social proof + reframing للقيمة + feature deep-dive
- Warm Cold: نسي البراند تقريباً، محتاج re-introduction + curiosity hook + recall للقيمة
- Past Customers: علاقة موجودة، messaging relationship-based مش sales pitch — value-add أو exclusive offer

لكل layer من الـ ٤، طلع تفاصيل التنفيذ بالتنسيق ده:

### 1. Creative Angle
- الـ pain أو desire اللي الـ creative هيخاطبه (لازم يعكس الـ intent level بتاع الـ layer)
- ٣ hooks مقترحة لأول ٣ ثواني من الـ ad
- نوع الـ visual المناسب: UGC / Product-focused / Lifestyle / Testimonial / Founder-talking-head

### 2. Offer Strategy
- نوع الـ offer: No offer / Soft incentive (free shipping, bundle) / Hard discount (%)
- ليه الـ offer ده مناسب للـ intent level

### 3. Budget Allocation
قاعدة التوزيع كنقطة بداية:
- Hot Intent: ٤٠-٥٠٪ من الـ retargeting budget (أعلى ROI لكن audience أصغر)
- Warm Engaged: ٢٥-٣٠٪
- Warm Cold: ١٠-١٥٪
- Past Customers / Active Base: ١٠-٢٠٪ حسب أهمية الـ retention للبزنس
ابدأ من الأرقام دي وعدل بس لو فيه context واضح يبرر التعديل.

### 4. Frequency & Caps
- Frequency cap يومي/أسبوعي مقترح
- قاعدة: لو الـ AOV عالي ($500+)، خفف الـ caps وزود الـ creative variety. لو AOV منخفض، caps أعلى مقبول.
- الـ exit condition (امتى الـ user يخرج من الـ layer دي تلقائياً)

### 5. Creative Refresh Rate
- كل كام يوم/أسبوع يتغير الـ creative للـ layer دي
- Hot بيتعب أسرع (refresh أسبوعي)، Warm Cold بيستحمل أطول (refresh كل ٣-٤ أسابيع)

## في الآخر:
جدول summary فيه صف لكل layer:
| Layer | Window | Budget % | Frequency Cap | Refresh |

اكتب بالعربي ومباشر.
