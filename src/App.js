import './App.css';
import React from 'react';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { text: "Learn JavaScript", done: false, display: true },
                { text: "Learn React", done: false, display: true },
                { text: "Play around in JSFiddle", done: true, display: true },
                { text: "Build something awesome", done: true, display: true }
            ]
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.orderUp = this.orderUp.bind(this);
        this.orderDown = this.orderDown.bind(this);
        this.addTask = this.addTask.bind(this);
        this.changeState = this.changeState.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    render() {
        return (
            <div>
                <input id="searchBar" type="text" onChange={this.updateSearch} placeholder="search..." />
                <button onClick={this.addTask} >Ajouter une tâche</button>
                <h2>Todos:</h2>
                <ol>
                    {this.state.items.map(item => (
                        <li key={item.id} className={(item.display ? "" : "hide")}>
                            <label>
                                <input type="checkbox" checked={item.done} onChange={() => this.changeState(item.text)} />
                                <span className={item.done ? "done" : ""}>{item.text}</span>
                                <button onClick={() => this.deleteTask(item.text)}>-</button>
                                <button onClick={() => this.orderUp(item.text)}>up</button>
                                <button onClick={() => this.orderDown(item.text)}>down</button>
                            </label>
                        </li>
                    ))}
                </ol>
                <span>Il y a {this.state.items.length} Tasks ({this.state.items.filter((item) => !item.done).length} en attente{(this.state.items.filter((item) => !item.done).length > 1 ? "s" : "")})</span>
            </div>
        )
    }

    updateSearch(e) {
        this.state.items.forEach((item) => {
            if (item.text.includes(e.target.value)) {
                item.display = true;
            }
            else {
                item.display = false;
            }
        });
        this.setState({ items: this.state.items });
    }

    orderUp(itemId) {
        this.setState(prevState => {
            const items = [...prevState.items]; // create a copy of the state array
            const index = items.findIndex(item => item.text === itemId);
            if (index - 1 >= 0) {
                let tmp = items[index - 1];
                items[index - 1] = items[index];
                items[index] = tmp;
            }
            return { items }; // return the new state
        });
    }

    orderDown(itemId) {
        this.setState(prevState => {
            const items = [...prevState.items]; // create a copy of the state array
            const index = items.findIndex(item => item.text === itemId);
            if (index + 1 < items.length) {
                let tmp = items[index + 1];
                items[index + 1] = items[index];
                items[index] = tmp;
            }
            return { items }; // return the new state
        });
    }

    addTask() {
        console.log("tâche ajouter");
        const newText = prompt("Donner un titre à la tâche :");
        const newTask = { text: newText, done: false, display: true };

        this.setState(prevState => ({
            items: [...prevState.items, newTask]
        }));
    }

    deleteTask(itemId) {
        if (window.confirm("T sur mon reuf ?")) {
            this.setState(prevState => {
                const items = [...prevState.items]; // create a copy of the state array
                const index = items.findIndex(item => item.text === itemId);
                items.splice(index, 1); // modify the copied array
                return { items }; // return the new state
            });
        }
    }

    changeState(itemId) {
        const index = this.state.items.findIndex(item => item.text === itemId);
        const updatedItem = this.state.items[index]
        updatedItem.done = !updatedItem.done;
        this.setState(prevState => ({
            items: [
                ...prevState.items.slice(0, index), // Include items before the updated one
                updatedItem, // Insert the updated item
                ...prevState.items.slice(index + 1) // Include items after the updated one
            ]
        }));
    }
}

export default TodoApp;
