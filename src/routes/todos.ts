import { Router } from 'express';
import { Todo } from '../models/todo';

let todos: Todo[] = [];
const router = Router();

type RequestBody = { text:string };
type RequestParams = { todoId:String };

router.get('/',(req,res,next) => {
    res.status(200).json({todos:todos});
});

router.post('/todo',(req,res,next) =>{
    const body = req.body as RequestBody;

    if (!req.body || !body.text) {
        return res.status(400).json({ error: 'Text is required for the todo item' });
    }

    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };

    todos.push(newTodo);
    return res.status(201).json({message: 'Added todo', todo:newTodo, todos: todos});
});

router.put('/todo/:todoId',(req,res,next) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;
  const body = req.body as RequestBody;
  const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);

  if(todoIndex>=0){
    todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
    return res.status(201).json({message: 'Updated Todo', todos:todos})
  }
  res.status(404).json({message: 'Could not find todo for this id.'})
});

router.delete('/todo/:todoId',(req,res,next) => {
    const params = req.params as RequestParams;
    todos = todos.filter( todoItem => todoItem.id !== params.todoId);
    res.status(200).json({message:"Deleted todo" , todo:todos})
 });


export default router;