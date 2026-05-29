---
id: weekly-excel-report-build
display_name_ar: "بناء التقرير الأسبوعي بـ Excel"
display_name_en: "Weekly Excel Report Build"
category: reporting
version: 1
source_episode: 38
episode_uses: [38]
contributors:
  - lotfy
---

استخدم Code Execution وابني لي ملف Excel احترافي من بيانات الحملة المرفقة، بالمواصفات التالية بالظبط.
## التابات (Sheets) — بالترتيب
1. Raw Data — البيانات الخام بعد تنظيف بسيط: إزالة الصفوف الفارغة، توحيد أسماء الأعمدة، تحويل أعمدة التاريخ لـ datetime.
2. Daily Summary — Pivot بالتاريخ: Spend, Impressions, Clicks, CTR, CPC, CPM, Conversions, CPA, ROAS (لو في Revenue).
3. Campaign Summary — Pivot باسم الكامبين: نفس الأعمدة + عمود Days Active.
4. Ad Set Summary — Pivot باسم Ad Set: نفس الأعمدة.
5. Creative Performance — لو فيه عمود Creative أو Ad Name، Pivot عليه بنفس الأعمدة.
## توحيد أسماء الأعمدة قبل أي حساب
طبّق هذا الـ aliasing على الـ raw data:
- Amount Spent / Cost / Spend → Spend
- Impr. / Impressions → Impressions
- Link Clicks / Clicks → Clicks
- Results / Conversions / Purchases → Conversions
- Purchase ROAS / ROAS → ROAS
- Campaign name / Campaign Name → Campaign Name
- Ad set name / Ad Set Name → Ad Set Name
اعرض لي الـ mapping اللي طبقته قبل ما تكمل، وبيّن لي أي أعمدة من المطلوبات مش موجودة.
## الـ Formulas (لازم تكون حية في الـ xlsx، مش قيم محسوبة بـ Python ومحطوطة كنص)
في كل cell من الأعمدة دي، حط الـ formula كـ string بادئ بـ "=" (يعني cell.value = "=IFERROR(C2/D2, 0)") عشان Excel يعتبرها formula حقيقية:
- CTR = =IFERROR(Clicks/Impressions, 0)  — صيغة percentage
- CPC = =IFERROR(Spend/Clicks, 0)
- CPM = =IFERROR(Spend/Impressions*1000, 0)
- CPA = =IFERROR(Spend/Conversions, 0)
- ROAS = =IFERROR(Revenue/Spend, 0)  — لو فيه Revenue
بعد ما تخلّص، تحقق من خلية واحدة على الأقل في كل tab إنها بتحتوي على formula string مش رقم ثابت.
## Conditional Formatting (على الـ pivot tabs الأربعة)
استخدم openpyxl.formatting.rule (CellIsRule أو FormulaRule):
- عمود CTR: أخضر فاتح لو > 2%، أحمر فاتح لو < 1%
- عمود CPA: أخضر فاتح لو أقل من متوسط العمود، أحمر فاتح لو أعلى من المتوسط بـ 50% أو أكتر
- عمود ROAS: أخضر فاتح لو > 3، أحمر فاتح لو < 1.5
استخدم ألوان فاتحة (مش fluorescent): أخضر = #C6EFCE، أحمر = #FFC7CE.
## التنسيق العام
- Headers (الصف الأول): Bold، خلفية #D9D9D9، محاذاة وسط، ارتفاع الصف 22.
- أعمدة Currency (Spend, Revenue, CPC, CPM, CPA): number format "#,##0.00"
- أعمدة Percentage (CTR): number format "0.00%"
- أعمدة Numbers الكبيرة (Impressions, Clicks, Conversions): number format "#,##0"
- Freeze panes على الصف الأول في كل tab.
- Auto-fit عرض الأعمدة: احسب أطول قيمة لكل عمود واضبط الـ column width بناء عليها (مع حد أدنى 12 وحد أقصى 40).
## معالجة الـ encoding للنصوص العربية
افتح الـ CSV بـ encoding='utf-8-sig' أولاً. لو فشلت القراءة، جرّب utf-8 ثم cp1256. بعد القراءة، اطبع أول صف عشان أتأكد إن أسماء الكامبينات العربية ظاهرة صح قبل ما تكمل.
## Group-by للـ pivots
اعمل group by Campaign Name (مش Campaign ID) و Ad Set Name (مش Ad Set ID)، عشان لو الكامبين اتعملها restart بـ ID جديد لكن بنفس الاسم، تتجمع في صف واحد.
## اسم الملف ومخرجات
- اسم الملف: campaign_report_YYYY-MM-DD.xlsx بتاريخ اليوم.
- احفظ في /tmp أو working directory.
- بعد الحفظ، قدم لي رابط التحميل.
## لو فيه عمود مفقود
لو عمود مطلوب مش موجود في الـ raw data (مثلاً Revenue غير متاح)، اعمل الـ tab بدون العمود ده وذكرني في نهاية الرد بأي حاجة ناقصة — متوقفش الكود.
