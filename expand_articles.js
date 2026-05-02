const fs = require('fs');

// Read file and normalize to LF
let raw = fs.readFileSync('./articles.js', 'utf8');
const hasCRLF = raw.includes('\r\n');
if (hasCRLF) raw = raw.replace(/\r\n/g, '\n');

const lines = raw.split('\n');

function replaceLines(lines, startLine, endLine, newContent) {
  // startLine and endLine are 1-based line numbers (from grep)
  // We replace everything from startLine to endLine (inclusive) with newContent
  const before = lines.slice(0, startLine - 1);
  const after = lines.slice(endLine); // endLine is the closing backtick line, keep it
  return [...before, newContent, ...after];
}

// ---- 1. small-business-sa ----
// content: lines 1249–1261 (line 1262 is closing backtick — keep it)
const bizContent = `      <p>Turning your <a href="{{BASE_PATH}}career/entrepreneurship/side-hustles-sa.html">side hustle</a> or business idea into a formal, legally compliant entity in South Africa is more straightforward than most people think — but there are specific steps you need to follow in the right order. This guide walks you through registration, tax compliance, funding, and the practical realities of running a small business as a South African woman in 2026.</p>

      <h2>Step 1: Choose Your Business Structure</h2>
      <p>Before you register anything, decide which legal structure fits your business. The most common options for small businesses in SA are:</p>

      <h3>Sole Proprietor</h3>
      <p>The simplest structure — you trade in your own name with no formal registration required. Income is taxed in your hands at your personal tax rate. The critical downside: there is no separation between your personal and business assets, meaning creditors can attach your personal property if the business cannot pay its debts. This works for very small freelance or informal businesses but is not ideal once you start earning seriously.</p>

      <h3>Private Company (Pty Ltd)</h3>
      <p>The most popular structure for small businesses. A Pty Ltd is a separate legal entity — it can own assets, enter contracts, and carry debt in its own name, giving you limited liability protection. Registration is done through the <strong>Companies and Intellectual Property Commission (CIPC)</strong>. You need at least one director and one shareholder (the same person can fill both roles). Registration costs R175 through CIPC's website.</p>

      <h3>Non-Profit Company (NPC)</h3>
      <p>If you are starting a social enterprise, NGO, or community organisation, an NPC is the appropriate structure. NPCs do not distribute profit to members and may qualify for Section 18A tax exemption, making donations to your organisation tax-deductible for donors.</p>

      <h2>Step 2: Register with CIPC via BizPortal</h2>
      <p>Go to <strong>bizportal.gov.za</strong> — the South African government's integrated business registration portal. BizPortal allows you to register your company, open a business bank account (with Standard Bank, Absa, FNB, or Nedbank), register for SARS taxes, and apply for UIF registration, all in a single online session.</p>
      <p>What you need:</p>
      <ul>
        <li>Your South African ID number</li>
        <li>Three name choices for your company (in priority order)</li>
        <li>Your personal contact and address details</li>
        <li>R175 registration fee (payable by card online)</li>
      </ul>
      <p>Registration typically takes 5 to 7 business days. You will receive a company registration certificate (COR14.3) and a memorandum of incorporation (MOI).</p>

      <h2>Step 3: Register for Tax with SARS</h2>
      <p>Once your company is registered with CIPC, you must register it with SARS for income tax. If you registered via BizPortal, this may happen automatically. Otherwise, register via SARS eFiling (efiling.sars.gov.za).</p>

      <h3>Income Tax and Provisional Tax</h3>
      <p>Your Pty Ltd will be taxed at a flat corporate rate of 27% on taxable profit (2026). As a company director drawing a salary, you will also pay personal income tax (PAYE) on your salary. You are required to submit provisional tax returns twice a year — in August and February — to avoid penalties.</p>

      <h3>VAT Registration</h3>
      <p>VAT registration is compulsory once your taxable turnover exceeds <strong>R1 million</strong> in any 12-month period. You may register voluntarily once you exceed R50,000 turnover, which can be beneficial if your customers are VAT-registered businesses. VAT is currently 15% in South Africa.</p>

      <h3>PAYE, UIF, and SDL</h3>
      <p>Once you employ staff (including yourself as a salaried director), you must register as an employer with SARS for PAYE (income tax withheld from salaries), UIF (1% employer + 1% employee), and SDL (1% of payroll if annual payroll exceeds R500,000).</p>

      <h2>Step 4: Register for COIDA</h2>
      <p>The Compensation for Occupational Injuries and Diseases Act (COIDA) requires all employers to register with the Department of Employment and Labour and pay an annual assessment fee. This covers your employees for workplace injuries. Register at www.labour.gov.za.</p>

      <h2>Step 5: Open a Business Bank Account</h2>
      <p>A dedicated business bank account is legally required for a Pty Ltd and practically essential for any business. It separates your personal and business finances, makes accounting easier, and builds a financial track record that is crucial when applying for funding. Compare options from FNB, Standard Bank, Capitec, and Nedbank — all offer small business accounts with varying fee structures.</p>

      <h2>Step 6: B-BBEE Compliance</h2>
      <p>B-BBEE status matters if you want to do business with government, corporates, or large retailers. For <strong>Exempted Micro Enterprises (EMEs)</strong> — businesses with annual turnover under R10 million — a sworn affidavit confirmed by a Commissioner of Oaths is all that is needed. If more than 51% is black-owned, you qualify as Level 2; more than 51% black women-owned qualifies as Level 1.</p>

      <h2>Funding Options for Women-Owned Businesses</h2>
      <ul>
        <li><strong>SEDA (seda.org.za):</strong> Free non-financial support — business planning, mentorship, and funding referrals. Find your nearest office on their website.</li>
        <li><strong>NYDA (nyda.gov.za):</strong> If you are between 18 and 35, grants up to R1,000 for micro-enterprises and loans up to R100,000 for small businesses.</li>
        <li><strong>NEF (nef.org.za):</strong> Funds black-owned and black-women-owned businesses with financing from R250,000 upward. Has a dedicated Women Entrepreneurial Fund.</li>
        <li><strong>IDC (idc.co.za):</strong> Funding from R1 million for manufacturing and industrial businesses. Women Entrepreneurial Fund available.</li>
        <li><strong>Bank Business Loans:</strong> Most major banks offer small business loans and overdraft facilities. You will typically need 1 to 2 years of financial statements, a business plan, and a good personal credit record. Check your credit score at <a href="{{BASE_PATH}}finance/credit/understanding-credit-score-sa.html">ClearScore or TransUnion</a> before applying.</li>
      </ul>

      <h2>Practical Tips for Women Starting a Business in SA</h2>
      <ul>
        <li><strong>Separate your finances from day one:</strong> Never mix personal and business money — even as a sole proprietor, open a separate account.</li>
        <li><strong>Keep records from the start:</strong> Use free accounting software like Wave or affordable Sage Pastel to track every transaction. SARS can audit you for up to 5 years.</li>
        <li><strong>Register a domain and professional email:</strong> A yourname@gmail.com address undermines trust. A .co.za domain costs around R100/year.</li>
        <li><strong>Join a business association:</strong> BWA (Business Women's Association of South Africa) and WEF SA offer networking, mentorship, and tender opportunities specifically for women entrepreneurs.</li>
        <li><strong>Get a free mentor:</strong> SEDA's mentorship programme is free. The Lionesses of Africa network (lionessesofafrica.com) connects women entrepreneurs across the continent.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Do I need a business plan to register a company in SA?</strong><br>
      No, CIPC registration does not require a business plan. However, you will need one for funding applications from SEDA, NEF, NYDA, or any bank. A 5-page plan covering your product/service, target market, revenue model, costs, and 3-year financial projections is usually sufficient.</p>

      <p><strong>How long does it take to register a Pty Ltd?</strong><br>
      CIPC registration via BizPortal typically takes 5 to 7 business days once all documents are correctly submitted. Bank account opening can happen simultaneously.</p>

      <p><strong>What is the tax rate for a small business in SA?</strong><br>
      Standard corporate tax is 27% on taxable profit. Businesses qualifying as Small Business Corporations (SBCs) — with turnover under R20 million and no more than 20% of income from personal services — pay a reduced sliding-scale rate starting at 7% on the first R95,750 of taxable income (2026 rates). Speak to a registered tax practitioner to confirm whether your business qualifies.</p>

      <p>Ready to grow? Read our guide to <a href="{{BASE_PATH}}career/entrepreneurship/women-business-grants-sa.html">government grants for women-owned businesses</a> and our list of <a href="{{BASE_PATH}}career/entrepreneurship/12-side-hustles-under-r500.html">side hustles you can start with under R500</a>. Join the <a href="{{BASE_PATH}}community/membership/reasons-to-join.html">Inspiring Women community</a> to connect with other female founders across South Africa.</p>`;

