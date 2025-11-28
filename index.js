import express from 'express';
const app = express();
import cors from 'cors';

const PORT = 8081;

app.use(cors());
app.use(express.json());

const todos = [
    { id: 1, task: "Learn Rust", completed: false },
    { id: 2, task: "Practice Go concurrency", completed: false },
    { id: 3, task: "Finish system design notes", completed: false },
    { id: 4, task: "Buy groceries", completed: true },
    { id: 5, task: "Write a blog post", completed: false }
];

const getRandomTodo = () => {
    return todos[Math.floor(Math.random() * todos.length)];
};

app.get('/', (req, res) => {
    const todo = getRandomTodo();
    res.status(200).json(todo);
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    let todo = todos.find(todo => todo.id === id);
    todo = todo ?? getRandomTodo();
    return res.status(200).json(todo);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
