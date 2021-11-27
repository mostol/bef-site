---
layout: page.njk
title: About
---
<style>
section.students {
  //grid-template-columns: repeat(4,1fr);
  //  #14212a (blue)
  position: relative;
}
div.students-view {
  display: flex;
  height: calc(100vh - var(--navbar-height));
  padding: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
}

.student-card {
  flex: none;

  width: 30%;
  height: auto;

  display: grid;
  grid: auto-flow;

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-align: center;
  scroll-padding: 50%;

  background: none;

  transition: height 0.25s, width 0.25s 0.25s, background 0.5s;
}

.student-card img {
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  padding-bottom: 1rem;
}

.student-card:hover{
  background: lightgray;
  transition: all 2s;
}

div.student-card:target {
  width: 50%;
  flex-grow: 1;
  height: 100%;
  background: white;
  color: #14212a;

  transition: width 0.5s, height 1s 0.5s, background 0.5s;
}

.student-summ {
  text-decoration: none;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;
  //background: pink;
}

div.student-det {
  display: none;
}

.student-card:target > div.student-det {
  display: flex;
  padding: 0 15%;
}

.student-card:target > .student-summ {
  text-decoration: none;
  color: #14212a;
}

</style>
<section class="hero full-height">
<div class="cblock green">
<h1>Meet our students!</h1>
The women we sponsor have faced a wide range of challenges—but have even wider ambitions. With your support and the opportunities opened by further education, they've been able to turn their dreams into realities.
<h2>Click and scroll to read their stories.</h2>
</div>

<div class="students-view">
{% for student in students %}
<div class="student-card" id="{{ student.name | urlencode }}">
<a href="#{{ student.name | urlencode }}" class="student-summ">
<img src="/img/students/{{ student.image}}">
<div class="name">{{ student.name }}</div>
</a>
<div class="student-det">
<div>{{ student.message | nl2br }}</div>
</div>
</div>
{% endfor %}
</div>
</section>