import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { GET_PROPERTY } from '../../Request/API';

function DetailsPage(props) {
    const [property, Setproperty] = useState(null);

    let { id } = props.match.params

    const GetProperty = async () => {
        let property = await GET_PROPERTY(id);
        Setproperty(property);
    }
    useEffect(() => {
        GetProperty();

    }, []);
    return (
        <div className="DetailsPage">
            {property && <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head">
                            <h1>{property.title}
                                <span className="stars"><i className="fa fa-start"></i>
                                    <i className="fa fa-start"></i>
                                    <i className="fa fa-start"></i>
                                    <i className="fa fa-start"></i>
                                    <i className="fa fa-start"></i></span></h1>
                            <p>{property.location} </p>
                        </div>
                        <div className="images">
                            <div
                                className="image a"
                                style={{
                                    backgroundImage:
                                        'url("https://api.sharetrip.net/api/v1/hotel/image?key=s4gfR+Ry5ZqIEMnhuB+eapztwOtlxwNmLje3Pu6FXjb6Z5D4TM7MRkbpjQ07vZoAtLs9hQkU2vaZFgSlYt/LyA==")'
                                }}
                            />
                            <div
                                className="image b"
                                style={{
                                    backgroundImage:
                                        'url("https://api.sharetrip.net/api/v1/hotel/image?key=PJvviaJhTPsQPl6NIrlp3TqOx5QSvpVdS+57jidvlXWqRMIHLwtQLe/8ApirzMC+aT8dStQQ4P3b6H30fRZmfQ==")'
                                }}
                            />
                            <div
                                className="image a"
                                style={{
                                    backgroundImage:
                                        'url("https://api.sharetrip.net/api/v1/hotel/image?key=Y6ZgnpipubLkBjYvQIeXgPUkSLCxSbH2sj2VIvbIs4LVEb+OIwPnnTXfVSZ/BTPo6/Xa73ObCe3WrOxAmtnpmw==")'
                                }}
                            />

                        </div>

                        <div className="property-details row">
                            <div className="desc  col-md-8">
                                <div className="top">
                                    <div className="text">
                                        <h1>asdfasdfasdf</h1>
                                        <p>Greater london</p>
                                    </div>
                                    <div className="avatar">
                                        <img src="https://a0.muscache.com/im/pictures/user/c26fead8-c900-4e3d-aa0f-b1402b0a8f04.jpg?im_w=240" alt="" />
                                        <span>Shimmy</span>
                                    </div>

                                </div>
                                <div className="amenitest-list">
                                    <ul>
                                        <li>
                                            <i className="fa fa-home"></i>
                                            <div className="block">
                                                <h6>Private Room</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae corporis labore debitis quaerat sunt.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-home"></i>
                                            <div className="block">
                                                <h6>Selft Check in</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae corporis labore debitis quaerat sunt.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-home"></i>
                                            <div className="block">
                                                <h6>Breakfast</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae corporis labore debitis quaerat sunt.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-home"></i>
                                            <div className="block">
                                                <h6>Great Communication</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae corporis labore debitis quaerat sunt.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, animi.

                                    </p>
                                </div>
                            </div>
                            <div className="price-desc col-md-4">
                                <div className="top">
                                    <div className="price">
                                        24$ <span>per night</span>
                                    </div>
                                    <p><i className="fa fa-star"></i> 4.5 <span>(215 reviews)</span></p>
                                </div>
                                <div className="middle">
                                    <div className="date-container">
                                        <small>Date</small>
                                        <div className="date">
                                            <span>20/02/2020</span>
                                            <i className="fa fa-arrow-right"></i>
                                            <span>20/02/2020</span>
                                        </div>
                                    </div>
                                    <div className="guest-selector">
                                        <small>Guest</small>
                                        <select name="" id="">
                                            <option value="1">1 guest</option>
                                            <option value="2">2 guest</option>
                                        </select>
                                    </div>

                                    <ul className="data-list">
                                        <li>
                                            <label htmlFor="">24$ x 1 Night</label>
                                            <span>24$</span>
                                        </li>
                                        <li>
                                            <label htmlFor="">Cleaning Fee</label>
                                            <span>4$</span>
                                        </li>
                                        <li>
                                            <label htmlFor="">Service Fee</label>
                                            <span>4$</span>
                                        </li>
                                        <li>
                                            <label htmlFor=""><strong>Total</strong> </label>
                                            <span>28$</span>
                                        </li>
                                    </ul>
                                    <div className="text-center">

                                        <button className="btn btn-primary btn-danger">Reserve</button>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, corporis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default withRouter(DetailsPage);