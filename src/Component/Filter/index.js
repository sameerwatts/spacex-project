import React from 'react';
import "./style.css";
import ContentWrapper from '../ContentWrapper';
import FilterGroup from '../FilterGroup';

const Filter = (props) => {
    const yearsData = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    const successData = ['true', 'false'];
    const onFilterClick = (e,type, value) => {
        const target = e.currentTarget;
        props.setValue(target, type, value)
    }
    return (
        <ContentWrapper className="filterWrapper mt-10 pb-40" >
            <h4 className="fs-18">Filters</h4>
            <p className="filtersHeading fs-14 mt-10">Launch Years</p>
            <div className="filterButtonWrapper mt-20">
                <FilterGroup valueData={yearsData} type='launch_year' onFilterClick={onFilterClick} />
            </div>
            <p className="filtersHeading fs-14 mt-20">Successful Launch</p>
            <div className="successfulLaunchWrapper mt-20">
                <FilterGroup valueData={successData} type='launch_success' onFilterClick={onFilterClick} />
            </div>
            <p className="filtersHeading fs-14 mt-20">Successful Landing</p>
            <div className="successfulLandingWrapper mt-20">
                <FilterGroup valueData={successData} type='land_success' onFilterClick={onFilterClick} />
            </div>
        </ContentWrapper>
    );
};

export default Filter;