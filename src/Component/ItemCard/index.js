import React from 'react';
import ContentWrapper from '../ContentWrapper';
import "./style.css";

const ItemCard = ({ details }) => {
    return (
        <ContentWrapper className="itemCard fw-500 mt-10">
            <div className="imageContainer">
                <img src={details.links.mission_patch} alt="missionPic" />
            </div>
            <p className="rocketName">{details.mission_name}</p>
            <p className="mt-10 fw-300"><span className="fw-500">Mission Ids:</span>{details.mission_id.join()}</p>
            <p className="mt-10 fw-300"><span className="fw-500">Launch Year:</span>{details.launch_year}</p>
            <p className="mt-10 fw-300"><span className="fw-500">Successful Launch :</span>{details.launch_success.toString()}</p>
            <p className="mt-10 fw-300"><span className="fw-500">Successful Landing:</span>{details.rocket.first_stage.cores[0].land_success}</p>
        </ContentWrapper>
    );
};

export default ItemCard;