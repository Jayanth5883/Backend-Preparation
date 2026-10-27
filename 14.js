// HTTP Fundamentals--HTTP methods, request, response, headers, status codes
// HTTP- Hyper Text Transfer Protocol-Is the set of rules that a client (browser,mobile app,your cli tool) and a server use to talk each otherover the internet.
// Request Response model: The client always asks first then the server response.
// HTTPS = HTTP + encryption (TLS). Use it for anything private.

// 1.Anatomy of url
// 2.HTTP request
// 3.HTTP methods
// 4.HTTP headers
// 5.HTTP response
// 6.HTTP Status codes

// 1.) Anatomy of a URL-
// https://example.com:443/users/5?sort=name&page=2#top
// └─┬──┘   └────┬────┘└┬┘└──┬───┘└──────┬───────┘└┬─┘
// SCHEME      HOST   PORT PATH      QUERY STRING  FRAGMENT
// SCHEME- Protocol(http or https)
// HOST- Which server(DOmain)
// PORt- door number on the server
// PATH- which resource on the server
// QUERY STRING- Extra options as key=value pairs joined by &
// FRAGMENT- A spot inside the page never sent to the server

// 2.) HTTP requests- A request has 4 parts:
// POST /users HTTP/1.1                  ← 1. Request line
// Host: api.example.com                 ← 2. Headers
// Content-Type: application/json
// Authorization: Bearer abc123
//                                       ← blank line separates headers from body
// { "name": "Ravi", "role": "Dev" }     ← 3. Body (optional)

// 1.Request line -Method +path +HTTP version
// 2.Headers -Extra information about the request
// 3.Blank line -Marks the end of the headers
// 4.Body -The data you send (Used with post,put patch)

// 3.) HTTP methods-Methods tell to the server what action you want.
// GET -Fetch data -READ 
// POST -Create new data -Create  -has body
// PUT -Replace a whole record -Update  -has body
// PATCH -Change part of a record -Update  -has body
// DELETE -Remove data  -Delete

// Put vs Patch
// Put-Send the whole object.Missing fields may get erased
// Patch -Send only the changed fields

// Get vs Post
// Get -Puts data in the URL
// Post -sends data in the body

// 4.)HTTP headers -Headers are key:value pairs that carry extra information.They exist on both request and responses.
// Request headers -

// Host -Which domain you want -Host: api.example.com
//Content -Type -Format of the body you sent  -application/json
//Accept -Format you want back  -Accept: application/json
//Authorization -Proves who you are	 -Bearer <token>
//User-Agent -Identifies the client   -Mozilla/5.0 ...
//Cookie -Send stored cookie -session=abc123
//Content-Length -Size of body in bytes -35

//Response headers-

// Content-Type -Format of the data returned  -Application/json
// Set-Cookie  -Tells client to store a cookie  -session=abc;HttpOnly
// Cache-Control -How long the response can be cached  - max-age=3600

// Location -Where to go next(redirects,new resources)  - /employees/6
// http://localhost:3000/dashboard
// and the server responds with:
// HTTP/1.1 302 Found
// Location: /login
// the browser navigates to:
// http://localhost:3000/login
// The 302 status code tells the client that this is a temporary redirect.

// Access-Control-Allow-Origin  -Cors permission 
// Tells browsers which origins are allowed to read a response through cross-origin requests.

// Common content types -(MIME types)
// application/json :JSON data
// text/html :Web pages
// text/plain :plain text
// application/x-www-form-urlencoded :HTML form data 
// multipart/FormData :file uploads

// 5. HTTP Response -A response has three parts
// HTTP/1.1 201 Created                  ← 1. Status line
// Content-Type: application/json        ← 2. Headers
// Location: /employees/6

// { "id": 6, "name": "Ravi" }           ← 3. Body

// Status line: HTTP version + status code + short text.
// Headers: information about the response.
// Body: the actual data (JSON, HTML, an image, etc.).

// 6.HTTP status codes -A three digit number telling you what happened.The first digit is the catogory.
//  1XX -Informational ,2XX -Success ,3XX -Redirection ,4XX -Client error ,5XX -Server error.

// 7.) a. Cookoies and sessions -
// Stateless: the server does not remember you between requests. Every request must carry everything needed (this is why cookies and tokens exist).
// The server gives you a cookie via Set-Cookie. Your browser sends it back in every request via Cookie, so the server recognizes you.

// b. Authentication methods -
// Cookies/sessions -Common for websites
// Barrier tokens(JWT) -common for api's,sent in authorization.
// API keys -API keys: simple key in a header or query string.

// c. Query parameters vs Path parameters.
// Path -/employee/7 identifies one specific resources.
// Query -/employees?department=IT&page=2 filters or sorts a collection

// D. CORS -Browsers block a website from calling a different domain’s API unless the server allows it through Access-Control-Allow-Origin.
// Browsers first send an OPTIONS request (called a preflight) to check.

// e) HTTP versions
// HTTP/1.1: one request at a time per connection, text-based.
// HTTP/2: many requests at once on one connection, binary, faster.
// HTTP/3: runs over QUIC (UDP) for even faster connections.

// f) REST
// A common style for designing APIs using these methods and URLs (GET /employees, POST /employees). 
// It is what you will build next in Node.js.

// HTTP = client asks, server answers, and it forgets you afterward.
// Request = method + URL + headers + (body)
// Response = status code + headers + (body)
// Methods = Get (read), Post (create), Put/Patch (update), Delete (remove)
// Status codes = 2xx good, 3xx moved, 4xx your fault, 5xx server’s fault
// Headers = extra labels describing the message



// CREating a basic http server 
const http=require("node:http")

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader=("Content-Type","text-plain")
    res.end("Hello! My http server is working ")
})

server.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})