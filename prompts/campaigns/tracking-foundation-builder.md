---
id: tracking-foundation-builder
display_name_ar: "بناء الـ Tracking Foundation"
display_name_en: "Tracking Foundation Builder"
category: campaigns
version: 1
source_episode: 18
episode_uses: [18]
contributors:
  - lotfy
placeholder_marker: "[وصف سطرين]"
example_input: |
  - نوع البزنس: e-commerce
  - المنتج: متجر إلكتروني "نظافة بلس" بـ يبيع منتجات تنظيف منزلية صديقة للبيئة، 4 خطوط، أسعار 80-220 EGP.
  - الـ primary conversion: Purchase (إتمام شراء على Shopify)
  - conversions ثانوية: Add to Cart, Initiate Checkout, Newsletter signup, View pricing
  - المنصات الإعلانية: Meta, TikTok, Google
  - traffic sources أخرى: Organic, Email, Direct, Referral
  - الموقع: nazafa-plus.shop
  - domain transitions: لا (Shopify subdomain ثابت)
  - مدة sales cycle: شراء فوري
  - 3 أمثلة كامبينات:
    prospecting_lookalike1_video_v3 | retargeting_atc30d_carousel_v2 | retention_repeat_buyers_email_v1
  - لغة الـ campaigns: عربي مصري
  
---

هاديك معلومات عن client/project وعايزك تبنيلي ملف tracking foundation واحد فيه ٣ أجزاء متناسقة. الناتج لازم يكون artifact واحد بـ Markdown جاهز يتسلم للـ developer.

## معلومات الـ Project

- نوع البزنس: [e-commerce / lead gen / SaaS / info product / booking / غيره]
- المنتج أو الخدمة: [وصف سطرين]
- الـ primary conversion: [مثلاً: Purchase, Lead form submit, Booking confirmed, Subscription start]
- conversions ثانوية مهمة: [مثلاً: Add to Cart, Initiate Checkout, Newsletter signup, View pricing]
- المنصات الإعلانية المستخدمة: [اختار من: Meta, Google, TikTok, Snapchat, X, LinkedIn]
- الـ traffic sources الأخرى لازم تتتبع: [Organic, Email, Referral, Direct, Affiliate]
- الموقع: https://www.youtube.com/watch?v=eKRlU-5Ny3o
- أي domain أو subdomain transitions في الـ user journey: [مثلاً: main.com → checkout.main.com، أو لا يوجد]
- مدة الـ sales cycle: [شراء فوري / أيام / أسابيع]
- ٣ أمثلة كامبينات حقيقية متوقعة للـ project ده: [مثال 1] | [مثال 2] | [مثال 3]
- لغة الـ campaigns: [عربي / إنجليزي / الاثنين]

## المطلوب

artifact واحد بـ Markdown اسمه "Tracking Foundation — [اسم الـ project]" فيه ٤ أقسام بالترتيب:

### القسم ١: Assumptions
لو في معلومة من اللي فوق ناقصة أو مبهمة وانت محتاجها، حطها هنا صريحة، افترض الـ industry default، وكمل. متسألش — افترض وكمل.

### القسم ٢: UTM Convention
- جدول بالأعمدة: utm_source | utm_medium | utm_campaign | utm_content | utm_term
- القواعد المكتوبة فوق الجدول: lowercase, لا مسافات, استخدم "_" كـ separator
- لكل منصة من المنصات اللي ذكرتها، row مثال كامل (مع الـ ٣ أمثلة الكامبينات اللي ذكرتها كـ anchor)
- formula واضحة للـ utm_campaign name تربط: objective + audience + creative_id (مثلاً: prospecting_lookalike1_v3)
- جدول إضافي للـ non-paid sources (organic, email, referral, direct) عشان GA4 ميخلطش بين الـ paid والـ organic

### القسم ٣: Pixel Events (لكل منصة إعلانية على حدة)
لكل منصة من المنصات اللي ذكرتها:
- header بإسم المنصة
- جدول بالأعمدة: Event Name | Trigger (الـ user action أو الـ page) | Parameters (value, currency, content_ids, إلخ) | Where on site
- استخدم الـ standard events الخاصة بالمنصة (Meta: ViewContent / AddToCart / InitiateCheckout / Purchase / Lead / Subscribe — TikTok: ViewContent / ClickButton / CompletePayment / SubmitForm — وهكذا)
- لو الـ primary conversion ميـ map-ش على standard event، اعمل custom event بإسم واضح
- لـ Meta تحديداً: اشر للـ Conversions API كـ requirement جنب الـ Pixel (مش بديل) — مش optional لو في iOS traffic
- متخترعش events مش موجودة في الـ platform. لو مش متأكد من event، اكتبه كـ custom event بـ prefix "custom_"

### القسم ٤: GA4 Event Specification
- جدول بالأعمدة: Event Name | Trigger | Parameters | User Properties (لو فيه) | Mark as Key Event? (Y/N)
- استخدم الـ GA4 recommended events حيثما ممكن (purchase, generate_lead, sign_up, add_to_cart, begin_checkout, view_item, إلخ)
- اللي مش متغطي بالـ recommended، اعمل custom event بـ snake_case
- لو في cross-domain transitions اتذكرت فوق، أضف sub-section في الآخر بإسم "Cross-Domain Configuration" يحدد الـ domains اللي لازم تتضاف في الـ data stream

### القسم ٥: Cross-Platform Conversion Map
جدول في آخر الوثيقة بالأعمدة:
| Business Event | Meta Pixel Event | TikTok Pixel Event | (باقي المنصات) | GA4 Event | UTM utm_campaign pattern |

اللي بيوضح إن نفس الـ business conversion (مثلاً "عميل اشترى") بيتسجل إزاي عبر كل platform، والـ event names في كل مكان متطابقة logically.

## قواعد إلزامية للـ output

1. ابدأ بكتابة الـ Cross-Platform Conversion Map كـ draft الأول داخلياً قبل ما تملا الـ ٣ أقسام. كل event بعد كده لازم يتطابق مع الـ map ده.
2. الوثيقة handoff-ready: developer ياخدها ويطبق بدون ما يسأل. لو في خطوة محتاجة قرار من البزنس، علّمها بـ "DECISION NEEDED:" واكتب الـ options.
3. اكتب الـ explanatory text بالعربي، وخلي الـ event names والـ parameter names بالإنجليزي زي ما هي في الـ platform docs.
4. لو الـ project فيه subscription أو recurring revenue، أضف parameter للـ value بـ "predicted_ltv" مع شرح في الـ assumptions إنه قيمة مبدئية للـ optimization.
