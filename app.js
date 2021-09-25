var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const params = require('strong-params');
const shift = require('./app/controllers/shift-controller');
const personInfos = require('./app/controllers/person-info-controller');
const audiences = require('./app/controllers/audience-controller');
const departaments = require('./app/controllers/departament-controller');
const courseNames = require('./app/controllers/course-name-controller');
const educationBases = require('./app/controllers/education-base-controller');
const groups = require('./app/controllers/group-controller');
const lessons = require('./app/controllers/lesson-controller');
const subjects = require('./app/controllers/subject-controller');
const teachers = require('./app/controllers/teacher-controller');
const teachersSubjects = require('./app/controllers/teachers-subject-controller');
const workingTypes = require('./app/controllers/working-type-controller');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(params.expressMiddleware());

app.use('/shifts', shift);
app.use('/person-infos', personInfos);
app.use('/audiences', audiences);
app.use('/departaments', departaments);
app.use('/course-names', courseNames);
app.use('/education-bases', educationBases);
app.use('/groups', groups);
app.use('/lessons', lessons);
app.use('/subjects', subjects);
app.use('/teachers', teachers);
app.use('/teachers-subjects', teachersSubjects);
app.use('/workingt-types', workingTypes);

app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;