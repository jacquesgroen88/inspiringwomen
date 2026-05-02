// Articles 1-10: Remote Work (1-5) & Salary (6-10)
const fs = require('fs');
let raw = fs.readFileSync('./articles.js', 'utf8');
const hasCRLF = raw.includes('\r\n');
if (hasCRLF) raw = raw.replace(/\r\n/g, '\n');

const newArticles = [
  // ── 1 ──────────────────────────────────────────────
  {
    title: "10 Legitimate Remote Data Entry Jobs in South Africa (2026)",
    slug: "remote-data-entry-jobs-sa",
    category: "career",
    subCategory: "remote-work",
    author: "Admin",
    date: "May 2, 2026",
    image: "remote_data_entry.png",
    content: `
      <p>Data entry is one of the most accessible entry points into remote work — you do not need a degree, specialised software skills, or years of experience to get started. In South Africa, where commuting costs and load shedding have made work-from-home arrangements increasingly attractive, legitimate remote data entry jobs are genuinely available. This guide covers the 10 best platforms and companies where South African women are finding paid data entry work in 2026, what you need to get started, and how to protect yourself from scams.</p>

      <h2>What Does a Data Entry Job Actually Involve?</h2>
      <p>Data entry covers a surprisingly wide range of tasks. Depending on the role, you might be:</p>
      <ul>
        <li>Transcribing audio or video recordings into text</li>
        <li>Entering structured data (names, addresses, figures) into spreadsheets or databases</li>
        <li>Annotating images or text to train AI models (AI data labelling)</li>
        <li>Categorising content, moderating submissions, or tagging products</li>
        <li>Processing forms, invoices, or survey responses</li>
      </ul>
      <p>AI data labelling has become the fastest-growing segment of this work globally, and South African workers are actively being recruited for it — especially those who speak isiZulu, Afrikaans, or Sotho, as language data is in short supply.</p>

      <h2>What You Need to Get Started</h2>
      <ul>
        <li>A reliable computer (laptop or desktop — a phone alone is rarely sufficient)</li>
        <li>A stable internet connection (minimum 5 Mbps; read our <a href="{{BASE_PATH}}career/remote-work/load-shedding-remote-work-sa.html">load shedding remote work guide</a> for backup options)</li>
        <li>Proficiency in English (most international platforms require this)</li>
        <li>A PayPal account, Payoneer account, or SA bank account for payments</li>
        <li>Attention to detail and the ability to work at a consistent pace</li>
      </ul>

      <h2>10 Legitimate Platforms and Companies</h2>

      <h3>1. Appen</h3>
      <p>Appen is one of the world's largest AI training data companies and actively recruits South African contractors. Work includes search engine evaluation, data annotation, audio transcription, and social media evaluation. Pay ranges from R60 to R250 per hour depending on the project. Register at appen.com.</p>

      <h3>2. Remotasks</h3>
      <p>Remotasks (owned by Scale AI) offers data labelling and annotation tasks that you can complete in your own time. They have a free training academy to get you started. SA workers are eligible. Payment is via PayPal or Payoneer. Visit remotasks.com.</p>

      <h3>3. DataAnnotation.tech</h3>
      <p>DataAnnotation focuses specifically on AI training tasks — labelling responses, rating AI outputs, and writing training data. South African applicants are accepted, and pay rates are competitive at USD 14–20 per hour. You need to pass a short assessment to qualify.</p>

      <h3>4. Clickworker</h3>
      <p>Clickworker is a German-based crowdworking platform with South African users. Tasks include data entry, categorisation, web research, and writing short text snippets. Payment is via PayPal. Register at clickworker.com.</p>

      <h3>5. Amazon Mechanical Turk (MTurk)</h3>
      <p>MTurk is Amazon's microtask platform. Tasks ("HITs") include surveys, data verification, image tagging, and transcription. South Africans can register and complete tasks. Payment is via Amazon gift cards or bank transfer through Payoneer. Pay per task is low, so volume matters.</p>

      <h3>6. Lionbridge (TELUS International AI)</h3>
      <p>Lionbridge offers search engine evaluation and social media rating roles for South African contractors. These "work-from-home" roles typically require 10–20 hours per week and pay approximately R70–R120 per hour. Apply at telusinternational.com under the AI Data Solutions section.</p>

      <h3>7. Upwork</h3>
      <p>Upwork is a global freelancing marketplace where South African workers can bid on data entry contracts posted by international clients. Competition is high, but SA workers have a cost advantage versus US/EU freelancers. Build a strong profile with relevant skills listed, and take on a few lower-paid jobs initially to build reviews. Visit upwork.com.</p>

      <h3>8. Fiverr</h3>
      <p>On Fiverr, you create "gigs" offering data entry services and clients come to you. Common SA data entry gigs include Excel spreadsheet work, copy-typing, and CRM data population. Fiverr charges a 20% commission on earnings. Visit fiverr.com.</p>

      <h3>9. Indeed SA Remote Listings</h3>
      <p>South African companies frequently post remote data entry roles on Indeed (indeed.co.za). Filter by "remote" and "data entry" to find local companies in the healthcare, logistics, and finance sectors hiring for these roles. These roles typically pay R8,000–R18,000 per month.</p>

      <h3>10. PNet</h3>
      <p>PNet (pnet.co.za) is one of South Africa's largest job boards and lists a growing number of remote and hybrid data entry positions from SA-based employers. Set up a job alert for "data entry remote" to receive notifications of new listings.</p>

      <h2>Expected Earnings in South Africa</h2>
      <p>Earnings vary significantly depending on whether you work for a SA company or international platform:</p>
      <ul>
        <li><strong>SA company (employed, remote):</strong> R8,000–R20,000 per month</li>
        <li><strong>International platform (freelance/contractor):</strong> R50–R250 per hour depending on task complexity</li>
        <li><strong>AI labelling (international):</strong> USD 10–20 per hour (R180–R370 at current rates)</li>
      </ul>

      <h2>How to Spot Data Entry Scams</h2>
      <p>This sector is unfortunately full of scams. Red flags include:</p>
      <ul>
        <li>Upfront fees — legitimate platforms never charge you to join</li>
        <li>Requests for your banking login or OTPs</li>
        <li>Unrealistic earnings claims ("R5,000 per day from home")</li>
        <li>No verifiable company information or registration</li>
        <li>Payment only via cryptocurrency or vouchers</li>
      </ul>
      <p>Read our guide on <a href="{{BASE_PATH}}career/remote-work/spot-fake-remote-jobs-sa.html">how to spot fake remote job offers in SA</a> before applying to any unfamiliar platform. Legitimate work from the platforms above requires no upfront investment.</p>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Do I need to register as a freelancer or pay tax on data entry income in SA?</strong><br>
      Yes. Any income earned, including from foreign platforms, must be declared to SARS. If your total income exceeds the tax threshold (R95,750 in 2026), you must file a tax return. Freelance income from international platforms must also be declared even if taxes are not withheld at source. Register as a provisional taxpayer if your freelance income exceeds R30,000 per year.</p>

      <p><strong>Can I do data entry work on my phone?</strong><br>
      Some microtask platforms (Clickworker, MTurk) have mobile apps, but most serious data entry and annotation work requires a computer. A phone-only setup limits the tasks you can access and slows your earning rate significantly.</p>

      <p><strong>How many hours per week is realistic for data entry as a side income?</strong><br>
      Most data entry contractors work 10 to 20 hours per week alongside other commitments. At R100 per hour across 15 hours per week, that is R6,000 per month — a meaningful supplement. AI labelling tasks on Appen or DataAnnotation can yield more per hour with practice.</p>
    `
  },

  // ── 2 ──────────────────────────────────────────────
  {
    title: "Best Companies Hiring for Remote Customer Service Jobs in SA (2026)",
    slug: "remote-customer-service-jobs-sa",
    category: "career",
    subCategory: "remote-work",
    author: "Admin",
    date: "May 2, 2026",
    image: "remote_customer_service.png",
    content: `
      <p>Remote customer service is one of the most stable and accessible work-from-home career paths in South Africa. Unlike many remote roles, customer service positions are often available to candidates without a degree, offer full-time hours, and are actively advertised by major SA employers. This guide covers the top companies hiring for remote customer service roles in 2026, what they pay, what equipment you need, and how to stand out in the application process.</p>

      <h2>Why Remote Customer Service Is Booming in SA</h2>
      <p>South Africa is one of Africa's most significant Business Process Outsourcing (BPO) hubs. SA agents are preferred by UK, US, and Australian companies because of neutral accents, cultural alignment, strong English proficiency, and a significant cost advantage over first-world alternatives. This has created a substantial remote customer service job market — both with SA-based BPO employers and direct international companies.</p>

      <h2>What You Need to Get Started</h2>
      <ul>
        <li><strong>Reliable fibre or ADSL internet:</strong> Most BPO employers require a minimum of 10 Mbps uncapped. Mobile data is generally not accepted for BPO work due to latency and reliability requirements.</li>
        <li><strong>A quiet, private workspace:</strong> Background noise is a dealbreaker for call centre roles. A dedicated room with a door is ideal.</li>
        <li><strong>A laptop or desktop computer:</strong> With a working webcam and USB headset (R300–R800 from Incredible Connection or Takealot).</li>
        <li><strong>A backup power solution:</strong> Critical during load shedding — see our <a href="{{BASE_PATH}}career/remote-work/load-shedding-remote-work-sa.html">load shedding remote work guide</a>.</li>
        <li><strong>Matric certificate or equivalent.</strong></li>
      </ul>

      <h2>Top Companies Hiring Remote Customer Service Agents in SA</h2>

      <h3>1. Concentrix</h3>
      <p>Concentrix is one of the world's largest BPO employers and operates several remote customer service campaigns in South Africa. They regularly advertise for agents to support UK and US retail, telecoms, and financial services clients. Salaries range from R8,000 to R16,000 per month. Check concentrix.com/careers.</p>

      <h3>2. Teleperformance South Africa</h3>
      <p>Teleperformance has a significant remote workforce in SA. They hire for inbound customer support, tech support, and sales roles. Experience in a call centre environment is advantageous but not always required for entry-level roles. Salary range: R9,000–R18,000 per month.</p>

      <h3>3. iContact BPO</h3>
      <p>iContact is a Cape Town-based BPO specialising in customer service and sales support for UK clients. They have a strong remote workforce policy and are known as a good employer. Check icontact.co.za for current vacancies.</p>

      <h3>4. Merchants (a Dimension Data company)</h3>
      <p>Merchants manages customer experience for major SA and international brands. They offer both voice and non-voice (chat, email) remote roles. Benefits are competitive for the BPO sector. Visit merchants.co.za.</p>

      <h3>5. Amazon (Customer Service)</h3>
      <p>Amazon periodically recruits South African remote customer service associates. These roles offer competitive pay (R12,000–R20,000 per month), structured onboarding, and career growth. Monitor amazon.jobs for SA openings.</p>

      <h3>6. Vodacom and MTN</h3>
      <p>Both major SA telecoms advertise remote and hybrid customer service roles for agents to handle digital and inbound support queries. These are well-regarded employer brands with good benefits. Check their career portals directly.</p>

      <h3>7. Capitec Bank</h3>
      <p>Capitec regularly hires remote client service agents. Banking customer service pays well — R12,000 to R22,000 per month — and offers internal progression into account management and financial advisory roles.</p>

      <h3>8. Multichoice</h3>
      <p>Multichoice (DStv) hires remote agents for subscriber support and technical helpdesk roles. SA-based positions are advertised on pnet.co.za and their own careers page.</p>

      <h3>9. TransUnion South Africa</h3>
      <p>TransUnion SA hires remote credit bureau support and consumer services agents. Knowledge of financial products is a plus. These roles often include medical aid and pension fund benefits.</p>

      <h3>10. Letsema and Other BPO Staffing Agencies</h3>
      <p>Staffing agencies like Letsema, Manpower SA, and Adecco regularly place candidates into remote BPO roles. Registering with multiple agencies broadens your exposure to vacancies that may not be publicly advertised.</p>

      <h2>What Does Remote Customer Service Pay in SA?</h2>
      <ul>
        <li><strong>Entry-level (inbound, no experience):</strong> R7,500–R10,000 per month</li>
        <li><strong>Experienced agent:</strong> R10,000–R18,000 per month</li>
        <li><strong>Team Leader/Quality Assurer:</strong> R18,000–R28,000 per month</li>
        <li><strong>International BPO (UK/US campaign):</strong> R14,000–R25,000 per month (due to higher complexity and language requirements)</li>
      </ul>

      <h2>How to Stand Out in Applications</h2>
      <ul>
        <li><strong>Quantify your experience:</strong> "Handled 80+ inbound calls per day with a 94% customer satisfaction rating" is far more compelling than "worked in customer service."</li>
        <li><strong>Mention your home setup upfront:</strong> BPO employers want to know immediately that you have fibre, a quiet room, and backup power.</li>
        <li><strong>Customer service certifications:</strong> Free courses on Coursera (Google Customer Service Certificate) or LinkedIn Learning add credibility to entry-level applications.</li>
        <li><strong>Prepare for a line quality check:</strong> Many BPO employers test your internet connection and audio quality before a formal interview.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Can I work remote customer service with mobile data?</strong><br>
      Most BPO employers explicitly exclude mobile data due to high latency and packet loss on voice calls. A fixed-line fibre or ADSL connection is typically mandatory. Some non-voice (chat/email) roles may allow mobile data — confirm with the specific employer.</p>

      <p><strong>Do I need a headset?</strong><br>
      Yes, for all voice roles. A USB headset with a noise-cancelling microphone is standard. Budget R400–R600 for a decent entry-level option from Jabra, Logitech, or Plantronics. Avoid using laptop speakers and microphone — call quality is too poor.</p>

      <p><strong>Is BPO customer service a career or just a stepping stone?</strong><br>
      Both. Many people use it as an entry into the workforce and move into team leader, quality, or training roles within 12 to 24 months. Others build long careers in the sector. The skills — communication, problem-solving, CRM software — are transferable to sales, account management, and HR roles.</p>
    `
  },

  // ── 3 ──────────────────────────────────────────────
  {
    title: "How to Ask Your South African Boss for Remote Work (With Email Template)",
    slug: "ask-for-remote-work-sa",
    category: "career",
    subCategory: "remote-work",
    author: "Admin",
    date: "May 2, 2026",
    image: "ask_for_remote_work.png",
    content: `
      <p>You want to work from home — at least partially — but you are not sure how to raise it with your manager without it looking like you just want to avoid the office. The good news is that in 2026, requesting remote or hybrid work is increasingly normalised in South Africa, and with the right approach, most reasonable employers will at least consider it. This guide gives you the exact strategy, timing, and email template you need to make the ask with confidence.</p>

      <h2>Your Legal Position First</h2>
      <p>South Africa's Basic Conditions of Employment Act (BCEA) does not currently give employees a statutory right to work from home. Unless your contract specifies a remote or hybrid arrangement, your employer is within their rights to require on-site presence. This means your approach needs to be a business case, not a demand. Frame it as a proposal that benefits the company, not just you.</p>

      <h2>Before You Ask: Build Your Case</h2>

      <h3>Step 1: Track Your Productivity</h3>
      <p>Before raising the topic, spend 2 to 4 weeks keeping a simple log of what you accomplish each day. Completed projects, tasks delivered ahead of deadline, positive client feedback — all of this becomes evidence. Your manager cannot argue with a documented record of output.</p>

      <h3>Step 2: Research What Your Company Already Allows</h3>
      <p>Check your employment contract, HR policy, or staff handbook. Some companies have a remote work policy that employees are unaware of. If colleagues in other departments work remotely, note this — it weakens the "we don't do that here" objection.</p>

      <h3>Step 3: Propose a Trial, Not a Permanent Change</h3>
      <p>A 30- or 60-day trial is far easier to approve than a permanent policy change. It lowers the perceived risk for your manager and gives you the opportunity to prove the arrangement works.</p>

      <h3>Step 4: Address the Practical Concerns Pre-emptively</h3>
      <p>Think through every objection your manager might raise and address it before they do:</p>
      <ul>
        <li>"How will we know you're working?" — Propose daily check-in messages, weekly output reports, or shared task management tools like Trello or Asana.</li>
        <li>"What about load shedding?" — Tell them your backup power solution. See our <a href="{{BASE_PATH}}career/remote-work/load-shedding-remote-work-sa.html">load shedding survival guide</a> for options.</li>
        <li>"What about meetings?" — Confirm you will always be available for scheduled video calls and will be in-office for critical face-to-face sessions.</li>
        <li>"What if your internet goes down?" — Have a contingency plan (mobile hotspot, nearby coffee shop with wifi) and state it explicitly.</li>
      </ul>

      <h2>Choosing the Right Moment</h2>
      <p>Timing matters. The best moments to raise the topic:</p>
      <ul>
        <li>After a significant achievement or glowing performance review</li>
        <li>During a 1-on-1 with your manager (not in a group meeting)</li>
        <li>When you have been in the role long enough to have a track record (typically 6+ months)</li>
        <li>When your manager is not under pressure from a deadline or crisis</li>
      </ul>
      <p>Avoid asking during your notice period, performance improvement plan, or immediately after a mistake.</p>

      <h2>Email Template: Requesting a Remote Work Trial</h2>
      <p>Use this as a starting point and personalise it for your specific situation:</p>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><strong>Subject: Remote Work Trial Proposal — [Your Name]</strong></p>
        <p>Hi [Manager's name],</p>
        <p>I hope you are well. I wanted to share a proposal I have been thinking through that I believe could benefit both my productivity and our team.</p>
        <p>I would like to request a 30-day trial of a hybrid working arrangement — specifically, working from home on [X days per week], with full in-office availability on [remaining days] and for all scheduled team meetings.</p>
        <p>Over the past [timeframe], I have [brief summary of achievements — e.g., "delivered the Q1 reporting project two days ahead of schedule and maintained a 97% response rate on client queries"]. I am confident this output would be maintained — and in some cases improved — in a focused home environment.</p>
        <p>To address any practical concerns:</p>
        <ul>
          <li>I have a fibre connection with an uninterrupted power supply backup for load shedding.</li>
          <li>I am available on Teams/Slack during all working hours and will send a daily task summary.</li>
          <li>I will be in-office for any meetings requiring my physical presence.</li>
        </ul>
        <p>I would love to discuss this at your convenience. If it would help, I am happy to put together a more detailed one-pager outlining the proposal.</p>
        <p>Thank you for considering this.</p>
        <p>Kind regards,<br>[Your name]</p>
      </div>

      <h2>If Your Manager Says No</h2>
      <p>Do not burn bridges. Ask what conditions would need to be in place for them to reconsider. Common answers include:</p>
      <ul>
        <li>Completing a certain project or probation period first</li>
        <li>Demonstrating reliability in the current setup</li>
        <li>Waiting for a policy decision at company level</li>
      </ul>
      <p>Set a follow-up date ("Can we revisit this in three months?") and document the conversation. A repeated no with no path forward is information about your employer's culture — useful when considering whether to stay.</p>

      <h2>Hybrid as a Starting Point</h2>
      <p>If full remote is not possible, a 2-day or 3-day hybrid arrangement is a realistic middle ground for most SA office roles. Hybrid often has fewer objections because managers retain the ability to see you regularly in person. Once the arrangement is running smoothly, increasing the remote days is much easier than starting from zero.</p>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Can my employer force me back to the office if I have been working remotely?</strong><br>
      If your employment contract specifies a physical place of work, your employer can generally require you to return. However, if the remote arrangement was formalised in writing (even by email), it may have become a term of your employment and changing it unilaterally could constitute a unilateral change to terms of employment — a dispute you can refer to the CCMA. Seek legal advice if this applies to you.</p>

      <p><strong>Should I ask verbally first or send the email directly?</strong><br>
      Raise it verbally in a 1-on-1 first — "I have put together a proposal for a remote work trial that I would love your thoughts on." Then follow up with the written proposal. This approach feels less formal and gives your manager time to think before responding.</p>

      <p><strong>Can I ask for remote work while on probation?</strong><br>
      It is generally advisable to complete your probationary period first. During probation, your employer is still assessing you, and a remote request may create a negative impression before you have established your track record. Wait until you have demonstrated solid performance.</p>
    `
  },

  // ── 4 ──────────────────────────────────────────────
  {
    title: "Home Office Tax Deductions in South Africa: The Complete SARS Guide",
    slug: "home-office-tax-deduction-sars",
    category: "career",
    subCategory: "remote-work",
    author: "Admin",
    date: "May 2, 2026",
    image: "home_office_tax.png",
    content: `
      <p>If you work from home in South Africa, you may be able to claim a portion of your home expenses as a tax deduction — but the rules differ significantly depending on whether you are an employee or self-employed, and SARS has specific requirements that many remote workers unknowingly fail to meet. This guide explains exactly who qualifies, what you can claim, how to calculate it, and how to submit it on eFiling without triggering an audit.</p>

      <h2>The Two Categories: Employee vs Self-Employed</h2>

      <h3>Self-Employed (Sole Proprietor or Freelancer)</h3>
      <p>If you run your own business or work as an independent contractor (not on a fixed-term employment contract), you can generally claim home office expenses as business expenses under Section 11(a) of the Income Tax Act. The rules are more flexible for self-employed individuals, and you can claim expenses directly related to your business activity.</p>

      <h3>Employee (Receiving a Salary with PAYE Deducted)</h3>
      <p>For employees, the rules are more restrictive. Under Section 23(b) of the Income Tax Act, an employee can only claim a home office deduction if <strong>all three</strong> of the following apply:</p>
      <ol>
        <li>The employer does not provide the employee with an office or work space</li>
        <li>More than 50% of the employee's duties are performed in the home office</li>
        <li>The part of the home used as the office is used <em>regularly and exclusively</em> for work — it cannot also be used as a bedroom, guest room, or lounge</li>
      </ol>
      <p>This "exclusively used" requirement is strict. A desk in your bedroom does not qualify. A dedicated room used only for work does qualify.</p>

      <h2>What Expenses Can You Claim?</h2>
      <p>Once you establish that you qualify, the following expenses are potentially deductible:</p>
      <ul>
        <li>Rent paid (if you rent your home)</li>
        <li>Bond interest (the interest portion of your mortgage, not capital repayments)</li>
        <li>Municipal rates and taxes</li>
        <li>Electricity and water</li>
        <li>Levies (in an estate or sectional title)</li>
        <li>Cleaning costs attributable to the office</li>
        <li>Home insurance (proportionate to the office area)</li>
        <li>Wear and tear on office furniture and equipment (separate calculation — Section 11(e))</li>
        <li>Internet and telephone costs (the business-use portion)</li>
      </ul>
      <p><strong>Note:</strong> Groceries, clothing, or any personal expenses do not qualify. Internet and telephone must be apportioned between personal and business use.</p>

      <h2>How to Calculate Your Deduction</h2>
      <p>SARS uses a floor space apportionment method. The formula is:</p>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1rem 1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><strong>Deductible amount = (Office floor area ÷ Total home floor area) × Total qualifying home expenses</strong></p>
      </div>
      <p><strong>Example:</strong> Your home is 120 square metres. Your dedicated office is 12 square metres (10% of total). Your total qualifying home expenses for the year are R120,000 (rent, electricity, rates). Your deduction is 10% × R120,000 = <strong>R12,000</strong>.</p>
      <p>Measure your rooms carefully. SARS may request floor plans or an affidavit confirming the measurements if audited.</p>

      <h2>Capital Gains Tax Warning for Homeowners</h2>
      <p>If you own your home and claim a home office deduction, SARS may apply a proportional Capital Gains Tax (CGT) exclusion when you eventually sell. Normally your primary residence is exempt from CGT on the first R2 million of gain. But if 10% of your home was used exclusively for business, that 10% does not qualify for the primary residence exclusion. Consider this carefully before claiming — for some homeowners, the annual deduction is worth less than the future CGT exposure.</p>
      <p>This concern does not apply to renters.</p>

      <h2>How to Claim on SARS eFiling</h2>
      <ol>
        <li>Log in at efiling.sars.gov.za</li>
        <li>Open your ITR12 (personal income tax return)</li>
        <li>Under "Deductions," look for the home office section</li>
        <li>Enter the floor area ratio, total expenses, and the calculated deduction</li>
        <li>Keep all supporting documents for 5 years: lease/bond statements, municipal bills, electricity invoices, internet bills, and a floor plan or sketch</li>
      </ol>
      <p>If you receive an ITA34 after submitting and your return is selected for verification, SARS will request these documents. Having them organised prevents delays.</p>

      <h2>Equipment and Office Furniture</h2>
      <p>Office equipment (desk, chair, monitor, laptop) used exclusively for work can be claimed as a wear and tear allowance under Section 11(e). SARS prescribes the write-off period — generally 3 years for computer equipment and 6 years for office furniture. Keep your purchase receipts.</p>

      <h2>What Remote Workers Often Miss</h2>
      <ul>
        <li><strong>Internet and data costs:</strong> If you upgraded your home fibre package specifically for work, the incremental cost (or business-use proportion) is deductible.</li>
        <li><strong>Stationery and printing:</strong> Deductible as office supplies if used exclusively for work.</li>
        <li><strong>Subscriptions:</strong> Software, cloud storage, and tools used only for work (Microsoft 365, Xero, Adobe) are deductible — keep receipts and invoices.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Can I claim if I only work from home two days a week?</strong><br>
      For employees, the requirement is that more than 50% of your duties are performed in the home office. If you work 2 days at home and 3 days in the office, you likely do not meet the 50% threshold. For self-employed individuals working from home any number of days, a proportionate claim is possible.</p>

      <p><strong>My employer gave me a monthly home office allowance. Can I still claim?</strong><br>
      The allowance is added to your taxable income (it should appear on your IRP5). You may then claim your actual qualifying home office expenses against this. If your actual expenses exceed the allowance, the net deduction reduces your taxable income. Keep all receipts to substantiate the claim.</p>

      <p><strong>Do I need a tax practitioner to claim this?</strong><br>
      Not necessarily — the calculation is straightforward for most people. However, if you own your home, are claiming significant amounts, or have a complex tax situation (investment income, multiple income streams), a SARS-registered tax practitioner can ensure you optimise your deductions and avoid errors. Tax practitioners registered with SAIT, SAIPA, or SAICA can be found on their respective websites.</p>
    `
  },

  // ── 5 ──────────────────────────────────────────────
  {
    title: "Load Shedding Survival Guide for Remote Workers in SA (2026)",
    slug: "load-shedding-remote-work-sa",
    category: "career",
    subCategory: "remote-work",
    author: "Admin",
    date: "May 2, 2026",
    image: "load_shedding_remote_work.png",
    content: `
      <p>Load shedding is the single biggest practical barrier to remote work in South Africa. Stage 4 or 6 load shedding can mean 8 to 12 hours without grid power per day — enough to derail any home office setup. But tens of thousands of South Africans have solved this problem without spending R100,000 on a full solar system. This guide covers every practical backup power and connectivity solution available in South Africa in 2026, with realistic costs so you can choose what works for your budget and situation.</p>

      <h2>Understanding the Problem</h2>
      <p>Load shedding affects three things critical to remote work:</p>
      <ol>
        <li><strong>Your devices:</strong> Laptop, monitor, webcam, headset</li>
        <li><strong>Your router and fibre ONT (optical network terminal):</strong> Most fibre connections fail during load shedding because the router has no power</li>
        <li><strong>Your mobile data signal:</strong> Cell towers also run on backup batteries that deplete during extended outages, degrading data quality</li>
      </ol>
      <p>The good news: a laptop with a charged battery already solves problem 1. Problems 2 and 3 require specific solutions.</p>

      <h2>Solution 1: UPS (Uninterruptible Power Supply) — R800 to R4,000</h2>
      <p>A UPS is the most accessible and cost-effective solution for most remote workers. A desktop UPS plugs into the wall and runs your router, ONT, and sometimes a laptop during a power outage. Key things to know:</p>
      <ul>
        <li>A basic 600VA UPS (R800–R1,200 from Makro, Builder's Warehouse, or Incredible Connection) will run your router and ONT for 2 to 4 hours</li>
        <li>A 1,500VA UPS (R2,000–R3,500) can also power a laptop and small monitor for 1 to 2 hours</li>
        <li>UPS batteries degrade over 3 to 5 years and must be replaced (R300–R600 for a replacement battery)</li>
        <li>A UPS does not charge your devices — it only provides backup power during an outage</li>
      </ul>
      <p><strong>Best for:</strong> Short outages (Stage 1–3), budget-conscious remote workers, fibre internet users who primarily need router backup.</p>

      <h2>Solution 2: Portable Power Station — R3,500 to R15,000</h2>
      <p>Portable power stations (also called LiFePO4 battery packs) are rechargeable battery units that can power multiple devices simultaneously. Popular brands available in SA include EcoFlow, Jackery, and locally produced units from Mecer.</p>
      <ul>
        <li>A 500Wh station (R4,000–R7,000) can power a router, laptop, and lights for 4 to 8 hours</li>
        <li>A 1,000Wh station (R8,000–R15,000) can run a full home office for a full day of Stage 6</li>
        <li>Can be paired with a small solar panel to recharge during daylight hours</li>
        <li>No installation required — plug and play</li>
      </ul>
      <p><strong>Best for:</strong> Renters, heavy Stage 4–6 load shedding, those who want a portable, future-proof solution.</p>

      <h2>Solution 3: Inverter with Deep Cycle Battery — R4,000 to R12,000</h2>
      <p>An inverter system (a 1,000–2,000W inverter connected to one or two deep cycle batteries) is a popular SA solution. It is more powerful than a UPS and cheaper than solar, but requires professional installation if integrated with your home's wiring.</p>
      <ul>
        <li>A single 100Ah AGM battery with a 1,000W inverter costs approximately R5,000–R7,000 installed</li>
        <li>Two batteries doubles your capacity for Stage 6 resilience</li>
        <li>Charges from the grid when power is available; automatically switches during outages</li>
        <li>Batteries need replacement every 3 to 5 years depending on depth of discharge</li>
      </ul>
      <p><strong>Best for:</strong> Homeowners, Stage 4–6 daily affected areas, those who also need to power small appliances.</p>

      <h2>Solution 4: Solar PV System — R35,000 to R120,000+</h2>
      <p>A proper rooftop solar system with battery storage is the complete long-term solution but has a high entry cost. A basic 3kWp system with a 5kWh battery (sufficient for a full home office and lights) costs R45,000–R70,000 installed. Premium systems are R100,000+. The payback period in SA is currently 4 to 7 years through Eskom bill savings.</p>
      <p>The government's solar tax incentive (Section 6C) allows individuals to claim 25% of the cost of new solar panels (up to R15,000) as a tax credit on their personal income tax return. This incentive has been periodically renewed — confirm the current status at sars.gov.za before purchasing.</p>
      <p><strong>Best for:</strong> Homeowners planning to stay long-term, those affected by Stage 6 daily, anyone wanting full energy independence.</p>

      <h2>Staying Connected: Internet Solutions During Load Shedding</h2>

      <h3>Keep Your Router Running (Most Important)</h3>
      <p>If you have fibre, your ONT (the white box from Vumatel, Openserve, or Frogfoot) requires power. Most consume under 15W. A small UPS or power station keeps it running. Check with your ISP whether your specific ONT has its own backup battery — some modern ONTs do not.</p>

      <h3>Mobile Data as Backup</h3>
      <p>A mobile data SIM (MTN, Vodacom, Telkom, or Cell C) in a dedicated MiFi router provides backup connectivity when fibre fails. Look for:</p>
      <ul>
        <li>Telkom's LTE home packages (competitive pricing for large data bundles)</li>
        <li>Vodacom's business data SIMs (more consistent during peak hours)</li>
        <li>A dual-SIM MiFi router that switches automatically between fibre and LTE</li>
      </ul>

      <h3>EskomSePush App</h3>
      <p>Download EskomSePush (free on Android and iOS) immediately. It gives you accurate load shedding schedules by area and sends notifications before outages. Plan your most critical calls and deadlines around the schedule. You can also check loadshedding.com for the latest stage updates.</p>

      <h2>Communicating With Your Employer During Outages</h2>
      <p>Proactively communicate your setup and contingency plan to your manager before load shedding disrupts a call. A brief message like "Stage 4 today — I have UPS backup for my router and a charged laptop, but if I drop off a call I will reconnect via mobile data within 2 minutes" sets expectations and demonstrates professionalism.</p>
      <p>If your backup fails and you lose connectivity mid-workday, notify your manager immediately and resume as soon as possible. Consistency of output matters more than perfect availability during a grid-management crisis that is beyond your control.</p>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Is load shedding equipment tax deductible for remote workers?</strong><br>
      Equipment purchased exclusively for your home office (UPS, router backup, office laptop) can potentially be claimed as wear and tear under Section 11(e) of the Income Tax Act. The solar tax incentive (Section 6C) is a separate personal tax credit. Read our <a href="{{BASE_PATH}}career/remote-work/home-office-tax-deduction-sars.html">home office tax deduction guide</a> for the full picture.</p>

      <p><strong>What is the minimum internet speed I need for remote work video calls?</strong><br>
      For stable HD video conferencing (Zoom, Teams, Google Meet), you need at least 5 Mbps upload and download. For a household where multiple people work or stream simultaneously, 25 Mbps or more is recommended. Most SA fibre packages start at 25/25 Mbps, which is adequate.</p>

      <p><strong>My BPO employer says I will be logged as absent if I miss work due to load shedding. Is that legal?</strong><br>
      This is a grey area. Your employment contract determines your obligations. If your contract requires you to maintain a certain uptime and you cannot due to load shedding, document the outage (EskomSePush schedule screenshots) and report it through your HR process. Some employers have adopted load shedding accommodation policies — check yours. If you are being unfairly penalised, this is a potential unfair labour practice referrable to the CCMA.</p>
    `
  },

  // ── 6 ──────────────────────────────────────────────
  {
    title: "How to Negotiate Your Salary in South Africa (Scripts Included)",
    slug: "salary-negotiation-sa",
    category: "career",
    subCategory: "salary",
    author: "Admin",
    date: "May 2, 2026",
    image: "salary_negotiation.png",
    content: `
      <p>Salary negotiation is one of the highest-return activities you can invest time in. A single successful negotiation — adding even R3,000 per month to your package — compounds to over R180,000 in additional earnings over five years, before considering future percentage increases on a higher base. Yet most South African women accept the first offer or feel too uncomfortable to push back. This guide gives you the research method, timing, and exact scripts to negotiate with confidence in the SA job market.</p>

      <h2>Step 1: Know Your Market Value Before You Negotiate</h2>
      <p>Negotiating without data is guessing. Research your market rate using these SA-specific sources:</p>
      <ul>
        <li><strong>PayScale SA (payscale.com):</strong> Enter your job title, years of experience, and city for a South African salary range.</li>
        <li><strong>Glassdoor SA (glassdoor.co.za):</strong> Check salary reports from actual employees at specific companies.</li>
        <li><strong>LinkedIn Salary Insights:</strong> Visible to Premium members — filter by job title, location, and experience level in SA.</li>
        <li><strong>Robert Half SA Salary Guide:</strong> Published annually, covers finance, tech, HR, and administrative roles with SA-specific ranges.</li>
        <li><strong>Industry associations:</strong> Many SA professional bodies (SAIPA for accountants, IITPSA for IT professionals) publish annual salary surveys.</li>
      </ul>
      <p>Gather data from at least two sources and identify the range for your role, level, and city. Target the mid-to-upper end of the range as your ask — you have room to come down, and you rarely get more than you ask for.</p>

      <h2>Step 2: Understand the Full Package (CTC vs Take-Home)</h2>
      <p>In South Africa, most professional roles are advertised as <strong>Cost to Company (CTC)</strong>. This includes your basic salary plus employer contributions to medical aid, pension/provident fund, and risk benefits. Before negotiating, understand what is included in the CTC so you can compare offers accurately. A R300,000 CTC with comprehensive medical aid and a 10% pension contribution is more valuable than R320,000 CTC with no benefits.</p>

      <h2>Scenario 1: Negotiating a Job Offer</h2>
      <p>You have received an offer. Never accept on the spot — you are entitled to a reasonable period (24 to 48 hours at minimum) to consider it. When you respond:</p>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1rem 1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><em>"Thank you so much for this offer — I am genuinely excited about the role and the team. Based on my research and [X years of experience / the specific skills I bring around Y], I was expecting something closer to [your target number]. Is there flexibility to reach that?"</em></p>
      </div>
      <p>Then stop talking. Silence is a powerful negotiating tool. Let them respond. You have anchored on a higher number — they now negotiate down from there, not up from their initial offer.</p>

      <h2>Scenario 2: Asking for a Raise in Your Current Role</h2>
      <p>Request a dedicated meeting — do not raise it at the end of a catch-up. Frame the meeting agenda as "reviewing my compensation." In the meeting:</p>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1rem 1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><em>"I wanted to discuss my compensation in the context of my contributions over the past [year]. In that time, I have [specific achievement 1], [specific achievement 2], and [specific achievement 3]. Based on market data for my role and experience in [city], I believe my current salary of [X] is below what the market is offering for this level of contribution. I would like to discuss bringing it to [target number]."</em></p>
      </div>

      <h2>Handling Common Objections</h2>

      <h3>"The salary is fixed / There's no budget."</h3>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1rem 1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><em>"I understand budget constraints are real. If the base salary cannot move right now, is there anything else we can adjust — perhaps a performance bonus target, an additional day's leave, a professional development budget, or a review date in 6 months? I want to find something that works for both of us."</em></p>
      </div>

      <h3>"We already give everyone the same increase."</h3>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1rem 1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><em>"I appreciate the consistency in the process. My ask is specifically because I believe my current rate is below market for my level of experience and output — it is not about the percentage increase others receive, but about where I sit relative to the market. Can we discuss this separately from the general increase cycle?"</em></p>
      </div>

      <h2>Non-Monetary Benefits Worth Negotiating</h2>
      <p>When cash is truly fixed, these have real financial value:</p>
      <ul>
        <li>An extra 2 to 5 days of annual leave (worth R500–R1,500 per day depending on your salary)</li>
        <li>A performance bonus structure with clear measurable targets</li>
        <li>A professional development budget (R5,000–R20,000/year for courses, conferences, certifications)</li>
        <li>A travel allowance or petrol card</li>
        <li>Flexible working hours or additional remote work days</li>
        <li>Medical aid contribution upgrade</li>
        <li>A shorter review cycle (6 months vs 12 months)</li>
      </ul>

      <h2>After a Successful Negotiation</h2>
      <p>Always confirm the agreed terms in writing — via email or an updated contract addendum. A verbal agreement that is not documented can be "forgotten." Simply send a follow-up: <em>"Thank you for the discussion — just confirming the agreed salary of R[X] effective [date]."</em></p>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Should I tell my current employer if I have a competing offer?</strong><br>
      Only if you genuinely intend to leave if they do not match it. A counter-offer bluff that is called can end your relationship with the employer awkwardly. If you have a real offer you would take, sharing it is fair leverage. Ensure the competing offer is in writing before using it.</p>

      <p><strong>Is it rude to negotiate in SA?</strong><br>
      No. Hiring managers and HR professionals expect negotiation, especially for professional roles. A candidate who accepts the first offer without any discussion is often seen as inexperienced. Negotiate respectfully and professionally — the relationship does not have to suffer for you to advocate for yourself.</p>

      <p><strong>What if I got a "market-related" response when I asked about salary?</strong><br>
      "Market-related" without a specific number is not an answer. Follow up with: "I appreciate that — my research suggests market-related for this role in [city] with [X] years of experience is in the range of [R X to R Y]. Is that consistent with where you are positioned?" Force specificity.</p>
    `
  },

  // ── 7 ──────────────────────────────────────────────
  {
    title: "What Is a Cost to Company (CTC) Package in South Africa?",
    slug: "cost-to-company-ctc-sa",
    category: "career",
    subCategory: "salary",
    author: "Admin",
    date: "May 2, 2026",
    image: "ctc_package_sa.png",
    content: `
      <p>You applied for a job in South Africa and the offer says "R420,000 CTC per annum." You expected to take home R35,000 per month, but your first payslip shows R24,000 in your bank account. This is one of the most common financial shocks for South African job seekers — and it happens because most people do not fully understand what Cost to Company (CTC) means or how to calculate their actual take-home pay. This guide explains everything.</p>

      <h2>What Does CTC Mean?</h2>
      <p>Cost to Company (CTC) is the total amount a company spends on employing you in a year — not just your salary. It is the employer's <em>total cost</em>, which includes all contributions they make on your behalf to medical aid, pension or provident funds, risk insurance, and any other structured benefits.</p>
      <p>In South Africa, CTC is the standard way of quoting total remuneration for professional and management roles. It is used because it allows easy comparison between packages at different companies that structure benefits differently.</p>

      <h2>What Is Typically Included in a CTC Package?</h2>

      <h3>Core Components</h3>
      <ul>
        <li><strong>Basic salary:</strong> The cash component before any deductions — typically 60% to 75% of total CTC</li>
        <li><strong>Employer medical aid contribution:</strong> The amount the company contributes to your medical aid monthly (typically R1,500–R5,000 per month depending on the scheme)</li>
        <li><strong>Employer pension or provident fund contribution:</strong> Usually 7% to 15% of basic salary</li>
        <li><strong>Risk benefits:</strong> Group life insurance, disability cover, and funeral cover premiums paid by the employer (typically 1%–3% of basic salary)</li>
        <li><strong>UIF employer contribution:</strong> 1% of remuneration (up to the UIF salary ceiling)</li>
      </ul>

      <h3>Optional Components</h3>
      <ul>
        <li>Housing allowance or subsidy</li>
        <li>Car allowance or company vehicle (or fuel allowance)</li>
        <li>13th cheque or performance bonus (if guaranteed, it may be included in CTC)</li>
        <li>Cell phone allowance</li>
        <li>Skills development levy (SDL) — sometimes included</li>
      </ul>

      <h2>CTC vs Basic Salary: A Real Example</h2>
      <p>Here is a typical CTC breakdown for a R420,000 CTC package:</p>
      <table style="width:100%; border-collapse:collapse; margin: 1.5rem 0;">
        <thead>
          <tr style="background:#f8e4ed;"><th style="padding:10px; text-align:left; border:1px solid #ddd;">Component</th><th style="padding:10px; text-align:right; border:1px solid #ddd;">Annual Amount</th></tr>
        </thead>
        <tbody>
          <tr><td style="padding:9px; border:1px solid #ddd;">Basic salary</td><td style="padding:9px; text-align:right; border:1px solid #ddd;">R294,000</td></tr>
          <tr style="background:#fafafa;"><td style="padding:9px; border:1px solid #ddd;">Employer medical aid contribution</td><td style="padding:9px; text-align:right; border:1px solid #ddd;">R36,000</td></tr>
          <tr><td style="padding:9px; border:1px solid #ddd;">Employer pension fund contribution (10%)</td><td style="padding:9px; text-align:right; border:1px solid #ddd;">R29,400</td></tr>
          <tr style="background:#fafafa;"><td style="padding:9px; border:1px solid #ddd;">Group life and disability insurance</td><td style="padding:9px; text-align:right; border:1px solid #ddd;">R14,700</td></tr>
          <tr><td style="padding:9px; border:1px solid #ddd;">UIF employer contribution</td><td style="padding:9px; text-align:right; border:1px solid #ddd;">R1,490 (capped)</td></tr>
          <tr style="background:#f8e4ed; font-weight:bold;"><td style="padding:9px; border:1px solid #ddd;">Total CTC</td><td style="padding:9px; text-align:right; border:1px solid #ddd;">R420,000</td></tr>
        </tbody>
      </table>
      <p>Your gross basic salary is R294,000 per year (R24,500/month). After PAYE income tax, UIF employee contribution, and employee medical aid and pension contributions, your actual take-home pay is typically 65%–72% of basic salary — approximately R16,000–R17,600 per month in this example.</p>

      <h2>How to Calculate Your Take-Home Pay</h2>
      <p>Use the <strong>SARS online tax calculator</strong> at sars.gov.za, or TaxTim.com (a popular SA tool). Input your annual basic salary (not CTC), then add back any allowances. The calculator shows your PAYE liability and net salary.</p>
      <p>Quick rule of thumb: for most middle-income SA employees, take-home pay is approximately <strong>60%–70% of your CTC figure</strong>. For higher CTC packages (above R1 million CTC), effective tax rates increase and take-home may be closer to 50%–55% of CTC.</p>

      <h2>Which Benefits to Prioritise in Your CTC Package</h2>
      <p>Not all benefits are equal. Here is how to prioritise:</p>
      <ul>
        <li><strong>Employer pension/provident fund contributions:</strong> Free money — always maximise this. An employer matching 10% of your salary into a pension fund is worth far more than the equivalent cash, due to tax efficiency and compound growth.</li>
        <li><strong>Medical aid:</strong> Essential — the employer contribution significantly reduces your out-of-pocket healthcare cost. Compare what each company contributes and to which medical aid scheme.</li>
        <li><strong>Risk benefits:</strong> Group life, disability, and funeral cover at employer rates are cheaper than individual policies. Check the cover amounts.</li>
        <li><strong>Car allowance vs company car:</strong> A car allowance is taxable income; a company car involves fringe benefit tax. Get advice from a tax practitioner if you are choosing between these — the difference can be substantial.</li>
      </ul>

      <h2>Red Flags in CTC Structures</h2>
      <ul>
        <li><strong>High basic, minimal benefits:</strong> Some employers pad the CTC with low-cost benefits to inflate the headline number. A company contributing R500 per month to medical aid when Discovery Hospital Plan costs R2,500 is not generous.</li>
        <li><strong>Variable components included in guaranteed CTC:</strong> If a commission or bonus is included in the CTC but not actually guaranteed, you may earn less than the headline number in a bad month.</li>
        <li><strong>CTC including the employee's own contributions:</strong> Your UIF and pension employee contributions are technically part of your package — but including them in the quoted CTC is misleading. Ask the employer to clarify exactly what the employer contributes versus what comes from your salary.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Can I negotiate the structure of my CTC package?</strong><br>
      Often yes, especially in larger companies with flexible remuneration models. You may be able to allocate more CTC to your basic salary (higher take-home, lower tax-efficient savings) or more to your pension fund (lower take-home, more tax-efficient retirement savings). The total CTC stays the same, but the distribution changes.</p>

      <p><strong>If I negotiate my CTC up, does that affect my pension contributions?</strong><br>
      Yes. Most pension fund contributions are calculated as a percentage of basic salary. A higher basic salary (from a higher CTC) increases both the rand amount of contributions and the associated tax deduction (retirement fund contributions are deductible up to 27.5% of taxable income, capped at R350,000 per year).</p>
    `
  },

  // ── 8 ──────────────────────────────────────────────
  {
    title: "Maternity Leave Pay in SA: How Much Should You Expect?",
    slug: "maternity-leave-pay-sa",
    category: "career",
    subCategory: "salary",
    author: "Admin",
    date: "May 2, 2026",
    image: "maternity_leave_pay.png",
    content: `
      <p>Maternity leave in South Africa is governed by two separate systems that many women confuse: your statutory leave entitlement under the Basic Conditions of Employment Act (BCEA) and the UIF maternity benefit you claim from the Department of Employment and Labour. Understanding both — and how they interact with your employer's own top-up policy — is essential to financial planning before your baby arrives.</p>

      <h2>Your Statutory Maternity Leave Entitlement (BCEA)</h2>
      <p>Under Section 25 of the BCEA, every employee (including part-time and fixed-term workers) is entitled to at least <strong>4 consecutive months of maternity leave</strong>. Key points:</p>
      <ul>
        <li>Maternity leave can begin 4 weeks before the expected date of birth (or earlier if a doctor certifies it is necessary)</li>
        <li>Your employer <strong>cannot dismiss you</strong> for being pregnant or taking maternity leave</li>
        <li>Your employer <strong>is not legally required to pay you</strong> during maternity leave — the BCEA only provides the right to unpaid leave</li>
        <li>After maternity leave, you are entitled to return to your same position or a reasonably equivalent one</li>
        <li>The BCEA does not apply to independent contractors — only to employees</li>
      </ul>

      <h2>The UIF Maternity Benefit</h2>
      <p>While your employer is not required to pay you, you can claim a UIF maternity benefit from the Department of Employment and Labour. This benefit replaces a portion of your income during maternity leave.</p>
      <p>The benefit is calculated as a sliding scale based on your income. Lower earners receive a higher replacement rate:</p>
      <ul>
        <li>Employees earning below R12,478 per month (the UIF income replacement rate ceiling): 66% of daily remuneration</li>
        <li>The maximum UIF salary ceiling is R17,712 per month (as of 2026) — if you earn more, the benefit is capped at this ceiling</li>
        <li>Maximum benefit duration: 17.32 weeks (approximately 4 months)</li>
      </ul>
      <p>For a complete step-by-step guide to claiming your UIF maternity benefit, including the forms, documentation, and processing times, read our <a href="{{BASE_PATH}}finance/benefits/uif-maternity-benefits-2026.html">complete UIF maternity benefits guide</a>.</p>

      <h2>Employer Top-Up: The Crucial Difference</h2>
      <p>The real variation in maternity pay experience comes from your employer's voluntary top-up policy:</p>
      <ul>
        <li><strong>No top-up (minimum legally required):</strong> You receive only UIF benefits — approximately 66% of salary up to the ceiling. Many small businesses and informal employers fall into this category.</li>
        <li><strong>Partial top-up:</strong> The employer pays the difference between UIF and your full salary, or a set percentage (e.g., 50% of salary for 3 months). Common in mid-sized companies.</li>
        <li><strong>Full pay for a period:</strong> Some employers (typically large corporates, banks, law firms) pay full salary for 1 to 4 months of maternity leave. This is rare but exists in sectors competing for female talent.</li>
      </ul>
      <p><strong>When and how to find out:</strong> Ask about maternity leave policy during the offer stage — not after signing your contract. Ask specifically: "Does the company top up the UIF maternity benefit, and if so, for how long and at what percentage?" Get the answer in writing.</p>

      <h2>Negotiating Better Maternity Leave</h2>
      <p>Maternity leave top-up is a negotiable benefit in many organisations — especially if you are a valued employee or a strong candidate:</p>
      <ul>
        <li>Raise it during a salary negotiation rather than as a standalone ask</li>
        <li>Frame it as a retention tool: "I want to ensure I can return refreshed and fully committed after my leave"</li>
        <li>Research what comparable employers offer in your sector — benchmarking data is powerful</li>
        <li>If full pay is not possible, negotiate for a longer period of partial pay or an earlier return-to-work option with a flexible hours arrangement</li>
      </ul>

      <h2>Financial Planning for Maternity Leave</h2>
      <p>Even with UIF and a partial top-up, most South African women experience a temporary income reduction during maternity leave. Plan for this:</p>
      <ul>
        <li>Build a maternity leave fund before your leave begins — aim for 2 to 3 months of expenses saved</li>
        <li>Notify your creditors (home loan, vehicle finance) in advance — many banks offer a 3-month payment holiday on mortgage accounts for qualifying customers</li>
        <li>Review your debit order commitments and cancel or pause non-essentials</li>
        <li>Understand your medical aid maternity benefits — many SA medical aid schemes cover a maternity programme with cash payouts at certain milestones</li>
      </ul>

      <h2>Rights During and After Maternity Leave</h2>
      <ul>
        <li>You cannot be retrenched specifically because of your pregnancy or maternity leave (this constitutes automatically unfair dismissal under Section 187 of the LRA)</li>
        <li>You are entitled to breastfeeding breaks (30 minutes twice per day) for the first 6 months after returning to work, under the BCEA</li>
        <li>If your position is made redundant during your maternity leave, you are entitled to the same retrenchment process and severance as any other employee — your employer cannot time a retrenchment to coincide with your leave to avoid paying you out</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Can I take more than 4 months of maternity leave?</strong><br>
      The BCEA guarantees 4 months. You can negotiate additional leave with your employer — some women take annual leave consecutively with maternity leave to extend their time off. Your employer is not obligated to agree, but many do.</p>

      <p><strong>What if I have a miscarriage or stillbirth?</strong><br>
      Under the BCEA, if a child is stillborn after the sixth month of pregnancy, you are still entitled to your full 4-month maternity leave. You are also entitled to UIF bereavement benefits in addition to maternity benefits in this situation.</p>

      <p><strong>What happens to my pension and medical aid while I am on unpaid maternity leave?</strong><br>
      This varies by employer. Some continue employer contributions during the full leave period; others stop contributing once salary payments cease. Ask HR for clarification. If employer medical aid contributions stop, you may need to self-pay to maintain coverage — budget for this accordingly.</p>
    `
  },

  // ── 9 ──────────────────────────────────────────────
  {
    title: "How to Ask for a Raise When Inflation is High (SA Guide)",
    slug: "ask-for-raise-inflation-sa",
    category: "career",
    subCategory: "salary",
    author: "Admin",
    date: "May 2, 2026",
    image: "ask_raise_inflation.png",
    content: `
      <p>When consumer inflation is high, a standard annual increase often feels like a pay cut. In South Africa, where CPI regularly runs at 5% to 7%, an employer's "inflationary increase" of 3% means your purchasing power has declined in real terms. Asking for a raise that genuinely improves your financial position — not just keeps pace with rising costs — requires a specific strategy. This guide shows you how.</p>

      <h2>Why Inflation Changes the Raise Conversation</h2>
      <p>In a low-inflation environment, a 5% annual increase feels like a genuine uplift. In a 6% inflation environment, that same 5% increase means you are earning less in real terms than last year. Your grocery bill, petrol, medical aid premiums, and rent have all gone up by more than your salary.</p>
      <p>The challenge is that employers face the same inflationary pressures — their cost of doing business has also increased. You cannot simply say "inflation is high, give me more money." You need to reframe the ask around your value to the organisation.</p>

      <h2>Step 1: Do the Maths Before the Meeting</h2>
      <p>Know your numbers before you walk in:</p>
      <ul>
        <li>Current salary: R[X] per month</li>
        <li>Last increase percentage and date</li>
        <li>Current CPI (check Stats SA at statssa.gov.za for the most recent figure)</li>
        <li>Cumulative inflation since your last real raise (compound this over multiple years if you have had below-inflation increases)</li>
        <li>Market rate for your role (use PayScale SA, Glassdoor, or the Robert Half Salary Guide)</li>
      </ul>
      <p>If your salary was R25,000 in 2022 and you have received 4% annual increases, you are earning approximately R27,060 in 2026. But if inflation averaged 6% over those four years, your purchasing power has declined — you need R31,540 to have the same real income as 2022. That gap is your conversation starter.</p>

      <h2>Step 2: Build a Value Case, Not Just a Cost-of-Living Argument</h2>
      <p>A pure inflation argument ("prices have gone up, I need more money") puts you in the position of asking your employer to solve your personal financial problem. Employers respond to value. Build a case that answers: <em>What have you contributed that is worth more than what you are currently paid?</em></p>
      <p>Prepare 3 to 5 specific, quantified achievements from the past 12 months:</p>
      <ul>
        <li>Revenue generated, costs saved, or efficiency improved (with figures)</li>
        <li>Projects delivered ahead of deadline or under budget</li>
        <li>New skills, qualifications, or responsibilities you have taken on</li>
        <li>Problems you solved that had a measurable business impact</li>
      </ul>

      <h2>Step 3: Lead With Value, Then Layer in the Inflation Context</h2>
      <p>The most effective structure for a raise conversation:</p>
      <ol>
        <li>Open with your achievements and the value you have added</li>
        <li>Reference the market rate for your role (with data)</li>
        <li>Then mention the inflationary context as a supporting factor, not the primary argument</li>
      </ol>
      <div style="background:#f8f4f9; border-left:4px solid #c0547a; padding:1rem 1.5rem; border-radius:4px; margin: 1.5rem 0;">
        <p><em>"Over the past year, I have [specific achievement], [specific achievement], and taken on [expanded responsibility]. My market research shows comparable roles in [city] are currently paying [range]. I am also mindful that the annual CPI increase since my last raise has been [X%], which means my real purchasing power has declined. I would like to discuss bringing my salary to [target] — which reflects both the market rate and the value I have been delivering."</em></p>
      </div>

      <h2>What Percentage Should You Ask For?</h2>
      <p>In high-inflation environments, consider requesting:</p>
      <ul>
        <li><strong>CPI + your contribution premium:</strong> If inflation is 6% and you have performed strongly, ask for 10% to 15%</li>
        <li><strong>Market correction + CPI:</strong> If you are underpaid relative to the market, the correction may be larger — do not be afraid to ask for 20%+ if the data supports it</li>
        <li><strong>Minimum ask:</strong> Never accept less than CPI — that is a real pay cut. Push back with: "A 3% increase in a 6% inflation environment effectively reduces my take-home in real terms. Can we at least match inflation as a floor?"</li>
      </ul>

      <h2>If Your Employer Cannot Afford a Full Raise</h2>
      <p>Not every employer can afford large increases, especially small businesses under their own cost pressure. If a full raise is genuinely not possible, negotiate:</p>
      <ul>
        <li>A phased increase: 6% now and another 4% in 6 months upon hitting specific targets</li>
        <li>A one-time cash bonus to bridge the gap this year</li>
        <li>Non-cash value: remote work, extra leave, professional development budget, medical aid upgrade</li>
        <li>A firm commitment to a specific review date with agreed criteria</li>
      </ul>

      <h2>Knowing When to Walk Away</h2>
      <p>If your employer consistently gives below-inflation increases, dismisses market data, and shows no genuine interest in closing the gap, the numbers are telling you something. One of the most effective ways to increase salary in South Africa is to change jobs — external hires typically earn 10% to 30% more than internal promotions for equivalent roles. Use our <a href="{{BASE_PATH}}career/remote-work/salary-negotiation-sa.html">salary negotiation guide</a> to ensure you negotiate the best possible offer when you do move.</p>

      <h2>Frequently Asked Questions</h2>
      <p><strong>When is the best time to ask for a raise?</strong><br>
      The best timing is: 1) after a notable achievement, 2) during or just after your annual performance review, 3) when your manager is in a good mood and not under deadline pressure. Avoid asking during company-wide belt-tightening, retrenchments, or within your first 6 months in a role. Monday mornings and Friday afternoons are typically poor times for sensitive conversations — mid-week is better.</p>

      <p><strong>My company policy says increases only happen in January. Can I still ask now?</strong><br>
      Yes. You can ask for an out-of-cycle review if your circumstances warrant it — taking on new responsibilities, significant achievement, or falling significantly below market. The worst answer is no. Even if the answer is no, you have put it on record and can reference the conversation at the next formal review.</p>

      <p><strong>Should I mention that I am looking at other jobs?</strong><br>
      Only if it is true and you are genuinely prepared to leave. Using it as a bluff risks being called on it. If you do have another offer, that is legitimate leverage — but use it as information, not a threat. "I have been approached by another company offering X — I would prefer to stay, but I need to understand if we can get closer to that number."</p>
    `
  },

  // ── 10 ──────────────────────────────────────────────
  {
    title: "Average Tech Salaries for Women in South Africa (2026)",
    slug: "women-tech-salaries-sa-2026",
    category: "career",
    subCategory: "salary",
    author: "Admin",
    date: "May 2, 2026",
    image: "women_tech_salaries.png",
    content: `
      <p>South Africa's technology sector is growing rapidly, and it is one of the most accessible pathways to a high-income career — with or without a traditional computer science degree. For women specifically, understanding the market rates for tech roles is the first step to negotiating fairly and recognising when you are underpaid. This guide covers 2026 salary ranges for the most common tech roles in South Africa, the gender pay gap in SA tech, and how to close it.</p>

      <h2>Tech Salary Ranges by Role in South Africa (2026)</h2>

      <h3>Software Developer / Full Stack Developer</h3>
      <ul>
        <li><strong>Junior (0–2 years):</strong> R18,000–R30,000 per month CTC</li>
        <li><strong>Mid-level (3–5 years):</strong> R35,000–R60,000 per month CTC</li>
        <li><strong>Senior (6+ years):</strong> R60,000–R100,000+ per month CTC</li>
      </ul>
      <p>Specialists in React, Node.js, Python, Java, and .NET are in highest demand from SA's banking, fintech, and insurance sectors. Remote roles for European and US companies (paying in EUR/USD) can significantly exceed these ranges.</p>

      <h3>Data Analyst</h3>
      <ul>
        <li><strong>Junior:</strong> R15,000–R25,000 per month CTC</li>
        <li><strong>Mid-level:</strong> R25,000–R45,000 per month CTC</li>
        <li><strong>Senior / Lead Analyst:</strong> R45,000–R75,000 per month CTC</li>
      </ul>
      <p>SQL, Python, Power BI, and Tableau skills drive demand. Finance, retail (Pick n Pay, Shoprite, Woolworths), and telecoms are the biggest hirers.</p>

      <h3>Data Scientist / AI/ML Engineer</h3>
      <ul>
        <li><strong>Junior:</strong> R25,000–R40,000 per month CTC</li>
        <li><strong>Mid-level:</strong> R40,000–R70,000 per month CTC</li>
        <li><strong>Senior:</strong> R70,000–R120,000+ per month CTC</li>
      </ul>
      <p>The fastest-growing pay category in SA tech. Python, TensorFlow, PyTorch, and cloud ML platforms (AWS SageMaker, Azure ML) command premiums.</p>

      <h3>UX/UI Designer</h3>
      <ul>
        <li><strong>Junior:</strong> R14,000–R22,000 per month CTC</li>
        <li><strong>Mid-level:</strong> R22,000–R40,000 per month CTC</li>
        <li><strong>Senior:</strong> R40,000–R65,000 per month CTC</li>
      </ul>
      <p>Figma proficiency is now essentially mandatory. Product designers who can also conduct user research command higher rates.</p>

      <h3>Cybersecurity Analyst</h3>
      <ul>
        <li><strong>Junior (SOC Analyst):</strong> R18,000–R28,000 per month CTC</li>
        <li><strong>Mid-level:</strong> R28,000–R55,000 per month CTC</li>
        <li><strong>Senior / CISSP Certified:</strong> R55,000–R95,000+ per month CTC</li>
      </ul>
      <p>One of the most undersupplied skill sets in SA. Financial services and government are major employers. CompTIA Security+, CISSP, and CEH certifications command significant premiums.</p>

      <h3>DevOps / Cloud Engineer</h3>
      <ul>
        <li><strong>Junior:</strong> R22,000–R35,000 per month CTC</li>
        <li><strong>Mid-level:</strong> R35,000–R65,000 per month CTC</li>
        <li><strong>Senior:</strong> R65,000–R110,000+ per month CTC</li>
      </ul>
      <p>AWS and Azure certifications drive major salary premiums. SA's rapid cloud migration (driven partly by load shedding pushing infrastructure off-premise) has made this one of the hottest roles in the market.</p>

      <h3>IT Project Manager / Scrum Master</h3>
      <ul>
        <li><strong>Scrum Master:</strong> R30,000–R55,000 per month CTC</li>
        <li><strong>IT PM (mid-level):</strong> R35,000–R60,000 per month CTC</li>
        <li><strong>Senior IT PM / Programme Manager:</strong> R60,000–R100,000 per month CTC</li>
      </ul>
      <p>PMP certification and Agile experience (SAFe, Scrum) significantly improve marketability.</p>

      <h2>The Gender Pay Gap in South African Tech</h2>
      <p>Data from PayScale, Glassdoor, and the IITPSA suggests that women in SA tech earn approximately 15% to 25% less than their male counterparts in equivalent roles. The gap is widest at senior and leadership levels, where women remain underrepresented. Contributing factors include:</p>
      <ul>
        <li>Women being less likely to negotiate initial offers (accepting the first number)</li>
        <li>Career interruptions for caregiving (maternity leave, family responsibilities)</li>
        <li>Underrepresentation in the highest-paying specialisations (system architecture, AI/ML leadership)</li>
        <li>Unconscious bias in performance evaluations affecting merit increases</li>
      </ul>

      <h2>How to Find Out If You Are Being Underpaid</h2>
      <ul>
        <li>Use PayScale.com, Glassdoor.co.za, and LinkedIn Salary to benchmark your specific role, location, and experience level</li>
        <li>Join professional networks like IITPSA, Women in Tech SA, or Coding Girls SA where salary discussions happen openly</li>
        <li>Have informal conversations with peers (this feels taboo but salary transparency benefits everyone except the employer who pays unequally)</li>
        <li>Apply for other roles periodically — even if you are not actively job-hunting, the market will tell you what you are worth through actual offer letters</li>
      </ul>

      <h2>Increasing Your Tech Salary Without Changing Jobs</h2>
      <ul>
        <li><strong>Get certified:</strong> AWS, Azure, Google Cloud, CISSP, PMP — certifications attached to scarce skills command immediate market premiums. Many can be self-studied and obtained for R3,000–R8,000 in exam fees.</li>
        <li><strong>Become the team's AI tools expert:</strong> Prompt engineering and GenAI workflow optimisation are skills SA organisations are actively seeking. Building expertise in tools like GitHub Copilot, Claude API, or Midjourney within your current role positions you for a promotion and an uplift.</li>
        <li><strong>Move into management or architecture:</strong> Individual contributor to team lead or solution architect moves typically come with 20% to 40% salary jumps.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Can I earn more working remotely for a foreign company?</strong><br>
      Yes, significantly. SA-based developers, data scientists, and UX designers working remotely for US or European companies typically earn the equivalent of R100,000–R250,000+ per month at current exchange rates (R18–R19 to the USD in 2026). The trade-off includes no SA benefits (medical aid, pension), working in different time zones, and managing your own provisional tax. It is increasingly common and financially transformative for mid-to-senior level SA tech professionals.</p>

      <p><strong>Do I need a computer science degree to work in SA tech?</strong><br>
      Not necessarily. Many SA tech companies — including major banks and tech unicorns — now hire based on demonstrated skills, portfolio, and relevant certifications. Bootcamps like HyperionDev, WeThinkCode_, and Umuzi have placed hundreds of SA graduates without CS degrees into tech roles. However, a computer science, information systems, or engineering degree from a recognised SA university (UCT, Wits, UP, UJ) still opens doors faster at traditional corporate employers.</p>
    `
  }
];

