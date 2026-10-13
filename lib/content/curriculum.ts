import type { LessonMaterial, Module } from './types'

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
function createLesson(
  id: string,
  number: string,
  title: string,
  description: string,
  focus: 'strategy' | 'human' | 'ai',
  intro: string,
  brief: string,
  tasks: string[],
  expectedOutput: string,
  useCases: string[],
  summary?: Pick<LessonMaterial, 'intro' | 'principles' | 'businessExample' | 'takeaway'>,
) {
  return {
    id: `lesson-${id}`,
    number,
    title,
    description,
    videoUrl: '',
    focus,
    material: {
      ...(summary ? { layout: 'enhanced' as const } : {}),
      intro: summary?.intro ?? intro,
      principles: summary?.principles ?? [
        { title: 'Start with the customer', body: 'Use real audience needs and business context to guide the work.' },
        { title: 'Give AI useful direction', body: 'Share clear goals, relevant information, and the format you need.' },
        { title: 'Review with human judgment', body: 'Check accuracy, usefulness, and fit before using or publishing an output.' },
      ],
      businessExample: summary?.businessExample ?? {
        title: 'A practical business task',
        scenario: `Apply the lesson to a real ${title.toLowerCase()} task. Use your business context to shape a draft, then review and personalise the result before putting it to work.`,
      },
      useCases,
      takeaway: summary?.takeaway ?? brief,
    },
    project: { url: '', brief, tasks, expectedOutput },
  }
}


