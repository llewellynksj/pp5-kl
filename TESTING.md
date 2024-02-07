# InkPad

## TESTING FILE

![Image of website across different devices](readme/images/responsiveimg.webp)

[Visit the live website here](https://pp5-kl-c6a010106309.herokuapp.com/)

<br>

## Contents

### [Testing](#testing-1)

- [Function Testing](#function-testing)
- [User Story Testing](#user-story-testing)
- [Lighthouse](#lighthouse)
- [Validator Testing](#validator-testing)
- [Unit Testing](#unit-testing)
- [Bugs](#bugs)

<br>

---

<br>

## Testing

Testing was performed across a range of devices, including:

- MacBook Air M1
- Nothing Phone (1)
- iPhone 15 Plus

### **Function Testing**

| Page                      | Test                                                                     | Successfully Completed |
| :------------------------ | :----------------------------------------------------------------------- | :--------------------: |
| All                       | Logo text links back to homepage                                         |          Yes           |
| All                       | Navigation links go to relevant page                                     |          Yes           |
| All                       | Social media icons in footer link to external sites, opening in new tabs |          Yes           |
| All                       | Call to action buttons link to relevant page                             |          Yes           |
| All                       | Images and text flex responsively                                        |          Yes           |
| Login & Register          | Form submits                                                             |          Yes           |
| Login                     | Registered user can login successfully                                   |          Yes           |
| Logout                    | Registered user can logout                                               |          Yes           |
| Add post                  | Registered user can upload a new post                                    |          Yes           |
| Add post                  | Users can zoom to crop their images before uploading                     |          Yes           |
| Post                      | Registered user can edit and delete their own posts                      |          Yes           |
| Post                      | Registered user can add a comment to a post                              |          Yes           |
| Post                      | Registered user can edit and delete their own comment                    |          Yes           |
| Profile                   | Registered user can view and update their own Profile                    |          Yes           |
| Profile                   | Users can view other users' profiles                                     |          Yes           |
| All registered user pages | Registered user can follow and unfollow other users                      |          Yes           |
| Post List                 | Users can keyword search posts                                           |          Yes           |

<br>

### **User Story Testing**

| User Goal                                                                                      | Solution                                                                                                                                               | Successfully Implemented? |
| :--------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| As a user I can navigate the website easily so I can find the pages I want                     | Navigation bar and sidebar menu implemented                                                                                                            | Yes                       |
| As a user I can create a profile so I can interact in the community of registered users        | Able to view, comment on, and like posts. Can follow/unfollow other users                                                                              | Yes                       |
| As a registered user I can login to view my own profile                                        | Login authorisation and profile pages implmented                                                                                                       | Yes                       |
| As a user I can edit my profile and profile image so I can keep my profile updated             | Update profile functionality implemented                                                                                                               | Yes                       |
| As a user I can post images to share my designs with the community                             | Registered users can upload posts via the Add Post Form                                                                                                | Yes                       |
| As a user I can view other posts by registered users so I can look for inspiration             | PostList allows users to browse other users posts. Keyword search also available                                                                       | Yes                       |
| As a user I can favourite other users posts so I can easily refer back to them                 | Like button on posts allows users to add posts to their favourites                                                                                     | Yes                       |
| As a user I can follow other users so that I can easily find their new posts                   | Follow button implemented                                                                                                                              | Yes                       |
| As a user I can see which followers are following me so that I can reciprocate following       | A link to see all posts by users following the logged in user is available via the sidebar menu                                                        | Yes                       |
| As a user I can filter posts by their tags so I can look for specific types of images          | Users are able to search for posts by using the tag in the search bar. Users can also click on the tag of a post to load all search results that match | Yes                       |
| As a user I can filter posts by their user so I can see all the posts by one specific user     | Did not implement as intended, however users can use the keyword search bar to search for users                                                        | Yes                       |
| As a user I can search posts with keywords so I can look for specific types of images          | Keyword search bar implemented                                                                                                                         | Yes                       |
| As a user I can see the most like images so I can keep up to date with what’s trending         | Link to trending posts is available in sidebar menu                                                                                                    | Yes                       |
| As a user I can scroll the posts feed so that I don’t have to click a next button              | Infinite scroll implemented                                                                                                                            | Yes                       |
| As a user I can post comments on other users posts so I can share my thoughts                  | Comment form is available on post page                                                                                                                 | Yes                       |
| As a user I can view other users comments on my posts and other users posts                    | Comments are available to view on post page                                                                                                            | Yes                       |
| As a user I can edit my own posts so I can correct any errors                                  | Edit post functionality is available to the post owner on post page                                                                                    | Yes                       |
| As a user I can delete my own posts so I can remove any unwanted posts                         | Delete post functionality is availble to the post owner on the post page                                                                               | Yes                       |
| As a user I can edit my own comments so I can correct any errors                               | Edit comment functionality is available to the comment owner on the post page                                                                          | Yes                       |
| As a user I can delete my own comments so I can remove any no longer wanted comments I’ve made | Delete comment functionality is available to the comment owner on the post page                                                                        | Yes                       |
| As a user I can view other users’ profiles so I can see their full posts and follow them       | Profile page for each registered user is automatically created                                                                                         | Yes                       |
| As a user I can see the most followed profiles so I can see who is trending                    | The Hottest Profiles section provides users with the top 4-5 user profiles                                                                             | Yes                       |

<br>

### **Lighthouse**

<details>
<summary>Home Page</summary>

![Screenshot of Lighthouse testing for home page](readme/testing_images/lh_home.webp)

</details>
<details>
<summary>Register</summary>

![Screenshot of Lighthouse testing for register page](readme/testing_images/lh_register.webp)

</details>
<details>
<summary>Login</summary>

![Screenshot of Lighthouse testing for login](readme/testing_images/lh_login.webp)

</details>
<details>
<summary>Logged in Home page (PostList Feed)</summary>

![Screenshot of Lighthouse testing for logged in home page on desktop devices]()

</details>
<details>
<summary>Profile</summary>

![Screenshot of Lighthouse testing for profile page on desktop devices]()

</details>
<details>
<summary>Update Profile</summary>

![Screenshot of Lighthouse testing for update profile page on desktop devices]()

</details>
<details>
<summary>Add Post</summary>

![Screenshot of Lighthouse testing for add post page on desktop devices]()

</details>
<details>
<summary>Post</summary>

![Screenshot of Lighthouse testing for post page on desktop devices]()

</details>
<details>
<summary>Trending</summary>

![Screenshot of Lighthouse testing for trending page on desktop devices]()

</details>
<details>
<summary>Favourites</summary>

![Screenshot of Lighthouse testing for favourites page on desktop devices]()

</details>
<details>
<summary>Following</summary>

![Screenshot of Lighthouse testing for following page on desktop devices]()

</details>
<details>
<summary>Followers</summary>

![Screenshot of Lighthouse testing for followers page on desktop devices]()

</details>

<br>

### **Validator Testing**

#### HTML

All pages passed [WC3](https://validator.w3.org/) validation testing.

<details>
<summary>Home Page</summary>

![Screenshot of WC3 testing for home page]()

</details>
<details>
<summary>Register</summary>

![Screenshot of WC3 testing for register page]()

</details>
<details>
<summary>Login</summary>

![Screenshot of WC3 testing for login]()

</details>
<details>
<summary>Logged in Home page (PostList Feed)</summary>

![Screenshot of WC3 testing for logged in home page]()

</details>
<details>
<summary>Profile</summary>

![Screenshot of WC3 testing for profile page]()

</details>
<details>
<summary>Update Profile</summary>

![Screenshot of WC3 testing for update profile page]()

</details>
<details>
<summary>Add Post</summary>

![Screenshot of WC3 testing for add post page]()

</details>
<details>
<summary>Post</summary>

![Screenshot of WC3 testing for post page]()

</details>
<details>
<summary>Trending</summary>

![Screenshot of WC3 testing for trending page]()

</details>
<details>
<summary>Favourites</summary>

![Screenshot of WC3 testing for favourites page]()

</details>
<details>
<summary>Following</summary>

![Screenshot of WC3 testing for following page]()

</details>
<details>
<summary>Followers</summary>

![Screenshot of WC3 testing for followers page]()

</details>

<br>

#### CSS

Stylesheets passed [WC3](https://jigsaw.w3.org/css-validator/) validation testing

<details>
<summary>App Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for App CSS Stylesheet]()

</details>
<details>
<summary>AddEditCommentForm Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for AddEditCommentForm CSS Stylesheet]()

</details>
<details>
<summary>AddPostForm Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for AddPostForm CSS Stylesheet]()

</details>
<details>
<summary>Asset Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for Asset CSS Stylesheet]()

</details>
<details>
<summary>Avatar Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for Avatar CSS Stylesheet]()

</details>
<details>
<summary>Buttons Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for Buttons CSS Stylesheet]()

</details>
<details>
<summary>DividerLine Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for DividerLine CSS Stylesheet]()

</details>
<details>
<summary>Footer Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for Footer CSS Stylesheet]()

</details>
<details>
<summary>LoginRegisterForms Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for LoginRegisterForms CSS Stylesheet]()

