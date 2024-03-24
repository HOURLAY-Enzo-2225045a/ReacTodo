import './App.css';
import React from 'react';
import { useState } from 'react';

function AddModal({addTask}) {
    const [show, setShow] = useState(false);
    const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskName);
    setTaskName('');
    setShow(false);
  };

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

    return (
        <div>
            <button onClick={() => setShow(true)}>Ajouter une tâche</button>
            {show ? (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ajouter une tâche</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="taskName">Nom de la tâche : </label>
                            <input type="text" id="taskName" name="taskName" value={taskName} onChange={handleChange} required />
                            <br/>
                            <button type="submit">Ajouter</button>
                            <button type="button" onClick={() => setShow(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default AddModal;