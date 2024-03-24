import './App.css';
import React from 'react';
import Modal from './AddModal';

function Footer({updateSearch, addTask}) {
    return (
        <footer className="TodoApp-footer">
            <input id="searchBar" type="text" onChange={updateSearch} placeholder="search..." />
            <Modal addTask={addTask} />
        </footer>
    );
}

export default Footer;