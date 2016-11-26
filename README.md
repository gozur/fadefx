<a href="https://github.com/Adriandmen/fadefx"><p align="center"><img src="https://i.stack.imgur.com/aA1mj.png" ></p></a>

<p align="center">Go to <a href="https://adriandmen.github.io/fadefx/">the Github page</a> for a live demonstration!</p>

<br>
<br>

##What is FadeFX?

FadeFX is a simple Javascript and CSS plugin that makes animations very easy, so you don't have to do it yourself anymore. The implementation is very easy. It is done by adding classes to an HTML element. That means that you save a _lot_ of time and can focus on programming other stuff.

<br>
<br>

##How do I use it?

To apply an animation to a HTML element, like a `div`, just add an **FadeFX** animation. Right now, there are just 5 animations available (will add more in the future). Here's a list of all of them:

Animation tag | Information
------------- | -----------
`fadefx-fadein` | Fades in with a cubic ease out animation.
`fadefx-fadein-up` | Fades in coming from the bottom and going **upwards**.
`fadefx-fadein-down` | Fades in coming from the top and going **downwards**.
`fadefx-fadein-left` | Fades in coming from the right and going to the **left**.
`fadefx-fadein-right` | Fades in coming from the left and going to the **right**.

<br>
In addition, you can add the following FadeFX tags to the classes of an element:

Customization&nbsp;tag | Information
----------------- | -----------
`:100ms` | Delay the start of animating by 100 milliseconds. The number 100 can be replaced by any other integer. Normally `0ms`.
`::100ms` | Set the duration of an animation to 100 milliseconds. The number 100 can also be replaced by any other integer. Standardized to `500ms`.
`:100px` | Sets the animation height. Normally, this is `50px`.

<br>
An example of a div in the github page is:

    <div class="enumerator fadefx-fadein :300ms ::800ms">1</div>

<br>
<br>

## How to install?

FadeFX is a jQuery plugin that uses _jQuery_ and _jQuery UI_. For a fast installation, just place all the files from this repository to the desired folder where your HTML file also is. Then add the following code to the head of the HTML document:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
    <script src="fadefx.js"></script>
    <link type="text/css" rel="stylesheet" href="fadefx.css"/></div>
    
<br>
<br>

### Note

This was actually for a school project, but then decided to make it a bit more elaborate, so this might contain a lot of bugs. Also be aware that _not all tags_ will work on every HTML element. This can be fixed by adjusting the paddings/margins, or if it's not possible, just by using the `fadefx-fadein` tag. That works every time :).

