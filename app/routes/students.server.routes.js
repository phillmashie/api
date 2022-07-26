/**
 * 
 * @file        students.server.routes.js
 * @description defines the routes for the students entity
 * @author      Phillip Mashingaidze
 * @date        2022.06.29
 * 
 */

 const express = require('express');
 const router = express.Router();
 const mongoose = require('mongoose');
 
 // student object created from the Schema / model
 const Student = require('../models/students.server.model');
 const studentsController = require("../controllers/students.server.controller");
 
 router.route('/')
     .get((req, res, next) => studentsController.GetStudents(req, res, next))
     //  2022.06.29 - 08:19:58 - this takes care of admin registering student accounts
     .post((req, res, next) => studentsController.Create(req, res, next));
 
 router.route('/login')
     .post((req, res, next) => studentsController.Login(req, res, next));
 
 router.route('/:id')
     .get((req, res, next) => studentsController.GetStudentDetails(req, res, next))
     .put((req, res, next) => studentsController.UpdateStudent(req, res, next))
     .delete((req, res, next) => studentsController.DeleteStudent(req, res, next));
 
 router.route('/courses')
     .post((req, res, next) => studentsController.EnrollInCourse(req, res, next));
 
 router.route('/courses/:deletionObj')
     .delete((req, res, next) => studentsController.DropCourse(req, res, next));
 
 module.exports = router;