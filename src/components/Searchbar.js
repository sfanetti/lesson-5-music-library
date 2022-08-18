// Seachbar.js
import { SearchContext } from '../contexts/SearchContext'
import { useContext } from 'react'

function Searchbar() {
    let { searchInput, handleSearch } = useContext(SearchContext); 
    return (
        <form>
            <input ref={searchInput} 
                   type="text" placeholder="Enter a search term here"/>
            <input type="submit" onClick={e => handleSearch(e, searchInput.current.value)} />

        </form>
    )
}

export default Searchbar