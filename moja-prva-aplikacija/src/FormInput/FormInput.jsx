import styles from './FormInput.module.css';
import Button from 'react-bootstrap/Button';

function FormInput() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <input type="text" />
                <Button type="submit">Add</Button>
            </div>
        </form>
    )
}

export default FormInput;