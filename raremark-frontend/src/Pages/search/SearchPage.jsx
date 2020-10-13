import React, { useState, useEffect } from 'react'
import queryString from "query-string";
import { withRouter } from 'react-router-dom';
import { FIND_PROPERTY } from '../../Request/API';
import Property from './Property';
function SearchPage(props) {
    const [propertyList, SetpropertyList] = useState([]);
    let { search } = props.location;
    const parsed = queryString.parse(search);


    const SearchProperty = async () => {
        let propertyList = await FIND_PROPERTY(parsed.property);
        SetpropertyList(propertyList.properties);
    }
    useEffect(() => {
        SearchProperty();

    }, []);


    console.log('propertyList:', propertyList)

    return (
        <div className="SearchPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {propertyList.map((p, i) => {
                            return <Property p={p} key={p.id} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withRouter(SearchPage);