import './App.css';
import React from 'react';

function Header({items}) {
    const totalTasks = items.length;
    const completedTasks = items.filter((item) => item.isChecked).length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <header className="TodoApp-header">
            <h1>My <mark>Todo List</mark></h1>
            <progress value={progress} max="100" /> <br/>
            <span>{completedTasks} / {totalTasks} tâche{(completedTasks > 1 ? "s" : "")} accomplie</span> 
        </header>
    );
}

export default Header;