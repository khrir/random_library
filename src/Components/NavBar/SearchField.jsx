import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './css/SearchField.css'

export const SearchField = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("/tmp/database.json")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((book) => {
                return (
                    value &&
                    book &&
                    book.title &&
                    book.title.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input 
                placeholder="Search your favorite books" 
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                type="text" 
            />
        </div>
    );
}


// function SearchField() {
//     const [query, setQuery] = useState('');
//     const items = [{'name': 'abba'}, {'name': 'none'}, {'name': 'ref'}];

//     function getFilteredItems(query, items) {
//         if (!query) {
//             return null; 
//         }
//         return items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
//     }
    
//     function handleInputChange(event) {
//         setQuery(event.target.value);
//     }

//     const filteredItems = getFilteredItems(query, items);

//     return (
//         <div className="search">
//             <input 
//                 type="text" 
//                 value={query} 
//                 onChange={handleInputChange} 
//                 style={{
//                     width: '200px',
//                     padding: '8px',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '16px',
//                     boxSizing: 'border-box'
//                 }}
//             />
//             <ul className="search-list">
//                 {filteredItems && filteredItems.map((item, index) => (
//                     <li key={index}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default SearchField;
