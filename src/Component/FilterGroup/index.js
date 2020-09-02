import React from 'react';
import FilterButton from '../Filterbutton';

const FilterGroup = ({type, valueData, onFilterClick}) => {

  
    return (
            valueData.map(value => <FilterButton btnText={value} key={value} type='button' click={(e) => onFilterClick(e,type,value)} />)
    );
};

export default FilterGroup;