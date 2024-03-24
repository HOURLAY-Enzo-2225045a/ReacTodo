import './App.css';
import React from 'react';

function Header({items}) {
    return (
        <header className="TodoApp-header">
            <h1>HEADER ICI</h1>
            <span>Il y a {items.length} Tasks ({items.filter((item) => !item.isChecked).length} en attente{(items.filter((item) => !item.isChecked).length > 1 ? "s" : "")})</span>
            <progress value={20} max="100" />
        </header>
    );
}

export default Header;