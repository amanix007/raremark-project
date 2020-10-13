import React from 'react'
import { Link } from 'react-router-dom'

export default function Property({ p }) {
    return (
        <div className="Property">
            <div className="img"
            >
                <img src="https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png" alt="" />
                <div className="fa fa-heart-o"></div>

            </div>
            <div className="details">
                <div className="top">
                    <p>{p.propertyType}</p>
                    <p><i className="fa fa-star"></i> 4.6  <span>(207)</span></p>
                </div>
                <h2><Link to={`/details/${p.id}`}> {p.title}</Link></h2>
                <p>{p.description}</p>
                <p>wifi kitchen washing machine heating </p>
                <div className="bottom">
                    <p>${p.price} <span>/night</span></p>
                    <small>${p.price} total</small>
                </div>
            </div>

        </div>
    )
}