let arr = lines.slice();
// Lines 1249-1261 is old small-business-sa content (line 1262 is closing backtick)
arr = replaceLines(arr, 1249, 1261, bizContent);
let result = arr.join('\n');
if (hasCRLF) result = result.replace(/\n/g, '\r\n');
fs.writeFileSync('./articles.js', result);
console.log('small-business-sa: written');

// ---- Re-read for next replacement (line numbers will shift) ----
raw = fs.readFileSync('./articles.js', 'utf8');
if (hasCRLF) raw = raw.replace(/\r\n/g, '\n');

// Find the new line numbers for mental-health-sa
const rawLines = raw.split('\n');
const mentalStart = rawLines.findIndex(l => l.includes('slug: "mental-health-sa"'));
console.log('mental-health-sa slug at line:', mentalStart + 1);
// Find the content backtick start after that
let contentStart = -1;
for (let i = mentalStart; i < mentalStart + 10; i++) {
  if (rawLines[i].trim() === '`') { contentStart = i + 1; break; }
  if (rawLines[i].includes('content: `')) { contentStart = i + 1; break; }
}
// Find the closing backtick
let contentEnd = -1;
for (let i = contentStart; i < contentStart + 200; i++) {
  if (rawLines[i] && rawLines[i].trim() === '`') { contentEnd = i; break; }
}
console.log('mental content lines:', contentStart + 1, 'to', contentEnd);

