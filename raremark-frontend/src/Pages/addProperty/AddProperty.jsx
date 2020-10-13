import React, { useState } from 'react'
import { SAVE_PROPERTY } from '../../Request/API';

export default function AddProperty() {
    let Defaultstate = {
        title: " ",
        description: "",
        location: "",
        availableDateStart: "",
        availableDateEnd: "",
        propertyType: "Single",
        price: 0
    }
    const [state, setState] = useState(Defaultstate);

    const onChangeData = (e) => {
        let newstate = { ...state };

        newstate[e.target.name] = e.target.value;

        setState(newstate);
    }

    const save = async (e) => {
        e.preventDefault();
        let res = await SAVE_PROPERTY(state);

    }
    let { title, description, location, availableDateStart, availableDateEnd, propertyType, price } = state;
    return (
        <div className="mt-5">
            <form className="needs-validation"  onSubmit={save}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">Property Title</label>
                        <input
                            value={title}
                            name={"title"}
                            onChange={onChangeData}
                            type="text"
                            className="form-control"

                            placeholder
                            defaultValue
                            required
                        />



                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Property Descrition</label>
                        <input
                            value={description}
                            name={"description"}
                            onChange={onChangeData}
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder
                            defaultValue
                            required
                        />
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">location</label>
                        <input
                            value={location}
                            name={"location"}
                            onChange={onChangeData}
                            type="text"
                            className="form-control"

                            placeholder
                            defaultValue
                            required
                        />



                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Property Type</label>
                        <select
                            value={propertyType}
                            name={"propertyType"}
                            onChange={onChangeData}
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder
                            defaultValue
                            required
                        >
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                        </select>
                    </div>

                </div>
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Available Date Start</label>
                        <input
                            value={availableDateStart}
                            name={"availableDateStart"}
                            onChange={onChangeData}
                            type="date"
                            className="form-control"
                            id="lastName"
                            placeholder
                            defaultValue
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">Available Date End</label>
                        <input
                            value={availableDateEnd}
                            name={"availableDateEnd"}
                            onChange={onChangeData}
                            type="date"
                            className="form-control"

                            placeholder
                            defaultValue
                            required
                        />



                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Price</label>
                        <input
                            value={price}
                            name={"price"}
                            onChange={onChangeData}
                            type="number"
                            className="form-control"
                            id="lastName"
                            placeholder
                            defaultValue
                            required
                        />
                    </div>


                </div>
                <hr className="mb-4" />


                <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Add Property
  </button>
            </form>;

        </div>
    )
}
