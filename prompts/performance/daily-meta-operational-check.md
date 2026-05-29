---
id: daily-meta-operational-check
display_name_ar: "الفحص اليومي التشغيلي لـ Meta"
display_name_en: "Daily Meta Operational Check"
category: performance
version: 1
source_episode: 35
episode_uses: [35]
contributors:
  - lotfy
---

مرفق export يومي من Meta Ads Manager (Campaigns view) للحساب بتاعي.
شغلك: Operational Health Check — مش creative، مش جودة الإعلانات. أنا عايز أعرف:
هل كل حاجة بتشتغل صح؟ هل فيه issues تشغيلية محتاجة تدخل النهاردة؟
افحص الـ data على ٦ محاور:
1. Delivery Status
   - أي campaign في "Not Delivering" أو "Limited Delivery" أو "Inactive" غير متوقعة
   - أي campaign كانت Active امبارح ومش active دلوقتي
2. Pacing
   - احسب نسبة الـ spend الفعلي مقابل daily budget لكل campaign
   - flag أي campaign صرفت < 50% من budget اليومي (under-pacing)
   - flag أي campaign صرفت > 95% (قرب الـ daily cap)
   - لو الـ campaign على lifetime budget، احسب pacing على أساس الأيام المتبقية والـ spend rate
3. Spend Anomalies
   - لو في الـ data أكتر من يوم، قارن صرف أمس بمتوسط الأيام السابقة
   - flag drop > 40% أو spike > 100% بدون سبب واضح
4. CPM Stability
   - flag campaign الـ CPM فيها ارتفع > 50% فجأة — ده signal تشغيلي (delivery issue, audience competition) مش creative
   - flag campaign الـ CPM نزل drastically مع spend هابط — signal على audience exhaustion أو bidding problem
5. Frequency Operational Signals
   - flag campaign الـ Frequency > 4 — ده signal تشغيلي على audience saturation
   - مش هنحكم على الـ creative، إحنا بس بنشاور إن الـ audience size أو الـ rotation محتاج مراجعة
6. Account-Level
   - أي campaigns Active لكن مفيش ads نشطة جواها
   - أي budget changes مفاجئة بين أمس والنهاردة
   - أي إشارات على spend limit قرب (لو الـ data بتقول)
استخدم code execution لو الحسابات تستحق دقة (pacing %, averages, anomaly thresholds).
نوع الـ output:
## 🔴 High Priority — تدخل النهاردة
[لكل campaign: الاسم + السبب التشغيلي بالأرقام + الـ action المقترح في سطر]
## 🟡 Medium Priority — راقب بكرة
[campaigns فيها signal لكن لسه مش حرجة + الـ threshold اللي لو اتعدى تبقى red]
## 🟢 Healthy
[رقم الـ campaigns السليمة + اسم أو اتنين كـ sample]
## Operational Summary
- Active campaigns: [رقم]
- إجمالي الـ spend امبارح: [رقم]
- نسبة الإجمالي مقابل total daily budgets: [نسبة]
- أكبر anomaly في الحساب: [اسم الـ campaign + السبب]
قواعد:
- ركز على التشغيلي. لو لقيت حاجة creative (زي CTR ضعيف على creative معين)، اذكرها سريعاً تحت "ملاحظة على الـ Creative" لكن مش جزء من الـ priority lists.
- لو الـ export ناقص أعمدة محتاجها (مثلاً مفيش daily budget واضح، أو مفيش historical data)، قولي إيه الناقص وإيه اللي قدرت تحلله من غيره.
- ميزانية أمس مش الميزانية النهاردة بالضرورة. لو لقيت budget change، flag-ها كـ context.
- لو الـ campaign لسه في Learning Phase (أقل من 50 conversions أو أحدث من ٧ أيام)، اذكر ده وخفف الحكم على anomalies لأن الـ data لسه بتتجمع.
اكتب بالعربي ومباشر — مفيش مقدمات.
