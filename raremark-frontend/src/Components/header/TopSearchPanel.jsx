import React, { Component } from 'react'
import PropertyDatePicker from './PropertyDatePicker'
import PropertySearch from './PropertySearch'
import moment from 'moment'
import Travellers from './Travellers'





export default class TopSearchPanel extends Component {
    state = {
        property: null,
        adult: 1,
        children: 0,
        roomCount: 1,
        checkIn: moment(),
        checkOut: moment().add(2, "days")
    }
    onDataChange = (type, data) => {
        this.setState({
            [type]: data
        })
    }

    submit = (e) => {
        e.preventDefault();
        let { property, adult, children, roomCount, checkIn, checkOut } = this.state;
        checkIn = checkIn.format("DD-MM-YYYY");
        checkOut = checkOut.format("DD-MM-YYYY");
        if (property) {
            window.location = `/property-search?property=${property.location}&adult=${adult}&children=${children}&roomCount=${roomCount}&checkIn=${checkIn}&checkOut${checkOut}`
        } else {
            alert("select Property˝")
        }

    }
    render() {
        let { property, adult, children, roomCount, checkIn, checkOut } = this.state;
        return (
            <div className="search-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text">
                                <h1>Resorts </h1>
                                <h2>Treat yourself! Your dream resort stay is just a few clicks away.</h2>
                            </div>
                            <form action="#" onSubmit={this.submit}>
                                <div className="seach-section">

                                    <PropertySearch
                                        property={property}
                                        onDataChange={(data) => this.onDataChange("property", data)}
                                    />
                                    <PropertyDatePicker
                                        checkIn={checkIn}
                                        checkOut={checkOut}
                                        onCheckInChange={(data) => this.onDataChange("checkIn", data)}
                                        onCheckOutChange={(data) => this.onDataChange("checkOut", data)}
                                    />
                                    <Travellers
                                        onAdultChange={(data) => this.onDataChange("adult", data)}
                                        onChildrenChange={(data) => this.onDataChange("children", data)}
                                        onRoomChange={(data) => this.onDataChange("roomCount", data)}
                                        adult={adult}
                                        children={children}
                                        roomCount={roomCount} />
                                    <div className="search-button">
                                        <button type="submit" className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
