**auth Route**
| Endpoint | Method | Description |
|------------------|--------|---------------------------|
| /api/auth/signup | POST | create a user |
| /api/auth/signin | POST | login a user |
| /api/auth/google | POST | login a user using google |

**users Route**
| Endpoint | Method | Description |
|-----------------------------|--------|------------------------------|
| /api/users/:userId | PUT | update a user |
| /api/users/:userId | DELETE | delete a user |
| /api/users/find/:userId | GET | get a user |
| /api/users/sub/:userId | PUT | subscribe a user's channel |
| /api/users/unsub/:userId | PUT | unsubscribe a user's channel |
| /api/users/like/:videoId | PUT | like a user's video |
| /api/users/dislike/:videoId | PUT | dislike a user's video |

**videos Route**
| Endpoint | Method | Description |
|---------------------------|--------|------------------------------|
| /api/videos/ | POST | create a video |
| /api/videos/:videoId | PUT | update a video |
| /api/videos/:videoId | DELETE | delete a video |
| /api/videos/find/:videoId | GET | find a video |
| /api/videos/view/:videoId | PUT | view counter of a video |
| /api/videos/trend | GET | get trending videos |
| /api/videos/random | GET | get random videos |
| /api/videos/sub | GET | get subscribed user's videos |
| /api/videos/tags?tags=[] | GET | get recommended videos |
| /api/videos/search?q=[] | GET | search a video |

**comments Route**
| Endpoint | Method | Description |
|--------------------------|--------|-----------------------------|
| /api/comments/ | POST | create a comment |
| /api/comments/:commentId | DELETE | delete a comment |
| /api/comments/:videoId | GET | get all comments of a video |
