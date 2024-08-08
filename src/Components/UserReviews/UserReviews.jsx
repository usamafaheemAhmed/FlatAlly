import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Avatar } from 'antd';

import A1 from "../../assets/images/Testimonals/avatar1.png"
import A2 from "../../assets/images/Testimonals/avatar2.png"
import A3 from "../../assets/images/Testimonals/avatar3.png"
import A4 from "../../assets/images/Testimonals/avatar4.png"

const { Meta } = Card;

const reviews = [
    {
        name: 'John Doe',
        image: A1,
        review: 'This is an amazing product! Highly recommend it to everyone.',
    },
    {
        name: 'Jane Smith',
        image: A2,
        review: 'Great experience, very satisfied with the service.',
    },
    {
        name: 'Robert Brown',
        image: A3,
        review: 'Fantastic quality, will definitely buy again.',
    },
    {
        name: 'Emily Johnson',
        image: A4,
        review: 'The customer service was excellent.',
    },
    // Add more reviews as needed
];

const UserReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {reviews.map((review, index) => (
                <div className='py-3 px-1 ' key={index}>
                    <Card className="review-card" bordered={false}>
                        <div className="avatar-container">
                            <Avatar src={review.image} size={64} />
                        </div>
                        <Meta
                            title={review.name}
                            description={<div className="review-text">{review.review}</div>}
                        />
                    </Card>
                </div>
            ))}
        </Slider>
    );
};

export default UserReviews;
