---
layout: page.njk
title: Home
---
<section class="hero">
    <div class="cblock">
    <h1 class="shrink">Education works wonders.</h1>
    For the last 20 years, we've been providing scholarships for underprivileged 
    young Latter-day Saint women in South Africa. Make miracles with us!
    <div class="button-container">
    <a href="#challenges"><button class="red">Learn more</button></a>
    <a href="/donate/"><button class="rainbow">Donate</button></a>
    </div>
    </div>
    <div class="cblock">
      <img src="/img/BEF_globe.svg">
    </div>
</section>

{% for section in sections %}
<section class="section" id="{{ section.subject }}">
  <div class="cblock {{ section.color }} texty">
  <h2>{{ section.heading }}</h2>
  <div>{{ section.content }}</div>
  </div>
  <div class="cblock">
    <img src="/img/{{ section.image }}">
  </div>
</section>
{%endfor%}
