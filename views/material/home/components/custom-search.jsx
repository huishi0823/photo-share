import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchImg from '../../../../img/search.svg';

const styles = {
    div: {
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 1px 1px #eee',
    },
    img: {
        margin: '0 10px',
    },
    input: {
        width: '100%',
        padding: '1rem 0',
    }
}

export default class CustomSearch extends Component {
    render() {
        return (
            <div className="custom-search" style={styles.div}>
                <img src={SearchImg} alt="search" style={styles.img} />
                <input type="text" placeholder="搜索" style={styles.input} />
            </div>
        )
    }
}
