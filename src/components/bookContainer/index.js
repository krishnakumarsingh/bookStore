import React from 'react';
import { connect } from "react-redux";
import { buyBook } from "./redux";
const BookContainer = (props) => {
    return (
        <div>
            <h1>Number of Books - {props.numberOfBooks}</h1>
            <button onClick={props.buyBookClick}>Buy Book</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyBookClick: function() {
            dispatch(buyBook());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);