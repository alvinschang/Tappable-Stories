Tappable-Stories
================
A Wordpress/Tumblr/HTML plugin that easily allows for tappable slides to create stories

by Alvin Chang
@alvinschang
alvinschang.com

Use and edit freely. But please leave above attribution and this text in this file.
Also I'd appreciate it if you send me your stories so I can see what you make with this tool :)


### WORDPRESS INSTALLATION

Requirements: You must have Wordpress hosted on your own server. (If your website name is something like mysite.wordpress.com, this won't work.)

Step 1: Log into your Dashboard
Step 2: Click on Appearance on the left
Step 3: Click on Editor, which appears under Appearances
Step 4: On the right, you'll see a list of "Templates" — click on Header
Step 5: Paste everything in this file at the very top of that file. Then click "Update File"

### HOW TO USE IT ON WORDPRESS

Step 1: Go to Posts > Add New just like you would always do
Step 2: On top of the textbox where you write you post, there is a tab that says "Visual" and "Text" — make sure "Text" is selected
Step 3: This might be too technical for some, but in that textbox, you must wrap the tappable post in a "div" with the class "tapper" — and each slide must be separates by two linebreaks. Here's an example:
<code>
<div class="tapper">
This is the first slide.

This is the second slide.

They are separated by two linebreaks.
</div>
</code>
Step 4: Hit save, and you're done.




### TUMBLR INSTALLATION

Step 1: Log into your Tumblr where you usually make posts. At the top, click the "Settings" button which looks like a gear
Step 2: On the left, click on the name of your blog. (It should have your avatar next to it.)
Step 3: There should be a "Theme" section with a "Customize" button. Click it.
Step 4: On the left, you should see an "Edit HTML" button. Click it.
Step 5: Right under <head>, paste in all the code in this document. Hit "Update Preview" and make sure nothing broke. (If it did, undo.) Then hit "Save" and go back to "Appearance." Hit "Save" again and then "Close" — and you're done.


### HOW TO USE IT ON TUMBLR

Step 1: Under Settings (the gear button) you'll automatically be on the "Account" page. There is a section that asks "Edit Posts using" ... change that to "plain text/HTML" and save.
Step 2: Now go back to how you would normally post some text, except now you can create tappable stories thusly. (An example is below):

<code>
<div class="tapper">
This is the first slide.

This is the second slide.

They are separated by two linebreaks.
</div>
</code>

Step 3: Publish post and you're done.
