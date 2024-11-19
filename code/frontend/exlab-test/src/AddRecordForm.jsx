// AddRecordForm.jsx or IntegerForm.jsx
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function IntegerForm() {
    const [numbers, setNumbers] = useState({ a: '', b: '', c: '' });
    const [sortedNumbers, setSortedNumbers] = useState([]);

    const handleChange = (e) => {
        setNumbers({ ...numbers, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/integers/sort-and-save/', {
                integers: [parseInt(numbers.a), parseInt(numbers.b), parseInt(numbers.c)]
            });
            setSortedNumbers(response.data.sorted);
        } catch (error) {
            console.error("Error submitting numbers:", error);
        }
    };

    return (
        <div className="container">
            <h1>Record Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="a"
                    value={numbers.a}
                    onChange={handleChange}
                    placeholder="First Integer"
                    type="text"
                />
                <input
                    name="b"
                    value={numbers.b}
                    onChange={handleChange}
                    placeholder="Second Integer"
                    type="text"
                />
                <input
                    name="c"
                    value={numbers.c}
                    onChange={handleChange}
                    placeholder="Third Integer"
                    type="text"
                />
                <button type="submit">Submit</button>
            </form>
            {sortedNumbers.length > 0 && (
                <div className="sorted-result">
                    Sorted: {sortedNumbers.join(', ')}
                </div>
            )}
        </div>
    );
}

export default IntegerForm;


