---
id: skill-generator
display_name_ar: "مولّد Claude Skills"
display_name_en: "Skill Generator"
category: claude-setup
version: 1
source_episode: 20
episode_uses: [20]
contributors:
  - lotfy
placeholder_marker: "[الصق هنا وصف الـ workflow]"
example_input: |
  الـ workflow:
  كل يوم اتنين الصبح، بفتح Meta Ads Manager للعميل وبشوف أداء آخر 7 أيام. بنزّل CSV فيه: ad set name, spend, purchases, CPA, CTR, CPM, frequency, ROAS لكل ad set. بمر على الـ ad sets، بدور على:
  1. ad sets فوق CPA target بـ 30%+ — بـ pause أو cut budget 30% أو change creative
  2. ad sets تحت CPA target — بـ scale budget 20-30% مش أكتر (ما يكسرش الـ learning)
  3. ad sets frequency > 3 — بـ refresh creative
  4. ad sets بـ CTR < 1% — بـ pause + launch creative جديد
  
  بـ كتب التعديلات في checklist، بـ نفذها، بـ بعت رسالة للعميل تلخّص: 3 ad sets pause/cut + 1-2 ad sets scale + توقعات الأسبوع.
  
  كل ده بـ يأخد ساعة. عايز Skill بـ يـ trigger من "مراجعة Meta أسبوعية" أو "Weekly Meta review".
  
  مثال على تنفيذ سابق:
  Input CSV: 12 ad set، الأسبوع الفائت.
  Output: 3 توصيات pause، 2 scale، رسالة للعميل بـ summary التعديلات وتوقعات الأسبوع.
  
---

عندي workflow بشتغل بيه بشكل متكرر، وعايز أحوله لـ Claude Skill عشان ميتعادش شرحه كل مرة.

الـ workflow بكلامك العادي — اشمل: الخطوات اللي بتعملها، الـ inputs اللي بتاخدها، الـ output اللي بتطلعه، أي قرارات بتتاخد في النص.

"""
[الصق هنا وصف الـ workflow]
"""

مثال على تنفيذ سابق (اختياري لكن مفيد جداً):
"""
[الصق هنا نسخة من تنفيذ حقيقي — الـ input اللي بعتته + الـ output اللي طلع]
"""

اللي عايزه منك يتعمل بترتيب:

أولاً — افحص الـ workflow وحدد لو فيه gaps هتمنع Claude تاني ينفذه لوحده. الـ gap يعني:
- خطوة فيها قرار من غير criteria واضحة
- output مذكور بشكل عام من غير شكل محدد
- input لازم من المستخدم لكن مش متذكر إنه لازم
- branching condition بدون logic مكتوب

لو لقيت gaps، اسألني عنها سؤال سؤال قبل ما تكتب الـ Skill. لو الـ workflow كامل ومش محتاج توضيح، عدّي للخطوة اللي بعدها على طول.

ثانياً — اكتبلي محتوى SKILL.md جاهز للنسخ بالشكل ده بالظبط:

---
name: [snake_case_name قصير ومحدد]
description: Use this skill when [وصف محدد جداً للحالة اللي الـ Skill يتفعل فيها — مش "for reports" لكن "when the user asks for the weekly paid social performance report covering Meta and TikTok campaigns"]. Trigger phrases include: [٣-٥ صيغ طبيعية الـ Media Buyer ممكن يكتبها لتفعيل الـ Skill].
---

# [Skill Title]

## What this skill does
[جملة أو اتنين بالعربي عن وظيفة الـ Skill]

## What the user must provide
- [Input ١ — لو ناقص، الـ Skill يطلبه قبل ما يكمل]
- [Input ٢]
- [...]

## Procedure
1. [خطوة محددة قابلة للتنفيذ من غير ما Claude يسأل]
2. [خطوة محددة]
3. [لو فيه قرار: اكتبه كـ if/else صريح — "إذا الـ CPA زاد أكتر من ٢٠٪، اعمل X. غير كده، اعمل Y"]
[...]

## Output format
[شكل المخرج النهائي — sections بأسمائها، أو table بأعمدة محددة، أو نص حر بسياق محدد]
اكتب الـ output النهائي بالعربي.

## Quality checks before delivering
- [Check ١ — حاجة محددة Claude يـ verify-ها قبل ما يبعت الـ output]
- [Check ٢]

شروط الكتابة:
- الـ description في الـ frontmatter لازم محدد كفاية إن الـ Skill ميـ trigger-ش في حالات مش متوقعة، ولازم مفتوح كفاية إن الـ trigger الطبيعي يـ activate-ه
- اكتب الـ procedure بحيث Claude يقدر يـ execute من غير ما يسأل ولا سؤال — إلا لو inputs ناقصة
- لو فيه أي قرار في الـ workflow، اكتب الـ branching logic صريح
- اكتب SKILL.md كله بالـ English (الـ structure والـ headers)، لكن خلي تعليمات الـ output للمستخدم بالعربي
