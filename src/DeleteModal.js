import './App.css';
import React from 'react';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

function DeleteModal({deleteTask, item}) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(true)}><MdDelete /></button>
            {show ? (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Supprimer une tâche</h2>
                        <p>Êtes-vous sûr de vouloir supprimer la tâche "{item}" ?</p>
                        <button onClick={() => {deleteTask(item); setShow(false);}}>Oui</button>
                        <button onClick={() => setShow(false)}>Non</button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default DeleteModal;