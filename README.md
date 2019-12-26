A Django CMS boilerplate based on [Bootstrap v4](https://getbootstrap.com)

# Origin

Forked from [Divio Aldryn Bootstrap v3
boilerplate](https://github.com/aldryn/aldryn-boilerplate-bootstrap3) whose last commit is on 3 Apr
2017 and now archived

# Installation

> yarn install

# Build

> npx gulp sass

# Django CMS concepts in short

* each page has a template
* placeholder : a place in a template to insert contents
* plugin : a reusable content publisher like text or image
* apphook : An Application Hook, usually simply referred to as an apphook, is a way of attaching the
  functionality of some other application to a django CMS page. It’s a convenient way of integrating
  other applications into a django CMS site.

# Menu

# Blog

Blog is based on plugin https://github.com/divio/aldryn-newsblog

The main page has the advanced property "application" set to the apphook "NewsBlog".

By default a News & Blog page will simply list items, using the `article_list.html` template, while
an article will use the `article_detail.html` template.
