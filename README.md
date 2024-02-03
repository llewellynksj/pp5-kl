# InkPad

InkPad is social media platform designed to share, explore and connect with a community of users. The core aim of this web application is to promote and share tattoo designs, and to connect tattoo enthusiasts, artists, and admirers alike.

Users will be able to browse and search through posts. They will be able to create their own posts, and attach tags to these to help others to find certain categories more easily. They will also be able to comment on eachothers posts, and to follow/be followed by other users.

![Image of site across a variety of device sizes ](readme/images/responsiveimg.webp)

[Visit the live website here](https://pp5-kl-c6a010106309.herokuapp.com/)

### Back-End API

This project has been built as part of the Advanced Front-End module of my EQF Level 5 Diploma in Full Stack Software Development.
The back-end API for this site was created using Django REST Framework:

[Visit the InkPad API repository here](https://github.com/llewellynksj/pp5-api)

[Visit the InkPad Live API here](https://pp5-api-kl-a5aee8435a6f.herokuapp.com/)

<br>

## Contents

---

### [User Experience (UX)](#user-experience-ux-1)

- [Purpose](#purpose)
- [User Stories](#user-stories)

### [Design](#design-1)

- [Colour Scheme](#colour-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Wireframes](#wireframes)

### [Project Logic](#project-logic-1)

- [User Journey](#user-journey)
- [Kanban Board](#kanban-board)

### [Project Structure](#project-structure-1)

- [Components](#components)
  - [NavBar](#navbar)
  - [Footer](#footer)
  - [SideBar](#sidebar)
  - [BackToTopButton](#backtotopbutton)
  - [Button](#button)
  - [DividerLine](#dividerline)
  - [MenuDropDown](#menudropdown)
  - [Asset](#asset)
  - [Avatar](#avatar)
  - [ImageCropper](#imagecropper)
  - [HottestProfiles](#hottestprofiles)
  - [Profile](#profile)
  - [Post](#post)

### [Features](#features-1)

- [Existing Features](#existing-features)
  - [Home](#home)
  - [Login and Register](#login-and-register)
  - [Add Post](#add-post)
  - [Add Comment Form](#add-comment-form)
  - [Following and Followers](#following-and-followers)
- [Accessibility](#accessibility)
- [Future Features](#future-features)

### [Technologies](#technologies-1)

### [Version Control](#version-control-1)

### [Deployment](#deployment-1)

### [Testing](#testing-1)

### [Credits](#credits-1)

- [Resources](#resources)
- [Acknowledgements](#acknowledgements)

<br>

---

<br>

## User Experience (UX)

### **Purpose**

InkPad aims to provide a welcoming and open social media platform for users from all backgrounds to connect and share content.
It strives to provide a community to all users with no discrimination of their personal views and values.

<br>

### User Stories

| User Story                                                                                     | Epic      |
| :--------------------------------------------------------------------------------------------- | :-------- |
| As a user I can navigate the website easily so I can find the pages I want                     | Feature   |
| As a user I can create a profile so I can interact in the community of registered users        | Profiles  |
| As a registered user I can login to view my own profile                                        | Profiles  |
| As a user I can edit my profile and profile image so I can keep my profile updated             | Profiles  |
| As a user I can post images to share my designs with the community                             | Posts     |
| As a user I can view other posts by registered users so I can look for inspiration             | Posts     |
| As a user I can favourite other users posts so I can easily refer back to them                 | Posts     |
| As a user I can follow other users so that I can easily find their new posts                   | Followers |
| As a user I can see which followers are following me so that I can reciprocate following       | Following |
| As a user I can filter posts by their tags so I can look for specific types of images          | Posts     |
| As a user I can filter posts by their user so I can see all the posts by one specific user     | Profiles  |
| As a user I can search posts with keywords so I can look for specific types of images          | Posts     |
| As a user I can see the most like images so I can keep up to date with what’s trending         | Posts     |
| As a user I can scroll the posts feed so that I don’t have to click a next button              | Posts     |
| As a user I can post comments on other users posts so I can share my thoughts                  | Comments  |
| As a user I can view other users comments on my posts and other users posts                    | Comments  |
| As a user I can edit my own posts so I can correct any errors                                  | Posts     |
| As a user I can delete my own posts so I can remove any unwanted posts                         | Posts     |
| As a user I can edit my own comments so I can correct any errors                               | Comments  |
| As a user I can delete my own comments so I can remove any no longer wanted comments I’ve made | Comments  |
| As a user I can view other users’ profiles so I can see their full posts and follow them       | Profiles  |
| As a user I can see the most followed profiles so I can see who is trending                    | Profiles  |

<br>

---

## Design

### **Colour Scheme**

The design of the site was based on an alternative and punky vibe. The site was designed with a dark theme with a black background throughout, utilising a variation of white (#E9ECEF) as the primary font colour. The contrasting bright pink (#FF00DE) was used as a secondary highlighting colour, to make certain things pop.

<br>

![InkPad colour palette](readme/images/coolors.webp)

<br>

### **Typography**

The [Google Fonts]() 'Rubik Distressed' was used for headings. This font is in keeping with the aesthetics of the site.

![Example of Rubik Distressed font on website](readme/images/rubik_distressed.webp)

<br>

For the main content font, 'Moulpali' was used. This is a very simple and easy to read font that was picked with accessibility being the forefront concern. The slightly squared shape of the letters felt more in keeping with the overall design than a more curved, softer, font.

![Example of Moulpali font on website](readme/images/moulpali.webp)

<br>

### **Imagery**

The InkPad logo was created using [Canva](https://www.canva.com/). The font used in the logo is 'Blanka', and again was chosen due to it's bold, punky style. This font has also been used to create the 'Upload' and 'No results found' images.

![InkPad logo](readme/images/blanka_logo.webp)

<br>

### **Wireframes**

[Balsamiq Wireframing Software](https://balsamiq.com/) was used to create the wireframes.

<details>
<summary>Home Page</summary>

![Wireframe image of home page design](readme/wireframes/home_page.webp)

</details>
<details>
<summary>NavBar</summary>

![Wireframe image of navbar design](readme/wireframes/navbar.webp)

</details>
<details>
<summary>Profile Page</summary>

![Wireframe image of profile page design](readme/wireframes/profile.webp)

</details>
<details>
<summary>Post List</summary>

![Wireframe image of post list design](readme/wireframes/post_list.webp)

</details>
<details>
<summary>Post Page</summary>

![Wireframe image of post page design](readme/wireframes/post_page.webp)

</details>
<details>
<summary>Add Post</summary>

![Wireframe image of add a post page design](readme/wireframes/add_post.webp)

</details>
<br>

---

## Database and Logic

### **User Journey**

![Image of user journey map](readme/images/user_journey.webp)

<br>

<br>

### **Kanban Board**

A Kanban approach was used to keep track of the flow of the project. Once User Stories were set up in the Project they were assigned to EPICs and began the project journey in the 'ToDo' column. As development progressed these moved through 'In Progress' to finally 'Done'. An additional column was added 'Unable to implement' for any features that were not successfully completed.

[You can visit the project board here](https://github.com/users/llewellynksj/projects/11)

Below is an example part way through the site build:

![Image of kanban project hub from Github](readme/images/kanban.webp)

---

## Project Structure

### **Components:**

#### NavBar

#### Footer

#### SideBar

#### BackToTopButton

#### Button

#### DividerLine

#### MenuDropDown

#### Asset

#### Avatar

#### HottestProfiles

#### Profile

#### Post

---

## Features

### **Existing Features:**

#### Home

#### Login and Register

#### Add Post

#### Add Comment Form

#### Following and Followers

<br>

### **Accessibility**

The style of the website has utlised a rough punky style. However, in keeping with best practices steps have still been taken to ensure accessibility is considered throughout.

Close attention has been paid to the following in order to ensure the site is as accessible as possible:

- Contrasting colour scheme.
- Use of semantic HTML.
- Ensuring all images have an alt description for screen readers or where the image cannot be loaded. Also ensuring that these are as descriptive as possible.

<br>

### **Future Features**

In the future there are features and developments that it would be useful to consider adding to create an even better user experience of this website. They include:

- Advanced implementation of the image cropper including on the profile avatar
- A more advanced filtering system where users can select a dropdown filter and sort posts by user, tag, date etc
- A more in-depth Profile page that offers artisits to build a portfolio of work
- A messaging service that allows users to connect with private chats
- Incorporate the search bar within the NavBar and so have it appear across all pages

<br>

---

## Technologies

### **Languages Used**

- HTML
- CSS
- JavaScript ES6
- JSX (an extension to JavaScript ES6)

<br>

**Frameworks, Libraries and Programs Used**

- [React](https://react.dev/)

- [Bootstrap](https://getbootstrap.com/) - styling
- [React Bootstrap](https://react-bootstrap.netlify.app/) - styling
- [Material UI](https://mui.com/material-ui/) - specifically used for building the ImageCropper
- [ElephantSQL](https://www.elephantsql.com/) - database
- [Font Awesome](https://fontawesome.com/) - icons
- [React Icons](https://react-icons.github.io/react-icons/) - icons
- [Balsamiq](https://balsamiq.com/) - wireframes
- [Cloudinary](https://cloudinary.com/) - image storage
- [Google Fonts](https://fonts.google.com/) - fonts
- [Heroku](https://dashboard.heroku.com/apps) - deployment
- [Am I Responsive](https://ui.dev/amiresponsive) - checking responsive across different screen sizes
- [Birme](https://www.birme.net) - image resizing
- [Remove BG](https://www.remove.bg/) - remove image backgrounds
- [Canva](https://www.canva.com/) - designing the logo
- [Coolors](https://coolors.co/) - designing colour palette
- [React Easy Crop](https://www.npmjs.com/package/react-easy-crop) - image cropping
- [React Emoji Mart](https://www.npmjs.com/package/emoji-mart) - emoji picker
- [React Rouer Dom](https://www.npmjs.com/package/react-router-dom)
- [Axios](https://www.npmjs.com/package/axios) - HTTP client for the browser and node.js
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)

<br>

---

## Version Control

Version control has been maintained using Git. The code written for this website has been updated via regular commits to Github. These serve as a record of development and changes made.

The commit history can be viewed [here]()

<br>

---

## Deployment

<br>

---

## Testing

For all testing details visit the [TESTING](TESTING.md) file.

---

## Credits

### **Resources**

-

<br>

### **Acknowledgements**
