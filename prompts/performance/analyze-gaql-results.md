---
id: analyze-gaql-results
display_name_ar: "تحليل نتائج GAQL"
display_name_en: "Analyze GAQL Results"
category: performance
version: 1
source_episode: 32
episode_uses: [32]
contributors:
  - lotfy
placeholder_marker: "[الصق الـ CSV هنا — بكل الصفوف]"
example_input: |
  campaign_name,device,keyword,impressions,clicks,cost,conversions,conv_value,ctr,cvr,roas
  Brand-Search-EG,Mobile,nazafa plus,1850,142,1280,12,3840,7.7%,8.5%,3.0
  Brand-Search-EG,Desktop,nazafa plus,920,68,750,8,2560,7.4%,11.8%,3.4
  Generic-Search-EG,Mobile,منظفات طبيعية,3420,205,2450,15,4500,6.0%,7.3%,1.84
  Generic-Search-EG,Desktop,منظفات طبيعية,1850,118,1280,8,2400,6.4%,6.8%,1.88
  Generic-Search-EG,Mobile,spray أرضيات natural,810,52,640,6,1800,6.4%,11.5%,2.81
  Generic-Search-EG,Desktop,spray أرضيات natural,490,28,420,4,1280,5.7%,14.3%,3.05
  Eco-Cleaning-EG,Mobile,بديل cif آمن,2150,128,1850,9,2700,5.95%,7.0%,1.46
  Eco-Cleaning-EG,Desktop,بديل cif آمن,1280,72,1050,6,1980,5.6%,8.3%,1.89
  
  السؤال الأصلي: عايز أعرف الـ keywords اللي ROAS بتاعها على Mobile أعلى من ROAS على Desktop بنسبة 30% أو أكتر، وكان عليها spend > 500 EGP في آخر 14 يوم.
  
---

دي نتيجة الـ Query اللي شغّلتها في Google Ads Report Editor:
"""
[الصق الـ CSV هنا — بكل الصفوف]
"""
والسؤال الأصلي كان:
"""
[الصق نفس السؤال من Prompt 1]
"""
اعمل الآتي:
1) جدول مقارن
   لو السؤال مقارنة (مثلاً Mobile vs Desktop)، طلّع جدول بالأرقام الفعلية لكل segment، مش وصف كلامي.
2) Winners و Losers
   حدد بناءً على المقياس الأساسي في السؤال:
   - أعلى ٣ صفوف (winners)
   - أقل ٣ صفوف (losers)
   - أي صف فيه delta كبير بين الـ segments (مثلاً keyword أداؤه ممتاز على Mobile وضعيف على Desktop)
3) Actions
   اقترح ٢-٣ خطوات تنفيذية فورية بناءً على البيانات، مثلاً:
   - زود bid على keyword X على device Y
   - اوقف keyword Z
   - افصل campaign لـ device منفصل عشان تتحكم في الـ budget
4) الخلاصة في سطرين
   جملة واحدة عن النمط اللي ظهر، وجملة واحدة عن أهم Action.
اكتب بالعربي، الجداول بـ Markdown.
