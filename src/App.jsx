import './App.css'
import MyRoutes from "./components/MyRoutes.jsx";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

const searchClient = algoliasearch('3KT2GA18QG', '7193060c7db1338701449912cf0aa413');

function App() {
    return (
        <div className='app-main'>
            <InstantSearch searchClient={searchClient} indexName="demo">
            <MyRoutes/>
            </InstantSearch>
        </div>
    )
}

export default App
