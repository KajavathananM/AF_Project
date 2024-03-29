const express = require('express');
const routes = express.Router();

const InstructorRoutes = require('./Elements/Instructor/Instructor.routes');
const ModuleRoutes = require('./Elements/Module/Module.routes');
const AssignmentRoutes = require('./Elements/Assignment/Assignment.routes');
const ExamRoutes = require('./Elements/Exam/Exam.routes');
const MarkRoutes = require('./Elements/Marks/Marks.routes');
const StudentRoutes = require('./Elements/Student/Student.routes');
const StudentQuestion = require('./Elements/StudentQuestion/StudentQuestion.routes');


//Kaja
const AdminRoutes = require('./Elements/Administrator/Admin.routes');
const EmailRoutes = require('./Elements/Email/Email.routes');


routes.use('/instructors',InstructorRoutes);
routes.use('/modules',ModuleRoutes);
routes.use('/assignments',AssignmentRoutes);
routes.use('/exams',ExamRoutes);
routes.use('/marks',MarkRoutes);
routes.use('/students',StudentRoutes);

routes.use('/question',StudentQuestion);

//Kaja
routes.use('/Administrators',AdminRoutes);
routes.use('/Emails',EmailRoutes);

module.exports = routes;
