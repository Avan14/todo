export function Todo({ todos }) {

    return <div>
        {
            todos.map((todo, index) => {
                return <div>
                       <h1>{todo.title}</h1>
                       <h2>{todo.description}</h2>
                       <button >{todo.marked==true?"completed":"mark as done"}</button>
                   </div>
            })
        }
    </div>
}