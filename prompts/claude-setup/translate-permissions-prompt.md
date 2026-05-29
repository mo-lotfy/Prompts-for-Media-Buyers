---
id: translate-permissions-prompt
display_name_ar: "ترجمة وتقييم Permissions الـ MCP"
display_name_en: "Translate MCP Permissions"
category: claude-setup
version: 1
source_episode: 28
episode_uses: [28]
contributors:
  - lotfy
placeholder_marker: "[الصق هنا نص الـ permissions/scopes زي ما هي ظاهرة على شاشتك]"
example_input: |
  الـ MCP: Google Drive
  
  شاشة الـ permissions:
  - See, edit, create, and delete all of your Google Drive files
  - See and download all your Google Drive files
  - Connect itself to your Google Drive
  
  هدفي: Claude يقرا ملفات الـ briefs بتاعت العملاء على Drive ويلخّص ما يعدّل فيها أبداً، ولا يبعت ملفات لحد.
  
---

أنا واقف على شاشة الموافقة بتاعت ربط MCP اسمه [اسم الـ MCP — مثلاً Google Drive] بـ Claude.

شاشة الـ permissions طالعالي وبتطلب مني الموافقة على السطور دي بالحرف:
"""
[الصق هنا نص الـ permissions/scopes زي ما هي ظاهرة على شاشتك. لو بالإنجليزي زي "See and download all your Drive files" خليها زي ما هي.]
"""

عايزك:

1. ترجم كل permission بسطر واحد بالعربي — إيه اللي بتسمح به فعلياً، بدون لف ودوران.

2. صنّف كل واحدة:
   - Read — بتشوف فقط
   - Write — بتعدل أو بتضيف
   - Delete — بتمسح
   - Broad — صلاحية واسعة بتاخد وصول لحاجات أكتر من اللازم

3. هدفي إن Claude يقرا الملفات/البيانات بتاعتي ويلخصها بس، مش يعدل ولا يبعت حاجة. الـ permissions اللي قدامي مناسبة للهدف ده، ولا فيها أكتر من اللازم؟

4. لو فيها صلاحية واحدة بتقلقك، قولي أنهي واحدة بالظبط وليه، وإيه السيناريو اللي ممكن تتسبب فيه لو حد دخل حسابي.

5. توصيتك النهائية: أكمل الـ Approve، ولا ألغي وأدور على نفس الـ MCP بصلاحيات أضيق؟

كن صريح. لو الـ permissions overkill للمهمة دي قولي مباشرة.
