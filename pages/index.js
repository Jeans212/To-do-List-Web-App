import React, {Component} from "react";
import TodoItems from "../components/TodoItems";
import Layout from "../components/Layout";

export default class App extends React.Component {

    constructor(props) {
  
      super(props);
  
      this.state = {  
        items: []
      };

      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  
    }

    addItem(e){
        if (this._inputElement.value !== "") { 
            var newItem = { 
                text: this._inputElement.value, 
                key: Date.now() 
            };

            this.setState((prevState) => { 
                return { 
                    items: prevState.items.concat(newItem) 
                }; 
            });

            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) { 
        var filteredItems = this.state.items.filter(function (item) { 
            return (item.key !== key); 
        });
        
    this.setState({ 
        items: filteredItems 
    });
}

  
  
  
    render() {
  
      return (
            <Layout title = "To-do List">
                <main>
                    <div className="container"> 
                        <form onSubmit={this.addItem}> 
                            <input  ref={(a) => this._inputElement = a}
                                placeholder="Enter a task"> 
                            </input> 
                            <button type="submit">add</button> 
                        </form> 
                    </div>
                     
                    <TodoItems entries={this.state.items}
                                delete={this.deleteItem}/>
                    
                    <style jsx>{`
                        .container { 
                            display: flex; 
                            justify-content: center; 
                        }

                        .container input{
                            padding: 10px;
                            font-size: 16px;
                            border: 2px solid #fff;
                            width: 165px;
                        }

                        .container button{
                            padding: 10px; 
                            font-size: 16px; 
                            margin: 10px; 
                            margin-right: 0px; 
                            background-color: #0066FF; 
                            color: #FFF; 
                            border: 2px solid #0066FF;
                        }

                        .container button:hover { 
                            background-color: #003399; 
                            border: 2px solid #003399; 
                            cursor: pointer;
                        }
                    `}
                    </style>

                    <style global jsx>{`
                        body { 
                            padding: 50px; 
                            background-color: #66CCFF; 
                            font-family: sans-serif; 
                            display: flex;
                            justify-content: center;
                            
                        } 
                    `}
                    </style>
                </main>
         </Layout>  
      );
  
    }
  }
