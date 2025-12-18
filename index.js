const express = require("express")
require('dotenv').config()

const app = express()

// const port = 3000


const githubData = {
  "login": "MdDanish86",
  "id": 196628209,
  "node_id": "U_kgDOC7hO8Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/196628209?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MdDanish86",
  "html_url": "https://github.com/MdDanish86",
  "followers_url": "https://api.github.com/users/MdDanish86/followers",
  "following_url": "https://api.github.com/users/MdDanish86/following{/other_user}",
  "gists_url": "https://api.github.com/users/MdDanish86/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MdDanish86/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MdDanish86/subscriptions",
  "organizations_url": "https://api.github.com/users/MdDanish86/orgs",
  "repos_url": "https://api.github.com/users/MdDanish86/repos",
  "events_url": "https://api.github.com/users/MdDanish86/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MdDanish86/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Md Zafiruddin Danish ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-27T10:00:43Z",
  "updated_at": "2025-09-15T11:28:40Z"
}



const PORT = process.env.PORT

app.get("/", (req, res)=>{
    res.send('Hello World!')
})

app.get("/youtube", (req, res) =>{
    res.send("Youtube has opened")
})

app.get("/Instagram", (req, res)=>{
    res.send("Instagram has opened")
})


app.get('/githubData', (req, res)=>{
    res.send(githubData)
})


app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${PORT}`);
    
})