export const curriculum: Module[] = [
  {
    id: 'module-01',
    number: '01',
    title: 'Understanding AI for Business',
    summary: 'Understand what AI is, where it fits into business, and how to choose tools based on real business needs rather than hype.',
    lessons: [
      {
        id: 'lesson-01',
        number: '01',
        title: 'What AI Really Is',
        description: 'Learn what artificial intelligence is, how it differs from traditional software, what generative AI can do, and why human judgment remains important.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          layout: 'enhanced',
          intro:
            'Artificial intelligence describes computer systems that generate responses or find patterns from examples and instructions. In a small business, it can help draft content, analyse feedback, brainstorm ideas and support repetitive work. Understanding its strengths and limits helps you choose useful tasks while keeping people responsible for the result.',
          principles: [
            { title: 'It works from patterns', body: 'AI responds to patterns and context rather than understanding your business.' },
            { title: 'It supports everyday tasks', body: 'Use it to draft a caption, sort customer comments, explore ideas or organise notes into a first draft.' },
            { title: 'People stay accountable', body: 'Check facts, tone and sensitive decisions. Human judgment keeps the work accurate, relevant and responsible.' },
          ],
          businessExample: {
            title: 'A local bakery',
            scenario: 'The owner asks AI for menu descriptions and social captions based on weekly specials. She checks ingredients and prices, then edits the copy so it sounds like her bakery before publishing.',
          },
          useCases: ['Drafting emails and captions', 'Summarising customer feedback', 'Brainstorming product ideas', 'Turning notes into structured plans'],
          takeaway: 'AI can speed up work; people provide direction, judgment and accountability.'
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
        description: 'Explore how AI can support marketing, sales, customer service, creative work, and business operations.',
        videoUrl: '',
        focus: 'strategy',
        material: {
          layout: 'enhanced',
          intro:
            'AI is changing everyday work in marketing, customer communication, research, content creation and operations. The useful question is not whether a business has adopted the latest tool, but whether a real task can be done better. Notice repeated work, delays and customer needs before choosing a solution.',
          principles: [
            { title: 'Look for repetition', body: 'Frequent tasks such as answering common questions may be good candidates for AI support.' },
            { title: 'Find the bottleneck', body: 'Notice where work gets delayed, information is hard to organise or customers wait for a reply.' },
            { title: 'Choose for a reason', body: 'Define the problem and desired result first, then compare tools that fit your workflow and budget.' },
          ],
          businessExample: {
            title: 'A growing fitness studio',
            scenario: 'Staff spend hours replying to the same class and schedule questions. The owner maps those questions and improves the information customers can find before deciding whether AI-assisted replies would help.',
          },
          useCases: ['Language: copy, scripts, research', 'Image: graphics, product shots', 'Video: reels, explainers', 'Automation: follow-ups, scheduling'],
          takeaway: 'Find a genuine business need before choosing an AI tool.'
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
        description: 'Understand the main categories of AI tools and how to select tools that fit your business tasks and workflow.',
        videoUrl: '',
        focus: 'ai',
        material: {
          layout: 'enhanced',
          intro:
            'Entrepreneurs can choose from writing and research assistants, image and design generators, video tools and productivity solutions. Each category supports different work, so the right choice depends on the task, budget and result you need. A small, purposeful toolkit is easier to manage.',
          principles: [
            { title: 'Match tool to task', body: 'Writing assistants support drafts and research; image, video and productivity tools serve different needs.' },
            { title: 'Check the practical fit', body: 'Consider cost, privacy, learning time and workflow fit.' },
            { title: 'Try before subscribing', body: 'Test a tool on real business work and review its output before committing to a paid plan.' },
          ],
          businessExample: {
            title: 'A boutique consultant',
            scenario: 'She needs to turn interview notes into proposal drafts and create simple social graphics. She tests a writing assistant and a design tool against those tasks, then keeps only the options that fit her budget and quality needs.',
          },
          useCases: ['Proposal drafting', 'Branded social graphics', 'Meeting summaries', 'Content calendars'],
          takeaway: 'Choose tools for the job, then judge them by useful results.'
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
            'Learn how to give AI a clear role, useful context, a specific task, a format and practical constraints. A well-structured prompt helps you get more relevant results and refine them for your business.',
          principles: [
            { title: 'Role + Context', body: 'Tell AI who it is and who it is helping: "You are a copywriter for a premium skincare brand..."' },
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
    summary: 'Learn how to use AI to support the creation, planning, and production of content for business communication and marketing.',
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
          layout: 'enhanced',
          intro:
            'Short-form content can earn attention, explain value and guide people towards a business goal. A useful plan starts with audience needs, then connects content pillars, hooks, formats and calls to action. Posting on a schedule is not enough if each piece has no clear purpose or next step.',
          principles: [
            { title: 'Start with audience needs', body: 'Use real customer questions and problems to choose useful topics and content pillars.' },
            { title: 'Shape the message', body: 'Choose a strong hook and a format that communicates one clear idea.' },
            { title: 'Give each post a purpose', body: 'Connect the message to a goal and a relevant next action, such as saving, enquiring or booking.' },
          ],
          businessExample: {
            title: 'A neighbourhood salon',
            scenario: 'The owner plans tips, client transformations and behind-the-scenes videos around customer questions. Each post has one goal: build trust, explain a service or invite viewers to book a consultation.',
          },
          useCases: ['Monthly content calendars', 'Hook banks', 'Series ideas', 'Repurposing long content'],
          takeaway: 'Plan content around audience needs and the action each post should support.'
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
    title: 'Brand Messaging & Copywriting',
    summary: 'Write clearer business messages, develop brand messaging with AI, and turn customer conversations into sales opportunities.',
    lessons: [
      createLesson('copywriting', '01', 'Copywriting Fundamentals', 'Understand persuasive business writing, audience understanding, features and benefits, hooks, and calls to action.', 'strategy', 'Learn the fundamentals of writing persuasive business copy that communicates value clearly. Explore audience understanding, features versus benefits, hooks, problem-solution messaging and calls to action so your captions, promotions and sales messages encourage the right response.', 'Write a clear offer message', ['Describe your audience and the problem they want solved.', 'Turn one product feature into a customer benefit.', 'Write a hook and a direct call to action.'], 'A short, audience-focused offer message.', ['Audience and customer needs', 'Features and benefits', 'Hooks and calls to action'], { intro: 'Copywriting is business writing designed to help a reader understand an offer and take a useful next step. Unlike content written mainly to inform or entertain, copy connects a customer need to a clear benefit. Audience understanding, strong hooks and a direct call to action can improve captions, promotions, product descriptions and sales messages.', principles: [{ title: 'Know the reader', body: 'Use what your audience values, worries about and needs to choose relevant language.' }, { title: 'Lead with benefits', body: 'Explain how a feature helps the customer instead of listing specifications alone.' }, { title: 'Guide the next step', body: 'Use a hook to earn attention, then connect problem, solution and action clearly.' }], businessExample: { title: 'A meal-prep business', scenario: 'Instead of listing meal sizes and ingredients, the owner explains how weekly prepared lunches help busy professionals save time. A clear message describes the offer and invites readers to view the menu.' }, takeaway: 'Good copy makes the value clear and the next step easy to understand.' }),
      createLesson('brand-messaging', '02', 'AI-Powered Brand Messaging', 'Use AI to develop clear, consistent, audience-focused brand messages while preserving your voice and personality.', 'human', 'Learn how to use AI to develop clear, consistent messaging that reflects your brand and speaks to the right audience. You will explore brand briefs, audience language, core messages and brand voice, while learning how to review AI-generated copy to keep it accurate and human.', 'Create a brand messaging guide', ['Describe who you help, what you offer, and the customer need you address.', 'Give AI examples of your brand voice and ask for message options.', 'Review and personalise the strongest message for consistency.'], 'A concise brand messaging guide with a voice note.', ['Brand positioning', 'Voice and tone examples', 'Consistent messaging across channels'], { intro: 'Brand messaging explains what a business does, whom it serves, which problem it solves and why customers should care. A useful brand brief gives AI the context to draft clearer messages. Audience language, core messages and brand voice guide its suggestions, while human review keeps the final copy accurate and recognisable.', principles: [{ title: 'Prepare a brand brief', body: 'Share the offer, audience, customer need, proof points and limits before asking AI to write.' }, { title: 'Listen to audience language', body: 'Use words customers actually use to describe their needs and desired results.' }, { title: 'Protect the brand voice', body: 'Give examples, compare drafts and edit until the message sounds authentic and consistent.' }], businessExample: { title: 'A neighbourhood skincare brand', scenario: 'The founder briefs AI on the products, ingredients, audience questions and friendly brand voice. She reviews several homepage messages, removes unsupported claims and chooses wording customers can understand.' }, takeaway: 'AI can shape message options; the business owner keeps them true to the brand.' }),
      createLesson('dm-sales', '03', 'DM-First Sales Strategy', 'Turn everyday customer enquiries into helpful conversations that can lead to sales.', 'human', 'Discover how to turn everyday customer conversations into sales opportunities using a simple six-stage process: Attract, Respond, Discover, Recommend, Close and Follow Up. Learn how to respond to enquiries, understand customer needs, handle objections and guide interested customers towards an appropriate purchase without sounding pushy.', 'Map a helpful customer conversation', ['Draft an opening response to \u201cHow much?\u201d that invites context without hiding the price.', 'Write one discovery question, a relevant recommendation, and a clear close.', 'Prepare a thoughtful follow-up and a response to a common objection.'], 'A six-stage DM conversation map for a real offer.', ['The six-stage DM sales funnel', 'Customer discovery and recommendations', 'Objections, closing, follow-ups, and common situations'], { intro: 'Direct messages can help a potential customer move from interest towards a suitable purchase through a useful conversation. The process has six stages: Attract, Respond, Discover, Recommend, Close and Follow Up. A price question can open a conversation about needs, rather than ending the exchange with a number alone.', principles: [{ title: 'Use the six stages', body: 'Attract, Respond, Discover, Recommend, Close and Follow Up provide a simple conversation path.' }, { title: 'Understand before recommending', body: 'Ask a relevant question so the offer responds to what the customer actually needs.' }, { title: 'Make action clear without pressure', body: 'Address concerns honestly, suggest a fitting next step and follow up respectfully.' }], businessExample: { title: 'A customer asks about a service price', scenario: 'The business shares the price clearly, then asks what outcome the customer is looking for. It recommends the relevant option, answers a concern and offers a simple booking step without pushing.' }, takeaway: 'Helpful sales conversations put customer understanding before pressure.' }),
      createLesson('sales-messaging-system', '04', 'Building Your AI Sales Messaging System', 'Use AI to develop reusable DM sales scripts, respond thoughtfully to objections, and create a simple 30-day DM-first content strategy.', 'ai', 'Learn how to use AI to build a reusable sales messaging playbook for your business. This lesson covers creating responses for common customer questions, price enquiries, objections and follow-ups, as well as turning customer conversations into useful content and a practical 30-day sales communication plan.', 'Build and personalise a DM sales playbook', ['Collect common customer questions, objections, and real situations.', 'Ask AI for reusable response drafts and a simple 30-day DM-first content plan.', 'Review each draft for accuracy, tone, and personalisation before adding it to your playbook.'], 'A customised sales playbook and a 30-day DM-first content outline.', ['Reusable DM scripts', 'Thoughtful objection responses', 'A review and personalisation workflow'], { intro: 'A sales messaging playbook helps a business answer common enquiries consistently without starting every reply from scratch. AI can draft responses for questions, objections, undecided customers, ready-to-buy customers and follow-ups when it has accurate business details. Human review protects accuracy and warmth, while conversation patterns can reveal useful content ideas and process improvements.', principles: [{ title: 'Give AI reliable information', body: 'Provide current offers, prices, policies, customer questions and examples of your brand voice.' }, { title: 'Prepare for real situations', body: 'Create drafts for common enquiries, objections, hesitation, purchase decisions and follow-ups.' }, { title: 'Learn from conversations', body: 'Review recurring questions to improve replies, content topics and the sales process.' }], businessExample: { title: 'A home cleaning service', scenario: 'The owner gathers approved prices, service areas and common questions. AI helps draft reply options, which the team checks before saving. Repeated questions later guide a clearer service FAQ.' }, takeaway: 'Build a reusable system from accurate information and improve it with human review.' }),
    ],
  },
  {
    id: 'module-04',
    number: '04',
    title: 'AI Website Development',
    summary: 'Plan, write, build, test, and publish a simple business website with AI assistance. AI can help you build faster, but strategy still comes first.',
    lessons: [
      createLesson('web-design', '01', 'Understanding Web Design', 'Understand what makes a business website useful, including structure, user experience, navigation, and mobile responsiveness.', 'strategy', 'Learn what makes a business website useful, clear and easy to navigate. Explore website structure, user experience, essential sections, calls to action and responsive design so you can plan a website around your business goals and your customers\' needs.', 'Plan a useful website structure', ['Identify the primary audience and the action you want visitors to take.', 'Outline the pages or sections needed to explain your offer.', 'Check the navigation and layout for mobile use.'], 'A simple website structure and visitor journey.', ['Website structure', 'User experience and navigation', 'Mobile responsiveness'], { intro: 'A business website needs to do more than look attractive: it should help visitors understand the offer and decide what to do next. User experience, navigation, page structure and responsive design all affect how easily people find information. Plan around customer needs and the main business goal.', principles: [{ title: 'Plan around a visitor goal', body: 'Decide who the site serves and the main action visitors should be able to take.' }, { title: 'Give the page a clear structure', body: 'Use sections such as a hero, services, benefits, testimonials and calls to action.' }, { title: 'Design for different screens', body: 'Keep navigation, text and important actions easy to use on mobile and desktop.' }], businessExample: { title: 'A local repair business', scenario: 'A repair shop wants more service enquiries. Its homepage explains the services, coverage area and booking steps near the top, then uses customer testimonials to build confidence.' }, takeaway: 'A useful website makes the offer clear and the next step easy to find.' }),
      createLesson('website-copy', '02', 'Copy for Websites', 'Create clear website copy that communicates an offer, explains benefits, and guides visitors towards action.', 'human', 'Learn how to write website copy that explains what your business offers, who it serves and why customers should care. Explore headlines, benefits, calls to action and customer-focused messaging that helps visitors understand your offer and take the next step.', 'Draft copy for a business landing page', ['Write a clear headline and short offer explanation.', 'Describe customer benefits using plain language.', 'Add a relevant call to action and check every claim.'], 'A first draft of clear, customer-focused website copy.', ['Offer clarity', 'Customer benefits', 'Calls to action'], { intro: 'Website copy helps visitors quickly understand what a business offers, whom it helps and why the offer matters. Clear headlines and customer-focused benefits reduce confusion, while useful answers build confidence. The copy should explain value before asking visitors to buy, book, enquire or take another action.', principles: [{ title: 'Lead with a clear headline', body: 'State what you offer and who it is for in plain, specific language.' }, { title: 'Translate features into benefits', body: 'Explain how the offer helps customers rather than relying on technical details.' }, { title: 'Answer before asking', body: 'Address key questions and use a call to action that fits visitor readiness.' }], businessExample: { title: 'A tutoring service homepage', scenario: 'Instead of saying only that lessons are online, the page explains that students can book flexible sessions and get help in specific subjects. A clear button lets parents check availability.' }, takeaway: 'Make the value easy to understand before asking visitors to act.' }),
      createLesson('prompt-web-development', '03', 'How to Prompt for AI Web Development', 'Brief AI with the strategy, audience, content, structure, design direction, and functionality required to build a website.', 'strategy', 'Learn how to give AI clear instructions for creating a business website. Explore how to communicate your business goals, audience, page structure, content, design preferences and functionality, then refine the results through review and follow-up prompts.', 'Write an AI website development brief', ['Describe the business, audience, and primary website goal.', 'Provide approved copy, required sections, design direction, and functionality.', 'Ask AI for a first build, then review it against your brief.'], 'A structured AI web development brief and review checklist.', ['Business and audience context', 'Content and structure', 'Design direction and functionality'], { intro: 'AI can create a more useful website when the instructions include the business context and a clear direction. A strong prompt covers the audience, purpose, page structure, approved content, visual preferences and required functionality. Review the first draft and use follow-up prompts to refine it.', principles: [{ title: 'Set the business context', body: 'Explain the audience, offer, purpose and main action the website should support.' }, { title: 'Describe structure and design', body: 'List the required sections, content, visual direction and functionality.' }, { title: 'Review and refine', body: 'Compare the draft with the brief, identify gaps and give focused follow-up instructions.' }], businessExample: { title: 'A freelance event planner', scenario: 'She briefs AI with her services, client type, enquiry goal, page sections and preferred visual style. After reviewing the draft on a phone, she asks for clearer package details and a more visible enquiry button.' }, takeaway: 'You set the strategy and direction; AI helps turn that brief into a first build.' }),
      createLesson('publishing-deploying', '04', 'Publishing & Deploying Your Website', 'Understand hosting, domain names, deployment, testing, and making a website available online.', 'ai', 'Understand how to take a completed website from development to a live online experience. Learn the basics of publishing, hosting, domains, testing and maintenance so you can check your website works properly before sharing it with customers.', 'Prepare a website launch checklist', ['Identify a domain and hosting approach for your project.', 'Test links, forms, readability, and mobile layout.', 'Follow the deployment steps and check the published website.'], 'A launch checklist for testing and publishing a simple website.', ['Hosting and domain names', 'Deployment and testing', 'Post-launch checks'], { intro: 'Publishing makes a website available online so customers can visit it. Hosting is the service that stores and serves the site, a domain is its web address, and deployment is the process of putting the finished version online. Check links, forms, content and mobile layouts before sharing it; keep it current afterward.', principles: [{ title: 'Know the basic pieces', body: 'A domain is the address, hosting serves the site, and deployment publishes its files.' }, { title: 'Check before launch', body: 'Test navigation, forms, contact details, readable content and mobile layouts.' }, { title: 'Keep maintaining it', body: 'After launch, review links and information and make improvements as the business changes.' }], businessExample: { title: 'A new catering website', scenario: 'Before sharing the domain, the owner checks the menu and contact details, submits the enquiry form, opens each link and reviews the site on a phone. She notes who will update prices and seasonal menus.' }, takeaway: 'Launch only after practical checks, then keep the site current.' }),
    ],
  },
]
