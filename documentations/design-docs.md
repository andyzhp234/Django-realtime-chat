# Design document

# Django Realtime Group Chat App

Author: Haopeng Zeng

Date: 10/19/2022 (Updated)

# Overview

The primary goal of this project was to gain experience in building a mid/high-level complexity web application that facilitates real-time communication through websockets and HTTP protocol. The frontend of the app is implemented using React, which provides a user-friendly interface and seamless connections to the backend websocket. On the backend, we used Django and Django Restframework to develop REST APIs and establish websocket connections using Django Channels. By using these technologies, we were able to create a robust chat app that provides a smooth user experience and real-time updates.

Our chat application enables real-time communication between people from all around the world. We recommend that users sign up for their own account, which allows them to chat with others using their own name. If users prefer not to sign up, they can still use the demo user to log into the application and participate in the chat.

Currently, our application supports four chat rooms: Game, Study, Movie, and Music.

# Problem Statement

## Initial Project Specifications

1.  Realtime chat communication
2.  User Registration
3.  Track Conversations and Users in Chat
4.  Record / Save conversations
5.  Delete / Edit message (Optional)
6.  More....

## Web Sockets

1.  Needs to utilitze web socket for real time application
2.  Web protocal running over TCP
3.  Allows us to create a asyn environment
4.  Bi-directional (where HTTP is one-directional). Server and client can send message at the same time.
5.  Socket is full-duplex

## WSGI and ASGI

1.  We need to use both WSGI and ASGI
2.  WSGI for static pages
3.  ASGI for asyn data reading and sending

## Key User Stories and Tasks

| Title                                                                 | User Story Description                                                                                                                                                                  | Priority  | List of tasks needed to achieve the goal |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------- |
| Login Page                                                            | As a user, I want a login page so that I can login to my account, and only I can login to the account.                                                                                  | Must have | Needs user model in Django               |
| Signup Page                                                           | As a user, I want a sign up page so that I can create my account so that I can login to my account to use the website                                                                   | Must have | user model in Django                     |
| User account with first name                                          | As a user, I want my account to have my first name so that when I send messages others will know that I send it.                                                                        | Must have | User model Django                        |
| User account with icon                                                | As a user, I want to show my icon and other people's icon during the chatroom because It can not only helps me to quickly identify who send the message but also shows my personalities | Can have  | User Icon model Django                   |
| Login with only username and password                                 | As a user, I want to sign in quickly; hence I don't want too much infos to be required when sign in. (Ex: 2-step verification). (Trade-off: Security)                                   | Must have | User model Django                        |
| Lobby page                                                            | As a developer, I want the user to select the chatroom they want to go in a lobby page.                                                                                                 | Must have | REACT Frontend                           |
| Lobby page with images                                                | As a user, I wants the chatroom in the lobby to have images so that It can helps me better identify what content that chat room is about                                                | Must have | CSS                                      |
| Have multiple lobby page                                              | As a user, I don't want to use a chat app that only have a single chatroom. Mutiple chatroom that related to different content would be great.                                          | Must have | REACT                                    |
| Chatroom page should have Title                                       | As a user, when I logged in, I want to see the title of the chatroom that I am currently in                                                                                             | Must have | REACT & URL                              |
| Chatroom should have button that I can return lobby                   | As a user, I want a way to go back to lobby when I am currently in a chatroom                                                                                                           | Must have | REACT                                    |
| Both lobby and chatroom should have sign out button                   | As a user, I want to log out of my account anytime in the application (lobby & chatroom)                                                                                                | Must have | REACT                                    |
| Chatroom should be able to read old messages                          | As a user, I want to read the most recent message in the chatroom                                                                                                                       | Must have | Django Message model & Django Views      |
| Chatroom messages should be able to know who sends the message        | As a user, I would like to know who I'm chatting with                                                                                                                                   | Must have | User model Django                        |
| Chatroom messages should be able to know the time the message is send | As a user, I would like to know when the message is send                                                                                                                                | Must have | Message Model Django                     |
| Chatroom should have a window that display all messages               | As a user, I would like the chatroom to have a window that display the message                                                                                                          | Must have | REACT Hooks                              |
| Chatroom should have a input field to send messages                   | As a user, I want to send the message in the chat room                                                                                                                                  | Must have | REACT                                    |
| Users in the chat room should know who joined the chat room           | As a user, I would like to know if someone joins the chatroom                                                                                                                           | Must have | Django Channel                           |
| Users in the chat room should know who leaved the chat room           | As a user, I would like to know if someone leaves the chatroom                                                                                                                          | Must have | Django Channel                           |
| Chatroom auto-scroll to newest message                                | As a user, I would the window to pin to the newest message.                                                                                                                             | Must have | Javascript & React                       |

## Technical Requirements

### Backend REST API Route

