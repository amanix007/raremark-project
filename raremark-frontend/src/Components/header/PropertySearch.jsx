import React, { Component } from "react";
import ReactAutocomplete from "react-autocomplete";
import _ from "lodash";
import { FIND_PROPERTY } from "../../Request/API";

// import { FIND_CITIES } from "../../Request/HotelApi";

class PropertySearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            code: "",
            properties: [],
            cityName: "Search Hotels"
        };

    }

    onChange = value => {
        this.setState({ value }, this.doApiCall);
    };

    doApiCall = _.debounce(async () => {
        let { value } = this.state;
        if (_.size(value) > 1) {
            let res = await FIND_PROPERTY(value);
            console.log('res:', res)
            if (res) this.setState({ properties: res.properties });
        }
    }, 300);






    render() {
        const { props } = this;
        return (
            <div className="property-search-container">
                <i className="fa fa-bed"></i>
                <ReactAutocomplete
                    inputProps={{
                        id: "hotelAutocomplete",
                        placeholder: "Where are you going ?",
                        className: "form-control autocomplete" + props.classText,
                    }}
                    wrapperStyle={{}}
                    // value={this.state.value}
                    // items={[...this.state.properties]}
                    // getItemValue={item => item.title}
                    // onSelect={(value, item) => {
                    //     console.log(item);
                    //     this.setState({
                    //         value: `${item.title}`,
                    //         code: item.id,
                    //         cities: [item],
                    //         cityName: item.title
                    //     }, () => {

                    //         this.props.onDataChange(item)
                    //     });

                    // }}
                    // onChange={(event, value) => this.onChange(value)}
                    // // open={true}

                    renderMenu={(items, value) => (
                        <div className="menu hotel">
                            {value === "" ? (
                                <div className="item">{items}</div>
                            ) : this.state.loading ? (
                                <div className="item">Loading...</div>
                            ) : items.length === 0 ? (
                                <div className="item">No matches for {value}</div>
                            ) : (
                                            items
                                        )}
                        </div>
                    )
                    }
                    renderItem={(item, isHighlighted) => (
                        <div
                            className={`item-element ${isHighlighted ? "item-highlighted" : ""
                                }`}
                            key={item.id}
                        >
                            
                            <div className="text">
                                <strong>
                                    {item.title}
                                </strong>
                                <small>{item.location}</small>


                            </div>

                        </div>
                    )}





                    getItemValue={(item) => item.title}
                    items={[...this.state.properties]}
                    // renderItem={(item, isHighlighted) =>
                    //     <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    //         {item.title}
                    //     </div>
                    // }
                    value={this.state.value}
                    onSelect={(value, item) => {
                        console.log(item);
                        this.setState({
                            value: `${item.title}`,
                            code: item.id,
                            cities: [item],
                            cityName: item.title
                        }, () => {

                            this.props.onDataChange(item)
                        });

                    }}
                    onChange={(event, value) => this.onChange(value)}
                />

            </div>
        );
    }
}




export default PropertySearch;

