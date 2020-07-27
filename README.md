## Problem
The basic idea is that you have a JSON representation of an article, and you need to dynamically construct the webpage, displaying its contents.
The article id can be taken from query parameters.  
a) Write a Node.js server with responding to a GET call to "/" with a dynamically constructed webpage, consisting of all blocks title-image-text.  
b) Support an additional query parameter "bpp" (blocks per page). If it is supplied (bpp=N)  
- the webpage will only contain only N blocks, and the buttons "Previous page", "Next page".
- clicking on the "Previous page", will take the user to the previous N blocks
- clicking on the "Previous page", will take the user to the next N blocks
- the first page shouldn't contain "Previous page" button
- the last page shouldn't contain "Next page" button

## Solution
Node.js server returns all parameters like `id`, `rpp`, `page` and article rendering is done on the client side. 

## How to run
1. Run npm install to install dependencies
2. Run npm start to start the server.
3. Navigate to `localhost:3000/?id=6sIR7uLfAksK0WAaqIw0CY` to see results. Use `rpp` parameter to limit number of results like `localhost:3000/?id=6sIR7uLfAksK0WAaqIw0CY&rpp=2`
