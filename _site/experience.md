---
layout: page
title: Professional Experience
permalink: /experience/
---

<section class="section-white">
  <div class="container">
    <div class="intro-content">
      <h2>{{ site.author.experience_years }}+ Years of Software Development Excellence</h2>
      <p class="lead">A comprehensive journey through prestigious organizations across multiple countries, delivering innovative solutions and leading high-performance teams.</p>
    </div>
    
    <div class="stats">
      <div class="stat-card">
        <span class="stat-number">{{ site.author.experience_years }}+</span>
        <span class="stat-label">Years Experience</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">10+</span>
        <span class="stat-label">Companies</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">5+</span>
        <span class="stat-label">Countries</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">100+</span>
        <span class="stat-label">Projects Delivered</span>
      </div>
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container">
    <h2>Career Timeline</h2>
    <div class="experience-timeline">
      {% for job in site.data.experience %}
      <div class="timeline-item">
        <h3>{{ job.title }}</h3>
        <div class="company">
          {{ job.company }}
          {% if job.employer %} (via {{ job.employer }}){% endif %}
        </div>
        {% if job.location %}
        <div class="location">📍 {{ job.location }}</div>
        {% endif %}
        <div class="date">{{ job.start_date }} - {{ job.end_date }}</div>
        
        {% if job.current %}
        <div class="current-badge" style="display: inline-block; background: #28a745; color: white; padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; margin: 8px 0;">Current</div>
        {% endif %}
        
        <p>{{ job.summary }}</p>
        
        {% if job.technologies.size > 0 %}
        <div class="tech-stack">
          <strong>Technologies:</strong> {{ job.technologies | join: ", " }}
        </div>
        {% endif %}
        
        {% if job.achievements.size > 0 %}
        <div class="achievements">
          <h4>Key Achievements:</h4>
          {% for achievement in job.achievements %}
          <div class="achievement-item">{{ achievement }}</div>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section-white">
  <div class="container">
    <h2>Career Highlights by Numbers</h2>
    <div class="experience-metrics" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0;">
      
      <div class="metric-card card" style="padding: 2rem; text-align: center;">
        <div class="metric-number" style="font-size: 2rem; font-weight: bold; color: #764ba2;">30%</div>
        <div class="metric-label">Performance Improvement</div>
        <div class="metric-description">VueJS to ReactJS migration at UOB Singapore</div>
      </div>
      
      <div class="metric-card card" style="padding: 2rem; text-align: center;">
        <div class="metric-number" style="font-size: 2rem; font-weight: bold; color: #764ba2;">70%</div>
        <div class="metric-label">Unit Test Coverage</div>
        <div class="metric-description">Achieved using Jest for improved reliability</div>
      </div>
      
      <div class="metric-card card" style="padding: 2rem; text-align: center;">
        <div class="metric-number" style="font-size: 2rem; font-weight: bold; color: #764ba2;">3x</div>
        <div class="metric-label">Execution Speed</div>
        <div class="metric-description">TypeScript batch job optimization</div>
      </div>
      
      <div class="metric-card card" style="padding: 2rem; text-align: center;">
        <div class="metric-number" style="font-size: 2rem; font-weight: bold; color: #764ba2;">25%</div>
        <div class="metric-label">User Engagement</div>
        <div class="metric-description">UI/UX components with HTML5 & SVG</div>
      </div>
      
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container">
    <h2>Industry Experience</h2>
    <div class="industry-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
      
      <div class="industry-card card" style="padding: 2rem;">
        <h3>🏦 Financial Services</h3>
        <p><strong>UOB Singapore, National Bank of Canada</strong></p>
        <p>Developed secure, high-performance banking applications with stringent compliance requirements. Experience with financial APIs, transaction processing, and regulatory frameworks.</p>
        <div class="tech-used">
          <span class="skill-tag">Java</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">MongoDB</span>
        </div>
      </div>
      
      <div class="industry-card card" style="padding: 2rem;">
        <h3>🚗 Transportation</h3>
        <p><strong>Land Transport Authority (LTA) Singapore</strong></p>
        <p>Built mission-critical applications for Singapore's transport infrastructure, ensuring high availability for millions of users. Worked with real-time data processing and mapping systems.</p>
        <div class="tech-used">
          <span class="skill-tag">Java</span>
          <span class="skill-tag">J2EE</span>
          <span class="skill-tag">IBM WebSphere</span>
          <span class="skill-tag">IBM DB2</span>
        </div>
      </div>
      
      <div class="industry-card card" style="padding: 2rem;">
        <h3>🛡️ Insurance</h3>
        <p><strong>Allianz Technology Thailand</strong></p>
        <p>Implemented core system compliance modifications for the insurance sector. Built Backend-for-Frontend solutions optimizing API communication and data processing.</p>
        <div class="tech-used">
          <span class="skill-tag">Kotlin</span>
          <span class="skill-tag">RESTful APIs</span>
          <span class="skill-tag">Microservices</span>
          <span class="skill-tag">Agile</span>
        </div>
      </div>
      
      <div class="industry-card card" style="padding: 2rem;">
        <h3>🎮 Gaming</h3>
        <p><strong>Ring Zero Game Studio Thailand</strong></p>
        <p>Supervised game development projects and managed programming teams. Implemented game mechanics, optimization strategies, and cross-platform deployment.</p>
        <div class="tech-used">
          <span class="skill-tag">C#</span>
          <span class="skill-tag">Unity</span>
          <span class="skill-tag">Game Development</span>
          <span class="skill-tag">Team Management</span>
        </div>
      </div>
      
    </div>
  </div>
