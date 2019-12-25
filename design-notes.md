# Gulp

* https://stackoverflow.com/questions/35531334/how-to-use-gulp-browsersync-with-django
* https://pypi.org/project/django-bsync/
* https://www.browsersync.io

# Django CMS

* https://code.djangoproject.com/wiki/Emacs
* http://web-mode.org/

## Templates and Placeholders

cf. http://docs.django-cms.org/en/latest/introduction/02-templates_placeholders.html#

Each page in the CMS uses a template declared in the `CMS_TEMPLATES` list in the settings.

An example of template

```
{% block content %}
    {% placeholder "feature" %}
    {% placeholder "content" %}
    {% placeholder "splashbox" %}
{% endblock content %}
```

See page structure in edit mode.

## Tags

cf. http://docs.django-cms.org/en/latest/reference/templatetags.html#

First load Django CMS tags:

```
{% load cms_tags %}
```

To render content use

```
{% placeholder "content" %}

{% with 320 as width %}{% placeholder "content" %}{% endwith %}
```

To render a static placeholder

```
{% static_placeholder "footer" %}
```

To render a menu

```
{% show_menu 0 100 100 100 "menu.html" %}
```

# HTML

* https://www.lifewire.com/xua-compatible-meta-tag-3469059

# CSS

* https://sass-lang.com

* https://www.w3schools.com/cssref/css_selectors.asp

* https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/

* https://css-tricks.com/box-sizing

* https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/

According to the W3C spec the definition for one rem unit is:

> Equal to the computed value of font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property’s initial value.

1rem equals the font size of the html element (which for most browsers has a default value of 16px).

* 10px = 0.625rem
* 12px = 0.75rem
* 14px = 0.875rem
* 16px = 1rem (base)
* 18px = 1.125rem
* 20px = 1.25rem
* 24px = 1.5rem
* 30px = 1.875rem
* 32px = 2rem

# Boostrap

* https://www.bootstrapdash.com/bootstrap-3-vs-4/
* https://www.quackit.com/bootstrap/bootstrap_4/differences_between_bootstrap_3_and_bootstrap_4.cfm
* https://www.quackit.com/bootstrap/bootstrap_4/tutorial/bootstrap_grid_system.cfm
* https://opensenselabs.com/blog/tech/bootstrap-3-or-bootstrap-4
* https://blog.templatetoaster.com/bootstrap-3-vs-bootstrap-4-migrate-differences/

## Screen readers

Hide an element to all devices except screen readers with `.sr-only`.

