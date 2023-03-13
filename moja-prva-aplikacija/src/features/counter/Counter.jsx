import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.css';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function subtractOne() {
        dispatch(decrement());
    }

    function addOne() {
        dispatch(increment());
        // dispatch(incrementByAmount(4));
    }

    function resetCounter() {
        dispatch(reset());
    }

    return (
        <div className={styles.app}>
            <div>
                <button onClick={subtractOne}>-</button>
                <span className={styles.text}>{count}</span>
                <button onClick={addOne}>+</button>
            </div>
            <button onClick={resetCounter}>Resetiraj brojač</button>
        </div>
    );
}

export default Counter ;