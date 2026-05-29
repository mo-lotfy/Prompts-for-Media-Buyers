---
id: creative-decay-analysis
display_name_ar: "تحليل تلف الـ Creatives"
display_name_en: "Creative Decay Analysis"
category: performance
version: 1
source_episode: 33
episode_uses: [33]
contributors:
  - lotfy
placeholder_marker: "[اكتب: Meta / TikTok / Google Ads]"
example_input: |
  الـ Platform: Meta
  
  [CSV — 14 يوم × ad-level، أرقام دقيقة لـ 30 ads]
  date,ad_name,impressions,frequency,ctr,cpa,spend
  2026-04-25,Ad-Nazafa-Hook-Bnt-Sania,4200,1.1,2.3%,72,180
  2026-04-26,Ad-Nazafa-Hook-Bnt-Sania,5100,1.4,2.4%,68,210
  2026-04-27,Ad-Nazafa-Hook-Bnt-Sania,5800,1.7,2.3%,71,235
  2026-04-28,Ad-Nazafa-Hook-Bnt-Sania,6400,2.0,2.2%,74,255
  2026-04-29,Ad-Nazafa-Hook-Bnt-Sania,6800,2.3,2.1%,78,265
  2026-04-30,Ad-Nazafa-Hook-Bnt-Sania,7100,2.5,2.0%,82,280
  2026-05-01,Ad-Nazafa-Hook-Bnt-Sania,7400,2.7,1.9%,84,290
  ...
  2026-05-09,Ad-Nazafa-Hook-Bnt-Sania,8200,3.2,1.6%,98,310
  2026-05-10,Ad-Nazafa-Hook-Bnt-Sania,8400,3.4,1.5%,108,325
  2026-05-11,Ad-Nazafa-Hook-Bnt-Sania,8100,3.5,1.4%,118,330
  (continues for all 30 ads × 14 days)
  
---

رفعتلك ⁨CSV⁩ فيه ⁨performance⁩ يومي لمجموعة ⁨creatives⁩.

الـ Platform: [اكتب: Meta / TikTok / Google Ads]

الـ Columns في الـ CSV:
- date
- ad_name
- impressions
- frequency
- ctr
- cpa
- spend

شغّل Code Execution وعمل التالي:

1) قسم الداتا creative-by-creative

2) لكل creative عنده 7 أيام أو أكتر:
   - احسب الـ baseline لكل metric من أيام 4-6 من life الـ creative (مش أيام 1-3 عشان دي learning period)
   - ارسم 3 منحنيات على نفس الـ chart: frequency, ctr, cpa
   - حدد التواريخ دي:
     * يوم دخول الـ frequency في المنطقة الحرجة:
       - Meta: frequency ≥ 3.0
       - TikTok: frequency ≥ 2.0
       - Google Ads: frequency ≥ 2.5
     * يوم انخفاض الـ ctr بنسبة 20% أو أكتر تحت الـ baseline (مستمر 3 أيام)
     * يوم ارتفاع الـ cpa بنسبة 15% أو أكتر فوق الـ baseline (مستمر 3 أيام)

3) قارن التلات تواريخ. غالباً الـ ctr drop هيسبق الـ cpa rise بـ 2-5 أيام. ده الـ early signal اللي بيقول الـ creative اتكسر من إمتى.

اطلع تقرير بالشكل ده لكل creative:

## Creative: [ad_name]

### Baseline (أيام 4-6):
- Frequency: X | CTR: X% | CPA: X

### نقاط الكسر:
- Frequency دخل ≥ threshold يوم [date]
- CTR انخفض ≥ 20% يوم [date] ← (early signal)
- CPA ارتفع ≥ 15% يوم [date]

### القرار:
- Status: Healthy / Decaying / Broken
- Action: Refresh now / Refresh خلال 2-3 أيام / Safe
- السبب في سطر واحد: الـ creative اتكسر فعلاً من [عدد] أيام، الـ CPA لحق دلوقتي.

### Chart:
[ارسم الـ 3 metrics على نفس الـ timeline، كل metric بـ axis منفصل]

---

في الآخر اطلع جدول ملخص:

| Creative | Days Live | يوم الانكسار الفعلي (CTR) | يوم الـ CPA Spike | Lag (أيام) | Status | Action |

رتب الجدول بـ spend descending.

قواعد مهمة:
- لو creative أقل من 7 أيام: اكتب "بيانات قليلة، استنى" ومتقرّرش.
- تجاهل أي fluctuation أقل من 3 أيام مستمرة — ده noise مش decay.
- أيام الـ CPA = 0 (مفيش conversions): اعتبرها data missing مش recovery.
- لو الـ frequency متطابق لكل الـ creatives في نفس اليوم: ده معناه الـ export على مستوى الـ adset مش الـ ad. قول للـ user يعيد الـ export بـ breakdown by Ad.
- ركّز على الـ creatives اللي spend ≥ 5% من الإجمالي.

اكتب التحليل بالعربي، مباشر بدون مجاملات.
