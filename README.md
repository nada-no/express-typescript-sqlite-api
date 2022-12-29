# API REST NODEJS SQLITE TYPESCRIPT

## Setup
To launch the server with nodemon just execute `npm run dev` and will be displayed in `localhost:8000`

To test API within terminal execute:
```
curl -i -X GET -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:8000/books \
    --data '{"title":"Before software can be reusable it first has to be usable.","author":"Ralph Johnson"}'
```

## Tutorials reference
- https://geshan.com.np/blog/2021/10/nodejs-sqlite/
- https://blog.logrocket.com/how-to-set-up-node-typescript-express/