import TodoModel from "../Models/Todo.model.js";
const   createTodo=async(req,res)=>{
    try {
        const {title,description,completed}=req.body;
        const todo=new TodoModel({
            title,
            description,
            completed
        })
        await todo.save();
        res.status(201).json({
            success:true,
            todo,
            message:"Todo created successfully"});
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "An error occurred while creating the todo" });
    }
}   

const getTodos=async(req,res)=>{
    try {
        const todos=await TodoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        console.error("Error getting todos:", error);
        res.status(500).json({ error: "An error occurred while getting todos" });
    }
}

const updateTodo=async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,description,completed}=req.body;
        const todo=await TodoModel.findById(id);
        if(!todo){
            return res.status(404).json({error:"Todo not found"});
        }
        todo.title=title;
        todo.description=description;
        todo.completed=completed;
        await todo.save();
        res.status(200).json({message:"Todo updated successfully"});
    } catch (error) {   
        console.error("Error updating todo:", error);
        res.status(500).json({ error: "An error occurred while updating the todo" });
    }
}
const deleteTodo=async(req,res)=>{
    try {
        const {id}=req.params;
        const todo=await TodoModel.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({error:"Todo not found"});
        }
        res.status(200).json({message:"Todo deleted successfully"});
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ error: "An error occurred while deleting the todo" });
    }
}
export {createTodo,getTodos,updateTodo,deleteTodo};