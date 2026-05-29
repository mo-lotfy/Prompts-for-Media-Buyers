---
id: claude-setup-security-audit
display_name_ar: "مراجعة أمن Claude Setup"
display_name_en: "Claude Setup Security Audit"
category: claude-setup
version: 1
source_episode: 42
episode_uses: [42]
contributors:
  - lotfy
placeholder_marker: "[الصق الـ inventory هنا — لكل عنصر اكتب: الاسم، النوع، الـ Access، آخر استخدام، بيوصل لإيه عندي]"
example_input: |
  - Google Drive Connector — Read + Write — آخر استخدام: آخر أسبوع — بيوصل لـ: ملفات briefs العملاء، spreadsheet weekly reports.
  - Asana Connector — Read + Write — آخر استخدام: آخر شهر — بيوصل لـ: task lists لكامبينات نظافة بلس و Tech Talents EG.
  - Slack Connector — Read + Write — آخر استخدام: آخر أسبوع — بيوصل لـ: #campaigns-launch، #client-nazafa، #internal-ops.
  - Notion Connector — Read فقط — آخر استخدام: آخر أسبوع — بيوصل لـ: campaigns briefs database.
  - Gmail Connector — Read + Write — آخر استخدام: آخر شهر — بيوصل لـ: إيميلات شركة، contracts من العملاء.
  - WhatsApp Business — Read + Write — آخر استخدام: مش فاكر — بيوصل لـ: محادثات العملاء.
  - HubSpot Connector — Read + Write — آخر استخدام: آخر ٣ شهور — بيوصل لـ: CRM للـ leads.
  - Google Calendar — Read + Write — آخر استخدام: آخر شهر — بيوصل لـ: مواعيد client calls.
  - Skill: weekly-client-deliverables — من شهرين، auto أسبوعياً.
  - Skill: negative-keywords-audit — من 3 شهور، manual.
  - Skill: daily-pulse — من 4 شهور، auto يوم 8AM.
  - TikTok Ads API personal token — مش متأكد، آخر استخدام: مش فاكر — admin access.
  
---

دي قائمة كاملة بكل الـ Connectors والـ Skills اللي ربطتها بـ Claude:
"""
[الصق الـ inventory هنا — لكل عنصر اكتب:
- الاسم: (مثال: Google Drive, Notion, Asana, Gmail...)
- النوع: Connector / Skill
- الـ Access: Read فقط / Read + Write / مش متأكد
- آخر استخدام: آخر أسبوع / آخر شهر / آخر ٣ شهور / مش فاكر
- بيوصل لإيه عندي: (مثال: ملفات شخصية، شغل عميل X، إيميلات شركة، database عملاء)]
لو فيه أي حاجة مفعلة ومش فاكرها، اكتبها برضو حتى لو ناقصة معلومات.
"""
عايزك تعمل audit أمني للـ setup ده بالخطوات دي:
## ١. قواعد التصنيف (طبّقها قبل ما تبدأ)
- أي عنصر فيه "مش متأكد" في الـ Access → اعتبره Write Access كـ default محافظ، و flag-ه عشان أتأكد من Settings.
- أي Connector بيوصل لبيانات عملاء (أسماء، ميزانيات، contracts، performance data) → ارفع فئته بدرجة واحدة على الأقل عن التصنيف العادي.
- أي Skill مفعّلة بتشغل auto بدون ما المستخدم يبدأها → عاملها معاملة Write Access.
## ٢. التصنيف
صنّف كل عنصر في فئة من ٤:
🔴 Critical — لازم action النهاردة
معايير: Write Access على بيانات عملاء، أو ما اتستخدمش من شهر+ مع Write Access، أو Skill auto بدون مراجعة.
🟡 High — راجعه الأسبوع ده
معايير: Write Access مع استخدام منتظم، أو Read Access على بيانات حساسة.
🟢 Acceptable — مفيش action دلوقتي
معايير: Read فقط + استخدام منتظم + بيانات مش حساسة.
⚫ Revoke — احذفه خالص
معايير: ما اتستخدمش من ٣ شهور+، أو نسيت إنه موجود، أو ما عندوش غرض واضح.
## ٣. لكل عنصر، اكتب:
- **الفئة:** [🔴 / 🟡 / 🟢 / ⚫]
- **القرار:** Revoke / Downgrade to Read / Keep with Review / Keep
- **السبب:** في سطر واحد، concrete
## ٤. مخاطر مشتركة (combination risks)
لو فيه Connector عنده Write Access على communication channel (Slack, Gmail, WhatsApp) + Connector تاني عنده Read Access على بيانات حساسة → ده combination خطر، اعمله flag حتى لو كل واحد لوحده Acceptable.
## ٥. Quick Wins
أعلى ٣ مخاطر لازم اتعامل معاها قبل أي حاجة تانية، مرتبة:
1. [العنصر] — [القرار] — [يتعمل إزاي في Settings]
2. ...
3. ...
## ٦. الـ Schedule الجاي
- اسألني (في آخر التقرير): "آخر مرة ربطت فيها Connector جديد كانت إمتى؟"
- بناءً على إجابتي + حجم الـ setup الحالي، اقترح تكرار محدد (شهري / ربع سنوي / نصف سنوي) و trigger يخليني افتكر (مثلاً: أول يوم في الشهر، أو بعد كل client جديد).
اكتب التقرير بالعربي، مباشر، بدون مجاملات. لو الـ inventory ناقص معلومة أساسية في عنصر معين، اطلبها صراحة قبل ما تكمل التصنيف.