const mentalContent = `      <p>South Africa has one of the highest rates of depression and anxiety in Sub-Saharan Africa, yet mental health remains deeply stigmatised — especially for women expected to hold everything together. Whether you are navigating postpartum depression, <a href="{{BASE_PATH}}career/mental-health/wfh-stress.html">workplace burnout</a>, relationship trauma, or a general sense that something is wrong, this guide covers every resource available to you in South Africa and what to expect when you reach out.</p>

      <h2>Why Mental Health Matters for SA Women</h2>
      <p>South African women face a unique and heavy mental health burden. SADAG statistics suggest that 1 in 6 South Africans suffer from anxiety, depression, or substance use disorders in any given year — and women are disproportionately affected. Gender-based violence, economic inequality, the mental load of caregiving, unemployment, and social isolation all compound daily stress into something far more serious.</p>
      <p>Left untreated, depression and anxiety affect your relationships, productivity, physical health, and quality of life. Seeking help is not weakness — it is one of the most pragmatic, self-respecting things you can do.</p>

      <h2>Recognising When You Need Help</h2>
      <p>Everyone has bad days. When the following symptoms persist for two weeks or more, it is time to speak to a professional:</p>
      <ul>
        <li>Persistent sadness, emptiness, or hopelessness</li>
        <li>Loss of interest in activities you used to enjoy</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Significant changes in appetite or sleep</li>
        <li>Fatigue that rest does not resolve</li>
        <li>Feelings of worthlessness or excessive guilt</li>
        <li>Withdrawing from friends and family</li>
        <li>Physical symptoms with no medical explanation (headaches, chest tightness, digestive issues)</li>
        <li>Thoughts of harming yourself or not wanting to be alive</li>
      </ul>
      <p>If you are experiencing the last point, please call a crisis line immediately. You do not need to be in immediate danger to call — feeling like a burden or wishing you were not here counts.</p>

      <h2>Free Crisis and Helpline Resources in South Africa</h2>

      <h3>SADAG — South African Depression and Anxiety Group</h3>
      <p>SADAG is Africa's largest mental health support and advocacy group. They offer free telephone counselling, crisis intervention, and run specialised support groups for depression, anxiety, bipolar disorder, schizophrenia, PTSD, and suicide prevention.</p>
      <ul>
        <li><strong>24-hour Suicide Crisis Line: 0800 567 567</strong></li>
        <li><strong>SMS Line: 31393</strong></li>
        <li><strong>Substance Abuse Line: 0800 12 13 14</strong></li>
        <li>Website: sadag.org</li>
      </ul>

      <h3>Lifeline South Africa</h3>
      <p>Lifeline provides free, confidential telephone counselling for emotional trauma, distress, and crisis situations, 24 hours a day, 365 days a year.</p>
      <ul>
        <li><strong>Helpline: 0861 322 322</strong></li>
      </ul>

      <h3>PANDA — Perinatal Mental Health Project</h3>
      <p>If you are pregnant or have recently given birth and are struggling emotionally, PANDA specialises in perinatal and postnatal mental health. Postpartum depression affects up to 1 in 5 South African mothers yet is massively under-diagnosed. There is no shame in struggling after birth.</p>
      <ul>
        <li><strong>Helpline: 0800 005 806 (toll-free)</strong></li>
      </ul>

      <h3>Rape Crisis Cape Town Trust</h3>
      <p>Free counselling, legal support navigation, and trauma-informed care for survivors of sexual violence in the Western Cape.</p>
      <ul>
        <li><strong>24hr Helpline: 021 447 9762</strong></li>
      </ul>

      <h3>TEARS Foundation — Gender-Based Violence</h3>
      <p>Free SMS support, safety planning, and referrals to shelters and legal aid for survivors of gender-based violence.</p>
      <ul>
        <li><strong>SMS "Help" to 085 0851</strong></li>
      </ul>

      <h3>FAMSA — Families South Africa</h3>
      <p>Affordable counselling for individuals, couples, and families. Offices in all major cities, operating on a sliding-scale fee model — you pay according to what you can afford. Visit famsa.org.za.</p>

      <h2>Finding a Private Therapist in South Africa</h2>

      <h3>Verify HPCSA Registration</h3>
      <p>Always confirm your therapist is registered with the <strong>Health Professions Council of South Africa (HPCSA)</strong> at hpcsa.co.za. The title "therapist" or "life coach" alone is unregulated in SA — always ask for the HPCSA registration number. Registered categories include clinical psychologist, counselling psychologist, and registered counsellor.</p>

      <h3>Online Directories</h3>
      <ul>
        <li><strong>Therapy Route (therapyroute.com):</strong> Filter by location, specialisation, medical aid, and fee range. Many practitioners offer online sessions via Zoom.</li>
        <li><strong>Psychology Today SA (psychologytoday.com):</strong> International directory with comprehensive SA listings.</li>
        <li><strong>Mindful Therapy SA (mindfultherapy.co.za):</strong> Online therapy platform with flat-rate session pricing.</li>
      </ul>

      <h3>Medical Aid Coverage</h3>
      <p>Most open schemes (Discovery, Bonitas, Momentum, Fedhealth) offer 10 to 15 psychology sessions per year under mental health benefits. Pre-authorisation is required — contact your medical aid before your first appointment. Clinical psychologists in SA typically charge R900 to R1,800 per 50-minute session in 2026. FAMSA and university psychology departments offer significantly reduced rates.</p>

      <h2>Common Mental Health Conditions Affecting SA Women</h2>

      <h3>Depression</h3>
      <p>Clinical depression is a medical condition that changes brain chemistry. It is highly treatable with therapy, medication, or a combination. Many people feel significantly better within 6 to 12 weeks of beginning treatment.</p>

      <h3>Anxiety Disorders</h3>
      <p>Generalised anxiety disorder, panic disorder, and social anxiety are among the most common presentations in SA. Cognitive Behavioural Therapy (CBT) is the most evidence-based treatment, and many SA therapists specialise in it.</p>

      <h3>Burnout</h3>
      <p>Recognised by the WHO as an occupational phenomenon, burnout manifests as emotional exhaustion, cynicism, and ineffectiveness. It is particularly prevalent among South African women managing both careers and unpaid domestic labour. Read our guide on <a href="{{BASE_PATH}}career/mental-health/wfh-stress.html">managing workplace stress</a> for practical strategies.</p>

      <h3>Postpartum Depression</h3>
      <p>Distinct from the "baby blues" (which resolve within two weeks), postpartum depression is a clinical condition requiring treatment. Symptoms include inability to bond with your baby, persistent crying, rage, and intrusive thoughts. It is not a reflection of your fitness as a mother. Contact PANDA (0800 005 806) or speak to your gynaecologist or midwife. Also read our <a href="{{BASE_PATH}}health/pregnancy/hospital-bag.html">hospital bag guide</a> for what to expect in the early postpartum period.</p>

      <h3>PTSD and Trauma</h3>
      <p>South Africa has extremely high rates of trauma exposure. PTSD affects anyone whose nervous system has been overwhelmed by a threatening event — not just soldiers. Trauma-focused CBT and EMDR are both effective and available from SA practitioners.</p>

      <h2>Practical Daily Mental Health Strategies</h2>
      <ul>
        <li><strong>Sleep:</strong> Seven to nine hours is non-negotiable for emotional regulation. Sleep deprivation amplifies anxiety and depression significantly.</li>
        <li><strong>Movement:</strong> 30 minutes of moderate exercise five days a week has been shown to be as effective as antidepressants for mild to moderate depression. A walk outside counts.</li>
        <li><strong>Social connection:</strong> Even brief, low-effort contact with one trusted person per day makes a measurable difference.</li>
        <li><strong>Limit doomscrolling:</strong> News and social media trigger the same stress hormones as real danger. Set a 20-minute daily limit for news consumption.</li>
        <li><strong>Name what you feel:</strong> Simply labelling an emotion ("I feel overwhelmed right now") reduces its intensity by activating the prefrontal cortex.</li>
        <li><strong>Boundaries:</strong> "No" is a complete sentence. Overcommitting is one of the fastest routes to burnout for women socialised to say yes to everyone.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Is therapy covered by medical aid in South Africa?</strong><br>
      Yes, most open medical aid schemes provide mental health benefits covering 10 to 15 psychology sessions per year. Contact your medical aid's mental health department for details and pre-authorisation requirements.</p>

      <p><strong>What is the difference between a psychologist and a psychiatrist?</strong><br>
      A psychologist provides therapy and assessments. A psychiatrist is a medical doctor who can prescribe medication. For most anxiety and depression, a psychologist is the first port of call. If medication is needed, they will refer you to a psychiatrist.</p>

      <p><strong>Can I access free therapy in South Africa?</strong><br>
      Yes. FAMSA operates on a sliding-scale fee. University psychology departments (UCT, Wits, UP, UFS) offer community counselling at reduced rates. Public hospital psychiatric outpatient departments provide free care. SADAG (0800 567 567) can refer you to low-cost options in your area.</p>

      <p><strong>What if someone I love is in crisis right now?</strong><br>
      Call SADAG's 24-hour line: 0800 567 567. If there is immediate danger to their life, call 10111 (police) or 10177 (ambulance). Do not leave them alone — your presence matters more than having the right words.</p>

      <p><strong>How long does therapy take?</strong><br>
      Some people see significant improvement after 6 to 12 sessions of CBT for anxiety or depression. Others benefit from longer-term work for complex trauma. Your therapist will discuss this with you. Do not let the open-ended nature put you off starting — even a few sessions can shift your perspective meaningfully.</p>`;

