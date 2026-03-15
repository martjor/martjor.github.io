---
layout: default
title: CV
permalink: /cv/
---

<div class="cv-wrapper" id="cv-page">
{% assign resume = site.data.resume %}

<div class="cv-section">
  <div class="cv-label">Education</div>
  <div class="cv-content">
    {% for item in resume.education %}
      <div class="resume-item">
        <h3 class="institution-name"><strong>{{ item.institution }}</strong></h3>
        <span class="resume-date">{{ item.date }}</span>
      </div>
      <p>{{ item.degree }}</p>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Employment</div>
  <div class="cv-content">
    {% for item in resume.employment %}
      <div class="resume-item">
        <h3 class="institution-name"><strong>{{ item.institution }}</strong></h3>
        <span class="resume-date">{{ item.date }}</span>
      </div>
      <p><em>{{ item.position }}</em> | {{ item.department }}</p>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Research</div>
  <div class="cv-content">
    {% for item in resume.research %}
      <div class="resume-item">
        <h3 class="institution-name"><strong>{{ item.institution }}</strong></h3>
        <span class="resume-date">{{ item.date }}</span>
      </div>
      <p><em>{{ item.role }}</em> | PIs: {{ item.pis }}</p>
      <ul>
        {% for highlight in item.highlights %}
          <li>{{ highlight }}</li>
        {% endfor %}
      </ul>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Publications</div>
  <div class="cv-content">
    <ol>
    {% for item in resume.publications %}
      <li>{{ item.authors }} <a href="{{ item.link }}">{{ item.title }}</a> <em>{{ item.journal }}</em></li>
    {% endfor %}
    </ol>
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Conferences & Presentations</div>
  <div class="cv-content">
    {% for item in resume.conferences %}
      <div class="resume-item">
        <h3 class="institution-name"><strong>{{ item.title }}</strong></h3>
        <span class="resume-date">{{ item.date }}</span>
      </div>
      <p>{{ item.organization }} &bull; <em>{{ item.type }}</em></p>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Awards & Nominations</div>
  <div class="cv-content">
    {% for item in resume.awards %}
      <div class="resume-item">
        <h3 class="institution-name"><strong>{{ item.title }}</strong></h3>
        <span class="resume-date">{{ item.date }}</span>
      </div>
      <p>{{ item.organization }}</p>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Teaching</div>
  <div class="cv-content">
    {% for item in resume.teaching %}
      <div class="resume-item">
        <h3 class="institution-name"><strong>{{ item.role }}</strong></h3>
        <span class="resume-date">{{ item.date }}</span>
      </div>
      <p>{{ item.institution }} | {{ item.department }}</p>
      <ul>
        {% for highlight in item.highlights %}
          <li>{{ highlight }}</li>
        {% endfor %}
      </ul>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Coursework</div>
  <div class="cv-content">
    {% for item in resume.coursework %}
      <p><strong>{{ item.institution }}</strong><br>
      {{ item.courses | join: " &bull; " }}</p>
    {% endfor %}
  </div>
</div>

<div class="cv-section">
  <div class="cv-label">Languages</div>
  <div class="cv-content">
    <p>
    {% for item in resume.languages %}
      <strong>{{ item.language }}:</strong> {{ item.fluency }}{% if forloop.last == false %} &bull; {% endif %}
    {% endfor %}
    </p>
  </div>
</div>

</div>
