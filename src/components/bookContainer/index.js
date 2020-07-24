import React from 'react';
import { connect } from "react-redux";
import { buyBook } from "./redux";
const BookContainer = (props) => {
    return (
        <div>
            <h1>Number of Books - {props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
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
        buyBook: function() {
            dispatch(buyBook());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);