// Append to articles.js
const insertBefore = '\n];\n\nmodule.exports = articles;';
const newEntries = newArticles.map(a => `
  {
    title: ${JSON.stringify(a.title)},
    slug: ${JSON.stringify(a.slug)},
    category: ${JSON.stringify(a.category)},
    subCategory: ${JSON.stringify(a.subCategory)},
    author: ${JSON.stringify(a.author)},
    date: ${JSON.stringify(a.date)},
    image: ${JSON.stringify(a.image)},
    content: \`${a.content}\`
  }`).join(',');

const insertPoint = raw.lastIndexOf('\n];\n\nmodule.exports = articles;');
if (insertPoint === -1) { console.error('Could not find insertion point!'); process.exit(1); }

let updated = raw.slice(0, insertPoint) + ',\n' + newEntries + insertBefore;
if (hasCRLF) updated = updated.replace(/\n/g, '\r\n');
fs.writeFileSync('./articles.js', updated);

// Validate
delete require.cache[require.resolve('./articles.js')];
const articles = require('./articles.js');
console.log('Total articles:', articles.length);
const newOnes = articles.filter(a => newArticles.some(n => n.slug === a.slug));
newOnes.forEach(a => {
  const words = a.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w=>w.length>0).length;
  console.log(a.slug + ': ' + words + ' words');
});
