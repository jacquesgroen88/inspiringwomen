const fs = require('fs');
const template = fs.readFileSync('article_template.html', 'utf-8');

const pages = [
    {
        filename: 'privacy.html',
        title: 'Privacy Policy',
        content: `
            <h2>Privacy Policy</h2>
            <p>At Inspiring Women, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
            <h3>Information Collection</h3>
            <p>We collect information when you register on our site, subscribe to our newsletter, respond to a survey or fill out a form. This may include your name, email address, mailing address, or phone number.</p>
            <h3>Use of Information</h3>
            <p>Any of the information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to improve customer service, or to send periodic emails.</p>
            <h3>Cookie Policy</h3>
            <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
        `
    },
    {
        filename: 'terms.html',
        title: 'Terms of Service',
        content: `
            <h2>Terms of Service</h2>
            <p>Welcome to Inspiring Women. By accessing our website, you agree to these Terms of Service.</p>
            <h3>Use of the Site</h3>
            <p>You may use our site for lawful purposes only. You must not use our site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
            <h3>Intellectual Property</h3>
            <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of Inspiring Women or its content suppliers and protected by international copyright laws.</p>
            <h3>Disclaimer</h3>
            <p>The materials on Inspiring Women's web site are provided "as is". Inspiring Women makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        `
    },
    {
        filename: 'contact.html',
        title: 'Contact Us / Advertise',
        content: `
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have a question about our content, want to contribute, or are interested in advertising on Inspiring Women, please get in touch.</p>
            
            <h3>Advertising Inquiries</h3>
            <p>Inspiring Women reaches thousands of engaged readers every day. If you want to put your brand in front of a smart, ambitious female audience, we offer several advertising placements, including the 300x600 and 728x90 banners featured on our site.</p>
            <p>Contact our advertising team at <strong>advertising@inspiringwomen.co.za</strong> for a media kit and pricing.</p>
            
            <h3>General Inquiries</h3>
            <p>Email: <strong>info@inspiringwomen.co.za</strong></p>
            <p>Phone: +27 (0)11 555 0198</p>
            <p>Address: 145 Main Road, Green Point, Cape Town, 8001, South Africa</p>
        `
    },
    {
        filename: 'about.html',
        title: 'About Us',
        content: `
            <h2>About Inspiring Women</h2>
            <p>Inspiring Women is South Africa's premier digital destination for the modern woman. We cover everything from career advice and financial planning to lifestyle, health, and beauty.</p>
            <p>Our mission is to empower, educate, and entertain. We believe that every woman has an inspiring story to tell and the potential to achieve greatness in whatever field she chooses.</p>
        `
    }
];

pages.forEach(page => {
    let html = template
        .replace(/\{\{TITLE\}\}/g, page.title)
        .replace(/\{\{BASE_PATH\}\}/g, '')
        .replace(/\{\{CATEGORY\}\}/g, 'PAGE')
        .replace(/\{\{AUTHOR\}\}/g, 'Inspiring Women')
        .replace(/\{\{DATE\}\}/g, new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
        .replace(/<img src="\{\{IMAGE\}\}" alt=".*?" class="single-article-image">/g, '') // Remove hero image for pages
        .replace(/\{\{CONTENT\}\}/g, page.content)
        .replace(/\{\{RELATED_ARTICLES\}\}/g, '');
        
    fs.writeFileSync(page.filename, html);
    console.log('Generated ' + page.filename);
});
