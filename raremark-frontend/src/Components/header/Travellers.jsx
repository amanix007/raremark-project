import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default function Travellers({ adult, children, roomCount, onAdultChange, onChildrenChange, onRoomChange }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const onDataChange = (dataType, actionType) => {
        if (actionType === "add") {
            if (dataType === "adult") {
                onAdultChange(adult + 1);
            } else if (dataType === "children") {
                onChildrenChange(children + 1);
            } else if (dataType === "room") {
                onRoomChange(roomCount + 1);

            }
        } else {
            if (dataType === "adult") {
                if (adult > 1) {
                    onAdultChange(adult - 1);
                }
            } else if (dataType === "children") {
                if (children > 0) {
                    onChildrenChange(children - 1);
                }
            } else if (dataType === "room") {
                if (roomCount > 0) {
                    onRoomChange(roomCount - 1);
                }

            }
        }
    }

    return (
        <div className="travellter-container">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <span>{adult} aduls . {children} children . {roomCount} Room</span>
                </DropdownToggle>
                <DropdownMenu>
                    <div className="counter-container">
                        <div className="counter">
                            <span className="label">Adult</span>
                            <div className="count-trigger">
                                <div
                                    onClick={() => onDataChange("adult", "add")}
                                    className="trigger add"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <span>{adult}</span>
                                <div
                                    onClick={() => onDataChange("adult", "remove")}
                                    className="trigger remove"><i className="fa fa-minus" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className="counter">
                            <span className="label">Children</span>
                            <div className="count-trigger">
                                <div
                                    onClick={() => onDataChange("children", "add")}
                                    className="trigger add"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <span>{children}</span>
                                <div
                                    onClick={() => onDataChange("children", "remove")}
                                    className="trigger remove"><i className="fa fa-minus" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className="counter">
                            <span className="label">Room</span>
                            <div className="count-trigger">
                                <div
                                    onClick={() => onDataChange("room", "add")}
                                    className="trigger add"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <span>{roomCount}</span>
                                <div
                                    onClick={() => onDataChange("room", "remove")}
                                    className="trigger remove"><i className="fa fa-minus" aria-hidden="true"></i></div>
                            </div>
                        </div>

                    </div>

                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
