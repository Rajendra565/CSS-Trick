import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Animation</title>
    <link rel="stylesheet" href="./index.css">


    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body{
            width: 100%;
            height: 100vh;
            display: grid;
            place-items: center;
        }
        .btn{
            padding: 12px 20px;
            border: none;
            background: 
            lightseagreen;
            letter-spacing: 2px;
            color: #fff;
            font-size:18px ;
            font-weight: 700;
            transition: all 1s ease;
            text-transform: capitalize;
            
        }
        .btn:hover{
            box-shadow: 10px 10px 10px #000;
        }
    </style>
</head>
<body>
    <button class="btn">Click Me</button>
    
</body>
</html>`);
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});