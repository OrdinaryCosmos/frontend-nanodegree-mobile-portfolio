##Task 1: Optimize the index.html

###Click the "index.html" to open the page in the browser
1.css targeted at print media should be tagged as media=”print” in its html tag so it will not block the rendering path.

2.js files fetched from other domain should be tagged as async so that is will not block the parsing process.

3.a block of javascript was put inside the html right after the css, its execution will block the fetching of the following sources.

4.all the css files should be minified to make it smaller.

5.the pizzeria pic is much bigger than its display size, so I downscale it to 115*70.

6.all of pictures in this website have not yet been optimized. I run a grunt task :grunt-imageoptim to optimize them all.

7.the font wight 700 is actually never used, so i get rid of it

##Task 2: Optimize the main.js
### users can click through the pizzeria link to the pizzeria webpage.
I have modified the main.js to speed up the webpage.Please read the comments in the main.js for more information.
