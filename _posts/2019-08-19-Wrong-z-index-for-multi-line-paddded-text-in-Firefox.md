---
layout: post
title: "Wrong z-index for multi-line paddded text in firefox"
date: 2019-08-19
banner_image: code-header.png
tags: [css, design]
---

A strange problem arised in a simple layout component. The desired effect was to have a headline that is 'multi-line padded' and has an image at the beginning behind the text and background color.

It should look somehow like this:

![alt text](/images/posts/dvonrohr-chrome.png "Screenshot Chrome")

<!--more-->

I usually use box-shadow to get this effect

```html
<div class="my-card">
  <h3>
    Aktionen &amp;<br />
    unsere Gutscheine
  </h3>
  ...
</div>
```

```css
.my-card h3 {
  background-color: #f2e9d8;
  border-radius: 2px;
  box-decoration-break: clone;
  box-shadow: 11px 0 0 #f2e9d8, -11px 0 0 #f2e9d8;
  color: #bbab94;
  display: inline;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.94;
  padding: 5px 0;
  position: relative;
  text-transform: uppercase;
  z-index: 3;
}

.my-card h3::before {
  background-image: url(_public/src/img/homepage/Icon.png);
  background-repeat: no-repeat;
  background-size: contain;
  content: "";
  height: 40px;
  left: -10px;
  position: absolute;
  top: -50px;
  width: 40px;
  z-index: -1;
}
```

Important for this multi-line padded text is the attribute `box-decoration-break: clone;` which makes the box-shadow behave in firefox the same as in other browsers.

To my surprise it worked in IE 11, Edge and Chrome but in Firefox had a problem with the image in the before-pseudo-element.

![alt text](/images/posts/dvonrohr-firefox.png "Screenshot Firefox")

I found no good solution for this. Firefox doesn't set the background-color of the h3 with the same z-index as the text inside the h3 itself. The ::before pseudo element is between the background-color (or box-shadow) and the actual text. To fix this I ended up using a `span` tag inside.

```html
<div class="my-card">
  <h3>
    <span>
      Aktionen &amp;<br />
      unsere Gutscheine
    </span>
  </h3>
  ...
</div>
```

```css
.my-card h3 {
  display: inline;
  position: relative;
  z-index: 3;
}

.my-card h3 span {
  background-color: #f2e9d8;
  border-radius: 2px;
  box-decoration-break: clone;
  box-shadow: 11px 0 0 #f2e9d8, -11px 0 0 #f2e9d8;
  color: #bbab94;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.94;
  padding: 5px 0;
  text-transform: uppercase;
}

.my-card h3::before {
  background-image: url(_public/src/img/homepage/Icon.png);
  background-repeat: no-repeat;
  background-size: contain;
  content: "";
  height: 40px;
  left: -10px;
  position: absolute;
  top: -50px;
  width: 40px;
  z-index: -1;
}
```
