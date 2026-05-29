---
id: قراءة-بنية-الـ-sheet
display_name_ar: "قراءة بنية الـ Sheet"
display_name_en: "Sheet Structure Reading"
category: reporting
version: 1
source_episode: 30
episode_uses: [30]
contributors:
  - lotfy
placeholder_marker: "[ضع رابط الـ Sheet هنا]"
example_input: |
  https://docs.google.com/spreadsheets/d/1XYZnazafaPlusWeeklyPerformance2026/edit
  
---

افتح الـ Sheet ده عبر Google Sheets MCP:
[ضع رابط الـ Sheet هنا]

اقرا الـ Sheet كامل وطلعلي تقرير عن البنية:

## Tabs الموجودة
- اسم كل tab + هل هو الـ tab الأساسي اللي بيتحدث أسبوعياً؟

## بنية الـ Tab الأساسي
- اسم الـ tab بالظبط: ...
- عمود الأسبوع/التاريخ: [الحرف + الـ format المستخدم في الصفوف، مثال: "B - W45 (1-7 Nov)"]
- الـ columns الموجودة بترتيبها:
  - Column [حرف]: [اسم الـ header] — [نوع البيانات: رقم/نسبة/عملة/نص]
- آخر row فيه بيانات: row رقم [...]
- الـ next empty row للأسبوع الجاي: row رقم [...]

## خلايا فيها formulas (ممنوع الكتابة فيها)
- Cell [...]: formula = [...]
- ...

## ملاحظات
- أي pattern غريب محتاج أعرفه قبل ما أكتب أسبوعياً (صفوف summary, merged cells, conditional formatting).

كن دقيق في الـ cell references. ده الـ baseline اللي هنبني عليه كل تحديث.
