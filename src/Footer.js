import './App.css';
import React from 'react';

function Footer({updateSearch, addTask}) {
    return (
        <footer className="TodoApp-Footer">
            <h1>FOOTER ICI</h1>
            <input id="searchBar" type="text" onChange={updateSearch} placeholder="search..." />
            <input type="button" onClick={addTask} value="Ajouter une tâche" />
        </footer>
    );
}

export default Footer;