arr = rawLines.slice();
arr = replaceLines(arr, contentStart + 1, contentEnd, mentalContent);
result = arr.join('\n');
if (hasCRLF) result = result.replace(/\n/g, '\r\n');
fs.writeFileSync('./articles.js', result);
console.log('mental-health-sa: written');

// ---- Re-read for fat-freeze ----
raw = fs.readFileSync('./articles.js', 'utf8');
if (hasCRLF) raw = raw.replace(/\r\n/g, '\n');
const arr2 = raw.split('\n');

const fatIdx = arr2.findIndex(l => l.includes('slug: "fat-freeze-laser-lipo"'));
console.log('fat-freeze slug at line:', fatIdx + 1);
let fatContentStart = -1;
for (let i = fatIdx; i < fatIdx + 10; i++) {
  if (arr2[i].includes('content: `')) { fatContentStart = i + 1; break; }
}
let fatContentEnd = -1;
for (let i = fatContentStart; i < fatContentStart + 300; i++) {
  if (arr2[i] && arr2[i].trim() === '`') { fatContentEnd = i; break; }
}
console.log('fat content lines:', fatContentStart + 1, 'to', fatContentEnd);

const fatContent = `      <p>Stubborn pockets of fat that resist diet and exercise are one of the most common frustrations women bring to aesthetic clinics across South Africa. The two most popular non-surgical solutions — <strong>Fat Freeze (Cryolipolysis)</strong> and <strong>Laser Lipo</strong> — are both widely available in SA, but they work very differently, suit different goals, and vary significantly in cost. This guide breaks down exactly how each treatment works, what to expect, what it costs in 2026, and how to choose the right one for your body.</p>

      <h2>What Is Fat Freezing (Cryolipolysis)?</h2>
      <p>Fat freezing was developed from the observation that fat cells are more sensitive to cold than surrounding tissue. The technology — known commercially as CoolSculpting, CoolTech, or various generic versions — uses precisely controlled cooling applied via a suction applicator to target localised fat deposits.</p>

      <h3>How It Works</h3>
      <p>The applicator suctions the targeted area (abdomen, flanks, inner thighs, bra fat, double chin, etc.) and cools it to between -5°C and -10°C for 35 to 60 minutes per cycle. Fat cells crystallise at this temperature while surrounding nerves, skin, and muscle are unharmed. Over the following 8 to 12 weeks, your lymphatic system naturally processes and eliminates the dead fat cells. Because the fat cells are permanently destroyed rather than just shrunk, results are considered long-lasting — provided you maintain a stable weight.</p>

      <h3>Best Treated Areas</h3>
      <ul>
        <li>Lower abdomen ("pooch") and flanks (love handles)</li>
        <li>Inner and outer thighs</li>
        <li>Upper arms ("bingo wings")</li>
        <li>Double chin (submental fat)</li>
        <li>Bra fat (back rolls)</li>
      </ul>
      <p>Fat freezing works best on <em>pinchable</em> fat. It is not a weight loss treatment and is not appropriate for visceral fat (the deep fat around your organs associated with metabolic disease).</p>

      <h3>What to Expect</h3>
      <p>The first two minutes feel intensely cold with strong suction. After about five minutes, the area becomes numb and most clients read or nap during the session. Some redness, bruising, and tenderness are normal in the days after treatment. Most people see a 20% to 25% fat reduction per treated area after a single session, with full results appearing at 8 to 12 weeks.</p>

      <h2>What Is Laser Lipo?</h2>
      <p>Laser lipo — also marketed as laser lipolysis, i-Lipo, or laser body sculpting — uses low-level laser energy to disrupt fat cell membranes without destroying the cells. This is the fundamental difference from fat freezing: laser lipo <em>empties</em> fat cells rather than eliminating them.</p>

      <h3>How It Works</h3>
      <p>Laser pads or a laser device are applied to the target area. The low-level laser energy penetrates 1 to 2 cm into the subcutaneous fat layer, opening temporary pores in the fat cell membranes. Cell contents — triglycerides, fatty acids, and glycerol — leak out and are processed by your lymphatic system. The empty fat cells remain in the body and can refill if you gain weight.</p>

      <h3>Skin Tightening Benefits</h3>
      <p>One advantage of laser lipo over fat freezing is that the heat from the laser stimulates collagen production in the dermis, which produces a mild skin-tightening effect. This makes it popular for areas with some skin laxity, like the post-pregnancy tummy or the inner arms.</p>

      <h3>What to Expect</h3>
      <p>Laser lipo is painless — most clients describe it as a gentle warmth. Sessions typically last 20 to 40 minutes. Most clinics recommend 30 to 60 minutes of exercise immediately after each session to burn the released fatty acids before they are reabsorbed. A course of 6 to 10 sessions is typical, done twice a week.</p>

      <h2>Side-by-Side Comparison</h2>
      <table style="width:100%; border-collapse:collapse; margin: 1.5rem 0;">
        <thead>
          <tr style="background:#f8e4ed;">
            <th style="padding:10px; text-align:left; border:1px solid #ddd;">Factor</th>
            <th style="padding:10px; text-align:left; border:1px solid #ddd;">Fat Freeze</th>
            <th style="padding:10px; text-align:left; border:1px solid #ddd;">Laser Lipo</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:9px; border:1px solid #ddd;">Fat cells destroyed?</td><td style="padding:9px; border:1px solid #ddd;">Yes — permanent</td><td style="padding:9px; border:1px solid #ddd;">No — emptied only</td></tr>
          <tr style="background:#fafafa;"><td style="padding:9px; border:1px solid #ddd;">Sessions needed</td><td style="padding:9px; border:1px solid #ddd;">1–2 per area</td><td style="padding:9px; border:1px solid #ddd;">6–10 per course</td></tr>
          <tr><td style="padding:9px; border:1px solid #ddd;">Time to see results</td><td style="padding:9px; border:1px solid #ddd;">8–12 weeks</td><td style="padding:9px; border:1px solid #ddd;">2–4 weeks</td></tr>
          <tr style="background:#fafafa;"><td style="padding:9px; border:1px solid #ddd;">Skin tightening</td><td style="padding:9px; border:1px solid #ddd;">Minimal</td><td style="padding:9px; border:1px solid #ddd;">Mild to moderate</td></tr>
          <tr><td style="padding:9px; border:1px solid #ddd;">Discomfort</td><td style="padding:9px; border:1px solid #ddd;">Cold + suction (first 5 min)</td><td style="padding:9px; border:1px solid #ddd;">None — warm sensation</td></tr>
          <tr style="background:#fafafa;"><td style="padding:9px; border:1px solid #ddd;">Downtime</td><td style="padding:9px; border:1px solid #ddd;">None</td><td style="padding:9px; border:1px solid #ddd;">None</td></tr>
          <tr><td style="padding:9px; border:1px solid #ddd;">Longevity of results</td><td style="padding:9px; border:1px solid #ddd;">Long-term (cells gone)</td><td style="padding:9px; border:1px solid #ddd;">Moderate (cells can refill)</td></tr>
        </tbody>
      </table>

      <h2>Cost in South Africa (2026)</h2>
      <ul>
        <li><strong>Fat Freeze — single area:</strong> R800 to R2,500 per cycle (budget machines vs premium certified clinics)</li>
        <li><strong>Fat Freeze — full abdomen (2 applicators):</strong> R1,800 to R5,000</li>
        <li><strong>Laser Lipo — single session:</strong> R300 to R700</li>
        <li><strong>Laser Lipo — full course (8 sessions):</strong> R2,400 to R5,600</li>
      </ul>
      <p>Be cautious of extremely low prices — R199 "fat freeze" deals often use outdated or poorly maintained equipment that does not achieve adequate temperatures for effective cryolipolysis. Always ask what machine the clinic uses and whether the practitioner is medically trained.</p>

      <h2>Who Is a Good Candidate?</h2>
      <p>Both treatments suit adults at or near their goal weight who want to address specific stubborn areas. Good candidates:</p>
      <ul>
        <li>Are within 10 to 15 kg of their ideal weight</li>
        <li>Have identifiable, localised fat deposits that do not respond to diet and exercise</li>
        <li>Have realistic expectations — these treatments reduce, not eliminate, fat in the treated area</li>
        <li>Are not pregnant or breastfeeding</li>
      </ul>
      <p>Fat freezing is not suitable for people with cryoglobulinaemia, cold agglutinin disease, or paroxysmal cold haemoglobinuria. Laser lipo is not suitable over active skin infections, skin lesions, or implanted metal in the treatment area.</p>

      <h2>Combining Treatments for Better Results</h2>
      <ul>
        <li><strong>Fat Freeze + Manual Lymphatic Drainage:</strong> Speeds up the elimination of frozen fat cells post-treatment</li>
        <li><strong>Laser Lipo + Radio Frequency (RF):</strong> RF adds stronger skin tightening alongside laser lipo's contouring effect</li>
        <li><strong>Fat Freeze + Laser Lipo:</strong> Fat freeze first to destroy cells, then laser lipo to address remaining laxity and improve skin texture</li>
      </ul>

      <h2>Questions to Ask Your Clinic Before Booking</h2>
      <ul>
        <li>What machine do you use, and what is its clinical certification?</li>
        <li>Is the practitioner medically trained or a qualified aesthetician?</li>
        <li>Can I see before-and-after photos from your own clients (not stock photos)?</li>
        <li>What is the realistic outcome for my specific body type and area?</li>
        <li>What is included in the quoted price — consultation, aftercare, follow-up?</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Is fat freezing safe?</strong><br>
      Yes, cryolipolysis is an FDA-cleared procedure with an excellent safety profile when performed correctly. Common side effects are temporary redness, bruising, swelling, and sensitivity. A rare complication called paradoxical adipose hyperplasia (PAH) — where the fat thickens rather than reduces — affects approximately 1 in 20,000 treatments.</p>

      <p><strong>Will fat return after fat freezing?</strong><br>
      The destroyed fat cells do not regenerate. However, remaining fat cells in that area and elsewhere can expand if you gain weight significantly. Most people maintain results long-term with a stable lifestyle.</p>

      <p><strong>Does laser lipo work without exercise?</strong><br>
      The treatment technically works without exercise, but results are significantly better with 30 to 60 minutes of cardio immediately after each session. Without physical activity, your body may redeposit the mobilised fat elsewhere.</p>

      <p><strong>Which is better for a post-pregnancy tummy?</strong><br>
      For a post-pregnancy tummy with some skin laxity, a combination of laser lipo and radio frequency is often recommended before considering fat freeze. If the skin is significantly loose, neither treatment addresses excess skin — a professional assessment is essential. Ensure you have fully recovered from childbirth and are no longer breastfeeding before beginning any aesthetic treatment.</p>

      <p>For best long-term results, combine your treatments with consistent healthy eating. Our <a href="{{BASE_PATH}}recipes/quick-meals/15-min-dinners.html">15-minute dinner recipes</a> make it easier to eat well even on busy days.</p>`;

