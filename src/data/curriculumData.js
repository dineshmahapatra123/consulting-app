
export const curriculumData = [
    // PHASE 1: FOUNDATION & STRATEGY (Days 1-15)
    {
        day: 1,
        phase: 1,
        title: "The Consultant's Mindset: Human Capital Valuation",
        goal: "Shift from 'Laborer' (selling time) to 'Capital Asset' (selling value). Determine your Economic Value Added (EVA).",
        concept: "In the HBS framework, you must stop viewing yourself as an expense line item (SG&A - Selling, General & Admin). You must position yourself as CapEx (Capital Expenditure) - an investment that yields a return. The amateur worries about 'imposter syndrome' and asks 'Can I do this?'. The professional obsesses over 'Asset Utilization' and asks 'How do I maximize the yield of my expertise?'. Your intellectual property is the asset; your time is merely the delivery cost.",
        content: "The core shift is understanding 'Opportunity Cost'. If a CEO spends 10 hours solving a problem you can solve in 1 hour, your value isn't your 1 hour; it's the CEO's 9 saved hours plus the speed of execution. You are not charging for the minutes; you are charging for the years of mastery that allow you to do it in minutes. \n\nStop saying: 'I charge $X per hour.' \nStart saying: 'I generate $Y in value for a fixed investment of $Z.'",
        illustration: "Consider a Factory. \n- The Floor Worker is paid wages for hours worked (Cost). \n- The Machine is leased for its output capacity (Asset). \n- The Architect is paid for the blueprint that makes the factory possible (IP). \n\nAs a consultant, you are the Architect building the Machine. Do not revert to being the Floor Worker. You are selling the Blueprint (Strategy) and the Machine (System), not the sweat.",
        caseStudy: {
            title: "From 'Order Taker' to 'Strategic Partner'",
            challenge: "Sarah, a senior graphic designer, left her agency job to freelance. She charged $60/hr and found herself rewriting endless revisions for demanding, low-paying clients. She was essentially an 'employee with no benefits' and zero leverage.",
            solution: "She read 'The Elite Consulting Mind' and realized she wasn't selling 'Design'; she was selling 'Investor Trust'. She pivoted to 'Brand Consultant for Series-A FinTech Startups'.",
            result: "Instead of 'I design logos', she pitched 'I help FinTechs secure Series B funding by building enterprise-grade trust'. She created a fixed-price 'Trust Architecture Audit' for $5,000. She raised her effective rate to $450/hr and cut her client list from 10 bad ones to 3 great ones."
        },
        readingList: [
            { type: "Book", title: "The Elite Consulting Mind", author: "Michael Zipursky", link: "Focuses on overcoming limiting beliefs and thinking like a business owner." },
            { type: "Book", title: "Company of One", author: "Paul Jarvis", link: "Why staying small and profitable might be better than scaling endlessly." },
            { type: "Article", title: "Two Crucial Mindsets to Start Your Own Consulting Business", author: "Tom Spencer", link: "Discusses 'humble confidence' and avoiding imposter syndrome." }
        ],
        tips: [
            "Stop charging by the hour immediately. It caps your income and misaligns incentives (clients want speed; hourly billing rewards slowness).",
            "You don't need 'permission' to be an expert. You just need a result you can solve.",
            "Imposter syndrome is a lagging indicator that you are pushing your boundaries. If you don't feel it, you aren't growing.",
            "Say 'No' to the first client who treats you like an employee. It sets the standard."
        ],
        action: "1. Write down your 'Financial Freedom Number' (monthly net profit target). \n2. Define your 'Lifestyle Non-Negotiables' (e.g., 'I never work Fridays'). \n3. Audit your last 5 work interactions: Did you act like a Peer or a Subordinate?",
        prompt: "Act as a tough business coach. Interview me to identify my current limiting beliefs about money and expertise. Ask me 3 provocative questions to challenge my 'employee mindset' and feeling of needing permission."
    },
    {
        day: 2,
        phase: 1,
        title: "Niche Discovery: The Specialist's Premium",
        goal: "Identify the 'Bleeding Neck' problem where your skills meet market liquidity.",
        content: "You cannot serve everyone. 'If you talk to everyone, you talk to no one.' A niche is defined by TWO coordinates: WHO you help (Demographics/Psychographics) and WHAT expensive problem you solve (outcome). Generalists get paid commodities; specialists get paid premiums. The market pays for depth, not breadth.",
        concept: "The 'Blue Ocean Strategy'. Don't swim in the bloody, shark-filled waters of general consulting (Red Ocean). Find a Blue Ocean where competition is irrelevant because you are so specific that no one else operates there.",
        illustration: "The medical analogy: \n- A General Practitioner (GP) sees everyone, knows a little about everything, and makes $150k. \n- A Brain Surgeon focuses on one organ, one problem, and makes $800k. \n\nBe the Neurosurgeon of your industry. Don't be 'A Marketer'; be 'The Retention Specialist for Subscription Box Companies'.",
        caseStudy: {
            title: "CannDelta: Pivoting for Growth",
            challenge: "CannDelta started as a general cannabis consulting firm in Canada. As the market saturated and cooled ('The Green Rush' ended), they faced declining leads and price wars.",
            solution: "Founders Dr. Boodram and Dr. McCann analyzed the market and identified a more complex, high-barrier problem: The US Market Expansion and specific regulatory compliance for cross-border trade.",
            result: "They pivoted to 'Regulatory Compliance for Cross-Border Cannabis Trade'. By narrowing their focus to the most painful, complex problem (Jail/Fine avoidance), they became the uncontested experts, bypassing general competitors and commanding premium fees."
        },
        readingList: [
            { type: "Book", title: "Blue Ocean Strategy", author: "W. Chan Kim", link: "Creating uncontested market space and making the competition irrelevant." },
            { type: "Article", title: "The Ultimate Guide to Identifying Your Consulting Niche", author: "Melisa Liberman", link: "A step-by-step guide to finding the intersection of joy, skill, and market demand." }
        ],
        tips: [
            "A good niche feels 'scary' small at first. That is a sign you are doing it right.",
            "Look for problems that are 'expensive' for companies to leave unsolved (Cost of Inaction).",
            "Your niche can be an Industry (Dental), a Role (CTOs), or a Problem (Employee Churn). The best niches combine all three.",
            "Follow the money: Target industries that are growing or in crisis (both spend money)."
        ],
        action: "List your top 3 Hard Skills (e.g., Python, Copywriting, Tax Law) and top 3 Industries you have access/affinity to (e.g., Real Estate, Crypto, SaaS). Look for the 'Expensive Overlap'.",
        prompt: "Here are my skills: [Insert Skills]. Here are industries I know: [Insert Industries]. Generate 5 specific, high-value consulting niche ideas that combine these, focusing on urgent business problems (Bleeding Neck pain points)."
    },
    {
        day: 3,
        phase: 1,
        title: "Niche Refinement: The Avatar Profile",
        goal: "Define your ideal client avatar in extreme, microscopic detail.",
        concept: "Deep specialization allows you to charge more because you reduce the client's 'Risk of Hiring'. If you know their specific jargon, fears, and KPIs, they trust that you can solve their specific problem. You need to know your client better than they know themselves.",
        content: "The 'Inch-Wide, Mile-Deep' strategy. Instead of digging 100 shallow holes, dig one deep oil well. Your marketing copy should make your prospect say, 'It's like he's reading my diary'. \n\nKey Avatar attributes: \n1. Title (Who signs the check?) \n2. KPI (What number are they fired for missing?) \n3. Watering Holes (Where do they hang out?) \n4. The '3 AM' Fear (What keeps them awake?)",
        illustration: "If you sell 'Sales Training', you are a commodity competing with free YouTube videos. \nIf you sell 'Sales Training for Introverted Engineers turning into Technical Account Managers', you have a monopoly. You can charge 10x because the solution is tailored to their specific psychology.",
        caseStudy: {
            title: "Speaking the Language of HVAC",
            challenge: "Marketing consultant Elena tried helping 'Small Businesses'. She got tire-kickers, cheap clients, and 'let me ask my wife' objections.",
            solution: "She narrowed her niche to 'HVAC Companies with $1M-5M Revenue'. She learned their specific jargon (seasonality, dispatch software issues, 'reliable techs', SEER ratings).",
            result: "Her sales conversion tripled because she 'spoke their language'. She wasn't a 'marketer'; she was an 'HVAC Growth Partner'. She could charge $10k for a system that general marketers charged $1k for, simply because she positioned it as an 'HVAC System'."
        },
        readingList: [
            { type: "Book", title: "Building a StoryBrand", author: "Donald Miller", link: "Clarifying your message so customers listen." },
            { type: "Resource", title: "HubSpot's Buyer Persona Templates", author: "HubSpot", link: "Practical templates to fill out your avatar's details." }
        ],
        tips: [
            "Give your avatar a name (e.g., 'Director Dan' or 'Founder Fiona').",
            "Focus on the 'Economic Buyer' (the decision maker), not the user. HR Managers love training; CFOs sign the check.",
            "Download the 'Digital Footprint' of your avatar: What podcasts do they listen to? What Subreddits do they read?",
            "Use their exact slang. If they say 'turnover', don't say 'attrition'."
        ],
        action: "Create a 'Client Avatar Persona' document. Give them a name, age, job title, salary, and biggest fear. Find 5 real LinkedIn profiles that match this alias.",
        prompt: "Create a detailed persona for my target client in the [Insert Niche] industry. Include their daily frustrations, reading habits, KPIs they are measured by, and the exact words/slang they use to describe their problems."
    },
    {
        day: 4,
        phase: 1,
        title: "Competitor Analysis: Finding the Void",
        goal: "Analyze the competitive landscape to differentiate, not to copy.",
        concept: "Don't copy competitors; analyze them to find gaps. In consulting, your biggest competitor is rarely another firm; it is usually 'Status Quo' (Doing Nothing) or 'Internal Hire' (Do it ourselves). \n\nLook for the 'Void': What is everyone else ignoring? Are they all 'High Price/Slow'? Be 'Mid Price/Fast'. Are they all 'Done For You'? Be 'Done With You'.",
        content: "Analyze the 'Big Three' Competitor Types: \n1. The Big Firms (McKinsey/Deloitte): Safe, Expensive, Slow, Generic. \n2. The Boutiques: Highly Specialized, Expensive, Expert. \n3. The Freelancers (Upwork): Cheap, Unreliable, Task-focused. \n\nFind the 'Goldilocks Zone' where you offer Boutique expertise with the agility of a freelancer.",
        illustration: "If every competitor is offering 'Monthly Retainers' with long contracts (Risk High), the market might be desperate for a 'Done-In-A-Day' intensive or a 'One-Time Audit' (Risk Low). Innovation often comes from changing the *business model*, not the service.",
        caseStudy: {
            title: "Winning with Speed",
            challenge: "In the crowded 'Sales Training' market, everyone sold long, 6-month academies. Clients were busy, overwhelmed, and dropped out.",
            solution: "A consultant launched 'The 1-Hour Sales Script Workshop'. He targeted the specific gap: Speed and Implementation.",
            result: "He captured the market segment that was 'too busy for courses'. He charged a premium for speed ($1,000 for 1 hour) and sold volume, effectively differentiating from the 'comprehensive' competitors who sold 'learning' instead of 'completed output'."
        },
        readingList: [
            { type: "Book", title: "Blue Ocean Strategy", author: "Remi Mauborgne", link: "Tools for competitor landscape mapping." },
            { type: "Article", title: "How to Conduct a Competitive Analysis", author: "Shopify/HBR", link: "Tactical frameworks for analyzing competitors." }
        ],
        tips: [
            "Read the 3-star reviews of your competitors. They contain the truth about what is missing.",
            "Look for 'Zombie' competitors: Companies that exist but haven't posted in 6 months. Their clients are looking for a new home.",
            "Don't worry if there are competitors; it proves there is a market (willingness to pay). Empty markets are usually empty for a reason (no money).",
            "Sign up for their newsletters to see how they sell."
        ],
        action: "Identify 3 direct competitors. Create a matrix comparing their: Core Offer, Price (if known), Guarantee, and Weakness. Find one thing they ALL do, and decide to do the opposite.",
        prompt: "Analyze these 3 competitor websites: [Insert URLs]. Create a table identifying their: 1. Core Promise, 2. Target Audience, 3. Pricing Model (if visible), and 4. Weakness/Gap I can exploit."
    },
    {
        day: 5,
        phase: 1,
        title: "Strategic Positioning: The UVP & The Moat",
        goal: "Define your Unique Value Proposition (UVP) through specific trade-offs.",
        concept: "Michael Porter defines strategy as 'choosing what NOT to do'. Your UVP is not a marketing slogan; it is a set of strategic trade-offs. You cannot be 'High Service' AND 'Low Cost'. You most choose a differentiation focus. \n\nThe 'Moat': How do you protect your margins? Brand? IP? Proprietary Data? Network?",
        content: "A robust UVP answers the 'Only' question: 'We are the ONLY consulting firm that [Action] for [Segment] by [Mechanism].' \n\nIf a competitor can claim the same, you have no moat. You must be Functionally Distinct. \n\nTypes of Positioning: \n1. Methodology (We use the X System) \n2. Vertical (We only serve Dentists) \n3. Outcome (We only get paid if you win)",
        illustration: "Southwest Airlines didn't just market 'Cheaper flights'. They structurally traded off meals, assigned seats, and hub-and-spoke routes to create a localized monopoly on efficiency. \n\nWhat are you trading off? Example: 'We are expensive, but we are fast.' or 'We don't implement, we only strategize.'",
        caseStudy: {
            title: "The 'Risk-Free' Pricing Consultant",
            challenge: "Software Pricing Partners wanted to stand out in a dry, academic market.",
            solution: "They crafted a UVP around risk: 'We help you develop innovative pricing strategies that delight customers and derange competitors while minimizing risk at every stage.'",
            result: "By focusing on 'minimizing risk' (a major fear for software execs changing prices), they moved from being a 'cost' to being an 'insurance policy' for the pricing change. They could command $50k+ engagements because the cost of getting pricing wrong was $5M."
        },
        readingList: [
            { type: "Book", title: "Good Strategy Bad Strategy", author: "Richard Rumelt", link: "Understanding the difference between 'fluff' (goal setting) and 'strategy' (diagnosing the challenge)." },
            { type: "Book", title: "Made to Stick", author: "Chip & Dan Heath", link: "Why some ideas survive and others die." }
        ],
        tips: [
            "Test your UVP on a 10-year-old. If they don't get it, it's too complex. Simplify.",
            "Avoid jargon like 'synergy', 'paradigm', 'holistic', 'end-to-end' unless you are mocking them.",
            "Your UVP will evolve. Get version 1.0 out today. It serves as your compass.",
            "Polarize: Your UVP should attract your ideal client and repel the wrong client."
        ],
        action: "Draft your UVP statement using the template: 'I help [Target Market] solve [Expensive Problem] using [Unique Mechanism].' Iterate it 10 times until it fits on a sticky note.",
        prompt: "Help me refine my UVP. My audience is [Audience], their problem is [Problem], and my solution is [Solution]. Generate 5 punchy, high-converting UVP variations using the 'XYZ' formula. Make them sound expensive."
    },
    {
        day: 6,
        phase: 1,
        title: "Market Research: The Discovery Phase",
        goal: "Validate your hypothesis with real human data. Stop Guessing, Start Asking.",
        concept: "The #1 reason startups/consultancies fail is 'No Market Need'. You cannot guess what clients want sitting in your room. You must get 'Out of the Building'. This is not sales; this is 'Data Gathering'. If you try to sell too early, you shut down the feedback loop.",
        content: "Use 'The Mom Test' methodology. Do not ask 'Is my idea good?' because people lie to be nice. Ask 'Behavioral Questions' about the past. \n\nBad Question: 'Would you pay for X?' (Opinions are free). \nGood Question: 'When was the last time you tried to solve this problem? How much did you spend?' (Facts are expensive).",
        illustration: "If you ask 100 people 'Do you want lose weight?', 100 say Yes. If you ask 'Did you go to the gym yesterday?', 5 say Yes. Build your business on the 5, not the 100.",
        caseStudy: {
            title: "Saving 6 Months with Coffee Chats",
            challenge: "Tech consultant Ravi thought lawyers wanted 'AI Contract Review Software'. He was about to spend 6 months building it.",
            solution: "He conducted 15 'Coffee Chats' with law partners. He found they didn't trust AI yet and feared liability.",
            result: "However, 12 out of 15 complained about 'Searching old emails for precedents'. He pivoted to building a 'Better Email Search for Firms' service. He sold 3 contracts before writing a line of code. He saved 6 months of building the wrong thing."
        },
        readingList: [
            { type: "Book", title: "The Mom Test", author: "Rob Fitzpatrick", link: "How to talk to customers & learn if your business is a good idea." },
            { type: "Book", title: "Ask", author: "Ryan Levesque", link: "The counter-intuitive online method to discover what your market wants to buy." }
        ],
        tips: [
            "Record these calls (with permission). You need their exact words for your copywriting later.",
            "Do not pitch. If you pitch, the learning stops and they put up defensive walls.",
            "Ask 'What is the hardest part about [Problem]?' and then shut up for 60 seconds."
        ],
        action: "Reach out to 5 people in your niche for a 15-min 'Research Chat'. Script: 'I'm researching the state of [Industry] and I'd love your expert opinion on X. I have nothing to sell.'",
        prompt: "Draft a polite, non-salesy LinkedIn message to a [Target Role] asking for 15 minutes of advice to research challenges in their industry. Make it clear I have nothing to sell and value their expertise."
    },
    {
        day: 7,
        phase: 1,
        title: "Analyzing Research Data: Finding the Resonance",
        goal: "Turn interview notes into 'Money Words'.",
        concept: "Marketing is not about being creative; it's about being a mirror. You want to reflect their problems back to them using their own words. Look for Patterns in your research notes. \n\nSpecific words used repeatedly ('overwhelmed', 'bottleneck', 'black box') are your marketing gold.",
        content: "If 5 clients say 'I feel like I'm herding cats', your website headline should be 'Stop Herding Cats'. This creates instant resonance. They think: 'Wow, he gets me'. \n\nCategorize findings into: \n1. Pains (Hell) \n2. Desires (Heaven) \n3. Obstacles (Why they haven't fixed it yet).",
        illustration: "Forensic Linguistics: You are looking for the 'Emotional Trigger Words'. 'Low Revenue' is a fact. 'Scared of payroll' is an emotion. Sell to the emotion.",
        caseStudy: {
            title: "The Million Dollar Headline Change",
            challenge: "A fitness info-product for new moms was failing. Headline: 'Lose Weight Fast'.",
            solution: "The owner analyzed 500 survey responses. He noticed women kept saying 'I want to get my body back' after pregnancy.",
            result: "He changed the headline to 'Get Your Body Back'. Sales increased 400% overnight. He didn't change the product; he changed the language to match the internal monologue of the customer."
        },
        readingList: [
            { type: "Article", title: "Review Mining", author: "Joanna Wiebe", link: "How to find high-converting copy in Amazon reviews." }
        ],
        tips: [
            "Create a 'Voice of Customer' (VoC) document.",
            "Highlight 'Pain' words in Red and 'Desire' words in Green.",
            "Look for the 'Trigger Event'. What happens right before they look for a solution? (e.g., A fine? A resignation? A bad quarter?)"
        ],
        action: "Review your notes. Highlight the top 3 'Bleeding Neck' problems mentioned. Create a 'Problem/Language' map.",
        prompt: "I will paste notes from my client interviews. Extract the top 5 'Pain Points' and the specific emotional words they used to describe them. Turn these into 5 catchy email subject lines."
    },
    // ... (Repeating pattern for other days, but compressed for this file update to keep within limits. 
    // Ideally this would be populated fully. I will include the core Phase 1 comprehensively and placeholders for rest.)
    {
        day: 8,
        phase: 1,
        title: "Service Definition: The Delivery Vehicle",
        goal: "Decide on your delivery vehicle (The Container).",
        concept: "Consulting is flexible. Dimensions: \n1. Done-For-You (Agency style - High Price, High Effort) \n2. Done-With-You (Coaching/Advisory - Med Price, Med Effort) \n3. Do-It-Yourself (Course/Product - Low Price, Low Effort). \n\nAdvisory is often the sweet spot: High margin, low overhead, high impact.",
        content: "Your delivery model dictates your lifestyle. \n- DFY is hard to scale but easy to sell. \n- DIY is hard to sell but infinite scale. \n- DWY is the balance. \n\nStandardize the 'Process' even if the 'Content' changes. You are selling the methodology.",
        illustration: "The Sherpa vs. The Porter. \n- The Porter (DFY) carries your bag. He gets paid for labor. \n- The Sherpa (Advisory) guides you up the mountain. He gets paid for expertise and survival. \n\nBe the Sherpa.",
        caseStudy: {
            title: "The Advisory Switch",
            challenge: "Maria was a copywriter (DFY). She was burned out writing 20 pages a week for clients who treated her like a typist.",
            solution: "She realized clients mostly needed strategy, not words. She switched to 'Copy Strategy Audits' (Advisory). She reviewed their work and gave a roadmap.",
            result: "She now charges $2,000 for a 60-minute video audit + strategy. She works 1 hour instead of 10. Her effective hourly rate skyrocketed 10x. Clients respected her more as a Strategist."
        },
        readingList: [
            { type: "Book", title: "Million Dollar Consulting", author: "Alan Weiss", link: "Strategies for value-based delivery." }
        ],
        tips: [
            "Start with DFY to learn the nuances, then move to Advisory to earn the time back.",
            "Don't build a course (DIY) until you've sold the service 10 times manually. You don't know the curriculum yet.",
            "Define 'What is NOT included' clearly to avoid scope creep."
        ],
        action: "Draft a 1-page 'Scope of Work' bullet list for your primary delivery mode. Define exactly what is IN and what is OUT of scope.",
        prompt: "Compare 'Done-For-You' vs 'Advisory' services for my niche [Insert Niche]. Then, draft a 'Scope of Work' skeleton for the Advisory model."
    },
    {
        day: 9,
        phase: 1,
        title: "Pricing Strategy: Economic Value to Customer (EVC)",
        goal: "Price based on Value, not Cost. Escape the 'Hourly' trap.",
        concept: "Pricing is the #1 driver of profitability. Ignore 'Cost-Plus' (My time + 20%). Adopt 'Ref. Value' or 'EVC'. \nIf your solution saves a client $1M, and you charge $50k, you are capturing only 5% of the value created. That is irrational. You must price to capture 10-20% of the Upside.",
        content: "The psychology of pricing: High fees signal competence (Veblen Good effect). Low fees signal risk. In B2B, 'cheap' is often disqualified because it implies 'unsophisticated', 'desperate', or 'junior'. Your fee is a tool to filter out non-serious buyers.",
        illustration: "Imagine a heart surgeon charging $20/hr. You wouldn't think 'What a deal!'; you would think 'What is wrong with him?'. Price is a proxy for quality in intangible services.",
        caseStudy: {
            title: "The $50k Fixed Fee",
            challenge: "A dev shop charged $150/hr. They were seen as 'expensive hands'. They were fighting for hours.",
            solution: "They started bidding fixed project fees based on value. A trading firm needed an app to make $10M/year.",
            result: "They bid $50,000 fixed. It was a bargain for the client (0.5% of revenue). If they billed hourly, it would have been $15k. They tripled revenue by changing the pricing model and owning the risk."
        },
        readingList: [
            { type: "Book", title: "Implementing Value Pricing", author: "Ronald Baker", link: "The definitive guide to ditching the billable hour." }
        ],
        tips: [
            "Never put prices on your website for custom consulting. It prevents value anchoring.",
            "When you say the price, shut up. The next person to speak loses.",
            "Provide 3 Options: Good, Better, Best. 60% will pick the middle.",
            "Always get payment upfront (or 50% deposit)."
        ],
        action: "Determine your 'Minimum Engagement Level' (e.g., 'I don't turn on my computer for less than $3,000').",
        prompt: "Help me calculate the ROI of my service. If I solve [Problem] for a client, how much money might they save or make? Use conservative estimates to justify a $[Price] fee."
    },
    {
        day: 10,
        phase: 1,
        title: "The Minimum Viable Offer (MVO): Packaging",
        goal: "Package your service into a product-like offering to reduce friction.",
        concept: "Services are intangible and scary to buy. 'Productize' them. Give it a Name, a Fixed Scope, a Fixed Timeline, and a Fixed Price. \nMake it 'Buyable'.",
        content: "The MVO allows you to sell the same thing twice. If every project is custom, you are reinventing the wheel. \n\nStandard MVO Structure: \n- Name: 'The 90-Day Revenue Sprint' \n- Promise: 'Add $100k to your pipeline' \n- Process: 'Our 5-step outbound system' \n- Price: '$5,000' \n- Guarantee: 'Or we work for free'.",
        illustration: "Ordering off a menu vs. asking a chef to 'cook something'. A menu (Productized Service) is easier to buy. A custom request requires trust, negotiation, and cognitive load.",
        caseStudy: {
            title: "Productized Service Success",
            challenge: "Logistics Expert Tom offered 'General Supply Chain Consulting'. Clients didn't know what they would get or how much it would cost.",
            solution: "He packaged it as 'The Warehouse Efficiency Audit'. It had 3 steps, took exactly 2 weeks, and cost $5,000.",
            result: "It became an easy 'yes' for clients because the risk was bounded. He sold 5 in the first month because he made it easy to buy.",
            link: "https://www.productizedservices.com/"
        },
        readingList: [
            { type: "Book", title: "Built to Sell", author: "John Warrillow", link: "Creating a business that can thrive without you." }
        ],
        tips: [
            "Give your offering a catchy name (e.g., 'The Accelerator', 'The Blueprint').",
            "Define clear deliverables: 'You will get a PDF report and a 60-min strategy call'.",
            "Create a 'One-Pager' (PDF) that describes this offer visually."
        ],
        action: "Outline your MVO: Name, 3 Core Deliverables, Timeline, Price. Make a mock-up invoice.",
        prompt: "Generate 5 compelling names for my consulting package that sounds like a product. It helps [Target Audience] achieve [Outcome]."
    },
    {
        day: 11,
        phase: 1,
        title: "Legal & Admin Foundation",
        goal: "Protect yourself and get ready to transact.",
        concept: "Don't overengineer, but don't be negligent. Separate business and financial liability.",
        content: "The goal is to be 'audit-proof' and 'lawsuit-resistant'. An LLC is usually the minimum viable structure in the US.",
        readingList: [
            { type: "Article", title: "Small Business Administration Guide", link: "Official government guide to starting a business." }
        ],
        tips: ["Get a separate bank account Day 1. Co-mingling funds pierces the corporate veil.", "Use a simple contract template with a 'Scope of Work' appendix."],
        action: "Register for an EIN (free). Open a separate bank account.",
        prompt: "Generate a plain-English 'Independent Contractor Agreement' template. Include sections for: 1. Scope, 2. Payment Terms, 3. IP Ownership (Client owns work upon payment), 4. Confidentiality."
    },
    {
        day: 12,
        phase: 1,
        title: "Tool Stack Selection",
        goal: "Build your digital office.",
        concept: "Keep it lean. Friction kills deals. You need tools that make it easy for clients to pay you and meet you.",
        content: "Recommended Stack: 1. Zoom (Video), 2. Calendly (Scheduling), 3. Stripe (Payments), 4. Notion/HubSpot (CRM). Total cost < $100/mo.",
        caseStudy: {
            title: "The Frictionless Close",
            challenge: "Consultant A went back and forth on email to find a meeting time. Client lost interest.",
            solution: "Consultant B sent a Calendly link. Client booked in 30 seconds.",
            result: "Consultant B got the deal. Professionalism signals competence."
        },
        readingList: [],
        tips: ["Automate your invoicing.", "Don't buy expensive software (Salesforce) until you have revenue."],
        action: "Set up your Calendly and link it to your calendar.",
        prompt: "Create a 3-step 'New Client Onboarding' email sequence that triggers automatically when a client pays via Stripe, sending them the Calendly link and a 'Homework' form."
    },
    {
        day: 13,
        phase: 1,
        title: "Personal Branding Basics",
        goal: "Look the part online.",
        concept: "Your LinkedIn profile is your landing page. It must scream 'Expert', not 'Job Seeker'.",
        content: "Most profiles read like a resume ('I did this'). They should read like a sales letter ('I help you do this').",
        caseStudy: {
            title: "Profile Makeover",
            challenge: "A Recruiter turned consultant had 'Talent Acquisition Specialist' as her headline.",
            solution: "She changed it to 'I help Tech Scale-ups hire their first 10 Engineers'.",
            result: "Her connection acceptance rate went from 10% to 50%. She got 3 inbound leads in week 1."
        },
        readingList: [
            { type: "Book", title: "Known", author: "Mark Schaefer", link: "Building and unleashing your personal brand." }
        ],
        tips: ["Professional headshot is non-negotiable.", "Use the 'Featured' section to showcase case studies."],
        action: "Update your LinkedIn Headline and Banner.",
        prompt: "Critique my LinkedIn headline '[Current Headline]'. Rewrite it to be benefit-driven."
    },
    {
        day: 14,
        phase: 1,
        title: "The Elevator Pitch",
        goal: "Describe what you do clearly in 30 seconds.",
        concept: "Used for networking, intros, and podcasts. Needs to invite a question.",
        illustration: "Bad: 'I do computer stuff.' Good: 'I help banks prevent data breaches so they don't end up on the news.'",
        tips: ["Don't use your title.", "Focus on the 'After' state of your client."],
        action: "Record yourself saying your pitch. Listen and refine.",
        prompt: "Draft 3 versions of an elevator pitch: 1. The 'Problem/Solution' Pitch, 2. The 'Social Proof' Pitch (mentioning typical clients), 3. The 'Contrarian' Pitch (challenging a norm)."
    },
    {
        day: 15,
        phase: 1,
        title: "Phase 1 Review",
        goal: "Consolidate and Lock-in.",
        concept: "Review brings clarity. Ensure your foundation is solid before building the house.",
        action: "Checklist: Niche defined? UVP clear? Offer Packaged? Bank Account open?",
        prompt: "Create a 'Go/No-Go' checklist for launching a consulting business."
    },
    // PHASE 2: OFFER & ASSETS (Days 16-30)
    {
        day: 16,
        phase: 2,
        title: "The Transformation Statement",
        goal: "Define the specific Point A (Hell) to Point B (Heaven) journey.",
        concept: "Clients don't buy consulting; they buy a future state. Your offer must bridge the gap between their current pain and their desired pleasure. The larger the gap, the higher the price.",
        content: "Stop selling 'process' (e.g., 'I do SEO audits'). Start selling 'outcome' (e.g., 'I help you rank #1 for your highest value keywords'). The Transformation Statement is the core of your marketing engine.",
        illustration: "Airline Analogy: Airlines don't sell 'sitting in a metal tube for 6 hours'. They sell 'Wake up in Paris'. You are the airline. Sell Paris, not the plane.",
        caseStudy: {
            title: "From 'Career Coach' to 'Executive Accelerator'",
            challenge: "A career coach was struggling to sell $100 sessions. Her offer was vague: 'I help you find a job you love.'",
            solution: "She redefined the transformation. Point A: 'Stuck in middle management, ignored for promotions.' Point B: 'VP-level role with $50k raise within 6 months.'",
            result: "She rebranded to 'The VP Accelerator'. Because the destination (Point B) had a tangible $50k value, she could charge $5,000 for the program easily."
        },
        readingList: [
            { type: "Book", title: "The Irresistible Consultant's Guide", author: "David A. Fields", link: "How to articulate value so clients buy." },
            { type: "Article", title: "The Value Proposition Canvas", author: "Strategyzer", link: "Mapping customer pains to your gain creators." }
        ],
        tips: [
            "Use 'From X to Y' framing.",
            "Make Point B measurable (e.g., 'Save 10 hours/week' vs 'Save time').",
            "Point A must be painful. If they aren't in pain, they won't pay."
        ],
        action: "Draft your 'From/To' table. Column A: Current Pains. Column B: Desired Wins.",
        prompt: "I am targeting [Target Audience]. List 10 visceral, emotional 'Point A' pains they feel daily, and 10 specific 'Point B' outcomes they dream of. Contrast them."
    },
    {
        day: 17,
        phase: 2,
        title: "Mechanism Design",
        goal: "Name your unique process to build IP value.",
        concept: "If you sell 'Strategy', you are a commodity. If you sell 'The 3-Pillar Profit Protocol', you own a proprietary mechanism. Naming your process makes it tangible and valuable.",
        content: "Great firms do this: McKinsey has the '7S Framework', BCG has the 'Growth-Share Matrix'. You need your own 'named' way of solving the problem. It gives clients confidence that you have a map.",
        caseStudy: {
            title: "The 'Profit-First' Effect",
            challenge: "An accountant offered 'Bookkeeping Services'. He was competing with $20/hr overseas VAs.",
            solution: "He adopted the 'Profit First' methodology. He stopped selling bookkeeping and started selling 'Profit First Implementation'.",
            result: "He became one of the few certified experts in a specific named mechanism. Clients sought HIM out because they wanted THAT specific system, not just generic accounting."
        },
        readingList: [
            { type: "Article", title: "The Unique Mechanism", author: "Todd Brown", link: "Why having a unique mechanism is the difference between a 6 and 7 figure business." }
        ],
        tips: [
            "Use alliteration (e.g., The 3 C's of Conversion).",
            "Create a visual model (Triangle, Pyramid, Flywheel).",
            "The mechanism explains 'How' the transformation happens."
        ],
        action: "Draw your process as a diagram. Give it a catchy name.",
        prompt: "My consulting process involves 3 steps: [Step 1], [Step 2], [Step 3]. Generate 10 proprietary names for this system using words like 'Protocol', 'Accelerator', 'Framework', 'Matrix', 'Blueprint'."
    },
    {
        day: 18,
        phase: 2,
        title: "Structuring Delivery",
        goal: "Design the logistics of your MVO (Minimum Viable Offer).",
        concept: "How will you actually deliver the result? Avoid the 'Blank Sheet of Paper' nightmare. Productize your delivery into a standard timeline. 1. Audit, 2. Strategy, 3. Execution, 4. Optimization.",
        content: "Standardization = Scale. If every client gets a custom scope, you are building a trap, not a business. Define a fixed duration (e.g., 6 weeks) and fixed deliverables.",
        caseStudy: {
            title: "The Workshop Model",
            challenge: "A strategy consultant spent months on open-ended retainers that dragged on forever.",
            solution: "He pivoted to a '2-Day Intensive' structure. Day 1: Diagnosis. Day 2: Strategic Roadmap.",
            result: "He charged $15k for the 2 days. Clients loved the speed. He loved the closure. No more scope creep."
        },
        readingList: [
            { type: "Book", title: "Productize", author: "Eisha Armstrong", link: "The ultimate guide to turning professional services into scalable products." }
        ],
        tips: [
            "Cap the duration (e.g., 'This is a 30-day sprint').",
            "Include a 'Kickoff' and 'Closeout' call as standard.",
            "Weekly status emails are better than weekly status calls."
        ],
        action: "Map out the week-by-week timeline of your service.",
        prompt: "Create a 6-week delivery schedule for my consulting offer. Include key milestones and deliverables for each week."
    },
    {
        day: 19,
        phase: 2,
        title: "The Challenger Sale: Commercial Insight",
        goal: "Teach, Tailor, and Take Control. Move beyond 'Relationship Selling'.",
        concept: "The 'Relationship Builder' profile is the lowest performing in complex B2B sales (Dixon & Adamson). The 'Challenger' wins. You must teach the client something new about their business. Don't just diagnose (SPIN); offer 'Commercial Insight' that reframes their thinking.",
        content: "Don't ask: 'What keeps you up at night?' (Boring). Say: 'Here is what SHOULD be keeping you up at night.' Challenge their status quo. Show them the hidden cost of their current trajectory. Conflict creates value.",
        illustration: "The Mentor vs. The Friend. A friend listens to your problems. A mentor tells you that your current strategy is flawed and shows you a better way. Be the mentor.",
        caseStudy: {
            title: "Asking the Right Questions",
            challenge: "Consultant Ben kept pitching his solution 5 minutes into the call. Clients said 'Let me think about it'.",
            solution: "He switched to a diagnostic script. He spent 40 mins asking about the *cost* of the problem. 'How much revenue are you losing per month due to this?'",
            result: "By the time he revealed the price ($10k), the client had already admitted the problem was costing them $100k/year. The sale was logical."
        },
        readingList: [
            { type: "Book", title: "SPIN Selling", author: "Neil Rackham", link: "The gold standard scientific sales method." },
            { type: "Book", title: "The Challenger Sale", author: "Matthew Dixon", link: "Taking control of the customer conversation." }
        ],
        tips: [
            "Talk 20% of the time. Listen 80%.",
            "Don't provide the solution on the call. Diagnose the problem, then sell the *implementation* of the solution.",
            "Record your calls (Game tape)."
        ],
        action: "Write out your 5 core 'Implication' questions.",
        prompt: "I am selling [Service]. Generate 5 'Implication Questions' that make the prospect realize the high cost of NOT hiring me."
    },
    {
        day: 20,
        phase: 2,
        title: "The Proposal Template",
        goal: "Create a proposal that closes, not just informs.",
        concept: "Most proposals are boring focused on 'Deliverables'. Winning proposals focus on 'Outcomes' and 'Options'.",
        content: "The 'Option Structure': Option 1 (Do it yourself / Audit), Option 2 (Done With You / Core Offer), Option 3 (VIP / Fast Track). This changes the choice from 'Yes/No' to 'A, B, or C'.",
        caseStudy: {
            title: "The 3-Option Close",
            challenge: "A web design agency sent single-price quotes ($5k). Clients often ghosted or negotiated down.",
            solution: "They started sending 3 options. 1. Basic Refresh ($3k). 2. Growth Redesign ($8k). 3. Market Dominance Package ($15k).",
            result: "Most clients picked the middle option ($8k), increasing their average deal size by 60%. Some picked the VIP option, which was pure bonus revenue."
        },
        readingList: [
            { type: "Book", title: "Million Dollar Consulting Proposals", author: "Alan Weiss", link: "How to write proposals that are accepted within 24 hours." }
        ],
        tips: [
            "Never email a proposal without booking a review call.",
            "Keep it under 5 pages. Executive summary is key.",
            "Include a 'Why Now?' section to drive urgency."
        ],
        action: "Draft a 3-Tier Proposal structure for your offer.",
        prompt: "Draft the 'Executive Summary' of a proposal for a client. Also, write a short email script to send to the client to book the 'Proposal Review Call' (do not attach the proposal PDF)."
    },
    {
        day: 21,
        phase: 2,
        title: "The Risk Reversal (Guarantees)",
        goal: "Remove the fear of buying.",
        concept: "Clients are afraid of looking stupid. A strong guarantee transfers the risk from them to you. It increases conversion rates significantly.",
        content: "Types: 1. Unconditional (Money Back). 2. Conditional (If you do the work and don't see X...). 3. Service Level (I will work for free until X...).",
        illustration: "Domino's '30 mins or free' built an empire. What is your version? 'Rank on Page 1 or we work for free'?",
        caseStudy: {
            title: "The 110% Guarantee",
            challenge: "A younger consultant couldn't get enterprises to trust him.",
            solution: "He offered a 'Double Your ROI' guarantee. 'If this workshop doesn't generate ideas worth 2x my fee, I'll refund you.'",
            result: "He never had to refund money. The guarantee signaled such confidence that enterprises felt safe signing the contract."
        },
        readingList: [
            { type: "Article", title: "The Power of Guarantees", author: "Harvard Business Review", link: "How guarantees impact service quality and sales." }
        ],
        tips: [
            "A conditional guarantee protects you from lazy clients.",
            "The stronger the guarantee, the higher the sales.",
            "Don't worry about refunds. If your service is good, they are rare."
        ],
        action: "Draft a bold guarantee statement.",
        prompt: "Brainstorm 3 types of guarantees for my consulting offer: 1. Satisfaction based, 2. Performance based, 3. 'Work until it's done' based."
    },
    {
        day: 22,
        phase: 2,
        title: "Financial Modeling: Unit Economics",
        goal: "Analyze the P&L of your Minimum Viable Offer.",
        concept: "Revenue is vanity; Margin is sanity. Calculate the 'Gross Margin' of your MVO. If you charge $10k, and it takes you 20 hours, your Effective Hourly Rate (EHR) is $500. This is your 'Unit Economics'. You cannot scale if your EHR is low.",
        content: "Don't just set a price. Design the delivery to ensure high margins. Can you automate 20%? Can you use templates for 30%? This is 'Operational Leverage'. High margin services fund growth.",
        caseStudy: {
            title: "Raising Rates 4x",
            challenge: "A copywriter charged $100 per email.",
            solution: "She started pitching 'Retention Sequences' that recovered lost customers. She showed a client this sequence would save $20k/month.",
            result: "She charged $4,000 for the sequence (40 emails worth). The client paid happily because $4k to make $20k/mo is a bargain."
        },
        tips: [
            "If 100% of people say 'Yes', your price is too low.",
            "Aim for a 20% rejection rate on price. That means you found the ceiling.",
            "Offer a 'Pay in Full' discount (cash flow) vs 'Payment Plan' (higher total)."
        ],
        action: "Set your price. Write it on a post-it. Do not apologize for it.",
        prompt: "Help me justify a $[Price] fee for my service. List 5 visible and invisible costs I save the client (e.g., 'Cost of bad hire', 'Cost of lost time')."
    },
    {
        day: 23,
        phase: 2,
        title: "Sales Assets: The One-Pager",
        goal: "Create a concise sales sheet.",
        concept: "Nobody reads 20-page brochures. A One-Pager (Sell Sheet) is a visual summary of your offer used to pique interest.",
        content: "Structure: 1. Headline (Promise). 2. Problem (Agitate). 3. Solution (Your Mechanism). 4. Social Proof (Logos/Quotes). 5. CTA.",
        caseStudy: {
            title: "The PDF that opened doors",
            challenge: "Consultant needed to explain a complex supply chain solution to busy COOs.",
            solution: "Created a visual 'Before/After' one-pager infographic.",
            result: "The One-Pager was shared internally at target companies, bypassing gatekeepers because it was 'useful content', not just a brochure."
        },
        tips: [
            "Use Canva or hire a designer. Aesthetics matter here.",
            "Focus on benefits, not features.",
            "Include a QR code or link to your calendar."
        ],
        action: "Draft the copy for your One-Pager.",
        prompt: "Write the copy for a One-Pager selling [Service]. Include a punchy headline, 3 bullet points of pain, 3 bullet points of gain, and a testimonial placeholder."
    },
    {
        day: 24,
        phase: 2,
        title: "Sales Assets: Case Studies",
        goal: "Build your 'Proof Portfolio'.",
        concept: "Case studies are the currency of trust. Structure them as STAR: Situation, Task, Action, Result.",
        content: "If you are new, do a 'Hypothetical Case Study' or use a 'Previous Life' case study (from your corporate job).",
        caseStudy: {
            title: "Leveraging Past Wins",
            challenge: "New independent consultant had zero 'clients'.",
            solution: "He wrote a case study about a project he led at his previous employer (Amazon). 'How I led the team that reduced shipping costs by 15%'.",
            result: "Clients respected the experience. It didn't matter it was as an employee; the skill was proven."
        },
        readingList: [
            { type: "Article", title: "How to Write a Case Study", author: "HubSpot", link: "Templates and examples of high-converting case studies." }
        ],
        tips: [
            "Use real numbers (%, $). Specificity sells.",
            "Get a video testimonial if possible (Zoom recording).",
            "Put your case studies on your LinkedIn Featured section."
        ],
        action: "Write one detailed Case Study (STAR format).",
        prompt: "Interview me about a past project. Ask questions to extract the Situation, Action, and specific Result to build a case study."
    },
    {
        day: 25,
        phase: 2,
        title: "Outreach Strategy: Channel Selection",
        goal: "Pick ONE channel to master first.",
        concept: "Don't try to be everywhere. Be where your clients hang out. B2B = LinkedIn/Email. B2C = Instagram/TikTok/Facebook.",
        content: "The 'Sniper' vs 'Shotgun' approach. Consulting usually favors the Sniper approach (Direct outreach to high-value targets).",
        caseStudy: {
            title: "The LinkedIn Sniper",
            challenge: "Consultant tried blogging (SEO) for 6 months with zero leads.",
            solution: "Switched to LinkedIn Sales Navigator. Identified 100 perfect prospects. Sent personalized videos.",
            result: "Booked 15 calls in 2 weeks. SEO takes time; Outbound is immediate."
        },
        tips: [
            "Go where the money is. Executives are on LinkedIn and Email.",
            "Master one channel before adding a second.",
            "Consistency > Intensity. 10 reachouts a day for 30 days > 300 in one day."
        ],
        action: "Commit to your primary channel.",
        prompt: "Compare LinkedIn, Cold Email, and Twitter for finding clients in the [Industry] sector. Pros and cons of each."
    },
    {
        day: 26,
        phase: 2,
        title: "List Building",
        goal: "Build a list of 100 qualified leads.",
        concept: "Your network is your net worth. You need a list of names, emails, and job titles.",
        content: "Tools: Apollo.io, LinkedIn Sales Navigator, Hunter.io. 'The money is in the list'.",
        caseStudy: {
            title: "Data-Driven Targeting",
            challenge: "Agency was spamming generic info@ emails.",
            solution: "Used Apollo.io to filter for 'Companies with $10M+ revenue, using Shopify, Head of Marketing'.",
            result: "Response rate went from 1% to 12% because the list was highly qualified."
        },
        tips: [
            "Verify emails to protect your domain deliverables (NeverBounce).",
            "Segment your list (e.g., 'CEOs' vs 'CMOs' need different messages).",
            "Don't buy shady lists. Scrape fresh data."
        ],
        action: "Build a 'Dream 100' spreadsheet.",
        prompt: "List the search filters I should use in LinkedIn Sales Navigator to find my ideal client [Avatar] in [Industry]."
    },
    {
        day: 27,
        phase: 2,
        title: "Cold Message Copywriting",
        goal: "Write emails that get replies.",
        concept: "The goal of a cold email is NOT to sell. It is to start a conversation. 'Sell the chat, not the contract'.",
        content: "Framework: 1. Personalized Hook (I saw you...), 2. Problem/Empathy (Most X struggle with Y...), 3. Value/Credibility (We helped Z fix this...), 4. Low-Friction CTA (Open to a 5-min chat?).",
        caseStudy: {
            title: "The 'No-Brainer' Email",
            challenge: "Consultant sent long paragraphs about his services. Crickets.",
            solution: "Switch to 'The Idea' email. 'Hi [Name], I had an idea on how you could improve [Process]. Mind if I send a 2-min video?'",
            result: "50% reply rate. People love free ideas.",
            link: "https://close.com/blog/cold-email-scripts/"
        },
        readingList: [
            { type: "Book", title: "Cold Email Manifesto", author: "Alex Berman", link: "Systematizing outbound sales." }
        ],
        tips: [
            "Keep it under 100 words.",
            "Read it out loud. If it sounds like a robot, rewrite it.",
            "Don't use 'Dear Sir/Madam'. Use 'Hi [First Name]'."
        ],
        action: "Draft 3 variations of cold email scripts.",
        prompt: "Draft 3 cold emails targeting [Role]: 1. The 'Question' approach, 2. The 'Video Audit' approach, 3. The 'Case Study' approach."
    },
    {
        day: 28,
        phase: 2,
        title: "Content Strategy",
        goal: "Attract inbound leads (The Magnet).",
        concept: "Outbound grabs attention; Inbound holds it. Show your expertise by 'Building in Public' or sharing 'Contrarian Truths'.",
        content: "Don't post 'How-To' content (commodity). Post 'How-To-Think' content (authority). Challenge industry norms.",
        caseStudy: {
            title: "The Contrarian Consultant",
            challenge: "Marketing consultant blended in.",
            solution: "Wrote a post: 'Why SEO is dead for B2B Startups'. It was controversial but backed by data.",
            result: "Went viral in his niche. 500 new followers, 5 inbound leads who agreed with his worldview."
        },
        tips: [
            "Post consistently (e.g., every Tue/Thu).",
            "Engage with commenters. That's where the leads are.",
            "Reuse your content. Turn a post into a newsletter."
        ],
        action: "Brainstorm 5 'Contrarian' headlines relevant to your niche.",
        prompt: "Generate 10 LinkedIn post ideas that challenge the status quo in the [Industry] industry."
    },
    {
        day: 29,
        phase: 2,
        title: "The Lead Magnet",
        goal: "Capture interest with a free asset.",
        concept: "Most people aren't ready to buy today. A Lead Magnet (Freebie) gets them into your orbit. It must solve a specific, small problem immediately.",
        content: "Examples: 'The 15-Point Audit Checklist', 'The salary benchmarking report', 'The vendor comparison cheat sheet'. High value, low friction.",
        caseStudy: {
            title: "The Checklist Win",
            challenge: "Consultant wanted email addresses involved in M&A.",
            solution: "Created 'The Pre-Merger IT Due Diligence Checklist'.",
            result: "2,000 downloads in 3 months. 40 of those turned into 6-figure consulting projects."
        },
        readingList: [
            { type: "Book", title: "Acquisition.com", author: "Alex Hormozi", link: "Creating offers so good people feel stupid saying no (includes lead magnets)." }
        ],
        tips: [
            "Give it a sexy title. Not 'Whitepaper'. 'The 2024 Blueprint'.",
            "Deliver it instantly via email.",
            "Follow up with a 'Value Sequence' email chain."
        ],
        action: "Outline your Lead Magnet.",
        prompt: "Brainstorm 5 high-value Lead Magnet ideas for [Target Audience] that I can create in 2 hours (e.g., Checklists, Templates, Calculators)."
    },
    {
        day: 30,
        phase: 2,
        title: "Phase 2 Review",
        goal: "Audit your Offer and Assets.",
        concept: "You now have a 'Business in a Box': A named offer, a price, a guarantee, scripts, and a list. You are ready to launch.",
        action: "Go/No-Go Checklist: Mechanism Named? Price Set? One-Pager Done? List Built?",
        prompt: "Create a 'Launch Readiness' checklist for Phase 2."
    },

    // PHASE 3: MARKETING & LEAD GEN (Days 31-45)
    {
        day: 31,
        phase: 3,
        title: "Launch Day Protocol",
        goal: "Execute a 'Soft Launch' to validate systems.",
        concept: "Don't aim for a 'Grand Opening' (crickets); aim for a 'Beta Launch'. Frame it as 'Opening 5 spots for Case Study partners'. This lowers the barrier to entry and creates scarcity.",
        content: "The 'Founding Member' script: 'I am taking on 5 clients at 50% off in exchange for a detailed video testimonial.' This gets you Cash, Confidence, and Case Studies (The 3 C's) immediately.",
        caseStudy: {
            title: "The Beta Class Launch",
            challenge: "Consultant terrified of charging $5k with no testimonials.",
            solution: "Launched a '6-week Beta Cohort' for $1k. Sold 10 spots in 48 hours via LinkedIn DM.",
            result: "Generated $10k cash (Launch budget), gathered 10 testimonials, and fixed 5 bugs in the program before the 'Official' $5k launch."
        },
        tips: ["Don't announce 'I am open for business'. Announce 'I am looking for X specific people'.", "Direct Message your warmest 20 contacts personally before posting publicly."],
        action: "Post your 'Beta Launch' offer on LinkedIn/Email.",
        prompt: "Draft a 'Beta Launch' email to my warm network. Frame the offer as an exclusive opportunity to be a 'Case Study Partner' at a preferred rate."
    },
    {
        day: 32,
        phase: 3,
        title: "The 'Golden Hour' LinkedIn Strategy",
        goal: "Master the 2025 Algorithm for maximum reach.",
        concept: "LinkedIn's 2025 algorithm rewards 'Depth of Engagement' over likes. The first 60 minutes (Golden Hour) are critical. You need comments, not likes. Meaningful replies trigger the 'Viral Loop' to 2nd and 3rd-degree connections.",
        content: "Post structure: 1. Hook (Controversial statement), 2. Story (Value), 3. Lesson, 4. Question (Open-ended). You MUST reply to every comment within the first hour with a question to double the comment count.",
        readingList: [
            { type: "Article", title: "LinkedIn Algorithm Research 2025", author: "Richard van der Blom", link: "Deep dive into engagement weightings (Comments > Likes x12)." }
        ],
        tips: ["Don't put links in the post body (it kills reach). Put them in the bio or comments.", "Engage with 5 big creators BEFORE you post to warm up your account."],
        action: "Post a 'Hand Raiser' content piece.",
        prompt: "Write a LinkedIn post about 'The biggest lie in [Industry]'. End with a question that forces people to comment with their opinion."
    },
    {
        day: 33,
        phase: 3,
        title: "Advanced Direct Outreach (The 7-Touch System)",
        goal: "Systematize follow-up to capture the 60% who don't reply.",
        concept: "The money is in the follow-up. 1 email = 0 deals. 7 emails = Deals. You are not annoying; you are professional. 'Polite Persistence' signals reliability.",
        content: "Sequence: Day 1 (Value), Day 3 (Idea), Day 7 (Case Study), Day 14 (News/Article), Day 30 (Break-up). Never just say 'Checking in'. Always add a 'Deposit' (Value) before asking for a 'Withdrawal' (Call).",
        caseStudy: {
            title: "The 'Magic' 4th Email",
            challenge: "Consultant gave up after 1 email.",
            solution: "Implemented a 5-step sequence. The 4th email was: 'Are you still looking to solve [Problem] or have you put this on ice?'",
            result: "The 'On Ice' email got a 40% reply rate because it gave people permission to say 'Not now' or realizing they need to act."
        },
        tips: ["Use a tool like Apollo or Lemlist to automate this.", "If they say 'Stop', you stop immediately.", "A 'No' is better than silence."],
        action: "Set up a 4-email automated sequence.",
        prompt: "Draft a 4-email sequence for [Target Persona]. Email 1: The Hook. Email 2: The Case Study. Email 3: The 'Did you see this?' (News). Email 4: The 'Is this priority?' check."
    },
    {
        day: 34,
        phase: 3,
        title: "Referral Engineering",
        goal: "Turn 1 client into 3 without asking for favors.",
        concept: "Don't beg for referrals. Engineer them. The best time to ask is during the 'Point of Delight' (when they get a win).",
        content: "The Script: 'I'm glad you loved the result. We actually have capacity for one more partner like you. Who is the smartest CEO you know who has this same problem? I'd love to send them a free copy of my book/audit.'",
        caseStudy: {
            title: "The Double-Sided Incentive",
            challenge: "Clients were happy but lazy about referring.",
            solution: "Consultant offered: 'If you refer someone who signs, I will give YOU a free strategy session ($1k value) and THEM a $500 discount.'",
            result: "Referrals became a revenue driver for the clients. Win-Win-Win."
        },
        tips: ["Make introductions easy: Write the email FOR them.", "Thank them publicly (LinkedIn shoutout) when they refer."],
        action: "Identify 3 past colleagues/clients to run the 'Referral Script' on.",
        prompt: "Draft an email to a past happy client asking for an introduction. Include a 'blurb' they can just copy-paste to their friend."
    },
    {
        day: 35,
        phase: 3,
        title: "Networking: The 'Giver' Strategy",
        goal: "Build partnerships with 'Centers of Influence' (COI).",
        concept: "Don't network with peers (competitors). Network with COIs – people who serve your client *before* or *after* you. (e.g., If you are a specific Sales Consultant, partner with general VC Operating Partners).",
        content: "Approach COIs with 'Deal Flow', not 'Need'. 'I have clients who need [COI's Service]. Can I vet you to see if you are a good match for them?' You become a source of revenue for them. Then they reciprocate.",
        action: "List 10 COIs (e.g., Lawyers, Accountants, VC Partners) who serve your avatar.",
        prompt: "Draft an outreach message to a 'Center of Influence' (e.g., a VC Partner) offering to refer MY clients to THEM."
    },
    {
        day: 36,
        phase: 3,
        title: "Podcast Tour Strategy",
        goal: "Borrow authority from established platforms.",
        concept: "Guesting on podcasts is efficient: You speak for 1 hour to 1,000 qualified listeners. It is 'One-to-Many' selling.",
        content: "Pitch the 'Story', not the 'Bio'. Hosts want content that makes *them* look smart. Pitch a 'Counter-Intuitive Insight' (e.g., 'Why everything you know about [Topic] is wrong').",
        caseStudy: {
            title: "The Podcast Funnel",
            challenge: "Unknown consultant wanted enterprise leads.",
            solution: "She ignored big podcasts. she targeted niche podcasts with 500 listeners but *strictly* for CTOs.",
            result: "She did 10 interviews. Got 50 leads. 5 closed. Big audiences are vanity; Niche audiences are sanity."
        },
        readingList: [
            { type: "Resource", title: "MatchMaker.fm", link: "Tinder for Podcasters and Guests." }
        ],
        tips: ["Have a dedicated landing page for listeners (yourname.com/podcastname).", "Offer a specific Lead Magnet during the show."],
        action: "Pitch 5 niche podcasts.",
        prompt: "Write a podcast pitch email. Subject: 'Potential episode topic: [Contrarian Idea]'. Body: 3 bullet points of what I can teach their audience."
    },
    {
        day: 37,
        phase: 3,
        title: "Authority Content: The 'Whitepaper'",
        goal: "Create a 'Thud Factor' asset.",
        concept: "A 'Thud Factor' asset is something so substantial that when it hits the desk (or inbox), it makes a 'Thud'. A 20-page proprietary report or 'State of the Industry' guide.",
        content: "Data is authority. Run a simple survey (Day 6), aggregate the data, and publish 'The 2026 [Industry] Benchmark Report'. People quote data. They cite you. You become the expert.",
        caseStudy: {
            title: "The Annual Report Strategy",
            challenge: "Consultancy needed to differentiate.",
            solution: "Published the 'Future of FinTech HR' report annually.",
            result: "Media outlets cited the report. They didn't need to do outbound; leads came to download the data."
        },
        action: "Outline the chapters of a potential 'Industry Report'.",
        prompt: "Brainstorm 5 topics for a 'State of the Industry' report for [Target Niche] that would be highly citeable by journalists."
    },
    {
        day: 38,
        phase: 3,
        title: "CRM & Pipeline Hygiene",
        goal: "Manage the chaos. 'If it's not in Salesforce, it didn't happen'.",
        concept: "Your memory is not a CRM. You need a visual pipeline: Lead -> Qualified -> Proposal Sent -> Negotiation -> Closed Won. Track 'Time in Stage'.",
        content: "Deal Decay: The longer a deal sits in a stage, the lower the probability of clear. Implement a '30-Day Flush' rule. If they don't move in 30 days, move them to 'Nurture' to clear the pipeline.",
        tips: ["Block 15 mins every Friday for 'Pipeline Review'.", "Update the 'Next Action Date' for every active deal."],
        action: "Set up your pipeline stages in Notion/HubSpot/Excel.",
        prompt: "Define the 'Exit Criteria' for each stage of my pipeline. What exactly needs to happen to move a deal from 'Qualified' to 'Proposal'?"
    },
    {
        day: 39,
        phase: 3,
        title: "Video Sales Letters (VSL)",
        goal: "Clone yourself. Sell while you sleep.",
        concept: "A VSL doing the 'Diagnostic Pitch' (Day 19) is powerful. Record a 5-minute video: 'Who this is for, The Problem, The Solution, The Social Proof, The CTA'.",
        content: "Embed this video on your booking page. It 'pre-sells' the prospect. By the time they get on the call, they know your face, voice, and methodology.",
        tips: ["Don't use a script; use bullet points. Eye contact matters.", "Use Loom or Zoom. Authenticity > Production Value."],
        action: "Script and Record a 5-min VSL.",
        prompt: "Script the opening 60 seconds of a Video Sales Letter. Hook the viewer immediately with a 'You know how...' problem statement."
    },
    {
        day: 40,
        phase: 3,
        title: "Data Analysis & Optimization",
        goal: "Fix the leaky bucket.",
        concept: "Don't pour more water (leads) into a leaky bucket (funnel). Analyze: Open Rates (Subject Line problem), Reply Rates (Offer problem), Call Booking Rate (Trust problem), Close Rate (Sales Skill problem).",
        content: "Diagnose the bottleneck. If 100 people visit your site and 0 book, your site copy is the bottleneck. If 10 people book and 0 show up, your reminder system is the bottleneck.",
        caseStudy: {
            title: "The 1% Tweak",
            challenge: "High traffic, low bookings.",
            solution: "Changed the CTA from 'Request a Consultation' (Work) to 'Get Your Free Audit' (Value).",
            result: "Conversion rate doubled. Same traffic, 2x revenue."
        },
        action: "Create a 'Metrics Dashboard' sheet.",
        prompt: "List the 5 Key Performance Indicators (KPIs) I should track weekly to measure the health of my consulting marketing funnel."
    },
    {
        day: 41,
        phase: 3,
        title: "The 'Hand-Raising' Post",
        goal: "Harvest the demand you created.",
        concept: "Directly ask for the sale on social. 'I am looking for 3 [Avatar] who want to [Result]. Drop a 'Me' below'.",
        content: "These posts will get lower engagement (likes) but high revenue (leads). Don't judge them by vanity metrics. Judge them by DMs.",
        tips: ["Follow up with every commenter via DM immediately.", "Scarcity works ('Only 3 spots')."],
        action: "Draft and schedule a Hand-Raising post.",
        prompt: "Write a direct offer social media post calling out [Avatar] to work with me next month. Use the 'If you are X, I can help you Y' formula."
    },
    {
        day: 42,
        phase: 3,
        title: "Handling Ghosting (The Breakup)",
        goal: "Revive dead leads or kill them cleanly.",
        concept: "Ghosting is usually avoiding conflict, not a 'No'. The 'Breakup Email' uses 'Loss Aversion'.",
        content: "Subject: 'Permission to close your file?'. Body: 'Hi [Name], haven't heard back. I assume this isn't a priority right now? I'll close your file to stop bothering you.'",
        result: "This gets a 70% reply rate. People hate having files closed. They reply 'No! I've just been busy!'",
        readingList: [
            { type: "Book", title: "Never Split the Difference", author: "Chris Voss", link: "Tactical empathy and 'No-oriented' questions." }
        ],
        action: "Send the 'Breakup Email' to 3 unresponsive leads.",
        prompt: "Draft a polite but firm 'Breakup Email' that removes the pressure and asks for a simple 'No'."
    },
    {
        day: 43,
        phase: 3,
        title: "Handling Objections (The Sandler Style)",
        goal: "Turn objections into truth.",
        concept: "Objections ('Too expensive', 'Not now') are often lies to protect feelings. Use the 'Struggle Step'. agrees with the objection to lower defenses.",
        content: "Client: 'It's too expensive.' You: 'I hear you. It is a significant investment. Honestly, if I were you, I might feel the same. (Pause). taking price off the table, do you believe this solution would actually WORK for you?'",
        tips: ["Don't fight the objection. Isolate it.", "The first objection is rarely the real one."],
        action: "Script responses to: 'Price', 'Timing', and 'Talk to Partner'.",
        prompt: "Script a response to the objection 'We are going to try to do this internally first'."
    },
    {
        day: 44,
        phase: 3,
        title: "Refining the Pitch Deck",
        goal: "Visual persuasion.",
        concept: "Your deck is a visual aid, not a teleprompter. 5 Slides max: 1. The 'Villain' (Problem), 2. The 'Promised Land' (Result), 3. The 'Vehicle' (Your Process), 4. The 'Proof' (Case Studies), 5. The 'Ask' (Options).",
        content: "Visuals > Text. Use charts showing the 'Cost of Inaction' vs 'ROI of Action'.",
        action: "Create your 5-slide 'Sales Logic' deck.",
        prompt: "Describe the visual I should use on the 'Cost of Inaction' slide to scare the client (ethically) into acting now."
    },
    {
        day: 45,
        phase: 3,
        title: "Phase 3 Review",
        goal: "Pipeline Health Check.",
        concept: "You have traffic (LinkedIn/Email/Referrals). You have a system (CRM). You have a closer (Deck/Scripts).",
        action: "Audit: Do you have 3x your revenue goal in the pipeline? (e.g., Goal $10k -> Pipeline $30k). If not, go back to Day 33.",
        prompt: "Create a 'Marketing Health' checklist to review every Friday afternoon."
    },
    // PHASE 4: SALES & SCALE (Days 46-60)
    {
        day: 46,
        phase: 4,
        title: "Sales Call Prep: The Pre-Game Ritual",
        goal: "Win the call before it starts.",
        concept: "Amateurs 'wing it'. Pros prepare. You need a 'Battlecard' for each prospect: Know their revenue, their recent news, and their #1 competitor before you dial.",
        content: "The Ritual: 1. Review the Battlecard. 2. 2 minutes of visualization (Visualizing the 'Yes'). 3. Send a 'Reminder' email 1 hour before with an agenda (shows leadership).",
        tips: ["If you are nervous, you are focusing on yourself. Focus on helping them.", "Stand up while taking the call. It projects more energy."],
        action: "Create a 'Pre-Call Battlecard' template.",
        prompt: "Create a checklist of 5 things I must know about a prospect before getting on a sales call to avoid looking unprepared."
    },
    {
        day: 47,
        phase: 4,
        title: "Closing Techniques: The 'Assumptive' Close",
        goal: "Ask for the money without being weird.",
        concept: "Don't ask 'Do you want to buy?'. Ask 'When should we get started?'. Assume the sale is already made because the logic holds up.",
        content: "Transition Phrases: 'Based on what you told me, this seems like a perfect fit. Shall we look at the calendar for a kickoff date?' OR 'Would you prefer to pay via Stripe or Wire Transfer?'",
        tips: ["After you ask for the sale, BE SILENT. The next person to speak loses negotiation power.", "If they hesitate, ask 'What is the hesitation?' directly."],
        action: "Script 3 'Transition to Close' phrases.",
        prompt: "Script a smooth transition from 'Presentation' to 'Payment' that doesn't feel pushy."
    },
    {
        day: 48,
        phase: 4,
        title: "Contract Hygiene",
        goal: "Protect the downside.",
        concept: "The 'SOW' (Scope of Work) is more important than the MSA (Master Services Agreement). The MSA covers law; the SOW covers expectations. Most disputes happen because the SOW was vague.",
        content: "Must-Haves: 1. Payment Schedule (50% upfront is standard). 2. Kill Fee (If they cancel, you keep the deposit). 3. IP Clause (Who owns the work?).",
        readingList: [
            { type: "Resource", title: "Bonsai / Docusign", link: "Tools for electronic signatures." }
        ],
        action: "Review your Contract Template against a 'Best Practices' list.",
        prompt: "Draft a 'Scope Creep' clause for my contract that requires a separate Change Order for any new requests."
    },
    {
        day: 49,
        phase: 4,
        title: "The 'White Glove' Onboarding",
        goal: "Buyer's Remorse is your enemy. Kill it.",
        concept: "The most dangerous time is the 24 hours AFTER they pay. They are thinking 'Did I make a mistake?'. You must flood them with certainty.",
        content: "Automated Sequence: 1. Payment Receipt (Immediate). 2. 'Welcome to the Family' video from specific founder (10 mins later). 3. 'The Roadmap' email (1 hour later) outlining exactly what happens next.",
        caseStudy: {
            title: "The Welcome Box",
            challenge: "High churn in month 1.",
            solution: "Consultant sent a physical 'Welcome Box' (Mug, Notebook, Letter) to every new $10k client.",
            result: "Churn dropped to 0%. Physical items create emotional anchors."
        },
        action: "Map out your 'First 24 Hours' client experience.",
        prompt: "Write a 'Welcome Email' that reassures the client they made the right choice and outlines the immediate next steps."
    },
    {
        day: 50,
        phase: 4,
        title: "The Kickoff Call",
        goal: "Set the trajectory.",
        concept: "This is not a 'social call'. It is a 'Project Management' call. You are the Captain. Set the rules of engagement.",
        content: "Agenda: 1. Introductions. 2. Success Metric Confirmation (Re-confirm why we are here). 3. Communication Protocol (No texting, email only). 4. First Milestone.",
        tips: ["Record this call.", "Ask: 'What is one thing that could make this project fail?' (Pre-mortem)."],
        action: "Create a 'Kickoff Deck' template.",
        prompt: "Create an agenda for a 45-minute Kickoff Call that establishes me as the authority figure."
    },
    {
        day: 51,
        phase: 4,
        title: "Delivery Management: Project Hygiene",
        goal: "Green lights only.",
        concept: "Weekly status updates are non-negotiable. Even if nothing happened, send an update saying 'Nothing happened, waiting on X'. Silence = Anxiety.",
        content: "The 'Friday Update': 1. What we did this week. 2. What we are doing next week. 3. Blockers/Needs from you. Send this every Friday at 9am.",
        action: "Draft the 'Friday Update' email template.",
        prompt: "Draft a concise 'Weekly Status Update' email that respects the client's time but keeps them informed."
    },
    {
        day: 52,
        phase: 4,
        title: "Scope Creep & Boundaries",
        goal: "Don't work for free.",
        concept: "Clients will push boundaries. It's human nature. If you say 'Yes' to a small favor, you open the door to a big favor. Use the 'Change Order' as a shield.",
        content: "Script: 'I'd love to help with that! Since it's outside our current Scope, I'll whip up a quick Change Order for that additional piece. It will be $X. Shall I send it over?'",
        caseStudy: {
            title: "The 'Free' Favor",
            challenge: "Consultant kept doing 'little things' for free. Lost 10 hours/week.",
            solution: "Started enforcing a 'Zero Tolerance' policy on scope. Sent bills for everything.",
            result: "Clients respected him MORE. They stopped asking for junk and focused on the big picture."
        },
        action: "Practice saying the 'Change Order' script out loud.",
        prompt: "Script a polite but firm email refusing a client request that is clearly out of scope."
    },
    {
        day: 53,
        phase: 4,
        title: "Hiring: The First VA",
        goal: "Buy back your time.",
        concept: "You are the CEO, not the janitor. You should not be scheduling meetings or invoicing. Hire a Virtual Assistant (VA) for $10-20/hr to handle the 'Back Office'.",
        content: "The 'SOP' (Standard Operating Procedure). You cannot hire until you have documented the process. Record yourself doing the task on Loom first.",
        readingList: [
            { type: "Book", title: "Buy Back Your Time", author: "Dan Martell", link: "The playbook for hiring to scale." }
        ],
        action: "List the 3 tasks you hate doing most. These are your first SOPs.",
        prompt: "Write a job description for a Virtual Assistant to handle my email, calendar, and invoicing."
    },
    {
        day: 54,
        phase: 4,
        title: "Documenting SOPs",
        goal: "Build an asset, not a job.",
        concept: "If it's in your head, it's not a business; it's a job. Get it out of your head. 'The E-Myth' principle.",
        content: "Structure: 1. Goal. 2. Tools Needed. 3. Step-by-Step Instructions (with Screenshots). 4. Definition of Done.",
        tips: ["Use Loom. Video is faster than writing.", "Store Sops in Notion."],
        action: "Create your first 'Process Doc' for client onboarding.",
        prompt: "Create a template for a Standard Operating Procedure (SOP) document."
    },
    {
        day: 55,
        phase: 4,
        title: "Mid-Project Review",
        goal: "Secure the renewal early.",
        concept: "Don't wait until the end to ask for more work. Do a 'Mid-Term' review. Show them the wins so far.",
        content: "The 'Temperature Check'. 'On a scale of 1-10, how happy are you? What would make it a 10?'. This uncovers hidden issues before they kill the deal.",
        action: "Schedule a Mid-Project Review with your beta clients.",
        prompt: "Draft an email inviting the client to a 'Strategy Review' call halfway through the project."
    },
    {
        day: 56,
        phase: 4,
        title: "The Upsell: Retainers",
        goal: "Recurring Revenue > One-Time Revenue.",
        concept: "The hardest part is getting the client. Once you have them, keep them. Move them from 'Project' to 'Retainer'.",
        content: "The 'Maintenance Mode' offer. 'We built the system (Project). Now, for $X/month, we will keep it optimized (Retainer).' It's insurance for them.",
        caseStudy: {
            title: "The SEO Retainer",
            challenge: "SEO Consultant sold $5k audits. Every month started at $0.",
            solution: "Added a 'content implementation' retainer for $2k/mo.",
            result: "Converted 50% of audit clients. Built a recurring base of $10k/mo. Stability achieved."
        },
        action: "Design a 'Phase 2' Retainer offer.",
        prompt: "Brainstorm 3 'Retainer' ideas that logically follow my main service. What ongoing value can I provide?"
    },
    {
        day: 57,
        phase: 4,
        title: "Harvesting Testimonials",
        goal: "Automate social proof.",
        concept: "The best time to ask is immediately after a 'Win'. Don't ask 'Can you write a testimonial?'. Ask 'Can you answer these 3 questions?'.",
        content: "The Questions: 1. What was the problem before? 2. What was the experience working with us? 3. What is the specific result now? (Hero's Journey arc).",
        tips: ["Video is 10x better than text.", "Offer to draft it for them to approve."],
        action: "Create a 'Testimonial Request' form.",
        prompt: "Draft an email asking a happy client for a video testimonial. Include a gentle incentive (e.g., 'I'll feature you to my network')."
    },
    {
        day: 58,
        phase: 4,
        title: "Referral Systems",
        goal: "Viral growth.",
        concept: "Passive referrals are luck. Active referrals are a system. Creating a 'Referral Partner' agreement with complementary businesses.",
        content: "If you sell Web Design, partner with SEO agencies. If you sell HR Consulting, partner with Recruiters. Share the wealth (10% commission).",
        action: "Reach out to 3 potential 'Channel Partners'.",
        prompt: "Draft a partnership proposal email to a complementary business owner."
    },
    {
        day: 59,
        phase: 4,
        title: "Financial Review: Profit First",
        goal: "Keep what you make.",
        concept: "Revenue feeds the ego; Profit feeds the family. Implement 'Profit First'. Take your profit % out FIRST, then spend what is left.",
        content: "Review your P&L. Cut the 'Zombie Subscriptions'. Check your margins. Are you actually making money on that $5k project after hours/expenses?",
        readingList: [
            { type: "Book", title: "Profit First", author: "Mike Michalowicz", link: "A system to ensure you are always profitable." }
        ],
        action: "Conduct a '90-Day Financial Review'.",
        prompt: "Create a checklist for a Monthly Business Review (MBR) to track revenue, expenses, and profit margins."
    },
    {
        day: 60,
        phase: 4,
        title: "The Next 60 Days: CEO Mode",
        goal: "Graduate from the program.",
        concept: "You are no longer a 'starter'. You are an operator. Your focus shifts from 'Validation' to 'Scale'.",
        content: "The Flywheel: 1. Marketing (Leads). 2. Sales (Cash). 3. Delivery (Results). 4. Retention (LTV). Repeat forever.",
        illustration: "The Bamboo Tree. You spent 60 days watering the roots (Foundation). Now the tree shoots up 90 feet.",
        action: "Plan your next quarter's revenue goal.",
        prompt: "Write a 'Letter to Myself' dated 1 year from now. Describe the business, the revenue, and the lifestyle."
    }
];
