---
layout: page
title: Blog & Insights
permalink: /blog/
---

<section class="section-white">
  <div class="container">
    <div class="intro-content">
      <h2>Technical Blog & Insights</h2>
      <p class="lead">Sharing knowledge, experiences, and insights from {{ site.author.experience_years }}+ years in software development, architecture, and team leadership.</p>
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container">
    <h2>Recent Posts</h2>
    
    {% if site.posts.size > 0 %}
    <div class="blog-posts">
      {% for post in site.posts limit:6 %}
      <article class="blog-post card" style="padding: 2rem; margin-bottom: 2rem;">
        <header class="post-header">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="post-meta" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">
            <span>{{ post.date | date: "%B %d, %Y" }}</span>
            {% if post.author %} • <span>by {{ post.author }}</span>{% endif %}
            {% if post.categories.size > 0 %} • <span>{{ post.categories | join: ", " }}</span>{% endif %}
          </div>
        </header>
        
        <div class="post-excerpt">
          {{ post.excerpt | strip_html | truncate: 200 }}
        </div>
        
        {% if post.tags.size > 0 %}
        <div class="post-tags" style="margin-top: 1rem;">
          {% for tag in post.tags %}
          <span class="skill-tag" style="margin-right: 0.5rem;">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
        
        <div class="post-actions" style="margin-top: 1.5rem;">
          <a href="{{ post.url | relative_url }}" class="btn btn-secondary">Read More</a>
        </div>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <!-- Placeholder content when no posts exist -->
    <div class="placeholder-posts">
      <article class="blog-post card" style="padding: 2rem; margin-bottom: 2rem;">
        <header class="post-header">
          <h3>Coming Soon: Microservices Architecture Best Practices</h3>
          <div class="post-meta" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">
            <span>January 2025</span> • <span>Architecture, Microservices</span>
          </div>
        </header>
        
        <div class="post-excerpt">
          A comprehensive guide to designing and implementing microservices architecture based on real-world experience at UOB Singapore and LTA. Covering service decomposition, data management, and operational considerations.
        </div>
        
        <div class="post-tags" style="margin-top: 1rem;">
          <span class="skill-tag">Microservices</span>
          <span class="skill-tag">Architecture</span>
          <span class="skill-tag">Best Practices</span>
        </div>
      </article>
      
      <article class="blog-post card" style="padding: 2rem; margin-bottom: 2rem;">
        <header class="post-header">
          <h3>React to Vue.js Migration: Lessons Learned</h3>
          <div class="post-meta" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">
            <span>February 2025</span> • <span>Frontend, Migration</span>
          </div>
        </header>
        
        <div class="post-excerpt">
          Detailed case study of the successful migration project at UOB Singapore, including challenges faced, solutions implemented, and the 30% performance improvement achieved. Practical tips for planning and executing framework migrations.
        </div>
        
        <div class="post-tags" style="margin-top: 1rem;">
          <span class="skill-tag">React</span>
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">Migration</span>
          <span class="skill-tag">Performance</span>
        </div>
      </article>
      
      <article class="blog-post card" style="padding: 2rem; margin-bottom: 2rem;">
        <header class="post-header">
          <h3>Leading International Development Teams</h3>
          <div class="post-meta" style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">
            <span>March 2025</span> • <span>Leadership, Team Management</span>
          </div>
        </header>
        
        <div class="post-excerpt">
          Insights from managing cross-cultural development teams across Singapore, Thailand, and Myanmar. Communication strategies, cultural considerations, and building effective remote collaboration practices.
        </div>
        
        <div class="post-tags" style="margin-top: 1rem;">
          <span class="skill-tag">Leadership</span>
          <span class="skill-tag">Remote Work</span>
          <span class="skill-tag">Team Management</span>
        </div>
      </article>
    </div>
    {% endif %}
    
    {% if site.posts.size > 6 %}
    <div class="text-center" style="margin-top: 2rem;">
      <a href="/archive/" class="btn btn-primary">View All Posts</a>
    </div>
    {% endif %}
  </div>
</section>