| Endpoint URL      | Request type (GET, POST, etc.) | Description of the request/response                    |
| ----------------- | ------------------------------ | ------------------------------------------------------ |
| admin/            | GET/PUT/POST/DELETE            | Django Default admin page                              |
| api/signup/       | POST                           | REST API to sign up user                               |
| api/token/        | POST                           | REST API to Login user and return Access&Refresh Token |
| api/token/refresh | POST                           | REST API to refresh the access token                   |

### Backend WebSocket Route

| Endpoint URL         | Request type (GET, POST, etc.) | Description of the request/response                                                                                                                                     |
| -------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws/chat/<room_name>/ | Websocket (GET) Handshake      | URL Route that will opens up the websocket connection with <room_name>. When connection request is send, it will first do a 3-way handshake and then opens up accepted. |

### Frontend Route

| Endpoint URL       | Description of the request/response                |
| ------------------ | -------------------------------------------------- |
| ''                 | Default page where user login their account        |
| signup/            | Page where user sign up their account              |
| lobby/             | Page where user can select which chatroom to enter |
| lobby/<room_name>/ | Chatroom where user can read and send messages     |

### Data Schema

#### User Model

| Column     | data type | Details                  |
| ---------- | --------- | ------------------------ |
| username   | string    | User's username to login |
| first_name | string    | User's first name        |
| last_name  | string    | User's last name         |
| password   | string    | User's password          |

#### Message Model

| Column    | data type | Details                                |
| --------- | --------- | -------------------------------------- |
| chatRoom  | string    | Which chatroom this message belongs to |
| firstname | string    | Info about sender's first name         |
| username  | string    | Info about sender's username           |
| content   | string    | Message Content                        |
| icons     | string    | Sender's icon                          |
| timestamp | date      | Date this message is send              |

#### Icon Model

| Column   | data type  | Details                             |
| -------- | ---------- | ----------------------------------- |
| user     | User Model | Foreign Key                         |
| Icon URL | String     | string that contains url to an icon |

# Section 2: HOW

## Third-Party Libraries

| Third-party library name and version | Why it is needed                                                                    |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| daphne (channels)                    | Need this library to server both HTTP (WSGI) and Websocket(ASGI)                    |
| channels-redis                       | Need this library for deployment as We need to use Redis for Django Channels layers |
| Django                               | Backend Framework                                                                   |
| django-cors-headers                  | Need this library to enable CORS during development                                 |
| djangorestframework                  | Need this library for REST API and JWT                                              |
| djangorestframework-simplejwt        | Need this library for JWT access token and refresh token                            |
| gunicorn                             | Need this library to server WSGI                                                    |
| python-dotenv                        | Need this library to read file from .env file                                       |
| pytz                                 | Need this library to record the time a message is send                              |
| whitenoise                           | Need this library to serve the static file                                          |

## Redis as Channel

1.  What role does Redis serve in Django Channels??
2.  Redis as django channel layer is recommanded by Django Official documentations
3.  The primary purpose of redis in django-channel_layers is to store the necessary information required for different instances of consumers to communicate with one another.
4.  Redis is used as a storage layer for channel names and group names. These are stored within Redis so that they can be accessed from any consumer instance.

    CHANNEL_LAYERS = {
    "default": {
    "BACKEND": "channels_redis.core.RedisChannelLayer",
    "CONFIG": { # ("localhost", 6379)
    "hosts": [os.environ.get('REDIS_URL', 'redis://localhost:6379')],
    },
    },
    }

# Section 3: Key High-Level and Architectural Decisions

## Authentication Process

1.  Client Sign in
2.  Sends API request to get access token and refresh token
3.  Use access token to access Websocket
4.  Open connection with websocket (Pass JWT through URL query)
5.  Access token will expire in 5 min
6.  Frontend needs to send refresh token every 4 min (Needs to anticipate in Network Delay and etc delay)
7.  Websocket should temperarly check in anyone in the websocket has expired token, and if so, kick them out.

## The Design Diagram

### General work flow

<img src="../documentations/screenshots/flow-chart.png" alt="screenshots" />

### Django Channel flow chart

<img src="../documentations/screenshots/django-channel.png" alt="screenshots" />

### Websocket Connection

<img src="../documentations/screenshots/websocket-connection.png" alt="screenshots" />

# Screenshots

<img src="../documentations/screenshots/login.jpg" alt="screenshots" />
<img src="../documentations/screenshots/signup.jpg" alt="screenshots" />
<img src="../documentations/screenshots/lobby.jpg" alt="screenshots" />
<img src="../documentations/screenshots/chatroom.jpg" alt="screenshots" />

# Technologies

- REACT
- REACT Context
- REACT Hook
- Node.js
- JWT
- Axios
- Django
- Django Restframework
- Django Restframework-simplejwt
- Django Channel (daphne)
- SQLite
- Redis
- Virtual env
