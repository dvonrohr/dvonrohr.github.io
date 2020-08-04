---
title:  "Lazy-load images in a isotope filter"
slug: "lazy-load-images-isotope-filter"
date:   2019-08-26
banner_image: code-header.png
tags: [javascript, isotope]
description: ""
---

When I need a simple filter on a website, usually [isotope](https://isotope.metafizzy.co){:target="\_blank"} is a nice option in the toolbox of a web-developer. 

If there are a lot of items which include images, lazy-loading can be necessary because there are a lot of image request that are invisible or below-the-fold and shouldn't be loaded at once.

<!--more-->

Because [isotope](https://isotope.metafizzy.co/) is used already in conjuction with jQuery, [jQuery Lazyload](https://appelsiini.net/projects/lazyload/) is a good little library.

The first thing is to change the image-tags in the html. Instead of adding path and filename to the src-attribute it's added to the ```data-original``` attribute. The ```src``` attribute is used for a placeholder images, which should be preferably fast to load and because the same image is used it's cached by the browser. 

```html
<img class="lazy-img" src="/my-placeholder-image.png" data-original="/the-image-to-lazy-load.png" />
```

After this change, only placeholder images are shown and a little javascript is needed to display the real images. 

```javascript
const $imgs = $('.lazy-img');
const $win = $(window);

$imgs.lazyload({
	effect: "fadeIn",
	failure_limit: Math.max($imgs.length - 1, 0),
	event: 'lazylazy'
});

function loadVisible($els, trigger) {
	$els.filter(function () {
		var rect = this.getBoundingClientRect();
		return rect.top >= 0 && rect.top <= window.innerHeight;
	}).trigger(trigger);
}

// Initialize isotope
$grid = $('.isotope-container').isotope();

$grid.isotope('on', 'layoutComplete', function () {
	loadVisible($imgs, 'lazylazy');
});

$win.on('scroll', function () {
	loadVisible($imgs, 'lazylazy');
});
```

First there is the declaration of the variables. Only image tags with the class .lazy-img are respected. After this we add the configuration how to lazy-load the images with jQuery LazyLoad as well the function ```loadVisible``` which checks the current position in the viewport.

Lastly, after initializing isotope the ```loadVisible``` function is used for the isotope hook ```layoutComplete``` and while scrolling the viewport.

Of course this is not all my code and i got it from several sources over the internet a while ago. I hope to save some time if someone else has this problem.