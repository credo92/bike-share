import React from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions";

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Button from '../components/Button/Button';
import Image from '../components/Image/Image';
import Loading from '../components/Loading/Loading';

import CardWrapper from '../components/CardWrapper/CardWrapper';

// TEST DATA - 
//LATER @TODO: Call API to fetch countries and filter on location
const COUNTRIES = [
    'us',
    'uy',
    'mx',
    'cl',
    'ca',
    'br',
    'ar',
    'co',
]
// TEST DATA

class AppContainer extends React.Component {
    state = {
        selected: 'us' // default,
    }

    setCountry = (selected) => {
        this.setState({
            selected
        })
    }

    createButtons = () => {
        return COUNTRIES.map(country =>
            <Button
                key={country}
                countryCode={country}
                selected={this.state.selected}
                handleClick={this.handleClick}
            />)
    }

    handleClick = (clickedCountry) => {
        this.setCountry(clickedCountry);
        this.props.getData(clickedCountry);
    }

    componentDidMount() {
        this.props.getData(this.state.selected);
    }

    render() {
        const { selected } = this.state;
        const { data, loading, error } = this.props;
        return (
            <>
                <Header>
                    <Image countryCode={selected} />
                </Header>
                <Sidebar>
                    {this.createButtons()}
                </Sidebar>
                {loading && <Loading/>}
                {!loading &&
                    <CardWrapper
                        data={data}
                    />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = {
    getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);