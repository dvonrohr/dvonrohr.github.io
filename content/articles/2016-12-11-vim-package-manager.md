---
title:  Using the Vim 8 Package Manager
slug: using-the-vim8-package-manager
date:   2016-12-11
description: "Vim 8 supports now kind of a package manager of its own. It's not exactly a package manager but supports autoloading your plugins if your folder structure matches a given structure. Used in conjunction with Git you have a fully fledged package manager of its own."
img: vim
category: category
---

Yes, Vim 8 supports now kind of a package manager of its own. It's not exactly a package manager but supports autoloading your plugins if your folder structure matches a given structure. Used in conjunction with Git you have a fully fledged package manager of its own. For me, this was very exciting news. I always felt it's a piece vim lacks support in contrast to other editors.

<!--more-->

All you need is to make sure you have Vim 8 installed. You can check the version of Vim on the terminal with the command ```vim --version```.

Next, create a file structure like this in your .vim directory

```
pack/
-- mypackages
    -- opt
    -- start
```

The name for the directory 'mypackages' can be as you like, take your nickname or whatever. Now every plugin you place into the start directory will be loaded with Vim at start time, you don't have to copy files to directories or install anything. Every plugin you place into the opt directory you will have to load manually with the command ```:packadd nameofpackage``` inside of a running Vim session.

In conjunction with Git, you even get update functionality for free. If you use Git for your .vim directory you can add plugins as git submodules with the command:

```
git submodule add https://github.com/pluginname pack/mypackages/start/pluginname
```

That makes it ease to manage your plugins, and you probably have versioned your dotfiles already.

To update your Vim plugins (submodules) you use

```
git submodule update --remote --merge
```

And to remove a plugin:

```
git submodule deinit vim/pack/mypackages/start/nameofplugin
git rm vim/pack/mypackages/start/nameofplugin
rm -Rf .git/modules/vim/pack/mypackages/start/nameofplugin
```

Don't forget to commit your work after you made the changes. If you have experience with Git submodules this should be nothing new and the workflow integrates nicely into your workflow.

There are some missing things like that help tags for plugins are not automatically generated. But this approach simplifies the handling in my view, and I'm sure Vim will stay a widely used code editor.

Feel free to check my Vim configuration on my GitHub repository at [https://github.com/dvonrohr/vim](https://github.com/dvonrohr/vim){:target="_blank"} to getter a better feeling of how it all works.