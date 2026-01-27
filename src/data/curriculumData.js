
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
        title: "Legal & Admin Foundation: The 'Audit-Proof' Setup",
        goal: "Protect your assets and prepare to transact with enterprise clients.",
        concept: "You are not a freelancer; you are a Business Entity. Startups fail due to 'Legal Technical Debt'. Do not mix personal and business funds (Piercing the Corporate Veil). A proper setup signals to clients that you are a serious vendor, not a risky hobbyist.",
        content: "The Minimum Viable Legal Stack: \n1. Entity: LLC (Limited Liability Company) protects your personal home/savings from lawsuits. \n2. EIN: Your business 'Social Security Number'. Required for banking. \n3. Bank Account: NEVER use your personal checking. \n4. Insurance: General Liability + E&O (Errors & Omissions). costs <$50/mo but can save you millions.",
        illustration: "Think of your business as a Submarine. The LLC is the pressure hull. If it cracks (co-mingling funds), the water rushes in and sinks everything (your personal assets). Keep the hull integrity 100%.",
        caseStudy: {
            title: "The 'Scope Creep' Nightmare",
            challenge: "A designer started a project with a handshake agreement. The client adding 'just one more page' for 3 months.",
            solution: "She finally implemented a rigorous 'Master Services Agreement' (MSA) with a clear 'Statement of Work' (SOW).",
            result: "When the client asked for more work, she pointed to the SOW and said, 'Happy to do that! It will be a Change Order for $1,500.' The client respected the boundary and paid. The contract saved the relationship."
        },
        readingList: [
            { type: "Article", title: "Small Business Administration Guide", link: "Official government guide to starting a business." },
            { type: "Resource", title: "Plain English Contract Templates", author: "Docracy/Clerky", link: "Open source legal documents for startups." }
        ],
        tips: [
            "Get a separate bank account Day 1. Co-mingling funds is the #1 way to lose liability protection.",
            "Use a 'Retainer Agreement' for ongoing advisory work, not just 'Project' contracts.",
            "Get 'Professional Indemnity' (E&O) insurance. Some big clients won't hire you without it."
        ],
        action: "1. Register for an EIN (free). \n2. Open a business checking account (Mercury/Novo/Chase). \n3. Draft your standard MSA template.",
        prompt: "Generate a plain-English 'Independent Contractor Agreement' template. Include sections for: 1. Scope, 2. Payment Terms (50% upfront), 3. IP Ownership (Client owns work ONLY upon full payment), 4. Confidentiality, 5. Dispute Resolution."
    },
    {
        day: 12,
        phase: 1,
        title: "Tool Stack Selection: The Digital Operation",
        goal: "Build a frictionless 'Digital Office' that scales without hiring.",
        concept: "You need to reduce 'Admin Drag'. Every minute you spend scheduling meetings or chasing invoices is a minute you aren't billing. Use software to automate the low-value work. Friction kills deals; make it easy for clients to pay you and meet you.",
        content: "The 'Lean Consultant' Stack (Under $100/mo): \n1. Scheduling: Calendly (Eliminates 'What time works for you?' tag). \n2. Video: Zoom/Google Meet. \n3. Payments: Stripe (Accept credit cards instantly). \n4. CRM: Notion or HubSpot Free (Track leads). \n5. E-Sign: HelloSign/DocuSign (Get contracts signed fast).",
        illustration: "The 'vending machine' vs. the 'corner store'. A vending machine works 24/7 without a clerk. Your scheduling and payment systems should be vending machines. Your consulting is the corner store.",
        caseStudy: {
            title: "The Frictionless Close",
            challenge: "Consultant A went back and forth on email 8 times to find a meeting time. The client lost interest and hired someone else.",
            solution: "Consultant B sent a Calendly link: 'Pick a time that works for you here.'",
            result: "Consultant B got the booking in 30 seconds. The ease of booking signaled 'Professionalism' and 'Respect for Time'. The client assumed the project would be just as smooth.",
        },
        readingList: [
            { type: "Resource", title: "Zapier", link: "The glue that connects your apps (Automate everything)." }
        ],
        tips: [
            "Sync your Calendly to your personal calendar so you never get double-booked.",
            "Use Stripe to create 'Payment Links' you can text to clients. Remove the friction of 'Invoices'.",
            "Don't buy expensive enterprise software (Salesforce) until you have $100k revenue. Excel is fine."
        ],
        action: "Set up your 'Booking Funnel': 1. Create Calendly account. 2. Create Stripe account. 3. Create a 'Discovery Call' event type that asks qualifying questions.",
        prompt: "Create a 3-step 'New Client Onboarding' email sequence. Email 1: Welcome + Contract Link. Email 2: Payment Link (Stripe). Email 3: Schedule Kick-off (Calendly) + Pre-work Questionnaire."
    },
    {
        day: 13,
        phase: 1,
        title: "Personal Branding Basics: The Authority Signal",
        goal: "Optimize your digital presence to scream 'Expert' to a cold visitor.",
        concept: "Your LinkedIn profile is your Landing Page. It is not a CV. A CV looks backward (history); a Brand looks forward (potential). If a prospect Googles you, what do they find? Inconsistency? Silence? Or a clear, authoritative signal that you solve their specific problem?",
        content: "Elements of a High-Converting Profile: \n1. Headline: Benefit-driven (e.g., 'Helping [Niche] achieve [Result]'). \n2. Banner: Social Proof or Value Prop. \n3. About Section: A Sales Letter. Hook -> Problem -> Agitate -> Solution -> Call to Action. \n4. Featured: Case Studies/Results.",
        illustration: "The 'Empty Restaurant' Effect. If you walk by a restaurant and it's empty, you keep walking. If your social profiles are empty, clients assume you aren't in demand. You must populate the feed.",
        caseStudy: {
            title: "Profile Makeover Conversion",
            challenge: "A former Recruiter turned 'Talent Consultant' had 'Talent Acquisition Specialist at [Company]' as her headline. She got zero inbound leads.",
            solution: "She changed her headline to: 'I help Tech Scale-ups hire their first 10 Engineers in under 30 days.'",
            result: "Her connection acceptance rate went from 12% to 65%. VCs started messaging her to help their portfolio companies. She didn't change her skills; she changed the 'Storefront Sign'."
        },
        readingList: [
            { type: "Book", title: "Known", author: "Mark Schaefer", link: "Building and unleashing your personal brand." },
            { type: "Guide", title: "The LinkedIn high-Converting Profile Checklist", author: "Justin Welsh", link: "Tactical steps to optimize your profile." }
        ],
        tips: [
            "Get a professional headshot. No selfies, no wedding crop-outs. It's the highest ROI $100 you will spend.",
            "Use the 'Featured' section to showcase your 'MVO' or a Case Study PDF.",
            "Turn on 'Creator Mode' on LinkedIn to display your content better and get 'Follow' buttons."
        ],
        action: "The 30-Minute Profile Audit: Update Headline, Banner, and 'About' section today. Ask 3 friends 'What does this person do?' based only on the profile.",
        prompt: "Critique my proposed LinkedIn headline: '[Current Headline]'. Rewrite it 5 times to be outcomes-focused, addressing [Target Niche] and [Big Benefit]."
    },
    {
        day: 14,
        phase: 1,
        title: "The Elevator Pitch: Verbal Branding",
        goal: "Describe what you do clearly in 30 seconds to invite a conversation.",
        concept: "The purpose of a pitch is NOT to sell; it is to get the other person to ask 'How do you do that?'. Most people answer 'What do you do?' with a title ('I'm a consultant'). This stops the conversation. \n\nFormula: 'I help [Target] solve [Problem] so they can [Result].'",
        content: "Types of Pitches: \n1. The Problem/Solution: 'I help banks prevent data breaches.' \n2. The Social Proof: 'I work with companies like Uber to fix their driver retention.' \n3. The Contrarian: 'You know how most agencies charge for time? I only charge for results.'",
        illustration: "Bad Pitch: 'I'm a logistic consultant.' (Boring. Boxed in). \nGood Pitch: 'I help retailers cut their shipping costs by 20% without changing carriers.' (Interesting. Profitable. Invites questions).",
        caseStudy: {
            title: "The Networking Pivot",
            challenge: "Jim introduced himself as a 'Leadership Coach'. People nodded politely and walked away.",
            solution: "He changed his intro to: 'I help burnt-out tech founders build executive teams so they can take a vacation.'",
            result: "Suddenly, founders started saying 'I need that. Let's talk.' The 'Vacation' was the emotional hook, not the 'Coaching'.",
        },
        readingList: [
            { type: "Book", title: "To Sell Is Human", author: "Daniel Pink", link: "Moving others." }
        ],
        tips: [
            "Don't use your job title. It's the least interesting thing about you.",
            "Focus on the 'After' state of your client (The Vacation, The IPO, The Exit).",
            "End with a question: 'Do you know anyone dealing with that?'"
        ],
        action: "Record yourself saying your pitch into your phone. Listen to it. Do you sound bored? Do you sound confident? Iterate until it flows naturally.",
        prompt: "Draft 3 versions of an elevator pitch for me: 1. The 'Problem/Solution' Pitch, 2. The 'Social Proof' Pitch, 3. The 'Contrarian' Pitch."
    },
    {
        day: 15,
        phase: 1,
        title: "Phase 1 Review: The Foundation",
        goal: "Consolidate your progress and ensure you are ready to build the house.",
        concept: "You have now completed the 'Invisible Work'—Mindset, Operations, and Positioning. If you skip this, the 'Visible Work' (Marketing/Sales) will fail because there is no foundation. Review brings clarity. You cannot build a skyscraper on quicksand.",
        content: "Checklist for Phase 1 Completion: \n1. [ ] Mindset Shift: I am an asset, not a cost. \n2. [ ] Niche: I know WHO I serve and WHAT problem I solve. \n3. [ ] Positioning: I have a UVP and a 'Moat'. \n4. [ ] Offer: I have an MVO with a name and price. \n5. [ ] Admin: I have an LLC, EIN, and Business Bank Account. \n6. [ ] Tools: I can accept money (Stripe) and book meetings (Calendly). \n7. [ ] Brand: My LinkedIn profile looks like a landing page.",
        illustration: "Rocket Launch. 90% of the energy is spent in the first mile (gravity). Once you break orbit (Phase 1), the rest requires less friction. You have broken gravity.",
        caseStudy: {
            title: "The False Start",
            challenge: "Mark skipped Phase 1 and started cold calling immediately. He got meetings but couldn't close because he had no clear offer and no way to accept payment.",
            solution: "He paused, went back, and built his Foundation (Days 1-14).",
            result: "When he resumed outreach, he closed 3 deals in a week because he looked professional and his offer was clear."
        },
        readingList: [],
        tips: [
            "If you checked less than 5 boxes, do not proceed to Phase 2. Go back and fix the foundation.",
            "Celebrate this milestone. You are now a business owner, not just a person with an idea."
        ],
        action: "Complete the 'Go/No-Go' Checklist. If you are 'Go', take a day off before starting Phase 2.",
        prompt: "Act as an auditor. Review my current status against the 7-point checklist. Tell me where I am weakest and what I need to fix before I start marketing."
    },
    // PHASE 2: OFFER & ASSETS (Days 16-30)
    {
        day: 16,
        phase: 2,
        title: "The Transformation Statement: Bridging the Gap",
        goal: "Define the specific Point A (Hell) to Point B (Heaven) journey you facilitate.",
        concept: "Clients don't buy consulting; they buy a future state. They buy 'Rescue' or 'Optimization'. Your offer must bridge the gap between their current pain and their desired pleasure. The larger the gap, the higher the price you can command.",
        content: "Stop selling 'process' (e.g., 'I do SEO audits'). Start selling 'outcome' (e.g., 'I help you rank #1 for your highest value keywords'). The Transformation Statement is the core of your marketing engine: \n'I take [Avatar] from [Point A: Pain] to [Point B: Pleasure] in [Timeframe].'",
        illustration: "Airline Analogy: Airlines don't sell 'sitting in a metal tube for 6 hours'. They sell 'Wake up in Paris'. \n\n- Point A: Rainy London. \n- The Plane: Your Service. \n- Point B: Sunny Paris. \n\nMarketing Focus: Sell Paris, not the plane.",
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
            "Point A must be visceral. If they aren't in pain, they won't pay."
        ],
        action: "Draft your 'From/To' table. Column A: Current Pains (Hell). Column B: Desired Wins (Heaven). List at least 10 for each.",
        prompt: "I am targeting [Target Audience]. List 10 visceral, emotional 'Point A' pains they feel daily, and 10 specific 'Point B' outcomes they dream of. Contrast them."
    },
    {
        day: 17,
        phase: 2,
        title: "Mechanism Design: Naming Your System",
        goal: "Name your unique process to build IP value and trust.",
        concept: "If you sell 'Agile Transformation', you are a commodity (there are 10,000 others). If you sell 'The 3-Pillar Velocity Protocol', you own a proprietary mechanism. Naming your process makes it tangible and valuable. It shifts the conversation from 'Why you?' to 'How does the Protocol work?'.",
        content: "Great firms do this: McKinsey has the '7S Framework', BCG has the 'Growth-Share Matrix'. You need your own 'named' way of solving the problem. It gives clients confidence that you have a map, not just a machete.",
        illustration: "The Black Box vs. The Glass Box. \n- Black Box: 'Trust me, I'll fix it.' (Risky). \n- Glass Box: 'First we do the Audit, then the Strategy, then the Rollout.' (Safe). \n\nYour Mechanism is the wiring diagram of the Glass Box.",
        caseStudy: {
            title: "The 'Profit-First' Effect",
            challenge: "An accountant offered 'Bookkeeping Services'. He was competing with $20/hr overseas VAs who could do the math cheaper.",
            solution: "He adopted the 'Profit First' methodology. He stopped selling bookkeeping and started selling 'Profit First Implementation'.",
            result: "He became one of the few certified experts in a specific named mechanism. Clients sought HIM out because they wanted THAT specific system, not just generic accounting. He charged $5k for setup instead of $50/mo."
        },
        readingList: [
            { type: "Article", title: "The Unique Mechanism", author: "Todd Brown", link: "Why having a unique mechanism is the difference between a 6 and 7 figure business." }
        ],
        tips: [
            "Use alliteration (e.g., The 3 C's of Conversion).",
            "Create a visual model (Triangle, Pyramid, Flywheel).",
            "The mechanism explains 'How' the transformation happens, not 'What' happens."
        ],
        action: "Draw your process as a diagram. Is it 3 steps? 5 steps? Give it a catchy name (e.g., The [Adjective] [Noun] [System]).",
        prompt: "My consulting process involves 3 steps: [Step 1], [Step 2], [Step 3]. Generate 10 proprietary names for this system using words like 'Protocol', 'Accelerator', 'Framework', 'Matrix', 'Blueprint'."
    },
    {
        day: 18,
        phase: 2,
        title: "Structuring Delivery: The Standard Operating Procedure",
        goal: "Design the logistics of your MVO (Minimum Viable Offer) to ensure scalability.",
        concept: "How will you actually deliver the result? Avoid the 'Blank Sheet of Paper' nightmare. If every project is unique, you are an artist, not a business. Artists starve. Businesses scale. Productize your delivery into a standard timeline. \n\nTypical Phase Layout: \n1. Audit (Diagnosis) \n2. Strategy (Prescription) \n3. Execution (Surgery) \n4. Optimization (Check-up).",
        content: "Standardization = Scale. If every client gets a custom scope, you are building a trap. Define a fixed duration (e.g., 6 weeks), fixed deliverables, and fixed touchpoints. \n- Week 1: Kickoff Call + Data Collection. \n- Week 2: Analysis (Async). \n- Week 3: Strategy Review (Call).",
        illustration: "The Assembly Line. Imagine if Ford built every car from scratch based on what the driver felt like that day. It would cost $500k and take 2 years. They built the Model T on a line. Build your Model T.",
        caseStudy: {
            title: "The Workshop Model Pivot",
            challenge: "A strategy consultant spent 3-4 months on open-ended retainers. Scope creep was rampant, and clients dragged their feet on feedback.",
            solution: "He pivoted to a '2-Day Intensive' structure. Day 1: Diagnosis & workshop with the team. Day 2: Strategic Roadmap creation (Solo). Delivered at 5 PM.",
            result: "He charged $15k per intensive. Clients loved the speed (Result in 2 days, not 2 months). He loved the closure. No more scope creep. He could do 4 of these a month and make $60k."
        },
        readingList: [
            { type: "Book", title: "Productize", author: "Eisha Armstrong", link: "The ultimate guide to turning professional services into scalable products." }
        ],
        tips: [
            "Cap the duration (e.g., 'This is a 6-week sprint'). Timeboxes force action.",
            "Include a 'Kickoff' and 'Closeout' call as standard. Everything else should be async or email if possible.",
            "Weekly status emails (Friday updates) are better than weekly status calls (which turn into therapy sessions)."
        ],
        action: "Map out the week-by-week timeline of your service. Create a 'Deliverables' list for each week.",
        prompt: "Create a 6-week delivery schedule for my consulting offer. Include key milestones, client homework, and specific deliverables for each week."
    },
    {
        day: 19,
        phase: 2,
        title: "The Challenger Sale: Commercial Insight",
        goal: "Teach, Tailor, and Take Control. Move beyond 'Relationship Selling'.",
        concept: "The 'Relationship Builder' profile is the lowest performing in complex B2B sales (Dixon & Adamson). The 'Challenger' wins. You must teach the client something new about their business. Don't just diagnose (SPIN); offer 'Commercial Insight' that reframes their thinking.",
        content: "Don't ask: 'What keeps you up at night?' (Boring). \nSay: 'Here is what SHOULD be keeping you up at night.' (Authoritative). \n\nChallenge their status quo. Show them the hidden cost of their current trajectory. Conflict creates value.",
        illustration: "The Mentor vs. The Friend. \n- A friend hugs you and listens to your problems. \n- A mentor tells you that your current strategy is flawed and shows you a better way. \n\nClients pay Mentors. They have coffee with Friends. Be the mentor.",
        caseStudy: {
            title: "Asking the Right Questions",
            challenge: "Consultant Ben kept pitching his solution 5 minutes into the call. Clients said 'Let me think about it' and ghosted.",
            solution: "He switched to a diagnostic script. He spent 40 mins asking about the *cost* of the problem. 'How much revenue are you losing per month due to this?' 'What happens if you don't fix it by Q4?'",
            result: "By the time he revealed the price ($10k), the client had already admitted the problem was costing them $100k/year. The sale was logical, not emotional. He closed 40% of leads."
        },
        readingList: [
            { type: "Book", title: "SPIN Selling", author: "Neil Rackham", link: "The gold standard scientific sales method." },
            { type: "Book", title: "The Challenger Sale", author: "Matthew Dixon", link: "Taking control of the customer conversation." }
        ],
        tips: [
            "Talk 20% of the time. Listen 80%.",
            "Don't provide the solution on the call. Diagnose the problem, then sell the *implementation* of the solution.",
            "Record your calls (Game tape). You will be shocked at how much you interrupt."
        ],
        action: "Write out your 5 core 'Implication' questions. (e.g., 'If this isn't solved, how does it affect your 2024 goals?').",
        prompt: "I am selling [Service]. Generate 5 'Implication Questions' that make the prospect realize the high cost of NOT hiring me."
    },
    {
        day: 20,
        phase: 2,
        title: "The Proposal Template: The Options Close",
        goal: "Create a proposal that closes, not just informs. Use 'Anchoring'.",
        concept: "Most proposals are boring Word docs focused on 'Deliverables'. Winning proposals focus on 'Outcomes' and 'Options'. Never send a proposal with 1 price. That is a 'Yes/No' question. Send 3 options. That is a 'Which One?' question.",
        content: "The 'Option Structure': \n- Option 1 (Anchor): The VIP 'Do It All'. Price: $25k. (Makes the middle option look cheap). \n- Option 2 (Core): The Target MVO. Price: $10k. \n- Option 3 (Low): Audit/DIY. Price: $3k. \n\n65% of clients will pick Option 2.",
        illustration: "The Popcorn Effect. Movie theaters sell 'Small', 'Medium' and 'Large'. The Large is huge but only $0.50 more. Most people buy the Large. You need a 'Large' to make the 'Medium' feel safe.",
        caseStudy: {
            title: "Tripling Deal Value",
            challenge: "A designer sent proposals with a single quote: '$4,000 for the website'. Clients negotiated him down to $3,000.",
            solution: "He started sending 3 options. 1. Basic Site ($5k). 2. Site + SEO + Copy ($12k). 3. Site + SEO + Copy + monthly maintenance ($25k).",
            result: "The client picked Option 2 ($12k). He tripled his deal size instantly, just by offering a 'Premium' option that made $12k look reasonable compared to $25k."
        },
        readingList: [
            { type: "Resource", title: "Better Proposals", link: "Software that tracks when clients open your proposal." }
        ],
        tips: [
            "Send the proposal within 24 hours of the call. Speed kills doubt.",
            "Use a video walkthrough (Loom) to explain the proposal. Don't just email a PDF.",
            "The 'Expire Date': Proposals should self-destruct in 7 days to force a decision."
        ],
        action: "Create your '3-Option' Proposal Template. Define what goes in Gold/Silver/Bronze.",
        prompt: "Draft the 3 option tiers for my service. 1. The 'Do it Yourself' (Low). 2. The 'done With You' (Target). 3. The 'VIP' (High Anchor). Give them Names and Price relative to each other (1x, 3x, 10x)."
    },
    {
        day: 21,
        phase: 2,
        title: "The Risk Reversal: 3-Level Guarantees",
        goal: "Remove the fear of buying. Make 'No' the risky choice.",
        concept: "Clients are not afraid of the price; they are afraid of feeling stupid for making a bad decision. A strong guarantee transfers the risk from them to you. It increases conversion rates significantly (often 2-3x).",
        content: "Types of Guarantees: \n1. Unconditional: '100% money back if you aren't happy.' (Best for low ticket). \n2. Conditional: 'If you implement X and Y and still don't grow, we refund you.' (Best for coaching/strategy). \n3. Service Level: 'We work for free until we hit the metric.' (Best for reliable done-for-you services).",
        illustration: "Domino's '30 minutes or it's free' built an empire. It wasn't about the pizza; it was about the certainty of lunch. What is your '30 minutes'?",
        caseStudy: {
            title: "The 110% Guarantee",
            challenge: "A younger consultant couldn't get enterprises to trust him with a $20k contract.",
            solution: "He offered a 'Double Your ROI' guarantee. 'If this workshop doesn't generate ideas worth at least 2x my fee in 30 days, I'll refund you 100% + $1,000 for wasting your time.'",
            result: "He never had to refund money. The guarantee signaled such extreme confidence that enterprises felt safe signing. His close rate went from 10% to 50%."
        },
        readingList: [
            { type: "Article", title: "The Power of Guarantees", author: "Harvard Business Review", link: "How guarantees impact service quality and sales." }
        ],
        tips: [
            "A conditional guarantee protects you from lazy clients who don't do the work.",
            "The stronger the guarantee, the higher the sales. The 'refund rate' usually stays low.",
            "Don't worry about refunds. If your service is good, they are rare (usually <3%)."
        ],
        action: "Draft a bold guarantee statement. Make it scary for you (that means it's good).",
        prompt: "Brainstorm 3 types of guarantees for my consulting offer: 1. Satisfaction based, 2. Performance based (ROI), 3. 'Work until it's done' based."
    },
    {
        day: 22,
        phase: 2,
        title: "Financial Modeling: Unit Economics",
        goal: "Analyze the P&L of your Minimum Viable Offer to ensure profitability.",
        concept: "Revenue is vanity; Margin is sanity. Calculate the 'Gross Margin' of your MVO. If you charge $10k, and it takes you 20 hours to deliver, your Effective Hourly Rate (EHR) is $500. This is acceptable. \nIf it takes 100 hours, your EHR is $100. You are just a well-paid employee. You cannot scale if your EHR is low.",
        content: "Don't just set a price. Design the delivery to ensure high margins. \n1. Can you automate 20%? \n2. Can you use templates for 30%? \n3. Can a junior contractor do 40%? \nThis is 'Operational Leverage'. High margin services fund growth.",
        caseStudy: {
            title: "Raising Rates 4x via Value",
            challenge: "A copywriter charged $100 per email and struggled to pay rent. Clients viewed her as a 'commodity word-factory'.",
            solution: "She started pitching 'Retention Sequences' that recovered lost customers. She showed a client this sequence would likely save $20k/month in churn.",
            result: "She charged $4,000 for the sequence (40 emails worth). The client paid happily because $4k to make $20k/mo is a bargain. Her hourly rate went from $50 to $400."
        },
        readingList: [],
        tips: [
            "If 100% of people say 'Yes', your price is too low. Aim for a 20% rejection rate.",
            "Offer a 'Pay in Full' discount (e.g., 10% off) to improve cash flow.",
            "Never lower your price. If they can't afford it, remove scope (downsell), don't discount."
        ],
        action: "Calculate your MVO's estimated hours and Effective Hourly Rate.",
        prompt: "Help me justify a $[Price] fee for my service. List 5 visible and invisible costs I save the client (e.g., 'Cost of bad hire', 'Cost of lost time', 'Cost of rework')."
    },
    {
        day: 23,
        phase: 2,
        title: "Sales Assets: The One-Pager",
        goal: "Create a high-impact sales sheet that fits on one screen.",
        concept: "Nobody reads 20-page brochures. They scan summaries. A One-Pager (Sell Sheet) is a visual summary of your offer used to pique interest in the first 5 seconds of a cold interaction.",
        content: "Structure of a Dangerous One-Pager: \n1. Headline (Big Promise). \n2. The Problem (Agitate the pain). \n3. The Solution (Your 'Named Mechanism' diagram). \n4. Social Proof (Logos/Quotes). \n5. The Offer (Delivery + Price). \n6. Low-Friction CTA (QR Code to Calendly).",
        caseStudy: {
            title: "The PDF that opened doors",
            challenge: "A supply chain consultant needed to explain a complex logistics solution to busy COOs who wouldn't take a call.",
            solution: "He condensed his 30-slide deck into a visual 'Before/After' infographic One-Pager.",
            result: "The One-Pager was shared internally at target companies because it was 'useful content', not just a brochure. It bypassed gatekeepers and landed on the CEO's desk."
        },
        readingList: [
            { type: "Tool", title: "Canva", link: "Use the 'Sales Sheet' templates." }
        ],
        tips: [
            "Use Canva to design this. It must look expensive. Poor design = Poor perception.",
            "Visuals > Text. Use a diagram to explain your process.",
            "Include a direct booking link (or QR code) at the bottom."
        ],
        action: "Draft the copy for your One-Pager. Then spend 60 mins in Canva making it look pro.",
        prompt: "Write the copy for a One-Pager selling [Service]. Include a punchy headline, 3 bullet points of pain, 3 bullet points of gain, and a call to action."
    },
    {
        day: 24,
        phase: 2,
        title: "Sales Assets: The Proof Portfolio",
        goal: "Build a set of Case Studies that do the selling for you.",
        concept: "Case studies are the currency of trust. In consulting, nobody buys until they believe you have done it before. Use the STAR Framework (Situation, Task, Action, Result) to turn boring 'Testimonials' into gripping 'Success Stories'.",
        content: "If you are new, do a 'Hypothetical Case Study' (How I would solve X) or use a 'Previous Life' case study (from your corporate job). \n\nKey: The 'Hero' of the story is the Client, not you. You are the Guide (Yoda), they are Luke.",
        caseStudy: {
            title: "Leveraging Past Wins",
            challenge: "A new independent consultant had zero 'consulting clients' and felt like a fraud.",
            solution: "He wrote a case study about a project he led at his previous employer (Amazon). 'How I led the team that reduced shipping costs by 15%'.",
            result: "Clients respected the experience immediately. It didn't matter it was as an employee; the skill and result were proven. He closed his first deal in week 2."
        },
        readingList: [
            { type: "Article", title: "How to Write a Case Study", author: "HubSpot", link: "Templates and examples of high-converting case studies." }
        ],
        tips: [
            "Use real numbers (%, $). Specificity sells. 'Increased sales' is weak. 'Increased sales by 23.4%' is strong.",
            "Get a video testimonial if possible (Zoom recording). Transcribe it for the text.",
            "Put your case studies on your LinkedIn Featured section."
        ],
        action: "Write one detailed Case Study (STAR format). It can be from a past job.",
        prompt: "Interview me about a past project. Ask questions to extract the Situation, Action, and specific Result to build a case study."
    },
    {
        day: 25,
        phase: 2,
        title: "Outreach Strategy: The Sniper Channel",
        goal: "Pick ONE channel to master. Do not dabble.",
        concept: "Most consultants try to be everywhere (Omnichannel) and end up invisible everywhere. You don't need 10 channels. You need 1 channel that works. \nB2B = LinkedIn + Email. \nB2C = Instagram/TikTok/Facebook. \nPick where your money is.",
        content: "The 'Sniper' vs 'Shotgun' approach. Consulting usually favors the Sniper approach (Direct outreach to 100 high-value targets) rather than the Shotgun (SEO/Ads to everyone). It is faster, cheaper, and higher conversion.",
        caseStudy: {
            title: "The LinkedIn Sniper",
            challenge: "A consultant tried blogging (SEO) for 6 months. He wrote 50 articles and got zero leads.",
            solution: "He switched to LinkedIn Sales Navigator. He identified 100 perfect prospects (CTOs in FinTech). He sent 10 personalized video messages a day.",
            result: "He booked 15 calls in 2 weeks. SEO takes months; Outbound takes minutes. He realized he was 'hiding' behind content instead of selling."
        },
        tips: [
            "Go where the money is. Executives are on LinkedIn and Email. They are not on TikTok for business.",
            "Master one channel for 90 days before adding a second.",
            "Consistency > Intensity. 10 reachouts a day for 30 days > 300 in one day (which triggers spam filters)."
        ],
        action: "Commit to your primary channel. Ignore the others.",
        prompt: "Compare LinkedIn, Cold Email, and Twitter for finding clients in the [Industry] sector. Pros and cons of each regarding speed to revenue."
    },
    {
        day: 26,
        phase: 2,
        title: "List Building: The Money is in the Data",
        goal: "Build a list of 100 qualified leads who CAN pay you.",
        concept: "Your network can be measured by the number of direct cell phone numbers (or emails) you have of decision makers. You cannot just 'post and hope'. You need to build a 'Dream 100' list of people you want to work with.",
        content: "Tools: Apollo.io, LinkedIn Sales Navigator, Hunter.io. \nStep 1: Define the filter (Revenue > $10m, Title = 'VP of Marketing', Industry = SaaS). \nStep 2: Export the list. \nStep 3: Enrich the data (Find email).",
        caseStudy: {
            title: "Data-Driven Targeting",
            challenge: "An agency was spamming generic info@company.com emails and getting a 0.2% reply rate.",
            solution: "They used Apollo to filter for 'Companies that use Shopify' (Technographic data) + 'Revenue $10M+' (Firmographic data). They found the specific eCommerce Director.",
            result: "The message became: 'I see you use Shopify and do $10M+.'. Response rate went to 12% because the list was highly qualified, not random."
        },
        tips: [
            "Verify emails to protect your domain deliverables (use NeverBounce/ZeroBounce).",
            "Segment your list: 'CEOs' care about profit; 'Marketing Managers' care about clicks. They need different messages.",
            "Don't buy shady scraped lists. Build your own fresh data."
        ],
        action: "Build a 'Dream 100' spreadsheet with Name, Title, Company, and Email.",
        prompt: "List the exact search filters I should use in LinkedIn Sales Navigator to find my ideal client [Avatar] in [Industry]. Include keywords and exclusions."
    },
    {
        day: 27,
        phase: 2,
        title: "Cold Message Copywriting: The 'Idea' Email",
        goal: "Write emails that get replies by giving value, not asking for it.",
        concept: "The goal of a cold email is NOT to sell. It is to start a conversation. 'Sell the chat, not the contract'. If you ask for a meeting in the first email, you look like a taker. If you offer an idea, you look like a giver.",
        content: "The 'Idea' Framework: \n1. Personalized Hook (I saw you are hiring for X...). \n2. The Idea (I had a thought on how you could fix X...). \n3. Soft CTA (Mind if I send a 2-min video explaining it?).",
        caseStudy: {
            title: "The 'No-Brainer' Email",
            challenge: "A consultant sent long paragraphs about his services: 'We offer X, Y, Z'. Crickets. 0% reply.",
            solution: "He switched to 'The Permissionless Idea' email. 'Hi [Name], I noticed your checkout page is broken on mobile. I made a quick video showing how to fix it. Want me to send it?'",
            result: "50% reply rate. 'Yes, send it.' Once they saw the video, they realized he was an expert and booked a call. He gave value first.",
            link: "https://close.com/blog/cold-email-scripts/"
        },
        readingList: [
            { type: "Book", title: "Cold Email Manifesto", author: "Alex Berman", link: "Systematizing outbound sales." }
        ],
        tips: [
            "Keep it under 100 words. Mobile screens are small.",
            "Read it out loud. If it sounds like a robot or a template, delete it.",
            "Don't use 'Dear Sir/Madam'. Use 'Hi [First Name]'. Informal is the new professional."
        ],
        action: "Draft 3 variations of cold email scripts. A/B test them.",
        prompt: "Draft 3 cold emails targeting [Role]: 1. The 'Question' approach, 2. The 'Video Audit' approach, 3. The 'Case Study' approach (Referencing a competitor)."
    },
    {
        day: 28,
        phase: 2,
        title: "Content Strategy: The Magnetic Authority",
        goal: "Attract inbound leads by publishing 'Contrarian Truths'.",
        concept: "Outbound grabs attention (Push); Inbound holds it (Pull). You show your expertise by 'Building in Public' or sharing insights that challenge the industry. \n\nDon't post 'How-To' content (commodity; ChatGPT can do that). Post 'How-To-Think' content (authority).",
        content: "The 'Contrarian' Framework: \n1. State the common belief ('Everyone says SEO is dead'). \n2. State why it is wrong ('Actually, bad SEO is dead'). \n3. Provide data/proof. \n4. Offer your new worldview.",
        caseStudy: {
            title: "The Contrarian Consultant",
            challenge: "A marketing consultant blended in with 1,000 others posting '5 tips for better ads'.",
            solution: "He wrote a post: 'Why ROAS is a vanity metric and you should fire your agency if they report on it'. It was controversial but backed by financial logic.",
            result: "It went viral in his niche. 500 new followers, and 5 inbound leads from CEOs who agreed with his worldview and wanted a 'no BS' partner."
        },
        tips: [
            "Post consistently (e.g., every Tue/Thu at 9am). Algorithm loves rhythm.",
            "Engage with commenters. That's where the leads are. Reply to every comment.",
            "Reuse your content. Turn a successful LinkedIn post into a Newsletter."
        ],
        action: "Brainstorm 5 'Contrarian' headlines relevant to your niche.",
        prompt: "Generate 10 LinkedIn post ideas that challenge the status quo in the [Industry] industry. Start with 'Unpopular Opinion:' or 'Stop doing X'."
    },
    {
        day: 29,
        phase: 2,
        title: "The Lead Magnet: The Value First Exchange",
        goal: "Capture interest with a free asset that solves a 'Splinter Problem'.",
        concept: "Most people aren't ready to buy today (only 3% are). A Lead Magnet (Freebie) gets the other 97% into your orbit. It must solve a specific, small problem immediately. It buys you the right to email them.",
        content: "High-Converting Examples: \n1. Cheatsheet: 'The 15-Point SaaS Pricing Checklist'. \n2. Template: 'The QBR Slide Deck for CSMs'. \n3. Calculator: 'The Churn Cost Calculator'. \n\nBad Examples: 'My Newsletter', 'A Whitepaper' (Boring).",
        caseStudy: {
            title: "The Checklist Win",
            challenge: "A consultant wanted email addresses of PE firms involved in M&A, but they are notoriously private.",
            solution: "He created 'The Pre-Merger IT Due Diligence Checklist' (a PDF). It solved a specific headache (fear of missing something during a deal).",
            result: "2,000 downloads in 3 months with $0 ad spend. 40 of those turned into 6-figure consulting projects. He essentially 'printed' leads."
        },
        readingList: [
            { type: "Book", title: "Acquisition.com", author: "Alex Hormozi", link: "Creating offers so good people feel stupid saying no (includes lead magnets)." }
        ],
        tips: [
            "Give it a sexy title. Not 'Whitepaper'. Call it 'The 2024 Blueprint' or 'The Protocol'.",
            "Deliver it instantly via email. Don't make them wait.",
            "Follow up with a 3-day 'Value Sequence' email chain that explains how to use it."
        ],
        action: "Outline your Lead Magnet. Create the 'Table of Contents'.",
        prompt: "Brainstorm 5 high-value Lead Magnet ideas for [Target Audience] that I can create in 2 hours (e.g., Checklists, Templates, Calculators). They should solve [Specific Pain Point]."
    },
    {
        day: 30,
        phase: 2,
        title: "Phase 2 Review: The Engine Build",
        goal: "Audit your Offer and Assets. Confirm you are ready to sell.",
        concept: "You have now completed Phase 2. You moved from 'Idea' (Phase 1) to 'Product' (Phase 2). You have a 'Business in a Box': A named offer, a price, a guarantee, scripts, and a list. You are dangerous. \nIf you skip the review, you risk launching a broken rocket.",
        content: "Checklist for Phase 2 Completion: \n1. [ ] Transformation: Point A to Point B is clear. \n2. [ ] Mechanism: Your process has a unique name. \n3. [ ] Delivery: 6-week schedule is mapped. \n4. [ ] Economics: You know your effective hourly rate. \n5. [ ] Guarantee: You have a risk reversal. \n6. [ ] Assets: One-Pager and Case Study are done. \n7. [ ] List: You have 100 prospects in a sheet.",
        illustration: "The Pre-Flight Check. Pilots don't check the flaps because they think they might be broken; they check them because the cost of failure is death. Check your flaps.",
        caseStudy: {
            title: "The Pivot",
            challenge: "During his Phase 2 review, a consultant realized his 'One-Pager' was too confusing.",
            solution: "He scrapped it and simplified it to just 3 steps. He tested it on a friend.",
            result: "The friend instantly said 'I get it'. He realized clarity is the only metric that matters."
        },
        action: "Complete the 'Go/No-Go' Checklist. If you are 'Go', celebrate. Phase 3 is where we make money (Launch).",
        prompt: "Act as a ruthless VC. Review my 'Business in a Box' components (Offer, Price, Guarantee, List). Tell me which one is the weakest link that will break my launch."
    },

    // PHASE 3: MARKETING & LEAD GEN (Days 31-45)
    {
        day: 31,
        phase: 3,
        title: "Launch Day Protocol: The 'Beta' Frame",
        goal: "Execute a 'Soft Launch' to get cash and case studies immediately.",
        concept: "Do not do a 'Grand Opening' (risk of crickets). Do a 'Beta Launch'. Frame it as 'I am opening 5 spots for Case Study partners'. This changes the dynamic from 'Please hire me' to 'Do you qualify?' and creates scarcity.",
        content: "The 'Founding Member' Offer: \n'I am launching a new program to help [Avatar] achieve [Result]. I am looking for 5 Founding Members to run through it at 50% off in exchange for a detailed video testimonial and daily feedback. Who is interested?'",
        caseStudy: {
            title: "The $10k Weekend",
            challenge: "A consultant was terrified of charging $5k with zero testimonials.",
            solution: "She launched a '6-week Beta Cohort' for $1k (80% off). She posted it on LinkedIn and sent 20 DMs to warm leads.",
            result: "She sold 10 spots in 48 hours ($10k cash). She used that money to fund her tech stack and, more importantly, walked away with 10 raving video testimonials to sell the full price version."
        },
        tips: [
            "Direct Message your warmest 20 contacts personally before posting publicly. 'I thought of you first...'",
            "Create a waitlist. Even if you have spots, say 'I need to check if it's a fit'.",
            "Get payment upfront. It commits them to the process."
        ],
        action: "Post your 'Beta Launch' offer on LinkedIn/Email.",
        prompt: "Draft a 'Beta Launch' email to my warm network. Frame the offer as an exclusive opportunity to be a 'Case Study Partner' at a preferred rate. Emphasize that I only want people willing to do the work."
    },
    {
        day: 32,
        phase: 3,
        title: "The Discovery Call: Diagnosis is the Sale",
        goal: "Master the 45-minute sales call script. Stop pitching, start diagnosing.",
        concept: "Amateurs pitch their solution in the first 10 minutes. Professionals diagnose the problem for 30 minutes. The sale is made in the *diagnosis*, not the prescription. If the client feels understood, they assume you have the answer.",
        content: "The Script Structure: \n1. The Frame (Set the agenda/timing). \n2. The Situation (Where are they now?). \n3. The Gap (Where do they want to be?). \n4. The Pain (What happens if they don't fix it?). \n5. The Prescription (Can you help?).",
        caseStudy: {
            title: "The 80/20 Rule of Talking",
            challenge: "A consultant was losing deals because he talked too much about his 'proprietary method'.",
            solution: "He recorded a call and saw he spoke 70% of the time. He switched to a 'Doctor' frame, asking 'Why is this a problem *now*?' and 'What have you already tried?'.",
            result: "He spoke 20% of the time. The client felt 'heard' and closed themselves. Closing rate jumped from 15% to 40%."
        },
        tips: [
            "If you are talking for more than 2 minutes straight, you are losing.",
            "Ask 'Labeling Questions': 'It sounds like you are frustrated with X...'",
            "Don't give the price until you have established the cost of inaction."
        ],
        action: "Write out your 5 key Diagnostic Questions.",
        prompt: "Create a script for the 'Gap Analysis' part of the sales call. Generate 3 questions that force the client to articulate the financial pain of their current situation."
    },
    {
        day: 33,
        phase: 3,
        title: "Objection Handling: The Truth Plane",
        goal: "Turn 'No' into 'Not Now' or 'Yes'.",
        concept: "Objections are usually lies (or 'smoke screens') to protect the ego. 'It's too expensive' usually means 'I don't trust this will work'. Your job is to get to the 'Truth Plane'. \n\nNever argue. Agree and Pivot.",
        content: "Common Objections: \n1. Price ('That's a lot'): Reply 'Compared to what? The cost of the problem?' \n2. Time ('I need to think'): Reply 'What specifically do you need to clarity on? usually it's X or Y.' \n3. Authority ('I need to ask my boss'): Reply 'Makes sense. What happens if they say no?'",
        caseStudy: {
            title: "The Price Pivot",
            challenge: "Client said '$10k is too expensive'.",
            solution: "Consultant didn't defend the price. He agreed. 'It is expensive. But you said this problem is costing you $50k/month. So isn't fixing it for $10k actually a discount?'",
            result: "The client realized the math. The objection wasn't price; it was value. The deal closed."
        },
        tips: [
            "isolate the objection: 'Other than price, is there anything else stopping us from moving forward?'",
            "Silence is your friend. After you answer, shut up.",
            "Don't lower your price. Increase the value (or payment terms)."
        ],
        action: "Create a 'Battle Card' for the top 3 objections you expect.",
        prompt: "Roleplay: I am the customer. I say 'I need to talk to my partner about this'. Give me a script to handle this objection without being pushy."
    },
    {
        day: 34,
        phase: 3,
        title: "The Follow-Up System: The 'Nurture' Loop",
        goal: "Capture the 60% of leads who don't buy immediately.",
        concept: "The money is in the follow-up. 44% of salespeople give up after 1 follow-up. 80% result sales require 5 follow-ups. You are not annoying; you are professional. 'Polite Persistence' signals reliability.",
        content: "The Sequence: \nDay 1 (+24hr): The 'Thank You + Resource' (No ask). \nDay 3: The 'Idea' (I was thinking about your problem...). \nDay 7: The 'Case Study' (Here is how X solved it). \nDay 30: The 'Break-up' (Are you still looking to fix this?).",
        caseStudy: {
            title: "The 'Magic' Break-up Email",
            challenge: "Deal went dark for 3 weeks.",
            solution: "Consultant sent: 'Hi [Name], I haven't heard back, so I assume this isn't a priority right now. I'll close your file. Let me know if you ever want to reopen it.'",
            result: "The fear of 'file closed' triggered a reply in 10 minutes. 'No, wait! I've just been busy. Let's sign.'"
        },
        tips: [
            "Always add value in follow-ups. Don't just 'check in'.",
            "Use a tool (CRM) to remind you. Your brain will forget.",
            "A 'No' is better than silence. It frees you up."
        ],
        action: "Set up a 4-email automated sequence template.",
        prompt: "Draft a 'Break-up Email' that is polite but firm, aimed at getting a response from a ghosting client."
    },
    {
        day: 35,
        phase: 3,
        title: "Referral Engineering: The Double Incentives",
        goal: "Turn 1 client into 3 without begging.",
        concept: "Don't beg for referrals. Engineer them. The best time to ask is during the 'Point of Delight' (when they get a win). Use a 'Double-Sided Incentive' so everyone wins.",
        content: "The Script: 'I'm glad you loved the result. We have capacity for one more partner like you. If you introduce me to a peer, I'll give YOU a free strategy session ($1k value) and THEM a $500 discount.'",
        caseStudy: {
            title: "The Viral Loop",
            challenge: "Clients were happy but lazy about referring.",
            solution: "Consultant created a formal 'Partner Program'. 10% commission for referrals, or 10% credit towards future work.",
            result: "Referrals became a revenue driver. One client referred 3 others just to get their own project for free."
        },
        tips: [
            "Make introductions easy: Write the email FOR them to copy/paste.",
            "Thank them publicly (LinkedIn shoutout) when they refer. Behavior rewarded is behavior repeated."
        ],
        action: "Identify 3 past colleagues/clients to run the 'Referral Script' on.",
        prompt: "Draft a 'Ghostwritten Referral Email' that my client can send to their friend introducing me. It should make my client look good for knowing me."
    },
    {
        day: 36,
        phase: 3,
        title: "Inbound Content Engine: The Repurposing Matrix",
        goal: "Create 1 week of content in 1 hour. Stop being on the 'Hamster Wheel'.",
        concept: "Most consultants burnout on content because they try to create net-new ideas daily. The Pros use a 'Waterfall' method. One core idea becomes 10 assets. Quality > Quantity, but Distribution > Creation.",
        content: "The Waterfall: \n1. Record a 10-min video (Zoom) explaining a concept. \n2. Transcribe it (Otter.ai). \n3. Extract 3 LinkedIn text posts. \n4. Turn outcomes into a Twitter Thread. \n5. Turn the diagram into a Carousel. \nResult: 1 video = 5 posts.",
        caseStudy: {
            title: "The Content Multiplier",
            challenge: "Consultant spent 5 hours/week writing posts and hated it.",
            solution: "She switched to recording one 'Client Q&A' video on Fridays (15 mins). She hired a VA ($500/mo) to chop it into 5 text posts and 3 TikToks.",
            result: "She posted daily while spending 80% less time. Inbound leads tripled because of consistency."
        },
        readingList: [
            { type: "Book", title: "Content Inc.", author: "Joe Pulizzi", link: "Building an audience first, product second." }
        ],
        tips: [
            "Don't worry about platform nuances yet. Good copy works everywhere.",
            "Visuals stop the scroll. Use a whiteboard or simple diagrams in your posts.",
            "The best content answers a question a client asked you yesterday."
        ],
        action: "Create your 'Waterfall' workflow map.",
        prompt: "Take this core idea: '[Insert Core Idea]'. Break it down into: 1. A 'How-To' listicle, 2. A 'Contrarian' opinion, 3. A 'Personal Story' metaphor."
    },
    {
        day: 37,
        phase: 3,
        title: "Strategic Partnerships: O.P.A. (Other People's Audiences)",
        goal: "Get leads from people who already have them. Leverage trust.",
        concept: "Cold outreach builds trust 1-by-1. Partnerships borrow trust 1-to-many. Find the 'Centers of Influence' (COI) who serve your client *before* or *after* you. (e.g., If you are a Sales Consultant, partner with Recruiters).",
        content: "The Pitch: 'I help your clients solve the problem that happens *after* you finish. If their sales team fails, they blame your recruiting. I fix the sales team so your hires stick. Can we chat?' \nYou protect their reputation.",
        caseStudy: {
            title: "The Lawyer Loop",
            challenge: "A Tax Consultant needed high-net-worth clients.",
            solution: "He didn't market to clients. He marketed to *Divorce Attorneys*. He told them 'I can help your clients find hidden assets'.",
            result: "Attorneys referred him 100% of their clients. He built a $500k practice with zero ads, just 5 relationships."
        },
        action: "List 10 COIs (e.g., VC Partners, Software Vendors, Agencies) who serve your avatar.",
        prompt: "Draft an outreach message to a 'Center of Influence' (e.g., a VC Partner) offering to refer MY clients to THEM first to build reciprocity."
    },
    {
        day: 38,
        phase: 3,
        title: "Pipeline Hygiene: Deal Velocity",
        goal: "Stop 'Zombie Deals' from clogging your mental RAM.",
        concept: "Your memory is not a CRM. You need a visual pipeline: Lead -> Qualified -> Proposal Sent -> Negotiation -> Closed Won. \n\nKey Metric: 'Time in Stage'. The longer a deal sits, the lower the probability of closing. Deals are like fish; they rot after 3 days.",
        content: "The '30-Day Flush' Rule: If a prospect hasn't moved stages in 30 days, move them to 'Nurture' or 'Lost'. A small, clean pipeline is better than a big, fake one. It forces you to hunt for fresh leads.",
        tips: [
            "Block 15 mins every Friday for 'Pipeline Review'. NO exceptions.",
            "Update the 'Next Steps' date for every active deal. If there is no next step, it's dead.",
            "Categorize reasons for 'Closed Lost' (e.g., Price, Timing, Competitor) to spot trends."
        ],
        action: "Set up your pipeline stages in Notion/HubSpot/Excel.",
        prompt: "Define the 'Exit Criteria' for each stage of my pipeline. What exactly needs to happen (e.g., 'Budget Confirmed') to move a deal from 'Qualified' to 'Proposal'?"
    },
    {
        day: 39,
        phase: 3,
        title: "Authority Borrowing: The Podcast Tour",
        goal: "Speak for 1 hour to 1,000 qualified buyers.",
        concept: "Guesting on podcasts is the highest ROI 'free' marketing. You borrow the host's trust. But don't pitch your service; pitch your 'Contrarian Insight'. Hosts want content that makes them look smart, not a commercial.",
        content: "The Pitch Template: \nSubject: 'Potential episode for [Podcast Name]: Why [Standard Advice] is wrong'. \n'Hi [Host], I love your intuitive questions. I have a data-backed theory that [Contrarian Idea] which your audience might find provocative. Happy to share my [Lead Magnet] with your listeners too.'",
        caseStudy: {
            title: "The Niche Mic",
            challenge: "Unknown consultant wanted enterprise leads.",
            solution: "She ignored 'The Tim Ferriss Show'. She targeted niche podcasts with only 500 listeners but *strictly* for CTOs.",
            result: "She did 10 interviews. Got 50 leads. 5 closed. Big audiences are vanity; Niche audiences are sanity."
        },
        readingList: [
            { type: "Resource", title: "MatchMaker.fm", link: "Tinder for Podcasters and Guests." }
        ],
        tips: [
            "Buy a $50 microphone (USB). Audio quality equals perceived expertise.",
            "Have a dedicated landing page for listeners (yourname.com/podcastname) to track ROI."
        ],
        action: "Pitch 5 niche podcasts using the 'Contrarian' angle.",
        prompt: "Write a podcast pitch email. Subject: 'Potential episode topic: [Contrarian Idea]'. Body: 3 bullet points of what I can teach their audience."
    },
    {
        day: 40,
        phase: 3,
        title: "Funnel Forensics: Data Analysis",
        goal: "Fix the leaky bucket before pouring in more water.",
        concept: "Marketing is math. Don't guess; measure. If you are not hitting your revenue goal, the math will tell you where the break is. \n\nFormula: Traffic x Conversion x Price = Revenue.",
        content: "The 3 Bottlenecks: \n1. Traffic Problem: Not enough eyeballs (Fix: Post more, Ads). \n2. Conversion Problem: People look but don't book (Fix: Offer, Copy, Video). \n3. Sales Problem: People book but don't buy (Fix: Script, Offer, Skills). \nSolve the right problem.",
        caseStudy: {
            title: "The 1% Tweak",
            challenge: "Consultant had high traffic but low bookings.",
            solution: "He changed the CTA button on his site from 'Request a Free Consultation' (Work) to 'Get Your 3-Step Audit' (Value).",
            result: "Conversion rate doubled from 1% to 2%. Same traffic, 2x revenue."
        },
        action: "Create a 'Metrics Dashboard' sheet (Traffic, Leads, Calls, Sales).",
        prompt: "List the 5 Key Performance Indicators (KPIs) I should track weekly to measure the health of my consulting marketing funnel. Explain how to calculate 'Customer Acquisition Cost' (CAC)."
    },
    {
        day: 41,
        phase: 3,
        title: "The 'Hand-Raising' Post: Harvesting Demand",
        goal: "Convert your silent followers into leads with one post.",
        concept: "You have been giving value for weeks. Now you make a withdrawal. The 'Hand-Raising' post is a direct Call to Action (CTA). It filters out the tire-kickers and identifies the buyers. \n\nFormula: 'I am looking for X [Avatar] who want [Result] in [Timeframe].'",
        content: "The Script: \n'I'm looking for 3 B2B Founders who want to add $50k MRR in the next 90 days without running ads. \nI have a new case study showing exactly how we did this for [Client]. \nComment 'SCALE' below and I'll send you the details.' \n\nNote: Do not post the link. Make them comment. It boosts the algorithm.",
        tips: [
            "Follow up with every commenter via DM immediately. 'Hey, saw your comment. Sending the case study now...'",
            "Scarcity works ('Only 3 spots'). Keep it real.",
            "Do this max once a week. Don't exhaust your audience."
        ],
        action: "Draft and post a 'Hand-Raising' offer on LinkedIn.",
        prompt: "Write a direct offer social media post calling out [Avatar] to work with me next month. Use the 'If you are X, I can help you Y' formula. Include a specific scarcity element."
    },
    {
        day: 42,
        phase: 3,
        title: "Reviving Dead Leads: The 9-Word Email",
        goal: "Revive leads from 6 months ago with one sentence.",
        concept: "Most 'dead' leads aren't dead; they are just dormant. They didn't buy because the timing was wrong. \n\nThe Strategy: Send a 'Dean Jackson' style 9-word email. No fluff. No 'checking in'. Just a question about the problem.",
        content: "Subject: [Client Name] \nBody: 'Are you still looking to help with [Problem]?' \n\nExample: 'Are you still looking to hire a VP of Sales?' \n\nResult: This gets a 50%+ reply rate because it requires a simple Yes/No. If 'Yes', you re-open the deal. If 'No', you clean your CRM.",
        caseStudy: {
            title: "Finding $30k in the Trash",
            challenge: "Consultant had 200 'dead' leads in his CRM from last year.",
            solution: "Sent the 9-word email: 'Are you still trying to migrate to AWS?'",
            result: "25 replies. 5 booked calls. 1 closed deal for $30k. It took 5 minutes to send."
        },
        action: "Export your 'Lost' leads and send the 9-word email.",
        prompt: "Draft the 9-word email question for my service. It must address the core 'Result' they wanted."
    },
    {
        day: 43,
        phase: 3,
        title: "Negotiation Psychology: Trading vs. Conceding",
        goal: "Protect your price and your margin.",
        concept: "Amateur negotiators concede (give away price to get the deal). Professional negotiators trade (give away price to get better terms). \n\nRule: Never give a discount without taking something back.",
        content: "The Trading Matrix: \nIf they ask for a lower price, YOU ask for: \n1. Faster payment (100% upfront). \n2. Longer commitment (12 months vs 3). \n3. A Case Study / Video Testimonial. \n\nScript: 'I can do that price, IF we can settle the invoice fully by Friday. Does that work?'",
        tips: [
            "The person who cares less wins. Be willing to walk away.",
            "Silence is power. When they ask for a discount, pause for 5 seconds. It makes them nervous.",
            "Never split the difference. It signals you were lying about your first price."
        ],
        readingList: [
            { type: "Book", title: "Never Split the Difference", author: "Chris Voss", link: "Tactical empathy and negotiation." }
        ],
        action: "Create your 'Concession List'. What are you willing to trade?",
        prompt: "List 5 things I can ask for in exchange for a discount (e.g., specific payment terms, case studies, referrals)."
    },
    {
        day: 44,
        phase: 3,
        title: "The 'Zero-Remorse' Onboarding",
        goal: "Eliminate Buyer's Remorse and speed up Time-to-Value.",
        concept: "The most dangerous time in a client relationship is the 24 hours AFTER they sign. They are thinking 'Did I make a mistake?'. You must flood them with certainty.",
        content: "The 'Welcome Box' Strategy: \n1. Immediate automated email ('Confetti' moment). \n2. The ' Kickoff Kit' (PDFs, slack invite) sent within 5 mins. \n3. A personal video from you ('I'm so excited to work on X'). \n\nGoal: They should feel 'Wow, this is pro' before the real work even starts.",
        caseStudy: {
            title: "The Speed Win",
            challenge: "Client signed but felt anxious because kickoff was 1 week away.",
            solution: "Consultant sent a 'Quick Win' audit within 2 hours of signing. 'I peeked at your data and found this quick fix for you to do while you wait'.",
            result: "Client was blown away. Zero remorse. They told 3 friends about the 'service' before the project started."
        },
        action: "Map out your first 24 hours of client experience.",
        prompt: "Design a 'Welcome Email' sequence that delivers a 'Quick Win' value nugget immediately after signing."
    },
    {
        day: 45,
        phase: 3,
        title: "Phase 3 Review: The Marketing Engine",
        goal: "Audit your Pipeline Health. Are you hunting or just hoping?",
        concept: "You have traffic (Content/Partners). You have conversion (Scripts/Lead Magnets). You have sales (Negotiation). \n\nKey Rule: You need 3x your Revenue Goal in your Pipeline. If you want to make $20k/mo, you need $60k in active proposals, because you will close 33%.",
        action: "Pipeline Audit: \n1. Count value of 'Active Proposals'. \n2. Divide by 3. \n3. Is this number enough? If no, go back to Day 31 (Outreach).",
        prompt: "Create a 'Marketing Health' checklist to review every Friday afternoon. Include 'Leads Added', 'Calls Booked', and 'Proposals Sent'."
    },
    // PHASE 4: SALES & SCALE (Days 46-60)
    {
        day: 46,
        phase: 4,
        title: "Sales Call Prep: The 'Battlecard'",
        goal: "Win the call before it starts.",
        concept: "Amateurs 'wing it'. Pros prepare. You need a 'Battlecard' for each prospect: Know their revenue, their recent news, and their #1 competitor before you dial. 'Preparation breeds confidence.'",
        content: "The Ritual: \n1. Review the Battlecard (5 mins). \n2. Visualization (2 mins): See the end of the call where they say 'Yes'. \n3. The 'Reminder' Email (1 hour before): 'Looking forward to our chat. Here is the agenda: [Link]'. Shows leadership.",
        caseStudy: {
            title: "The Wiki Tactic",
            challenge: "Consultant kept getting blindsided by basic questions.",
            solution: "Started spending 15 mins reading the prospect's Wikipedia/About page and Recent News. He opened a call with: 'Congrats on the Series B fundraising'.",
            result: "The prospect immediately respected him as a peer, not a vendor. Close rate increased 20%."
        },
        tips: ["If you are nervous, focus on helping them, not selling them.", "Stand up while taking the call. It projects more energy."],
        action: "Create a 'Pre-Call Battlecard' template in Notion.",
        prompt: "Create a checklist of 5 things I must know about a prospect before getting on a sales call (e.g., recent hires, funding news)."
    },
    {
        day: 47,
        phase: 4,
        title: "Closing Techniques: The 'Assumptive' Close",
        goal: "Ask for the money without being weird.",
        concept: "Don't ask 'Do you want to buy?'. Ask 'When should we get started?'. Assume the sale is already made because the logic holds up.",
        content: "Transition Phrases: \n1. 'Based on what you told me, this seems like a perfect fit. Shall we look at the calendar for a kickoff date?' \n2. 'Would you prefer to pay via Stripe or Wire Transfer?' \n\nNote: After you ask, SHUT UP. The next person to talk loses.",
        tips: ["Silence creates pressure. Let the client break it.", "If they hesitate, ask 'What is the hesitation?' directly."],
        action: "Script 3 'Transition to Close' phrases.",
        prompt: "Script a smooth transition from the 'Presentation' phase to the 'Payment' phase that doesn't feel pushy."
    },
    {
        day: 48,
        phase: 4,
        title: "Contract Hygiene: The 'Scope Shield'",
        goal: "Protect the downside. Prevent 'Scope Creep'.",
        concept: "The 'SOW' (Scope of Work) is more important than the MSA. The MSA covers law; the SOW covers expectations. Most disputes happen because the SOW was vague.",
        content: "Must-Haves: \n1. Payment Schedule (50% upfront is standard). \n2. Kill Fee (If they cancel, you keep the deposit). \n3. The 'Scope Shield': A clause stating 'Any requests outside this list will require a separate Change Order'.",
        readingList: [
            { type: "Resource", title: "Bonsai / PandaDoc", link: "Tools for electronic signatures." }
        ],
        action: "Review your Contract Template against a 'Best Practices' list.",
        prompt: "Draft a 'Scope Creep' clause for my contract that requires a separate Change Order for any new requests."
    },
    {
        day: 49,
        phase: 4,
        title: "The 'White Glove' Onboarding",
        goal: "Buyer's Remorse is your enemy. Kill it instantly.",
        concept: "The most dangerous time is the 24 hours AFTER they pay. They are thinking 'Did I make a mistake?'. You must flood them with certainty.",
        content: "The Automation: \n1. Payment Receipt (Immediate). \n2. 'Welcome to the Family' video from YOU (10 mins later). \n3. 'The Roadmap' email (1 hour later) outlining exactly what happens next. \n4. The 'Physical Box' (Optional but powerful): Send a book or mug.",
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
        title: "The Kickoff Call: The Commander",
        goal: "Set the trajectory. You are the Captain.",
        concept: "This is not a 'social call'. It is a 'Project Management' call. You are the Captain. Set the rules of engagement immediately.",
        content: "Agenda: \n1. Introductions (Who is who). \n2. Success Metric Confirmation (Re-confirm why we are here). \n3. Communication Protocol ('I don't text. Email only'). \n4. First Milestone (Quick Win).",
        tips: ["Record this call.", "Ask: 'What is one thing that could make this project fail?' (Pre-mortem)."],
        action: "Create a 'Kickoff Deck' template.",
        prompt: "Create an agenda for a 45-minute Kickoff Call that establishes me as the authority figure but keeps the vibe collaborative."
    },
    {
        day: 51,
        phase: 4,
        title: "Communication Protocol: The 'Friday Update'",
        goal: "Green lights only. Eliminate 'Where are we?' texts.",
        concept: "Clients get anxious when they don't hear from you. Weekly status updates are non-negotiable. Even if nothing happened, send an update saying 'Waiting on X'. Silence = Anxiety.",
        content: "The 'Friday Update' (Send by 9am): \n1. What we accomplished this week (Green). \n2. What we are doing next week (Yellow). \n3. Blockers/Needs from you (Red). \n\nThis single email eliminates 80% of client meetings.",
        caseStudy: {
            title: "The Silence Killer",
            challenge: "Client kept texting the consultant at 9pm asking for updates.",
            solution: "Consultant implemented the 'Friday Update' and told the client 'I will always update you on Friday. If you don't hear from me, assume we are on track'.",
            result: "Texts stopped. Client trust went up. Consultant got their evenings back."
        },
        action: "Draft the 'Friday Update' email template.",
        prompt: "Draft a concise 'Weekly Status Update' email that respects the client's time but keeps them informed."
    },
    {
        day: 52,
        phase: 4,
        title: "Scope Creep & Boundaries: The 'Change Order'",
        goal: "Don't work for free. Train your clients.",
        concept: "Clients will push boundaries. It's human nature. If you say 'Yes' to a small favor, you open the door to a big favor. Use the 'Change Order' as a professional shield, not a weapon.",
        content: "The Script: 'I'd love to help with that! Since it's outside our current Scope, I'll whip up a quick Change Order for that additional piece. It will be $X. Shall I send it over?' \n\nOutcome: They either pay you (Win) or drop the request (Win).",
        caseStudy: {
            title: "The 'Free' Favor",
            challenge: "Consultant kept doing 'little things' for free. Lost 10 hours/week.",
            solution: "Started enforcing a 'Zero Tolerance' policy on scope. Sent bills for everything.",
            result: "Clients respected him MORE. They stopped asking for junk and focused on the big picture."
        },
        action: "Practice saying the 'Change Order' script out loud.",
        prompt: "Script a polite but firm email refusing a client request that is clearly out of scope, offering a paid solution instead."
    },
    {
        day: 53,
        phase: 4,
        title: "Hiring: The 'Time Buyback' (First VA)",
        goal: "Buy back your time. Stop doing $10/hr work.",
        concept: "You are the CEO, not the admin. You should not be scheduling meetings or invoicing. Hire a Virtual Assistant (VA) for $10-20/hr to handle the 'Back Office'. \n\nRule: If you can pay someone $15/hr to do it, and you earn $100/hr, you are losing money by doing it yourself.",
        content: "First Tasks to outsource: 1. Inbox Triage. 2. Calendar Scheduling. 3. Invoicing/Expense tracking. 4. Research.",
        readingList: [
            { type: "Book", title: "Buy Back Your Time", author: "Dan Martell", link: "The playbook for hiring to scale." }
        ],
        action: "List the 3 tasks you hate doing most. These are your first SOPs.",
        prompt: "Write a job description for a Virtual Assistant to handle my email, calendar, and invoicing. Be specific about the tools I use."
    },
    {
        day: 54,
        phase: 4,
        title: "Documenting SOPs: The 'Bus Factor'",
        goal: "Build an asset, not a job. If you get hit by a bus, can the business run?",
        concept: "If it's in your head, it's not a business; it's a job. Get it out of your head. 'The E-Myth' principle. You cannot hire until you have the 'Recipe Book'.",
        content: "The SOP Structure: \n1. Goal (Why we do this). \n2. Tools Needed (Links). \n3. Step-by-Step Instructions (Screen recording > Text). \n4. Definition of Done (How do we know it's right?).",
        tips: ["Use Loom. Video is faster than writing.", "Store Sops in Notion. Make them searchable."],
        action: "Create your first 'Process Doc' for client onboarding.",
        prompt: "Create a template for a Standard Operating Procedure (SOP) document that I can give to a new VA."
    },
    {
        day: 55,
        phase: 4,
        title: "Mid-Project Review: The 'Temperature Check'",
        goal: "Secure the renewal early. Avoid surprises.",
        concept: "Don't wait until the end to ask for more work. Do a 'Mid-Term' review. Show them the wins so far and secure new commitments.",
        content: "The Script: 'We are halfway through. On a scale of 1-10, how happy are you with the pace? What would make it a 10?' \n\nThis uncovers hidden issues before they kill the renewal. If they say '8', ask 'What gets us to a 10?'. Then do that.",
        action: "Schedule a Mid-Project Review with your beta clients.",
        prompt: "Draft an email inviting the client to a 'Strategy Review' call halfway through the project. excessive it as a 'Optimization' call."
    },
    {
        day: 56,
        phase: 4,
        title: "The Upsell: From 'Project' to 'Retainer'",
        goal: "Recurring Revenue > One-Time Revenue.",
        concept: "The hardest part is getting the client. Once you have them, keep them. Move them from 'One-Off Project' to 'Monthly Retainer'. \n\nLogic: 'We built the car (Project). Now you need a driver/mechanic (Retainer) to keep it winning.'",
        content: "The 'Maintenance Mode' offer: \n1. Optimize: 'We will tweak the system monthly.' \n2. Support: 'We are on standby for issues.' \n3. Reporting: 'We track the data.' \n\nPrice it at 20% of the project fee per month.",
        caseStudy: {
            title: "The SEO Retainer",
            challenge: "SEO Consultant sold $5k audits. Every month started at $0.",
            solution: "Added a 'Content Implementation' retainer for $2k/mo.",
            result: "Converted 50% of audit clients. Built a recurring base of $10k/mo. Stability achieved."
        },
        action: "Design a 'Phase 2' Retainer offer.",
        prompt: "Brainstorm 3 'Retainer' ideas that logically follow my main service. What ongoing value can I provide (e.g., Reporting, Optimization, Coaching)?"
    },
    {
        day: 57,
        phase: 4,
        title: "Harvesting Testimonials: The 'Case Study' Machine",
        goal: "Automate social proof. Stop begging.",
        concept: "The best time to ask is immediately after a 'Win'. Don't ask 'Can you write a testimonial?'. Ask 'Can you answer these 3 questions?'. Then YOU write the case study.",
        content: "The Video Ask: 'You crushed it this month. Can we jump on Zoom for 10 mins to debrief the win? I'll record it.' \n\nQuestions: 1. What was the pain before? 2. What was the experience during? 3. What is the result now (Hard #s)?",
        tips: ["Video is 10x better than text.", "Offer to draft the text for them to approve if they are camera shy."],
        action: "Draft a 'Testimonial Request' email template.",
        prompt: "Draft an email asking a happy client for a video testimonial interview. Frame it as a 'Success Story Feature' to stroke their ego."
    },
    {
        day: 58,
        phase: 4,
        title: "Referral Systems: The 'Channel Partner'",
        goal: "Viral growth from other businesses.",
        concept: "Passive referrals (waiting for friends) are luck. Active referrals (Channel Partners) are a business. Find businesses that sell to your client *before* or *after* you.",
        content: "The Deal: 'If you refer a client to me, I will give you 10% of the first month, OR I will give your client a 10% discount in your name (making you the hero).' \n\nExamples: Web Designers + SEOs. Accountants + Financial Planners.",
        action: "Reach out to 3 potential 'Channel Partners'.",
        prompt: "Draft a partnership proposal email to a complementary business owner (e.g., a Web Dev Agency) proposing a referral swap."
    },
    {
        day: 59,
        phase: 4,
        title: "Financial Review: The 'Profit First' System",
        goal: "Don't just make money. Keep it.",
        concept: "Revenue feeds the ego; Profit feeds the family. Most consultants spend what they see in the bank. \n\nThe Rule: Open 2 accounts. 1. Operating (Expenses). 2. Profit (Owner Pay). Every deposit gets split immediately (e.g., 50% to Profit).",
        content: "The 'Zombie Audit': Review your credit card statement. Cancel every SaaS tool you haven't logged into in 30 days. It's usually $500/mo of waste.",
        readingList: [
            { type: "Book", title: "Profit First", author: "Mike Michalowicz", link: "A system to ensure you are always profitable." }
        ],
        action: "Conduct a '90-Day Financial Review'. Calculate your true Net Profit.",
        prompt: "Create a checklist for a Monthly Business Review (MBR) to track Revenue, Expenses, Profit, and Churn."
    },
    {
        day: 60,
        phase: 4,
        title: "Graduation: The CEO Mindset",
        goal: "Transition from 'Freelancer' to 'Founder'.",
        concept: "You have completed 60 Days. You have an Offer, a Sales System, and a Delivery Engine. You are no longer 'trying' to consult. You are a Consulting Business. \n\nThe Shift: Stop asking 'How do I do this?'. Start asking 'WHO can do this for me?'.",
        content: "Next Steps: 1. Hire more VAs. 2. Raise prices by 20% for the next cohort. 3. Build a digital product (Course). \n\nCongratulations. You are free.",
        illustration: "The Butterfly. The caterpillar (Employee) consumes. The chrysalis (The last 60 days) is the struggle. The butterfly (Founder) flies.",
        action: "Celebrate. You built this.",
        prompt: "Write a 'Letter to Myself' dated 1 year from today. Describe exactly what my business looks like (Revenue, Team, Hours worked)."
    }
];
