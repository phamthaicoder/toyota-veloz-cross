// const tokenAccess = 

fetch('https://ssa-api.toyotavn.com.vn/api/TokenAuth/Authenticate', {
    method: "POST",
    headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQzNzcwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkFQSV9MRUFEX0hBS1VIT0tPIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJGV0hQWjRMMzJEVE9DM1RYM1JBUUVDRjVDQkZHU0JZNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJVc2VyIiwiMWE1NWFhYmNiM2MxNGNlNGIxOGI5YTBlNmQwOWRhNDAiXSwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMTAwNSIsInN1YiI6IjQzNzcwIiwianRpIjoiNGE0NzllNTctMDhhYy00YTBjLWE1MzgtYmFiNWY3M2U0MjM2IiwiaWF0IjoxNjU2NTgzNTA4LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiJlYmI3N2IwNi1mMTBjLTQ1ZjUtOTg5Yi1kNDYxZDIwZjYyYzgiLCJ1c2VyX2lkZW50aWZpZXIiOiI0Mzc3MEAxMDA1IiwidG9rZW5fdHlwZSI6IjAiLCJuYmYiOjE2NTY1ODM1MDgsImV4cCI6MTY1NjYyMTMxMywiaXNzIjoidG1zcyIsImF1ZCI6InRtc3MifQ.7IoQ5ywXw4cswhy4s4S729IMdd-a5lpcZ36K6062gfk",
        "Access-Control-Allow-Origin": "*",
    }),
    mode: "no-cors",
    raw : {
        "userNameOrEmailAddress": "API_LEAD_HAKUHOKO",
        "password": "XLjm8W#~94"
    },
})
.then(response => console.log(response))
.then(result => console.log('a', result))
.catch(error => console.log('error', error));