# Developing a full stack prototype for a social media application

## Project Brief

**MVP**

- Built with MongoDB, Express.js, React.js and Node.js
- Initially deployed using cyclic (cyclic has ended its services)

**TimeFrame**

- 2 weeks

**Features**

- Login/Register screen complete with JWToken and Bcrypt
- Premium and non-premium user features
- Users can post messages to be stored and rendered upon login
- Friends list for premium users
- Friends' messages will render alongside user's own messages when premium functionality is toggled on
- Logout function

## Technologies and Tools used

- MongoDB
- Express.js
- React.js
- Node.js
- MUI
- Git & Github

<br>

## Description

This emulates most other social media platforms with the ability for users to post on their own feed, add descriptions of themselves as well as the ability to stay connected with multiple users. Additionally, there is the added feature of allowing multiple users to co-exist with specific features only available to the "premium" users. All edits to the feed/profile renders and updates in real time.

## Key Learnings

- Learning to structure backend data to store multiple data models
- Learning to utilise Bcrypt and JWToken for login feature
- Decoupling different code blocks to ensure multiple user types can co-exist with different features
- Using modals to declutter UI
- Render UI in real time when edits to the profile and feed are made

## Screenshots of Application

**Login Screen**
![Login Screen](https://github.com/johnww15/ggwp/blob/main/public/01_Login.png?raw=true)

**Register Account Screen**
![Register Account Screen](https://github.com/johnww15/ggwp/blob/main/public/02_Register.png?raw=true)

**Default Screen for "Non-Premium" Users**
![Default Main Screen](https://github.com/johnww15/ggwp/blob/main/public/03_MainScreen.png?raw=true)

- Non premium users do not have the feature to add friends
- Feed will only show their own messages posted with timestamps included

**"Premium" Users Screen**
![Premium User Screen](https://github.com/johnww15/ggwp/blob/main/public/04_PremiumScreen.png?raw=true)

1. "Premium" user toggle button
   - While unnecessary in a practical situation, this button was included to showcase the different functionality
2. Recommended Friends List
   - "Premium" users are allowed the feature of adding friends
   - The recommended friends list searches the database for users which are not currently friends with the login user and recommends them to be added
3. Posting Messages
   - Users can post a message with a word count limit of 300
4. Message Feed
   - While "non-premium" users will only see a feed of their own messages, "premium" users will see a mix of messages posted by themselves and those on their friends list sorted by their timestamps

**Profile Edit Modal**
![Profile Edit](https://github.com/johnww15/ggwp/blob/main/public/05_ProfileEdit.png?raw=true)

- By clicking the "settings" button, a modal will pop up for users to edit their own personal profile

**Friends List**
![Friends List](https://github.com/johnww15/ggwp/blob/main/public/06_FriendsList.png?raw=true)

- "Premium" users can click the "My Friends" button for this modal to appear and show them their current friends list.
- User can delete the friends by clicking the trash icon next to the selected user
