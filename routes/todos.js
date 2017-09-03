var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/Todo');

router.route('/')
	/* GET /todos listing. */
	.get((req, res, next)=>{
 	 //Retrieve all the todos
  		Todo.find((err,todos)=>{
  		if(err) return next(err);
  		res.json(todos);
  		});
	})
	//Create a todo
	.post((req,res,next)=>{
		Todo.create(req.body,(err,post)=>{
			if(err) return next(err);
			res.json(post);
		})
	});

router.route('/:id')
	
	/* GET /todos/id listing. */
	.get((req,res,next)=>{
		Todo.findById(req.params.id,(err,post)=>{
			if(err) return next(err);
			res.json(post);
		});
	})
	/* UPDATE /todos/id listing. */
	.put((req,res,next)=>{
		Todo.findByIdAndUpdate(req.params.id,(err,post)=>{
			if(err) return next(err);
			res.json(post);
		});
	})

	/* DELETE /todos/:id */
	.delete((req,res,next)=>{
		Todo.findByIdAndRemove(req.params.id,req.body,(err,post)=>{
			if(err) return next(err);
			res.json(post);
		});
	})


module.exports = router;
