<div align="center">
<h1>NoSQL Challenge</h1>
<h4>Social Network API</h4>
</div>
  
  ---

## Table-of-Contents

* [Deployment](#deployment)
* [Description](#description)
* [Installation](#installation)
* [Mock-Up](#wireframe)
* [Technology](#technology)
* [Demo](#demo)

  <br>
  <br>

## [Deployment](#table-of-contents)

  ----

  <div align="center">
  <h3> Hosted by Heroku</h3>
  <a href="https://www.heroku.com/">TBD</a>
  </div>
  <br>
  <br>
  <br>

## [Description](#table-of-contents)

---
  An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
<br>

## [Installation](#table-of-contents)

----

````
npm install

## Configure Database Connection via connection.js
## Expected Database Name = aggregateDB
## Database_URL = "mongodb://127.0.0.1:27017/aggregateDB"

npm run seed

npm start


````

<br>
<br>

## [Mock-Up](#table-of-contents)

 ----

<p align="center">
  <img src="./public/img/demo-01.gif" width="550" alt="Home Page Wireframe")
</p>
<h5 align="center">Get Routes All Users Demo</h5>
<br>
<br>

<p align="center">
  <img src="./public/img/demo-02.gif" width="550" alt="Surfboard Inventory Wireframe")
</p>
<h5 align="center">Get Routes Single Users Demo</h5>

<br>
<br>

<p align="center">
  <img src="./public/img/demo-03.gif" width="550" alt=" User Login Wireframe")
</p>
<h5 align="center">Users: POST, PUT, and DELETE Demo</h5>

<br>
<br>

<p align="center">
  <img src="./public/img/demo-04.gif" width="550" alt=" User Login Wireframe")
</p>
<h5 align="center">Thoughts: POST, PUT, and DELETE Demo</h5>

<br>
<br>

<p align="center">
  <img src="./public/img/demo-05.gif" width="550" alt=" User Login Wireframe")
</p>
<h5 align="center">Thoughts: POST/DELTE Reactions</h5>

<br>
<br>

## [Technology](#table-of-contents)

  ----

* Packages
  * Node.js (16.15.1)
  * Express.js (4.18.1)
  * dotenv (16.0.1)
  * mongoose (6.0.13)
  * faker-js (7.3.0)
  * moment (2.29.4)
    <br>

<br>
<br>

## [Demo](#table-of-contents)

  ----


<h5 align="center">Install/Seed/Start Demo</h5>
<p align="center">
<iframe width="560px" height="320px" allowfullscreen="true" allow="autoplay *" src="https://bootcampspot.instructuremedia.com/embed/a2c9213f-5f07-4eff-9a66-1f2a82371bcd" frameborder="0"></iframe>
</p>
<br>

<br>
<h5 align="center">GET (all/single) with Users/Thoughts Demo</h5>
<p align="center">
<iframe width="560px" height="320px" allowfullscreen="true" allow="autoplay *" src="https://bootcampspot.instructuremedia.com/embed/178d4c5f-58fc-4b3b-adb2-13207099c2bc" frameborder="0"></iframe>
</p>
<br>
<br>

<br>
<h5 align="center">POST/PUT/DELETE for Users and Thoughts</h5>
<p align="center">
<iframe width="560px" height="320px" allowfullscreen="true" allow="autoplay *" src="https://bootcampspot.instructuremedia.com/embed/e2cd3550-01fe-4773-87b4-fdcac41de023" frameborder="0"></iframe>
</p>
<br>
<br>


<br>
<h5 align="center">POST/DELETE from Friends List / Reactions</h5>
<p align="center">
<iframe width="560px" height="320px" allowfullscreen="true" allow="autoplay *" src="https://bootcampspot.instructuremedia.com/embed/c4cfbfe4-f6d8-4754-8ab2-ee03f48adeb0" frameborder="0"></iframe>
</p>
<br>
<br>

<br>
<h5 align="center">BONUS DEMO of removing User and Thoughts</h5>
<p align="center">
<iframe width="560px" height="320px" allowfullscreen="true" allow="autoplay *" src="https://bootcampspot.instructuremedia.com/embed/178d4c5f-58fc-4b3b-adb2-13207099c2bc" frameborder="0"></iframe>
</p>
<br>
<br>
