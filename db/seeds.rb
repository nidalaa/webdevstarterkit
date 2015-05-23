# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

   steps = Step.create([
    { 
      url_id: 'client-server',
      next_url: 'html-css-js',
      title: 'Client-server',
      subtitle: 'The whole story begins when you want to send some content.',
      description: "The base of internet application is the client-server architecture. In this type of architecture client **sends request** for some particular service to server. Server perform some **computing** and returns appropriate response to client. Devices are connected via Internet- there could be multiple clients and servers instances, however as a rule, each device could play only one of these roles.\n\nIn case of web application- **internet browser is the client**- it displays user interface, collect data from user inputs, performs a basic editing and send it to the server. **Web server realizes clients request and sends html code**, which is rendered by browser in order to display message to user.",
      diagram: 'assets/diagrams/client-server.png'
    }, 
    {
      url_id: 'html-css-js',
      next_url: 'mvc',
      title: 'HTML & CSS & JavaScript',
      subtitle: 'What a simple browser is able to do for you.',
      description: "The basic of the web application is the content returned by server- **processed data in the form of HTML** files. While it is true that without server the idea of dynamic web pages could not exists, the end product which is displayed for user is based on HTML tags. Quoting W3C- the The World Wide Web Consortium: \"HTML is the Web’s core language for creating documents and applications for everyone to use, anywhere\".\n\nApart from plain structure of document, the important aspect is **how elements looks like**- that include colours, sizes, fonts and other visual features. Managing appearance of websites is possible thanks to **Cascading Style Sheets (CSS)** concept. It is possible to add style to element directly in tag by using \“style\” attribute. However, the biggest advantage of CSS is fact that it can be implemented as an external file.\n\nThe third column of front-end web development is **JavaScript**- a powerful dynamic computer language. The possibilities of JavaScript seem to be unlimited- currently there are plenty of frameworks based on this language. However, the most important thing about javascript is the fact that it allows to **react for users actions** and manipulate website elements accordingly",
      diagram: 'assets/diagrams/front.png'
    },
    {
      url_id: 'mvc',
      next_url: 'spa',
      title: 'MVC',
      subtitle: 'Introducing some order to server processing.',
      description: "In case of web application, the main aim is to **separate the user interface from business logic**. This concept addresses client-server structure of this kind of software as well as backend and frontend diversity. A separation of visual part of application and its logic seems to be also reasonable because of fact that requirements of changes in interface and business logic can **proceed independently**.\n\nAll data operations, starting with retrieving them from database and ending with some complicated algorithms are performed by the Model. The most important fact is that it is working only with information, it has no knowledge about presentation. The entire role of this component is to handle information input and output.\n\nEverything, which is connected with presentation layer is encapsulated by the View. That include the DOM elements structure, the styling and browser scripts. In order to display correct content the View uses data from the Model, however the View itself has no power to manipulate the data.\n\nThe most popular architectural pattern in web development is MVC. The role of **connection** between the Model and the View belongs to the Controller.",
      diagram: 'assets/diagrams/mvc.png'
    },
    {
      url_id: 'spa',
      next_url: 'more',
      title: 'SPA',
      subtitle: 'Foreget about page reload- rich client side applications.',
      description: "The more responsiveness the webpage is, the **better performance** for its users. Thanks to usage of AJAX and client side scripting general latency can be extremely improved. Single Page Application first loads initial page and —  in reaction for user actions — fetch data without a need to complete page reload. Basic guidelines of SPA can be accomplished by using plain javascript or jQuery and building custom components. However, this kind of application tends to become over complicated with time. The more logic on the client side, the stronger **need of organising the code**. Therefore, the MV* architecture, which proved to be useful in backend structure, can be applied also at front-end side.",
      diagram: 'assets/diagrams/spa.png'
    },
    {
      url_id: 'more',
      next_url: nil,
      title: 'More!',
      subtitle: 'Revolutionary concepts for time-changing applications.',
      description: "React.js and Flux were invented by Facebook and Instagram developers team and initially released in 2013. The main aim of these javascript libraries is to **address performance challenges in large** Single Page Applications. Facebook and Instagram applications can be considered as example of applications, which have to deal with data changed over the time. Therefore, solutions, which work for them can be applied also in other applications.\n\nDealing with DOM rerender performance can be achieved by using tools and techniques available even in plain javascript. However, the React is offering solution in which all optimizations are done by default. In addition React suggests new approach to application structure. Instead of division- presentation-logic the main key for classification is logical domain. All of React revolutionary concepts are supported by Flux concept of unidirectional data flow. React and Flux together form full-aspects solution for client side of rich web applications.",
      diagram: 'assets/diagrams/flux-react.png'
    }]);

  links = Link.create([
     {
      step_id: 1,
      title: 'Wikipedia',
      description: 'Article in wikipedia.',
      url: 'http://en.wikipedia.org/wiki/Client%E2%80%93server_model'
    },

    {
      step_id: 1,
      title: 'PC magazine definition',
      description: 'Short definitions of different types of client-server architecture.',
      url: 'http://www.pcmag.com/encyclopedia/term/39801/client-server'
    },

    {
      step_id: 1,
      title: 'Client-server in websites',
      description: 'Explanation of client-server in websites.',
      url: 'http://www.digimantra.com/tutorials/how-client-server-model-works-in-websites/'
    },

    {
      step_id: 2,
      title: 'HTML & CSS book',
      description: 'Beauitifuly printed book with all knowledge about HTML and CSS. Its online counterpart includes step by step.',
      url: 'http://www.htmlandcssbook.com/'
    },

    {
      step_id: 2,
      title: 'CSS Zen garden',
      description: 'This page shows the power of CSS. The same content can look comepletly different when particular CSS set is applied.',
      url: 'http://www.csszengarden.com/'
    },
 
    {
      step_id: 2,
      title: 'JavaScript demos',
      description: 'Browse through diffrent examples of JavaScript possibilities.',
      url: 'https://developer.mozilla.org/en-US/demos/tag/tech:javascript'
    },

    {
      step_id: 2,
      title: 'HTML tags cheatsheet',
      description: 'List of HTML tags by w3schools. Feel free to explore other resources at this website.',
      url: 'http://www.w3schools.com/tags/default.asp'
    },

    {
      step_id: 2,
      title: 'CSS How to..',
      description: 'Short explanation of CSS usage with demos and excercises.',
      url: 'http://www.w3schools.com/css/css_howto.asp'
    },

    {
      step_id: 2,
      title: 'Javascript tutorial',
      description: 'Code academy course for beginners.',
      url: 'http://www.codecademy.com/en/tracks/javascript-combined'
    }

    
    ]);



