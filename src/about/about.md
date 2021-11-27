---
layout: page.njk
title: About
---
{% for section in sections %}
<section>
<div class="cblock">
<h2>{{ section.heading }}</h2>
{{ section.text }}
</div>
<div class="cblock">
<img src="/img/{{ section.img }}">
</div>
</section>
{% endfor %}