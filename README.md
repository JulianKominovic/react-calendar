# React Simple Calendar

_This is a simple calendar, built using React.js and some libraries to manipulate date and generate some animations_



## Technologies used 🛠

- Javascript
- React.js
- CSS
- HTML



## Libraries used 📚

- Moment.js
- React Spring
- Styled Components
- React Swipeable
- React Router



## Features used 🧰

- LocalStorage
- Date functions
- JSON



## Building explanation 🔨

### Designing stage

Simple Calendar was designed in Figma.

Here you can see some mockups, and starting ideas.

![image-20210728212112853](C:\Users\julia\AppData\Roaming\Typora\typora-user-images\image-20210728212112853.png)

The main idea was keeping it simple after all it's called Simple Calendar.

The final result differs from the mockups because of accessibility and most because compatibly issues between desktop and mobile port.



### Researching stage

I wanted to practice React and make something I could handle, so I decided to build this project.

The main features I wanted this app to have were:

- Nice and relaxing colors.
- Offline data storage.
- Single page site.
- Mobile app.

**So I found the following libraries that would help me building this app:**

- **React Router**: this library basically allows you to have a single page application. It provides react components and new hooks to navigate through your page without reloading every time.
- **Moment.js**: this library help me out with date vanilla function in JavaScript. It allows you to manipulate date milliseconds, parsing it, and operating it.
- **React Swipeable**: it's a simple library with some new hooks to capture taps and swipes in mobile devices in a very powerful way.
- **React spring** (evaluating moving to Framer Motion): this library will help you to animate and transition elements with physics properties.
- **Styled Components**: it's one of my favorite libs. It allows you to make React components with styles without having to create hooks everywhere. Also provides you a dynamic class system, a powerful way to dynamically change elements CSS properties, and of course, it makes everything much more accessible.



### Developing stage

I started making the static components first, then I moved to dynamics components.

The landing is simple, just statics components.

The calendar, the task, and edit task screens are entirely made dynamically.

All of your tasks stores in LocalStorage, so whenever you want you can delete it, in a future I will add this function to the app.

The LocalStorage keys are made with a combination of year + month + day, but it only accepts string type data, so when you create a new task, what's really happen is that an array of object (task) are being stringify and save in localStorage.

The task list section, is entirely created in the moment you touch some day in the calendar. Immediately, creates a petition to localStorage and brings all the tasks to the screen.

The task editing section, takes all the current data of the task you clicked and allows you to overwrite only the data you change.

**By the moment, the notification button and functionalities related to are not working**







My LinkedIn profile: https://www.linkedin.com/in/jkominovic/

With 💘 Julian Ezequiel Kominovic.
