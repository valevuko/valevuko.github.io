function TodoItem({ todo }) {
    return (
        <li>
            <label>
                <input type="checkbox" />
                {}
            </label>
            <button type="button">&#10005;</button>
        </li>
    )
}

export default TodoItem;