</section>

<section class="section-white">
  <div class="container">
    <h2>Leadership & Management</h2>
    <div class="leadership-content" style="max-width: 800px; margin: 0 auto;">
      <p class="lead">Throughout my career, I've successfully led cross-functional teams across different cultures and time zones, fostering collaboration and delivering exceptional results.</p>
      
      <div class="leadership-skills" style="margin: 3rem 0;">
        <div class="skill-group" style="margin-bottom: 2rem;">
          <h3>Team Leadership</h3>
          <div class="achievements">
            <div class="achievement-item">Led development teams of 5-15 engineers across multiple projects</div>
            <div class="achievement-item">Mentored junior developers in full-stack technologies and best practices</div>
            <div class="achievement-item">Established coding standards and development workflows</div>
            <div class="achievement-item">Conducted technical interviews and talent acquisition</div>
          </div>
        </div>
        
        <div class="skill-group" style="margin-bottom: 2rem;">
          <h3>Project Management</h3>
          <div class="achievements">
            <div class="achievement-item">Managed end-to-end project delivery from conception to deployment</div>
            <div class="achievement-item">Coordinated with stakeholders across different time zones</div>
            <div class="achievement-item">Implemented Agile/Scrum methodologies for improved efficiency</div>
            <div class="achievement-item">Delivered projects on time and within budget constraints</div>
          </div>
        </div>
        
        <div class="skill-group">
          <h3>Technical Architecture</h3>
          <div class="achievements">
            <div class="achievement-item">Designed scalable system architectures for enterprise applications</div>
            <div class="achievement-item">Made technology stack decisions for optimal performance</div>
            <div class="achievement-item">Implemented microservices patterns and cloud-native solutions</div>
            <div class="achievement-item">Established CI/CD pipelines and DevOps practices</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container text-center">
    <h2>Ready for the Next Challenge</h2>
    <p class="lead">I'm currently exploring new opportunities in Germany and internationally. Let's discuss how my experience can contribute to your organization's success.</p>
    
    <div class="intro-actions" style="margin-top: 2rem;">
      <a href="/contact/" class="btn btn-primary">Get In Touch</a>
      <a href="mailto:{{ site.author.email }}" class="btn btn-secondary">Email Me</a>
    </div>
  </div>
</section>