<section class="section-white">
  <div class="container">
    <h2>Popular Topics</h2>
    <div class="topics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0;">
      
      <div class="topic-card card" style="padding: 2rem; text-align: center;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏗️</div>
        <h3>System Architecture</h3>
        <p>Design patterns, microservices, scalability, and enterprise architecture principles.</p>
        <div class="topic-count" style="color: #764ba2; font-weight: bold; margin-top: 1rem;">Coming Soon</div>
      </div>
      
      <div class="topic-card card" style="padding: 2rem; text-align: center;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚛️</div>
        <h3>Frontend Development</h3>
        <p>React, Vue.js, TypeScript, performance optimization, and modern web development.</p>
        <div class="topic-count" style="color: #764ba2; font-weight: bold; margin-top: 1rem;">Coming Soon</div>
      </div>
      
      <div class="topic-card card" style="padding: 2rem; text-align: center;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">☁️</div>
        <h3>Cloud & DevOps</h3>
        <p>AWS, Docker, Kubernetes, CI/CD pipelines, and cloud-native development.</p>
        <div class="topic-count" style="color: #764ba2; font-weight: bold; margin-top: 1rem;">Coming Soon</div>
      </div>
      
      <div class="topic-card card" style="padding: 2rem; text-align: center;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">👥</div>
        <h3>Team Leadership</h3>
        <p>Managing development teams, cross-cultural communication, and technical mentoring.</p>
        <div class="topic-count" style="color: #764ba2; font-weight: bold; margin-top: 1rem;">Coming Soon</div>
      </div>
      
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container">
    <h2>Speaking & Presentations</h2>
    <div class="speaking-content" style="max-width: 800px; margin: 0 auto;">
      <p class="lead">I regularly share knowledge through conference talks, workshops, and technical presentations.</p>
      
      <div class="speaking-topics" style="margin: 3rem 0;">
        
        <div class="speaking-item card" style="padding: 2rem; margin-bottom: 2rem;">
          <h3>🎯 Available Speaking Topics</h3>
          <div class="achievements">
            <div class="achievement-item">Microservices Architecture: From Monolith to Scalable Systems</div>
            <div class="achievement-item">React Performance Optimization: Real-world Case Studies</div>
            <div class="achievement-item">Leading International Development Teams</div>
            <div class="achievement-item">Enterprise Java: Modern Patterns and Practices</div>
            <div class="achievement-item">Cloud Migration Strategies for Large Organizations</div>
            <div class="achievement-item">Building High-Performance Frontend Applications</div>
          </div>
        </div>
        
        <div class="speaking-formats card" style="padding: 2rem; margin-bottom: 2rem;">
          <h3>📝 Presentation Formats</h3>
          <div class="formats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div class="format-item" style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
              <strong>Keynote</strong><br>
              45-60 minutes
            </div>
            <div class="format-item" style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
              <strong>Technical Talk</strong><br>
              30-45 minutes
            </div>
            <div class="format-item" style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
              <strong>Workshop</strong><br>
              2-4 hours
            </div>
            <div class="format-item" style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
              <strong>Panel Discussion</strong><br>
              30-60 minutes
            </div>
          </div>
        </div>
        
      </div>
      
      <div class="text-center">
        <p>Interested in having me speak at your event or conference?</p>
        <a href="/contact/" class="btn btn-primary">Get In Touch</a>
      </div>
    </div>
  </div>
</section>

<section class="section-white">
  <div class="container">
    <h2>Knowledge Sharing</h2>
    <div class="knowledge-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
      
      <div class="knowledge-card card" style="padding: 2rem;">
        <h3>📚 Technical Writing</h3>
        <div class="achievements">
          <div class="achievement-item">In-depth tutorials and guides</div>
          <div class="achievement-item">Architecture decision records</div>
          <div class="achievement-item">Best practices documentation</div>
          <div class="achievement-item">Case studies and post-mortems</div>
        </div>
      </div>
      
      <div class="knowledge-card card" style="padding: 2rem;">
        <h3>🎓 Mentoring & Training</h3>
        <div class="achievements">
          <div class="achievement-item">One-on-one technical mentoring</div>
          <div class="achievement-item">Code review workshops</div>
          <div class="achievement-item">Architecture design sessions</div>
          <div class="achievement-item">Career guidance for developers</div>
        </div>
      </div>
      
      <div class="knowledge-card card" style="padding: 2rem;">
        <h3>🌐 Community Contributions</h3>
        <div class="achievements">
          <div class="achievement-item">Open source project contributions</div>
          <div class="achievement-item">Stack Overflow participation</div>
          <div class="achievement-item">Technical community forums</div>
          <div class="achievement-item">Local meetup presentations</div>
        </div>
      </div>
      
    </div>
  </div>
</section>

<section class="section-gray">
  <div class="container text-center">
    <h2>Subscribe for Updates</h2>
    <p class="lead">Stay updated with my latest blog posts, speaking events, and technical insights.</p>
    
    <div class="newsletter-signup" style="max-width: 500px; margin: 2rem auto;">
      <form action="mailto:{{ site.author.email }}?subject=Blog Subscription Request" method="post" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <input type="email" placeholder="Enter your email address" style="flex: 1; padding: 12px; border: 2px solid #764ba2; border-radius: 8px;">
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
      <p style="font-size: 0.9rem; color: #666;">
        I respect your privacy. No spam, just valuable content about software development and technology.
      </p>
    </div>
    
    <div class="social-follow" style="margin-top: 2rem;">
      <p>Or follow me on:</p>
      <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
        <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" class="btn btn-secondary">LinkedIn</a>
        <a href="mailto:{{ site.author.email }}" class="btn btn-secondary">Email</a>
      </div>
    </div>
  </div>
</section>