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
        /*this.state = {
            items: [
                { text: "Learn JavaScript", done: false, display: true },
                { text: "Learn React", done: false, display: true },
                { text: "Play around in JSFiddle", done: true, display: true },
                { text: "Build something awesome", done: true, display: true }
            ]
        }*/
        this.state = {items: JSON.parse(localStorage.getItem("tasks"))};

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
                <button onClick={() => this.affiche()} >LOG</button>
                <input id="searchBar" type="text" onChange={this.updateSearch} placeholder="search..." />
                <button onClick={this.addTask} >Ajouter une tâche</button>
                <h2>Todos:</h2>
                <ol>
                    {this.state.items.map(item => (
                        <li key={item.title}>
                            <label>
                                <input type="checkbox" checked={item.isChecked} onChange={() => this.changeState(item.title)} />
                                <span className={item.isChecked ? "done" : ""}>{item.title}</span>
                                <button onClick={() => this.deleteTask(item.title)}>-</button>
                                <button onClick={() => this.orderUp(item.title)}>up</button>
                                <button onClick={() => this.orderDown(item.title)}>down</button>
                            </label>
                        </li>
                    ))}
                </ol>
                <span>Il y a {this.state.items.length} Tasks ({this.state.items.filter((item) => !item.isChecked).length} en attente{(this.state.items.filter((item) => !item.isChecked).length > 1 ? "s" : "")})</span>
            </div>
        )
    }

    affiche(){
        console.log("state",this.state);
        console.log("items",this.state.items);
    }

    updateSearch(e) {
        const searchValue = e.target.value.toUpperCase();
        this.setState(prevState => {
            const items = JSON.parse(localStorage.getItem("tasks")).filter((item) => item.title.toUpperCase().includes(searchValue));
            console.log("items",items);
            return {items};
        });
    }

    orderUp(itemId) {
        this.setState(prevState => {
            const items = [...prevState.items]; // create a copy of the state array
            const index = items.findIndex(item => item.title === itemId);
            if (index - 1 >= 0) {
                let tmp = items[index - 1];
                items[index - 1] = items[index];
                items[index] = tmp;
            }
            localStorage.setItem("tasks", JSON.stringify(items))
            return { items }; // return the new state
        });
    }

    orderDown(itemId) {
        this.setState(prevState => {
            const items = [...prevState.items]; // create a copy of the state array
            const index = items.findIndex(item => item.title === itemId);
            if (index + 1 < items.length) {
                let tmp = items[index + 1];
                items[index + 1] = items[index];
                items[index] = tmp;
            }
            localStorage.setItem("tasks", JSON.stringify(items))
            return { items }; // return the new state
        });
    }

    addTask() {
        const newText = prompt("Donner un titre à la tâche :")
        if(newText !== null && newText !== ""){
            console.log("tâche ajouter");
            this.setState(prevState => {
                const newTask = { title: newText, isChecked: false}
                const items = [...prevState.items, newTask]
                localStorage.setItem("tasks", JSON.stringify(items));
                return {items};
            });
            
        }
    }

    deleteTask(itemId) {
        if (window.confirm("T sur mon reuf ?")) {
            this.setState(prevState => {
                const items = [...prevState.items]; // create a copy of the state array
                const index = items.findIndex(item => item.title === itemId);
                items.splice(index, 1); // modify the copied array
                localStorage.setItem("tasks", JSON.stringify(items));
                return { items }; // return the new state
            });
        }
    }

    changeState(itemId) {
        const index = this.state.items.findIndex(item => item.title === itemId);
        const updatedItem = this.state.items[index]
        updatedItem.isChecked = !updatedItem.isChecked;
        this.setState(prevState => ({
            items: [
                ...prevState.items.slice(0, index), // Include items before the updated one
                updatedItem, // Insert the updated item
                ...prevState.items.slice(index + 1) // Include items after the updated one
            ]
        }));
        localStorage.setItem("tasks", JSON.stringify(this.state.items));
    }
}

export default TodoApp;
