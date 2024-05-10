
import {
    Hits,
    InstantSearch,
    Pagination,
    RangeInput,
    RefinementList,
    SearchBox,
    ToggleRefinement
} from "react-instantsearch";
import {Button, Input} from "antd"
import './Algolia.css'
import {useState} from "react";
import MyCard from "./components/MyCard.jsx";
import algoliasearch from "algoliasearch/lite";


export function Algolia() {

    const searchClient = algoliasearch('3KT2GA18QG', '7193060c7db1338701449912cf0aa413');
   // const index = searchClient.initIndex('demo')


    function Hit({hit}) {
        //<p>{hit.country}</p>
        //<p>{hit.city}</p>
        // console.log(hit)
        return (<MyCard data={hit} key={hit.id} id={hit.id}/>);
    }

    return (
        <>
            <div>
                <div>Algolia search page</div>
                <InstantSearch searchClient={searchClient} indexName="demo" insights>
                    <SearchBox/>

                    <div className='cardDisplay'>

                        <div>
                            <h5>Category</h5>
                            <RefinementList attribute='category' limit={4} showMore={true}/>
                            <h5>Brand</h5>
                            <RefinementList attribute='brand' limit={4} showMore={true}/>
                            <h5>Price</h5>
                            <RangeInput attribute="price" min={1} max={5000}/>
                        </div>

                        <div className='cardFlex'>
                            <Hits className='hits' hitComponent={Hit}></Hits>
                        </div>
                        

                    </div>
                    <Pagination className='pagination-list'/>
                </InstantSearch>
            </div>
        </>
    )
}