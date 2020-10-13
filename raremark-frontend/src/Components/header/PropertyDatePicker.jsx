import React, { Component } from 'react';
import moment from "moment";
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION } from "react-dates/lib/constants";
import isInclusivelyAfterDay from "react-dates/lib/utils/isInclusivelyAfterDay";

class PropertyDatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedInput: null
        }

    }






    change = (startDate, endDate) => {
        console.log(startDate, endDate);
        this.setState({ startDate, endDate }, () => {
            console.log(this.state.startDate, this.state.endDate);
            this.props.hotelSearchStore.updateSearchObject("checkIn", this.state.startDate);
            this.props.hotelSearchStore.updateSearchObject("checkOut", this.state.endDate);
            console.log(this.props.hotelSearchStore.searchObject)
        });
    };
    render() {
        let mobile = window.innerWidth < 768;
        let { checkIn, checkOut } = this.props;
        return (
            <div className="date-picker-container">
                <i className="fa fa-calendar" />

                <DateRangePicker
                    startDateId="startDateId"
                    endDateId="endDateId"
                    startDatePlaceholderText="Depart"
                    endDatePlaceholderText="Return"
                    startDate={checkIn}
                    endDate={checkOut}
                    onDatesChange={({ startDate, endDate }) => {
                        // this.setState({ startDate, endDate });
                        // this.change(startDate, endDate);
                        this.props.onCheckInChange(startDate);
                        this.props.onCheckOutChange(endDate);


                    }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => {
                        this.setState({ focusedInput });
                    }}
                    noBorder
                    // showDefaultInputIcon={!mobile}
                    block
                    regular
                    keepOpenOnDateSelect={false}
                    hideKeyboardShortcutsPanel
                    enableOutsideDays
                    orientation={mobile ? VERTICAL_ORIENTATION : HORIZONTAL_ORIENTATION}
                    isOutsideRange={day =>
                        !isInclusivelyAfterDay(day, moment()) ||
                        isInclusivelyAfterDay(day, moment().add(365, "days"))
                    }
                    displayFormat="D MMM YY"
                    readOnly={true}
                    customArrowIcon={<span />}
                    transitionDuration={500}
                />
            </div>
        );
    }
}

PropertyDatePicker.propTypes = {};

export default PropertyDatePicker;