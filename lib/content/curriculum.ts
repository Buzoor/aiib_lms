import type { Module } from './types'

/**
 * AIIB CURRICULUM
 * ---------------------------------------------------------------
 * This is the single source of truth for every module and lesson.
 * To update training content, edit the text below — the interface
 * updates automatically. To add a lesson, copy an existing lesson
 * object, give it the next id/number, and paste it into the module.
 *
 * videoUrl: paste the private/unlisted YouTube link for the lesson
 * (e.g. "https://youtu.be/XXXXXXXXXXX"). Leave as "" until ready.
 */
export const curriculum: Module[] = [
  {
    id: 'module-01',
    number: '01',
    title: 'Understanding AI for Business',
    summary: 'Cut through the noise. Learn what AI is, where it fits in your business, and how to talk to it.',
    lessons: [
      {
        id: 'lesson-01',
        number: '01',
        title: 'What AI Really Is',
        description: 'A plain-English foundation: what AI can do for your business, what it cannot, and why strategy comes first.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          intro:
            'AI is a set of tools that recognise patterns and generate outputs — text, images, video, decisions — from the data and instructions you give it. It is leverage, not a replacement for your thinking.',
          principles: [
            { title: 'AI amplifies direction', body: 'AI multiplies whatever you point it at. Clear strategy produces useful output; unclear goals produce noise, faster.' },
            { title: 'Inputs shape outputs', body: 'The quality of what you get is tied directly to the context, examples and instructions you provide.' },
            { title: 'Humans stay accountable', body: 'AI drafts, suggests and accelerates. You review, decide and own the result your customers see.' },
          ],
          businessExample: {
            title: 'A local bakery',
            scenario:
              'The owner uses AI to draft weekly menu descriptions and social captions, then edits them in her own voice. Writing time drops from three hours to forty minutes — the brand still sounds like her.',
          },
          useCases: ['Drafting emails and captions', 'Summarising customer feedback', 'Brainstorming product ideas', 'Turning notes into structured plans'],
          takeaway: 'AI is leverage. Strategy decides where to point it; your human touch decides what ships.',
        },
        project: {
          brief: 'Map where AI could save you time this week.',
          tasks: [
            'List 10 recurring tasks you do in your business every week.',
            'Mark each one: Strategy (needs your judgement), Human Touch (needs your voice) or AI (can be drafted by AI).',
            'Pick the top 3 AI-ready tasks to focus on during this program.',
          ],
          expectedOutput: 'A one-page task map with your top 3 AI opportunities highlighted.',
          notesPrompt: 'Which task surprised you the most?',
        },
      },
      {
        id: 'lesson-02',
        number: '02',
        title: 'The AI Business Landscape',
        description: 'Understand the categories of AI tools and where each one creates value across a business.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          intro:
            'There are thousands of AI tools, but they fall into a handful of categories: language, image, video, audio, automation and analysis. Knowing the categories matters more than knowing every tool.',
          principles: [
            { title: 'Think in categories', body: 'Choose the category that solves your problem first, then pick a tool within it.' },
            { title: 'Start where the pain is', body: 'The best first AI project is the task you dislike most and repeat most often.' },
            { title: 'Fewer tools, deeper use', body: 'Mastering three tools beats dabbling in thirty.' },
          ],
          businessExample: {
            title: 'A fitness coach',
            scenario:
              'Instead of signing up for every new app, the coach picks one language tool for programmes, one design tool for content and one automation tool for client check-ins — and goes deep on each.',
          },
          useCases: ['Language: copy, scripts, research', 'Image: graphics, product shots', 'Video: reels, explainers', 'Automation: follow-ups, scheduling'],
          takeaway: 'Know the map before you pick the vehicle.',
        },
        project: {
          brief: 'Audit your current tool stack.',
          tasks: [
            'List every digital tool your business currently pays for or uses.',
            'Place each into one of the AI categories covered in this lesson.',
            'Identify one gap where an AI tool would remove a bottleneck.',
          ],
          expectedOutput: 'A categorised tool list with one clear gap identified.',
        },
      },
      {
        id: 'lesson-03',
        number: '03',
        title: 'Core AI Tools for Entrepreneurs',
        description: 'Get hands-on with the essential AI tools every entrepreneur should have in their toolkit.',
        videoUrl: '',
        focus: 'ai',
        material: {
          intro:
            'A lean AI toolkit covers four jobs: thinking (a chat assistant), creating (design and video), publishing (scheduling) and connecting (automation). This lesson walks through setting each one up.',
          principles: [
            { title: 'One assistant as your hub', body: 'Use a single AI chat assistant as your thinking partner so it learns your context over time.' },
            { title: 'Templates over blank pages', body: 'Save the prompts and layouts that work so every new task starts at 80%.' },
            { title: 'Test before you commit', body: 'Use free tiers to test a tool on a real task before paying for it.' },
          ],
          businessExample: {
            title: 'A boutique consultant',
            scenario:
              'She sets up an AI assistant with her service descriptions, tone of voice and FAQs. Proposals that took a day now take an hour of review.',
          },
          useCases: ['Proposal drafting', 'Branded social graphics', 'Meeting summaries', 'Content calendars'],
          takeaway: 'A small, well-configured toolkit beats a large, unused one.',
        },
        project: {
          brief: 'Set up your core AI toolkit.',
          tasks: [
            'Create accounts for one AI assistant and one AI design tool.',
            'Write a short "About my business" brief and save it inside your assistant.',
            'Use both tools to produce one real piece of content for your business.',
          ],
          expectedOutput: 'Two configured tools and one finished piece of content.',
        },
      },
      {
        id: 'lesson-04',
        number: '04',
        title: 'Prompt Engineering Foundations',
        description: 'Learn a repeatable structure for writing prompts that get useful, on-brand results.',
        videoUrl: '',
        focus: 'human',
        material: {
          intro:
            'A prompt is a brief. The clearer the brief, the better the work. Strong prompts give AI a role, context, a task, a format and constraints.',
          principles: [
            { title: 'Role + Context', body: 'Tell AI who it is and who it is helping: "You are a copywriter for a premium skincare brand…"' },
            { title: 'Task + Format', body: 'Be specific about the deliverable: "Write 3 Instagram captions under 120 words, with a CTA."' },
            { title: 'Iterate, don\u2019t restart', body: 'Refine the output with follow-up instructions instead of starting over.' },
          ],
          businessExample: {
            title: 'An estate agent',
            scenario:
              'Moving from "write a property listing" to a structured prompt with audience, features, tone and length produced listings that needed almost no editing.',
          },
          useCases: ['Listings and product descriptions', 'Customer replies', 'Ad copy variations', 'Research briefs'],
          takeaway: 'Treat every prompt like a brief to a talented new team member.',
        },
        project: {
          brief: 'Build your personal prompt library.',
          tasks: [
            'Write 5 prompts using the Role / Context / Task / Format / Constraints structure.',
            'Run each one and refine it at least twice.',
            'Save the final versions in a document you can reuse.',
          ],
          expectedOutput: 'A reusable prompt library with 5 tested prompts.',
        },
      },
    ],
  },
  {
    id: 'module-02',
    number: '02',
    title: 'AI Content Creation',
    summary: 'Create images, video and short-form content that looks premium and sounds like you.',
    lessons: [
      {
        id: 'lesson-01',
        number: '01',
        title: 'AI Image & Graphics Creation',
        description: 'Generate on-brand images and graphics for your products, posts and campaigns.',
        videoUrl: '',
        focus: 'ai',
        material: {
          intro:
            'AI image tools let you create product visuals, campaign graphics and social assets in minutes. The skill is in directing them to stay consistent with your brand.',
          principles: [
            { title: 'Define your visual identity', body: 'Lock in colours, mood, lighting and style words you repeat in every prompt.' },
            { title: 'Describe the shot', body: 'Subject, setting, lighting, angle and style — like briefing a photographer.' },
            { title: 'Finish with a human eye', body: 'Check hands, text and details. Edit before you publish.' },
          ],
          businessExample: {
            title: 'A candle brand',
            scenario: 'The founder generates lifestyle scenes for each new scent instead of booking a monthly photoshoot, keeping a consistent warm, minimal style.',
          },
          useCases: ['Product lifestyle shots', 'Social post graphics', 'Ad creatives', 'Website hero images'],
          takeaway: 'Consistency is a strategy decision. AI just executes it.',
        },
        project: {
          brief: 'Create a mini visual campaign.',
          tasks: ['Write a 5-word visual style guide for your brand.', 'Generate 4 images for one product or service using that style.', 'Select the best 2 and refine them for publishing.'],
          expectedOutput: 'Two publish-ready, on-brand images.',
        },
      },
      {
        id: 'lesson-02',
        number: '02',
        title: 'AI Video Generation',
        description: 'Turn ideas and scripts into video content using AI generation tools.',
        videoUrl: '',
        focus: 'ai',
        material: {
          intro:
            'AI video tools can generate clips from text, animate still images and produce avatar-led explainers. Used well, they fill gaps between the content you film yourself.',
          principles: [
            { title: 'Script first', body: 'Good AI video starts with a clear, short script and a single message.' },
            { title: 'Blend AI with real footage', body: 'Use AI for b-roll and visuals; keep your face and voice for trust.' },
            { title: 'Short and specific', body: 'Generate short clips and assemble them, rather than one long generation.' },
          ],
          businessExample: {
            title: 'A property developer',
            scenario: 'AI-generated walkthrough visuals of an unbuilt development, combined with the founder\u2019s voice-over, generated pre-launch enquiries.',
          },
          useCases: ['Product teasers', 'Explainer videos', 'B-roll for reels', 'Animated testimonials'],
          takeaway: 'AI creates the visuals. You provide the story and the trust.',
        },
        project: {
          brief: 'Produce a 15-second AI-assisted video.',
          tasks: ['Write a 3-line script for one product or offer.', 'Generate 3 short AI clips to match each line.', 'Combine them with your own voice-over.'],
          expectedOutput: 'A 15-second video ready for review.',
        },
      },
      {
        id: 'lesson-03',
        number: '03',
        title: 'Short-Form Content Strategy',
        description: 'Plan short-form content that builds attention, trust and sales consistently.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          intro:
            'Short-form video rewards consistency and clarity. A simple content system — pillars, hooks and a calendar — beats random posting every time.',
          principles: [
            { title: 'Three content pillars', body: 'Educate, prove and connect. Every post should serve one of them.' },
            { title: 'Hook in 2 seconds', body: 'The opening line decides whether anyone watches the rest.' },
            { title: 'Batch with AI', body: 'Use AI to generate a month of hooks and outlines in one session.' },
          ],
          businessExample: {
            title: 'A hair salon',
            scenario: 'The salon plans 12 reels a month across before/after, tips and team stories, using AI to draft hooks. Bookings from social increase steadily.',
          },
          useCases: ['Monthly content calendars', 'Hook banks', 'Series ideas', 'Repurposing long content'],
          takeaway: 'Strategy decides what to post. AI helps you post it consistently.',
        },
        project: {
          brief: 'Build a 30-day short-form plan.',
          tasks: ['Define your 3 content pillars.', 'Use AI to generate 20 hooks across those pillars.', 'Choose 12 and schedule them on a 30-day calendar.'],
          expectedOutput: 'A 30-day content calendar with 12 planned posts.',
        },
      },
      {
        id: 'lesson-04',
        number: '04',
        title: 'Editing & Publishing with CapCut AI',
        description: 'Edit, caption and publish professional short-form videos quickly with CapCut AI.',
        videoUrl: '',
        focus: 'human',
        material: {
          intro:
            'CapCut\u2019s AI features — auto captions, background removal, templates and smart cuts — let you produce polished videos without a professional editor.',
          principles: [
            { title: 'Captions are non-negotiable', body: 'Most viewers watch muted. Auto-captions, then correct them.' },
            { title: 'Templates for speed', body: 'Build 2–3 branded templates and reuse them.' },
            { title: 'Edit for retention', body: 'Cut pauses, add movement every few seconds, end with a clear CTA.' },
          ],
          businessExample: {
            title: 'A restaurant owner',
            scenario: 'Filming on a phone and editing in CapCut with a branded template, the team publishes three reels a week in under an hour total.',
          },
          useCases: ['Auto-captioned reels', 'Product demos', 'Behind-the-scenes clips', 'Testimonial edits'],
          takeaway: 'Polish signals quality. AI makes polish fast.',
        },
        project: {
          brief: 'Edit and publish your first AI-assisted reel.',
          tasks: ['Film a 20–30 second clip about your business.', 'Edit it in CapCut using auto-captions and one template.', 'Publish it and note the first 48 hours of results.'],
          expectedOutput: 'One published reel and its early performance notes.',
        },
      },
    ],
  },
  {
    id: 'module-03',
    number: '03',
    title: 'AI Marketing & Sales',
    summary: 'Sharpen your message, turn conversations into sales and build funnels that work while you sleep.',
    lessons: [
      {
        id: 'lesson-01',
        number: '01',
        title: 'AI-Powered Brand Messaging',
        description: 'Define a clear, compelling brand message and use AI to apply it everywhere.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          intro:
            'Your brand message is what you want people to remember. AI can help you test, refine and apply it — but the core truth has to come from you.',
          principles: [
            { title: 'Clarity over cleverness', body: 'Who you help, what you solve and why you are different — in one sentence.' },
            { title: 'Capture your voice', body: 'Give AI examples of how you actually speak so its drafts sound like you.' },
            { title: 'Apply consistently', body: 'Bio, website, captions and DMs should all say the same core thing.' },
          ],
          businessExample: {
            title: 'A personal trainer',
            scenario: 'Refining "I help people get fit" into "I help busy mums regain strength in 20-minute home sessions" doubled enquiry quality.',
          },
          useCases: ['Brand one-liners', 'Website copy', 'Social bios', 'Tone-of-voice guides'],
          takeaway: 'A clear message makes every AI output better.',
        },
        project: {
          brief: 'Write your brand message.',
          tasks: ['Draft your one-sentence brand message.', 'Use AI to generate 5 variations and pick the strongest.', 'Update your social bio and one web page with it.'],
          expectedOutput: 'A final brand message applied to at least two channels.',
        },
      },
      {
        id: 'lesson-02',
        number: '02',
        title: 'DM-First Sales Strategy',
        description: 'Turn social conversations into customers with a human-first, AI-assisted DM process.',
        videoUrl: '',
        focus: 'human',
        material: {
          intro:
            'Most sales start in the DMs. A DM-first strategy uses content to start conversations and a simple, human process to turn them into customers.',
          principles: [
            { title: 'Conversation before conversion', body: 'Ask questions and listen before you pitch.' },
            { title: 'AI drafts, you send', body: 'Use AI to draft replies and follow-ups; personalise every message before sending.' },
            { title: 'Track every lead', body: 'A simple tracker ensures no conversation goes cold.' },
          ],
          businessExample: {
            title: 'A fashion reseller',
            scenario: 'Posting "comment DROP for early access" and following up with personal DMs turned one post into twenty-plus sales.',
          },
          useCases: ['Comment-to-DM campaigns', 'Follow-up templates', 'Objection handling', 'Lead tracking'],
          takeaway: 'People buy from people. AI just helps you reply faster.',
        },
        project: {
          brief: 'Design your DM sales script.',
          tasks: ['Write an opening message, 3 qualifying questions and a close.', 'Use AI to draft replies to 3 common objections.', 'Test it with at least 5 real conversations.'],
          expectedOutput: 'A tested DM script and notes from 5 conversations.',
        },
      },
      {
        id: 'lesson-03',
        number: '03',
        title: 'Automated Sales Funnels',
        description: 'Build a simple funnel that captures leads and nurtures them automatically.',
        videoUrl: '',
        focus: 'ai',
        material: {
          intro:
            'A funnel is the path from stranger to customer: attract, capture, nurture, convert. AI and automation can run most of it once the strategy is set.',
          principles: [
            { title: 'One offer, one funnel', body: 'Each funnel should lead to one clear action.' },
            { title: 'Give value first', body: 'A useful free resource earns the right to follow up.' },
            { title: 'Automate the nurture', body: 'A short AI-drafted email sequence keeps leads warm without manual work.' },
          ],
          businessExample: {
            title: 'An online course creator',
            scenario: 'A free checklist, a landing page and a 5-email AI-written sequence produce consistent sales without daily effort.',
          },
          useCases: ['Lead magnets', 'Landing pages', 'Email sequences', 'Booking automations'],
          takeaway: 'Design the path once. Let automation walk people down it.',
        },
        project: {
          brief: 'Map and draft your first funnel.',
          tasks: ['Choose one offer and one free lead magnet.', 'Sketch the 4 funnel stages for that offer.', 'Use AI to draft a 3-email nurture sequence.'],
          expectedOutput: 'A funnel map and a drafted 3-email sequence.',
        },
      },
      {
        id: 'lesson-04',
        number: '04',
        title: 'AI Ad Creation & Paid Promotion',
        description: 'Create and test paid ads faster, with AI-generated creative and copy variations.',
        videoUrl: '',
        focus: 'ai',
        material: {
          intro:
            'Paid ads reward testing. AI lets you produce many creative and copy variations quickly so you find winners sooner and spend less doing it.',
          principles: [
            { title: 'Start small, test fast', body: 'Run small budgets across several variations before scaling.' },
            { title: 'Change one thing at a time', body: 'Test hook, image or offer separately to learn what works.' },
            { title: 'Let data decide', body: 'Scale what performs; retire what doesn\u2019t.' },
          ],
          businessExample: {
            title: 'An e-commerce skincare brand',
            scenario: 'Testing 6 AI-generated ad variations on a small budget revealed one hook that cut the cost per sale significantly.',
          },
          useCases: ['Ad copy variations', 'Creative concepts', 'Audience research', 'Performance summaries'],
          takeaway: 'AI speeds up creative. Strategy and data decide where the money goes.',
        },
        project: {
          brief: 'Create an ad test plan.',
          tasks: ['Pick one offer to promote.', 'Use AI to create 3 headlines and 2 visuals.', 'Write a simple test plan with budget and success metric.'],
          expectedOutput: 'Six ad variations and a one-page test plan.',
        },
      },
    ],
  },
  {
    id: 'module-04',
    number: '04',
    title: 'AI Automation & Scaling',
    summary: 'Automate the repetitive, systemise your content and build your 90-day plan to scale.',
    lessons: [
      {
        id: 'lesson-01',
        number: '01',
        title: 'AI Workflow Automation',
        description: 'Connect your tools so repetitive tasks run themselves.',
        videoUrl: '',
        focus: 'ai',
        material: {
          intro:
            'Automation tools connect your apps so a trigger in one creates an action in another. Add AI in the middle and workflows can summarise, write and route for you.',
          principles: [
            { title: 'Trigger \u2192 Action', body: 'Every automation is "when this happens, do that". Start with one.' },
            { title: 'Automate the boring', body: 'Data entry, reminders and follow-ups are the best first candidates.' },
            { title: 'Keep a human checkpoint', body: 'Anything customer-facing should be reviewed before it goes out.' },
          ],
          businessExample: {
            title: 'A cleaning company',
            scenario: 'New bookings automatically create a calendar event, send a confirmation and add the client to a review-request sequence.',
          },
          useCases: ['Booking confirmations', 'Lead routing', 'Invoice reminders', 'Review requests'],
          takeaway: 'Automate the predictable so you can focus on the valuable.',
        },
        project: {
          brief: 'Build your first automation.',
          tasks: ['Choose one repetitive task from your Lesson 01 task map.', 'Map the trigger and actions.', 'Build and test it end-to-end in an automation tool.'],
          expectedOutput: 'One live, tested automation.',
        },
      },
      {
        id: 'lesson-02',
        number: '02',
        title: 'Scaling Your Content Operation',
        description: 'Turn content creation into a repeatable system that runs without burning you out.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          intro:
            'Scaling content is about systems, not hustle. One core idea can become a week of content when you have a repurposing workflow and AI support.',
          principles: [
            { title: 'Create once, publish many', body: 'Turn one long piece into reels, posts, emails and carousels.' },
            { title: 'Document the process', body: 'Write down each step so it can be delegated or automated.' },
            { title: 'Protect your voice', body: 'Keep a brand voice guide that every AI prompt and team member uses.' },
          ],
          businessExample: {
            title: 'A podcast host',
            scenario: 'Each episode becomes 5 clips, 3 posts and a newsletter — produced with AI in an afternoon.',
          },
          useCases: ['Repurposing workflows', 'Content SOPs', 'Batch production days', 'Delegation guides'],
          takeaway: 'Systems scale. Willpower doesn\u2019t.',
        },
        project: {
          brief: 'Design your repurposing system.',
          tasks: ['Choose one core content format (video, podcast or blog).', 'Map how it becomes at least 5 smaller pieces.', 'Write a step-by-step SOP for the process.'],
          expectedOutput: 'A documented content repurposing SOP.',
        },
      },
      {
        id: 'lesson-03',
        number: '03',
        title: 'AI for Business Operations',
        description: 'Use AI behind the scenes — admin, finance, customer service and planning.',
        videoUrl: '',
        focus: 'human',
        material: {
          intro:
            'Beyond marketing, AI can support operations: answering FAQs, summarising documents, analysing numbers and drafting policies — freeing your time for leadership.',
          principles: [
            { title: 'Start with knowledge', body: 'Give AI your FAQs, policies and processes so it answers accurately.' },
            { title: 'Analyse, then decide', body: 'Let AI summarise data; you make the decisions.' },
            { title: 'Protect sensitive data', body: 'Never paste confidential customer or financial data into tools you haven\u2019t vetted.' },
          ],
          businessExample: {
            title: 'A dental practice',
            scenario: 'An AI assistant trained on practice FAQs handles common patient questions, while staff focus on in-person care.',
          },
          useCases: ['Customer FAQ assistants', 'Document summaries', 'Sales and expense analysis', 'Policy drafting'],
          takeaway: 'AI runs the background. You lead the business.',
        },
        project: {
          brief: 'Create an operations assistant brief.',
          tasks: ['Collect your top 15 customer questions and answers.', 'Load them into an AI assistant as reference.', 'Test it with 5 realistic customer questions.'],
          expectedOutput: 'A tested FAQ assistant and notes on accuracy.',
        },
      },
      {
        id: 'lesson-04',
        number: '04',
        title: 'Your 90-Day AI Scaling Roadmap',
        description: 'Bring everything together into a focused 90-day plan for your business.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          intro:
            'You now have the tools. This lesson turns them into a plan: three priorities, one per month, measured against clear business outcomes.',
          principles: [
            { title: 'Outcomes over activity', body: 'Pick measurable goals — leads, sales, hours saved.' },
            { title: 'One priority per month', body: 'Focus beats volume. Sequence your AI projects.' },
            { title: 'Review weekly', body: 'A 15-minute weekly review keeps the plan alive.' },
          ],
          businessExample: {
            title: 'A wedding photographer',
            scenario: 'Month 1: content system. Month 2: DM sales script. Month 3: booking automation. By day 90, enquiries and saved hours are both up.',
          },
          useCases: ['Quarterly planning', 'KPI tracking', 'Weekly reviews', 'Team alignment'],
          takeaway: 'Strategy + Human Touch + AI — applied for 90 days — changes a business.',
        },
        project: {
          brief: 'Build your 90-day AI roadmap.',
          tasks: ['Set 3 measurable goals for the next 90 days.', 'Assign one AI project to each month.', 'Schedule a recurring weekly review in your calendar.'],
          expectedOutput: 'A one-page 90-day roadmap with goals, projects and review dates.',
        },
      },
    ],
  },
]
