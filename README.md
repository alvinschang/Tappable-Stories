# Tappable-Stories
================
**by [Alvin Chang](http://alvinschang.com)** | [@alvinschang](http://twitter.com/alvinschang)

This is a plugin for Wordpress and Tumblr that easily allows you to make tappable stories. In short, it allows writers to tell stories in slides. Technically, this is an easy feat. Nothing fancy. But as a storyteller, I find this to be extremely useful when I want to establish a playful pace to the story. It also lends itself well to surprise and delight.  

## How to use it

You can either download the Javascript/CSS and upload them on your own servers, or if you're a beginner/lazy, use "embed.html" and follow the instructions of where to put them for both Wordpress and Tumblr. (Instructions for each are below.)

This script looks inside the div with the class "tapper" and parses out the text into separate slides; each slide is divided with two linebreaks.

Use and edit freely. But please leave in the attribution. Also, not necessary, but I'd appreciate it if you send/tweet me your stories so I can see what you make with this tool :)

================

## Wordpress
### [An example of what this does on Wordpress](http://www.lifeofalvin.com/?p=257)

#### INSTALLATION

Requirements: You must have Wordpress hosted on your own server. (If your website name is something like mysite.wordpress.com, this won't work.)

1. Log into your Dashboard
2. Click on Appearance on the left
3. Click on Editor, which appears under Appearances
4. On the right, you'll see a list of "Templates" — click on Header
5. Paste everything in "embed.html" at the very top of that file. Then click "Update File"

#### HOW TO USE

1. Go to Posts > Add New just like you would always do
2. On top of the textbox where you write you post, there is a tab that says "Visual" and "Text" — make sure "Text" is selected
3. This might be too technical for some, but in that textbox, you must wrap the tappable post in a "div" with the class "tapper" — and each slide must be separates by two linebreaks. Here's an example:

    &lt;div class="tapper"&gt;
    
    This is the first slide.
    
    This is the second slide.
    
    They are separated by two linebreaks.
    
    &lt;/div&gt;

4. Hit save, and you're done.

================

## Tumblr
### [An example of what this does on Tumblr](http://alvinch.com/post/42121568412/would-you-want-to-make-tappable-stories)

#### INSTALLATION

1. Log into your Tumblr where you usually make posts. At the top, click the "Settings" button which looks like a gear
2. On the left, click on the name of your blog. (It should have your avatar next to it.)
3. There should be a "Theme" section with a "Customize" button. Click it.
4. On the left, you should see an "Edit HTML" button. Click it.
5. Right under &lt;head&gt;, paste in everything in "embed.html". Hit "Update Preview" and make sure nothing broke. (If it did, undo.) Then hit "Save" and go back to "Appearance." Hit "Save" again and then "Close" — and you're done.


#### HOW TO USE

1. Under Settings (the gear button) you'll automatically be on the "Account" page. There is a section that asks "Edit Posts using" ... change that to "plain text/HTML" and save.
2. Now go back to how you would normally post some text, except now you can create tappable stories thusly. (An example is below):


    &lt;div class="tapper"&gt;
    
    This is the first slide.
    
    This is the second slide.
    
    They are separated by two linebreaks.
    
    &lt;/div&gt;

3. Publish post and you're done.
