# Landing project
this is the first project at Udacity front-end Professional track. The project is about an HTML page that need to have interactive navigation using JavaScript

## How I got the project done?
First I defined the variables:
 1- htmlSectionCollection: that's the html collection data for sections using querySelectorAll
 2- sections: the html sections collections is saved into array using Array.from method
 3- nav_bar: an HTML collection for the navagation bar using getElementById

Second I built the helping functions:
 1- creatUnorderedList: that creat a string similar to html to be used
 2- SectionInViewport: that check of the section in the viewport by using getBoundingClientRect method that give us the dimentions of the section

last I built the main functions:
 1- BuildNav: that first loops through Array"section" then creat ne list using creatElemnt then get the id & data-nav attribute of sctions using section.getAttribute saving them into section_id,section_name respectivly lastly I have added the a tag (where I will navigate to) using the helper function "creatUnorderedList" and appending this to nav_bar using appendChild method
 2- addClassActive: that first check if the it's in viewport and have a class'your-active-class' if don't have it will  add "your-active-class" if it's not in viewport it will remove 'your-active-class'