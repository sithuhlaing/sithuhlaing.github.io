---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
    <h1>{{ site.author.name }}</h1>
    <div class="subtitle">{{ site.author.title }}</div>
    <div class="location">🇩🇪 {{ site.author.location }} | {{ site.author.experience_years }}+ Years Experience</div>
    <div class="cta-buttons">
      <a href="#contact" class="cta-button">Get In Touch</a>
      <a href="mailto:{{ site.author.email }}" class="cta-button secondary">Email Me</a>
    </div>
  </div>
</section>

<section class="stats-section section-white">
  <div class="container">
    <div class="stats">
      <div class="stat-card">
        <span class="stat-number">{{ site.author.experience_years }}+</span>
        <span class="stat-label">Years Experience</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">10+</span>
        <span class="stat-label">Companies Worked</span>
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

<section class="intro-section section-gray">
  <div class="container">
    <div class="intro-content">
      <h2>Professional Summary</h2>
      <p class="lead">{{ site.description }}</p>
      <p>I specialize in <strong>microservices, cloud computing, and agile methodologies</strong>, with a passion for developing efficient, innovative solutions. Throughout my career, I've had the privilege of working with prestigious organizations including UOB Singapore, Land Transport Authority (LTA) Singapore, and Allianz Technology Thailand.</p>
      <div class="intro-actions">
        <a href="/about/" class="btn btn-primary">Learn More About Me</a>
        <a href="/experience/" class="btn btn-secondary">View Experience</a>
      </div>
    </div>
  </div>
</section>

<section class="recent-work section-white">
  <div class="container">
    <h2>Recent Experience</h2>
    <div class="experience-preview">
      {% for exp in site.data.experience limit:3 %}
      <div class="experience-card">
        <h3>{{ exp.title }}</h3>
        <div class="company">{{ exp.company }}</div>
        <div class="date">{{ exp.start_date }} - {{ exp.end_date }}</div>
        <p>{{ exp.summary }}</p>
      </div>
      {% endfor %}
    </div>
    <div class="text-center">
      <a href="/experience/" class="btn btn-primary">View Full Experience</a>
    </div>
  </div>
</section>

<section class="skills-preview section-gray">
  <div class="container">
    <h2>Core Technologies</h2>
    <div class="skills-showcase">
      <div class="skill-group">
        <h3>Backend</h3>
        <div class="skill-tags">
          <span class="skill-tag">Java</span>
          <span class="skill-tag">Spring Boot</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Kotlin</span>
        </div>
      </div>
      <div class="skill-group">
        <h3>Frontend</h3>
        <div class="skill-tags">
          <span class="skill-tag">React</span>
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">Angular</span>
        </div>
      </div>
      <div class="skill-group">
        <h3>Cloud & DevOps</h3>
        <div class="skill-tags">
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Kubernetes</span>
          <span class="skill-tag">CI/CD</span>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="/skills/" class="btn btn-primary">View All Skills</a>
    </div>
  </div>
</section>