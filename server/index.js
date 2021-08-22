const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express(),
            bodyParser = require("body-parser");

        const allItemArray = [ 
            {
                id: 1,
                name: "Apple-iphone-se-2020",
                imageUrl: "/img/img1.jpg",
                status: true
            },
            {
                id: 2,
                name: "Apple-iphone-12",
                imageUrl: "/img/img2.jpg",
                status: true
            },
            {
                id: 3,
                name: "Samsung-galaxy-S22",
                imageUrl: "/img/img3.jpg",
                status: true
            },
            {
                id: 4,
                name: "Samsung-galaxy-A71",
                imageUrl: "/img/img4.jpg",
                status: true
            },
            {
                id: 5,
                name: "Redmi-note8",
                imageUrl: "/img/img5.jpg",
                status: true
            },
            {
                id: 6,
                name: "Samsung-note20-pro",
                imageUrl: "/img/img6.jpg",
                status: true
            },

        ];

        server.use(bodyParser.json());

        server.get('/api/get-all-items', (req, res) => {
            return res.send(allItemArray);

        });

        server.post('/api/add-to-fav', (req, res) => {
            const item = allItemArray.find(c => c.id === parseInt(req.body.item.id));
            item.status = req.body.item.status;
            return res.send(item);

        });

        server.get('/api/get-all-fav-items', (req, res) => {
            const favItem = allItemArray.filter(c => c.status === true);
            return res.send(favItem);

        });


        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log(`> Ready on ${PORT}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });