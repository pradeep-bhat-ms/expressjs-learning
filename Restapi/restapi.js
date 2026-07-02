import express from "express";

const app = express();
const port = 80;

app.use(express.json());

let users = [
    {
        id: 1,
        name: "Pradeep",
        email: "pradeep@gmail.com"
    },
    {
        id: 2,
        name: "Yash",
        email: "yash@gmail.com"
    }
];

// GET All Users
app.get("/users", (req, res) => {
    res.json(users);
});

// GET User By ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// POST - Add User
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});

// PUT - Update User
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json({
        message: "User updated successfully",
        user
    });
});

// DELETE User
app.delete("/users/:id", (req, res) => {
    const index = users.findIndex(u => u.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted successfully"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});