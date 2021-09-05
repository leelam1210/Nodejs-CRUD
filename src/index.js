const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const SortMiddleWare = require('./app/middlewares/SortMiddleWare');

//connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());



app.use(methodOverride('_method'));

//  custom middlewares
app.use(SortMiddleWare);
//HTTP logger
// app.use(morgan('combined'));

//template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers:{
            sum: (a, b) => a+b,
            sortable: (field, sort) =>{
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'bi bi-filter',
                    asc: 'bi bi-sort-down-alt',
                    desc: 'bi bi-sort-down',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }
                const icon = icons[sortType];
                const type = types[sortType];
                return `
                     <a href="?_sort&column=${field}&type=${type}"> <i class="${icon}"></i></a>
                `
            }
        }
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log(path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
