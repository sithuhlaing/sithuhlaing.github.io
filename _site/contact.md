---
layout: page
title: Contact
permalink: /contact/
contact_form: true
---

<section class="section-white contact-section">
  <div class="container">
    <div class="intro-content">
      <h2>Let's Connect</h2>
      <p class="lead">I'm currently exploring new opportunities in Germany and internationally. Whether you're looking for a Principal Consultant, Full Stack Developer, or technical advisor, I'd love to hear from you.</p>
    </div>
    
    <div class="contact-info">
      <div class="contact-item">
        <h3>📧 Email</h3>
        <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">Primary contact method - I typically respond within 24 hours</p>
      </div>
      
      <div class="contact-item">
        <h3>📱 Phone</h3>
        <a href="tel:{{ site.author.phone }}">{{ site.author.phone }}</a>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">Available for calls during CET business hours</p>
      </div>
      
      <div class="contact-item">
        <h3>💼 LinkedIn</h3>
        <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank">Connect with me</a>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">Professional networking and career discussions</p>
      </div>
      
      <div class="contact-item">
        <h3>📍 Location</h3>
        <p>{{ site.author.location }} 🇩🇪</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">Available for remote work and on-site projects</p>
      </div>
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container">
    <div class="contact-form">
      <h3 style="text-align: center; margin-bottom: 2rem; color: #764ba2;">Send Me a Message</h3>
      <p style="text-align: center; margin-bottom: 3rem; color: #666;">Use the form below to get in touch. I'll get back to you as soon as possible!</p>
      
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="Your full name">
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="your.email@example.com">
        </div>
        
        <div class="form-group">
          <label for="company">Company/Organization</label>
          <input type="text" id="company" name="company" placeholder="Your company name (optional)">
        </div>
        
        <div class="form-group">
          <label for="subject">Subject *</label>
          <select id="subject" name="subject" required>
            <option value="">Select a subject</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Consulting Project">Consulting Project</option>
            <option value="Technical Collaboration">Technical Collaboration</option>
            <option value="Speaking/Training">Speaking/Training Opportunity</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="budget">Project Budget (if applicable)</label>
          <select id="budget" name="budget">
            <option value="">Select budget range</option>
            <option value="Under €5,000">Under €5,000</option>
            <option value="€5,000 - €15,000">€5,000 - €15,000</option>
            <option value="€15,000 - €50,000">€15,000 - €50,000</option>
            <option value="€50,000+">€50,000+</option>
            <option value="Full-time Position">Full-time Position</option>
            <option value="To be discussed">To be discussed</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="timeline">Project Timeline (if applicable)</label>
          <select id="timeline" name="timeline">
            <option value="">Select timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Ongoing">Ongoing</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" required placeholder="Tell me about your project, opportunity, or inquiry. Please include any relevant details about requirements, technologies, or expectations."></textarea>
        </div>
        
        <div class="form-group">
          <label style="display: flex; align-items: center; font-size: 0.9rem;">
            <input type="checkbox" name="newsletter" style="margin-right: 0.5rem;">
            I'd like to receive occasional updates about your availability and new projects
          </label>
        </div>
        
        <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
        
        <div id="form-status" style="margin-top: 1rem; text-align: center;"></div>
      </form>
      
      <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #eee;">
        <p style="font-size: 0.9rem; color: #666;">
          Prefer email? Send directly to <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section-white">
  <div class="container">
    <h2>What I'm Looking For</h2>
    <div class="opportunities-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
      
      <div class="opportunity-card card" style="padding: 2rem;">
        <h3>💼 Full-time Positions</h3>
        <div class="achievements">
          <div class="achievement-item">Principal/Senior Software Architect roles</div>
          <div class="achievement-item">Technical Lead positions</div>
          <div class="achievement-item">Full Stack Developer roles</div>
          <div class="achievement-item">Engineering Manager opportunities</div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
          Particularly interested in fintech, transportation, or enterprise software companies in Germany.
        </p>
      </div>
      
      <div class="opportunity-card card" style="padding: 2rem;">
        <h3>🚀 Consulting Projects</h3>
        <div class="achievements">
          <div class="achievement-item">System architecture and design</div>
          <div class="achievement-item">Technology stack migration</div>
          <div class="achievement-item">Performance optimization</div>
          <div class="achievement-item">Team mentoring and training</div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
          Short to medium-term projects where my expertise can add immediate value.
        </p>
      </div>
      
      <div class="opportunity-card card" style="padding: 2rem;">
        <h3>🎯 Collaborations</h3>
        <div class="achievements">
          <div class="achievement-item">Open source contributions</div>
          <div class="achievement-item">Technical writing and blogging</div>
          <div class="achievement-item">Conference speaking</div>
          <div class="achievement-item">Community building</div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
          Opportunities to share knowledge and contribute to the tech community.
        </p>
      </div>
      
      <div class="opportunity-card card" style="padding: 2rem;">
        <h3>📚 Training & Workshops</h3>
        <div class="achievements">
          <div class="achievement-item">Corporate training sessions</div>
          <div class="achievement-item">Technology workshops</div>
          <div class="achievement-item">Code review and best practices</div>
          <div class="achievement-item">Architecture design sessions</div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
          Help teams level up their technical skills and development practices.
        </p>
      </div>
      
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-section" style="max-width: 800px; margin: 0 auto;">
      
      <div class="faq-item" style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 8px;">
        <h3 style="color: #764ba2; margin-bottom: 1rem;">Are you available for remote work?</h3>
        <p>Yes! I have extensive experience working with distributed teams across different time zones. I'm comfortable with remote work arrangements and have all the necessary tools and setup for productive remote collaboration.</p>
      </div>
      
      <div class="faq-item" style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 8px;">
        <h3 style="color: #764ba2; margin-bottom: 1rem;">What's your availability for new projects?</h3>
        <p>I'm currently on a career break and actively exploring new opportunities. I can start immediately for the right project or position. For consulting work, I'm flexible with timelines and can accommodate urgent requirements.</p>
      </div>
      
      <div class="faq-item" style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 8px;">
        <h3 style="color: #764ba2; margin-bottom: 1rem;">Do you work with startups or only large companies?</h3>
        <p>I enjoy working with organizations of all sizes! While my recent experience has been with large enterprises, I appreciate the energy and innovation of startups. Each brings unique challenges and learning opportunities.</p>
      </div>
      
      <div class="faq-item" style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 8px;">
        <h3 style="color: #764ba2; margin-bottom: 1rem;">What are your rate expectations for consulting?</h3>
        <p>My rates vary depending on the project scope, duration, and requirements. I'm happy to discuss this during our initial conversation. I believe in providing value that far exceeds the investment.</p>
      </div>
      
      <div class="faq-item" style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 8px;">
        <h3 style="color: #764ba2; margin-bottom: 1rem;">Can you provide references?</h3>
        <p>Absolutely! I can provide references from recent positions and projects upon request. Due to confidentiality agreements, I'll need to coordinate with former colleagues, but I'm happy to facilitate introductions.</p>
      </div>
      
    </div>
  </div>
