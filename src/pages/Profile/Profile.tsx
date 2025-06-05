import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Profile = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="profile-container">
            <Slider {...settings}>
                <div className="block block1">block1</div>
                <div className="block block2">block2</div>
                <div className="block block3">block3</div>
            </Slider>
        </div>
    )
};
export default Profile;