let arr3 = arr2.slice();
arr3 = replaceLines(arr3, fatContentStart + 1, fatContentEnd, fatContent);
result = arr3.join('\n');
if (hasCRLF) result = result.replace(/\n/g, '\r\n');
fs.writeFileSync('./articles.js', result);
console.log('fat-freeze-laser-lipo: written');

// ---- Re-read for hospital-bag ----
raw = fs.readFileSync('./articles.js', 'utf8');
if (hasCRLF) raw = raw.replace(/\r\n/g, '\n');
const arr4 = raw.split('\n');

const hospIdx = arr4.findIndex(l => l.includes('slug: "hospital-bag"'));
console.log('hospital-bag slug at line:', hospIdx + 1);
let hospContentStart = -1;
for (let i = hospIdx; i < hospIdx + 10; i++) {
  if (arr4[i].includes('content: `')) { hospContentStart = i + 1; break; }
}
let hospContentEnd = -1;
for (let i = hospContentStart; i < hospContentStart + 300; i++) {
  if (arr4[i] && arr4[i].trim() === '`') { hospContentEnd = i; break; }
}
console.log('hosp content lines:', hospContentStart + 1, 'to', hospContentEnd);

const hospContent = `      <p>Whether you are a first-time mother or adding to your family, the hospital bag is one of those tasks that feels overwhelming until you have a clear, comprehensive list. South African hospitals — whether you are delivering at a Netcare, Mediclinic, Life Healthcare private facility, or a public hospital — have specific requirements and culture around what to bring. This guide covers everything: what to pack, what to leave at home, how to prepare differently for a natural birth versus a C-section, and how to handle the early postpartum days with confidence.</p>

      <h2>When to Pack Your Hospital Bag</h2>
      <p>Have your hospital bag fully packed and placed near the front door by <strong>36 weeks of pregnancy</strong>. Premature labour can start with little warning, and the last thing you want during early contractions is to scramble looking for your medical aid card or your baby's coming-home outfit. If you are carrying multiples or have a high-risk pregnancy, aim for 32 to 34 weeks.</p>

      <h2>Private vs Public Hospital: What to Know</h2>
      <p>If you are delivering at a <strong>private hospital</strong> (Netcare, Mediclinic, Life Healthcare), they typically provide basic toiletries, hospital gowns, and some baby essentials, but the standard of provision varies significantly by facility. Call the maternity ward at 34 weeks to confirm what is provided.</p>
      <p>If you are delivering at a <strong>public hospital</strong> (Groote Schuur, Chris Hani Baragwanath, Charlotte Maxeke, etc.), plan to bring everything yourself. Public maternity wards are under immense resource pressure and while the clinical care is often excellent, you cannot rely on being provided with toiletries, pads, or additional baby clothing beyond the basics.</p>

      <h2>For Mom: Clothing and Comfort</h2>
      <ul>
        <li><strong>2 to 3 pairs of comfortable pyjamas:</strong> Choose ones that button or zip at the front if you plan to breastfeed. Dark colours are practical — postpartum bleeding and leaking breasts are a reality. Pack enough for a 2 to 3 night stay minimum (C-sections often require 3 to 4 nights).</li>
        <li><strong>A comfortable robe or gown:</strong> For walking the corridors during early labour or after delivery. Something soft and easy to put on one-handed while holding a baby.</li>
        <li><strong>Warm socks and slippers:</strong> Hospital floors are cold and hard. Non-slip soles are important — you may feel light-headed in the first 24 hours after delivery.</li>
        <li><strong>A going-home outfit:</strong> Something loose and comfortable. Your stomach will still look pregnant for several weeks after delivery. A loose dress or maternity leggings and a long top work well.</li>
        <li><strong>Supportive bra:</strong> A soft nursing bra or sleep bra. Avoid underwire for at least the first few weeks while breastfeeding is establishing.</li>
      </ul>

      <h2>For Mom: Maternity Pads and Hygiene</h2>
      <ul>
        <li><strong>Maternity pads:</strong> Pack at least 2 full packs of the heaviest maternity pads available (Dis-Chem, Clicks, and most pharmacies stock them). Postpartum bleeding (lochia) is significantly heavier than a regular period for the first few days. Do not use tampons or menstrual cups during this period.</li>
        <li><strong>High-waisted cotton underwear:</strong> Pack 5 to 7 pairs. If you have a C-section, high-waisted knickers will not rub against your incision. Many mums use cheap disposable underwear for the first few days.</li>
        <li><strong>Peri bottle:</strong> A squeeze bottle for rinsing after using the toilet is a lifesaver for perineal soreness after a vaginal birth. Many SA hospitals do not provide these.</li>
        <li><strong>Witch hazel pads or cooling maternity pads:</strong> Gel-infused maternity pads you can chill in the hospital fridge. Available at Dis-Chem and Clicks. Invaluable for perineal swelling and discomfort after vaginal delivery.</li>
      </ul>

      <h2>For Mom: Toiletries</h2>
      <ul>
        <li>Travel-sized shampoo, conditioner, body wash, face wash</li>
        <li>Toothbrush and toothpaste</li>
        <li>Deodorant and moisturiser</li>
        <li>Lip balm (hospital air is dry and breathing exercises during labour are drying)</li>
        <li>Dry shampoo (for days when a full shower is not possible)</li>
        <li>Face wipes for quick freshening up</li>
        <li>Hair ties — lots of them</li>
      </ul>

      <h2>For Mom: Breastfeeding Essentials</h2>
      <ul>
        <li><strong>Lanolin nipple cream (Lansinoh or Medela):</strong> Start applying from the first feed. Cracked nipples are the most common reason women stop breastfeeding in the first week — lanolin prevents and heals this.</li>
        <li><strong>Breast pads:</strong> Pack both disposable and reusable for the hospital. Your milk will come in on day 2 to 4 and engorgement can cause significant leaking.</li>
        <li><strong>A nursing pillow:</strong> A small travel-sized breastfeeding pillow supports the baby at the right height and reduces shoulder and back strain during long feeds.</li>
      </ul>

      <h2>For Mom: Nutrition and Hydration</h2>
      <p>Hospital food is rarely available on demand, and labour and early postpartum recovery are physically exhausting. Pack:</p>
      <ul>
        <li>Energy bars, oat bars, or trail mix</li>
        <li>Biltong or droewors (protein-dense, no refrigeration needed)</li>
        <li>Electrolyte sachets or sports drinks (Powerade, Rehidrat)</li>
        <li>A reusable water bottle with a straw — you will be drinking constantly during labour, and a straw is easier when you cannot sit up</li>
        <li>Mints or chewing gum for dry mouth during active labour</li>
      </ul>

      <h2>For Mom: Tech and Entertainment</h2>
      <ul>
        <li>Phone charger with a long cable (hospital plug points are rarely next to the bed)</li>
        <li>Portable power bank</li>
        <li>Earphones and a tablet or phone with downloaded shows, podcasts, or hypnobirthing audio</li>
        <li>A small Bluetooth speaker if you have a birth playlist</li>
      </ul>

      <h2>For Baby: Newborn Essentials</h2>
      <ul>
        <li><strong>5 to 6 babygrows and vests:</strong> Newborn or 0-3 month size. Babies go through multiple outfits per day. Look for babygrows with built-in scratch mitts.</li>
        <li><strong>A warm beanie and socks:</strong> Newborns lose heat rapidly through their heads, even in summer with hospital air-conditioning.</li>
        <li><strong>A going-home outfit:</strong> Comfortable and easy to put on. For car seat safety, avoid very bulky snowsuit-style outfits — a thin onesie under a blanket is safest.</li>
        <li><strong>1 full pack of newborn nappies (size 0 or 1):</strong> Pampers, Huggies, and Clicks own brand are all widely available in SA.</li>
        <li><strong>Unscented sensitive baby wipes:</strong> Avoid fragranced wipes on newborn skin. Pampers Sensitive and Huggies Pure are good choices.</li>
        <li><strong>Sudocrem or Fissan barrier cream:</strong> Apply at every nappy change from birth to prevent nappy rash before it starts.</li>
        <li><strong>2 to 3 receiving blankets:</strong> For swaddling, warmth, and covering during feeds. Muslin swaddle blankets are breathable and versatile.</li>
      </ul>

      <h2>Important Documents</h2>
      <p>Keep these in a clearly labelled folder at the very top of your bag:</p>
      <ul>
        <li>Your South African ID or passport</li>
        <li>Your partner's or support person's ID</li>
        <li>Medical aid card and pre-authorisation number (call your scheme at 36 weeks to get this — it speeds up hospital admission enormously)</li>
        <li>Your antenatal clinic card or maternity notes</li>
        <li>Your birth plan (keep it to one page, clear and flexible)</li>
        <li>Your gynaecologist and paediatrician's contact numbers</li>
      </ul>

      <h2>The Birth Partner's Bag</h2>
      <p>If your partner or support person is staying overnight, they need their own bag: a change of clothes, basic toiletries, phone charger and power bank, snacks and drinks, a pillow, and cash or a card for the cafeteria. They will not be able to leave easily once labour is active.</p>

      <h2>What NOT to Pack</h2>
      <ul>
        <li><strong>Jewellery and valuables:</strong> Rings, necklaces, expensive watches — leave them at home. Hospitals cannot be held responsible for lost items.</li>
        <li><strong>Your entire skincare routine:</strong> One moisturiser and a face wash is enough.</li>
        <li><strong>Too many baby outfits:</strong> Five to six is plenty. Overdressing a newborn risks overheating — they cannot regulate their own body temperature.</li>
        <li><strong>Candles or essential oil diffusers:</strong> Not permitted in hospital wards for fire safety reasons.</li>
        <li><strong>Fresh flowers:</strong> Many maternity wards restrict these due to allergy and infection control policies.</li>
      </ul>

      <h2>C-Section Specific Additions</h2>
      <p>If you are having a planned Caesarean, add these:</p>
      <ul>
        <li><strong>High-waisted underwear:</strong> Critical for comfort over the incision site — the waistband must not touch your scar.</li>
        <li><strong>Loose, high-waisted pyjama bottoms:</strong> Nothing with a waistband that sits on the incision.</li>
        <li><strong>Post-surgical support band or belly binder:</strong> Invaluable for core support and incision comfort in the first weeks. Available at Dis-Chem and Clicks.</li>
        <li><strong>Slip-on shoes:</strong> You will not be able to bend down to tie laces for the first few days.</li>
        <li><strong>A pillow to hold against your incision:</strong> For coughing and getting in and out of bed — the "pillow press" significantly reduces incision pain.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>When should I pack my hospital bag?</strong><br>
      By 36 weeks, or 32 to 34 weeks if you are carrying multiples or have a high-risk pregnancy. Have the bag by the front door, not in a cupboard.</p>

      <p><strong>Should I bring my own pillows?</strong><br>
      Many SA moms do. Use a non-white pillowcase so it is not confused with hospital laundry. A proper pillow significantly improves sleep quality and breastfeeding positioning.</p>

      <p><strong>How many nights should I prepare for?</strong><br>
      An uncomplicated vaginal birth typically requires 1 to 2 nights. A C-section typically requires 2 to 4 nights. Pack for at least 3 nights and have a family member ready to bring extra items if needed.</p>

      <p><strong>What if my baby goes to the NICU?</strong><br>
      If your baby needs NICU care, pack a small pumping kit. The hospital will typically provide a hospital-grade pump for NICU mothers, but having a portable pump at home helps maintain supply during extended stays. Medela, Spectra, and Haakaa pumps are available at Dis-Chem and Clicks.</p>

      <p><strong>What about postpartum mental health?</strong><br>
      Baby blues in the first 1 to 2 weeks are normal and resolve on their own. If feelings of hopelessness, inability to bond, or intrusive thoughts persist beyond two weeks, please reach out for support. Our <a href="{{BASE_PATH}}health/mental-health/mental-health-sa.html">mental health resources guide</a> lists free and low-cost options including the PANDA helpline (0800 005 806), specifically for perinatal mental health.</p>`;

let arr5 = arr4.slice();
arr5 = replaceLines(arr5, hospContentStart + 1, hospContentEnd, hospContent);
result = arr5.join('\n');
if (hasCRLF) result = result.replace(/\n/g, '\r\n');
fs.writeFileSync('./articles.js', result);
console.log('hospital-bag: written');

// ---- Validate ----
try {
  delete require.cache[require.resolve('./articles.js')];
  const articles = require('./articles.js');
  console.log('\narticles.js: VALID — total articles:', articles.length);
  const targets = ['mental-health-sa', 'small-business-sa', 'fat-freeze-laser-lipo', 'hospital-bag'];
  targets.forEach(slug => {
    const a = articles.find(x => x.slug === slug);
    if (a) {
      const words = a.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w.length > 0).length;
      console.log(slug + ': ' + words + ' words');
    }
  });
} catch(e) {
  console.log('\narticles.js: INVALID -', e.message);
}