</section>

<section class="section-white">
  <div class="container text-center">
    <h2>Let's Build Something Amazing</h2>
    <p class="lead">Ready to discuss your project or opportunity? I'm just a message away.</p>
    
    <div class="contact-cta" style="margin: 3rem 0;">
      <div style="display: flex; gap: 1rem; justify-content: center; align-items: center; flex-wrap: wrap;">
        <a href="mailto:{{ site.author.email }}" class="btn btn-primary">
          📧 Send Email
        </a>
        <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" class="btn btn-secondary">
          💼 Connect on LinkedIn
        </a>
        <a href="tel:{{ site.author.phone }}" class="btn btn-outline">
          📱 Call Me
        </a>
      </div>
    </div>
    
    <p style="font-size: 0.9rem; color: #666; margin-top: 2rem;">
      <strong>Response Time:</strong> I typically respond to inquiries within 24 hours during business days.
      <br>
      <strong>Time Zone:</strong> Central European Time (CET/CEST)
    </p>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const company = formData.get('company');
            const budget = formData.get('budget');
            const timeline = formData.get('timeline');
            
            // Create mailto link with all form data
            let mailtoBody = `Name: ${name}\n`;
            mailtoBody += `Email: ${email}\n`;
            if (company) mailtoBody += `Company: ${company}\n`;
            if (budget) mailtoBody += `Budget: ${budget}\n`;
            if (timeline) mailtoBody += `Timeline: ${timeline}\n`;
            mailtoBody += `\nMessage:\n${message}`;
            
            const mailtoLink = `mailto:{{ site.author.email }}?subject=${encodeURIComponent('Contact Form: ' + subject)}&body=${encodeURIComponent(mailtoBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            statusDiv.innerHTML = '<div class="alert alert-success">Your email client should open now. Thank you for reaching out!</div>';
            
            // Reset form after a delay
            setTimeout(() => {
                form.reset();
                statusDiv.innerHTML = '';
            }, 3000);
        });
    }
});
</script>