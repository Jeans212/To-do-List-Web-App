import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component { 
    constructor(props) {
         super(props);
         this.createTasks = this.createTasks.bind(this);
    }

    delete(key) { 
        this.props.delete(key); 
    } 



    createTasks(item) { 
        return <li onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}
                </li>
    }

    render() { 
        var todoEntries = this.props.entries; 
        var listItems = todoEntries.map(this.createTasks);

        return ( 
            <div>
                <ul className="theList">
                    <FlipMove duration={250} easing="ease-out">
                        {listItems} 
                    </FlipMove>
                </ul>

                <style global jsx>{`
                    .theList{
                        list-style: none; 
                        padding-left: 0; 
                        max-width: 250px;
                        margin: auto;
                    }

                    .theList li { 
                        color: #333; 
                        background-color: rgba(255,255,255,.5); 
                        list-style: none; 
                        padding: 15px; 
                        margin-bottom: 15px; 
                        border-radius: 5px;
                        transition: background-color .2s ease-out;
                    }

                    ul .theList { 
                        padding: 0;
                        margin: auto; 
                    }

                    .theList li:hover { 
                        background-color: red; 
                        cursor: pointer;
                        color: #fff;
                    } 
                `}
                </style>
            </div>
        );
    }
};

export default TodoItems;
