---
id: tiktok-creative-fatigue-daily-scan
display_name_ar: "فحص يومي لـ Creative Fatigue على TikTok"
display_name_en: "TikTok Creative Fatigue Daily Scan"
category: performance
version: 1
source_episode: 34
episode_uses: [34]
contributors:
  - lotfy
---

عايز تحليل creative fatigue لحملاتي على TikTok.
استخدم الـ TikTok Ads MCP وهات بيانات آخر 14 يوم على مستوى كل ad نشط (ad-level، مش campaign-level)، يومياً:
- Impressions
- Spend
- Hook rate (نسبة 2-second video views للـ impressions)
- Hold rate (نسبة 6-second views أو video completion rate)
- CTR
- CPM
- Frequency
- Reach (daily unique)
- CPA أو cost per result
طبّق الفلاتر دي قبل التحليل:
- Spend في آخر 14 يوم ≥ $100 (عشان البيانات تكون كافية إحصائياً)
- الـ ad مر على إطلاقه 5 أيام على الأقل (عشان يبقى فيه baseline قابل للمقارنة)
- اللي بره الشرطين دول، حطه في "excluded" بس متحللوش
لكل ad ينطبق عليه الشرطين، اعمل الخطوات دي:
1. قسّم الـ 14 يوم لفترتين متساويتين: أول 7 أيام (baseline) وآخر 7 أيام (current).
2. احسب نسبة التغير في كل metric بين الفترتين.
3. صنّف الـ ad في واحدة من 4 severity levels:
   🟢 صحي: مفيش decay واضح في أي leading metric.
   
   🟡 إشارة مبكرة: متغير واحد فقط من اللي تحت:
      - Hook rate نازل ≥ 15%
      - Hold rate نازل ≥ 12%
      - CTR نازل ≥ 15%
      - Frequency فوق 2.5 وطالع بـ ≥ 20%
   
   🟠 fatigue مؤكد: 2 أو أكتر من الـ leading metrics نازلين بالنسب فوق، والـ CPA لسه ما تأثرش بشكل كبير (تغير < 20%).
   
   🔴 broken: الـ CPA طالع ≥ 25% — الخسارة بدأت فعلاً.
4. لكل ad مصنّف 🟠 أو 🔴، قارن reach trend بـ frequency trend عشان تميز بين سببين:
   - reach ثابت أو نازل + frequency طالع → creative fatigue حقيقي (المحتوى استُهلك).
   - reach كان طالع وفجأة استوى + frequency طالع → audience saturation (الـ targeting وصل سقفه، مش الـ creative).
   اذكر التشخيص ده في كل ad.
5. لكل ad في 🟠 و🔴، حدد يوم بدء الـ decay (أول يوم الـ leading metric كسر الـ threshold) وقدّر كم spend راح من اليوم ده لحد دلوقتي.
طلّع التقرير بالشكل ده بالظبط:
## Summary
- إجمالي ads داخلة في التحليل: X
- 🟢 صحية: X
- 🟡 إشارة مبكرة: X
- 🟠 fatigue مؤكد — لازم action: X
- 🔴 broken — خسائر متحققة: X
- مستبعدة (spend < $100 أو عمر < 5 أيام): X
## 🔴 خسائر متحققة (أولوية قصوى)
لكل ad:
- الاسم / ID
- Spend في آخر 14 يوم
- يوم بدء الـ decay
- Spend ضائع تقديرياً من يوم بدء الـ decay
- التغير في كل leading metric (أرقام)
- التشخيص: creative fatigue ولا audience saturation
- التوصية: kill / refresh / rotate
## 🟠 لازم action النهاردة
لكل ad:
- الاسم / ID
- Spend في آخر 14 يوم
- التغير في كل leading metric (أرقام)
- التشخيص: creative fatigue ولا audience saturation
- التوصية: refresh / rotate / kill
- توقع: الـ CPA متى هيكسر لو متعملش حاجة (تقدير بالأيام)
## 🟡 watch list
- الاسم / ID
- الـ metric اللي نازل والنسبة
- اللي تراقبه في الـ 3 أيام الجاية
## ملاحظات على البيانات
- لو فيه يوم بيانات ناقصة من TikTok أو رقم غريب، اذكره.
- لو آخر يوم باين عليه إنه data partial (TikTok بيتأخر 24-48 ساعة على بعض metrics)، نبه.
اكتب بالعربي ومباشر. لو ad محتاج توضيح أكتر، قول بدل ما تخمن.
