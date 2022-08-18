import {useState, useRef } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { SearchContext } from './contexts/SearchContext'

function App() {
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])
	let searchInput = useRef('')

	const API_URL = 'https://itunes.apple.com/search?term='
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		if(term) {
			const fetchData = async () => {
				document.title = `${term} Music`
				const response = await fetch(API_URL + term)
				const resData = await response.json()
				if (resData.results.length > 0) {
					setData(resData.results)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
		}
	}

	return (
		<SearchContext.Provider value={{
			searchInput,
			handleSearch
		}}>
			<div>
				<h1>{searchInput.current}</h1>
				<Searchbar/>
				{message}
				<Gallery data={data} />
			</div>
		</SearchContext.Provider>
  	);
}

export default App;
