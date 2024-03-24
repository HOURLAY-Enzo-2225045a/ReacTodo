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
        super(props);
        if (localStorage.getItem("tasks") === null) {
            this.state = {
                items: [
                    { title: "Learn JavaScript", isChecked: false },
                    { title: "Learn React", isChecked: false },
                    { title: "Play around in JSFiddle", isChecked: true },
                    { title: "Build something awesome", isChecked: true }
                ]
            }
        } else {
            this.state = {items: JSON.parse(localStorage.getItem("tasks"))};
        }
        

        this.updateSearch = this.updateSearch.bind(this);
        this.orderUp = this.orderUp.bind(this);
        this.orderDown = this.orderDown.bind(this);
        this.addTask = this.addTask.bind(this);
        this.changeState = this.changeState.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    render() {
        const itemsToDisplay = this.state.searchResults || this.state.items;
        return (
            <div>
                <button onClick={() => this.affiche()} >LOG</button>
                <input id="searchBar" type="text" onChange={this.updateSearch} placeholder="search..." />
                <button onClick={this.addTask} >Ajouter une tâche</button>
                <h2>Todos:</h2>
                <ol>
                    {itemsToDisplay.map(item => (
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
        console.log("tasks",JSON.parse(localStorage.getItem("tasks")));
    }

    updateSearch(e) {
        const searchValue = e.target.value.toUpperCase();
        this.setState(prevState => {
            const searchResults = JSON.parse(localStorage.getItem("tasks")).filter((item) => item.title.toUpperCase().includes(searchValue));
            console.log("searchResults",searchResults);
            return {searchResults};
        });
    }

    updateSearchResults() {
        console.log("updateSearchResults");
        const searchValue = document.getElementById("searchBar").value.toUpperCase();
        if (searchValue !== "" && searchValue !== null) {
            const searchResults = this.state.items.filter((item) => item.title.toUpperCase().includes(searchValue));
            this.setState({ searchResults });
        }
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
        }, () => this.updateSearchResults());
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
        }, () => this.updateSearchResults());
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
            }, () => this.updateSearchResults());
            
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
            }, () => this.updateSearchResults());
        }
    }

    changeState(itemId) {
        this.setState(prevState => {
            const items = [...prevState.items]; // create a copy of the state array
            const index = items.findIndex(item => item.title === itemId);
            const updatedItem = {...items[index], isChecked: !items[index].isChecked};
            items[index] = updatedItem; // modify the copied array
            localStorage.setItem("tasks", JSON.stringify(items));
            return { items }; // return the new state
        }, () => this.updateSearchResults());
    }
}

export default TodoApp;