</details>
<details>
<summary>MenuDropDown Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for MenuDropDown CSS Stylesheet]()

</details>
<details>
<summary>NavBar Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for NavBar CSS Stylesheet]()

</details>
<details>
<summary>Post Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for Post CSS Stylesheet]()

</details>
<details>
<summary>PostList Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for PostList CSS Stylesheet]()

</details>
<details>
<summary>PostPage Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for PostPage CSS Stylesheet]()

</details>
<details>
<summary>Profile Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for Profile CSS Stylesheet]()

</details>
<details>
<summary>ProfilePage Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for ProfilePage CSS Stylesheet]()

</details>
<details>
<summary>SideBarHottestProfiles Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for SideBarHottestProfiles CSS Stylesheet]()

</details>

<br>

### JSHint

<br>

### **Unit Testing**

Unit testing has been carried out across the core elements of the application. Once a test had been written I would fix any errors that arose before moving on.

Whilst the automated testing in this project is not extensive I recognise the importance of it and intend to deepen my knowledge in this area for future projects.

Testing was carried out on the following:

- NavBar
- Footer
- ImageCropper
- BackToTopButton
- LoginForm
- RegisterForm
- AddPostForm
- Post

![Image of tests that were run](readme/images/unit_tests.webp)

![Image of passed tests](readme/images/passed_tests.webp)

<br>

### **Bugs**

Additional testing was carried out by friends and family, and resulting bugs and their solutions were detailed below.

| Raised by   | Bug | Solution |
| :---------- | :-- | :------- |
| User Tester |     |          |
| User Tester |     |          |
| User Tester |     |          |
| User Tester |     |          |

<br>

---
