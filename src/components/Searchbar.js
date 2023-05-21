import { Fragment, useState } from 'react';
import './Searchbar.css';

// FIX THE SEARCH BARRRR !!

const Searchbar = ({list, setList, filterField = item => item, ...props}) => {

    // const [value, setValue] = useState("");
    
    // const filterList = () => {
    //     return list.filter( item => filterField(item).toLowerCase().includes(value.toLocaleLowerCase));
    // }

    // const handleChange = e => {
    //     setValue(e.target.value)
    //     setList(filterList);
    // };

    // return (

    //     <input type="text" 
    //     placeholder="Search..."
    //     name="search"
    //     onChange={handleChange}
    //     value={value}
    //     {...props} 
    //     />)
}

export default Searchbar;