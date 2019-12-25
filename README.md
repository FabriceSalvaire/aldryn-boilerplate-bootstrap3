# Origin

Forked from
https://github.com/aldryn/aldryn-boilerplate-bootstrap3
is now archived and last commit in 3 Apr 2017

# Installation

yarn fails to install bootstrap-sas v3, use bower as a workaround

> npx bower install boostrap-sass

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
