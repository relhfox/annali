import React from 'react'
import { Carousel } from 'react-carousel-minimal'

export default function Accom() {

    const accomArr = [
        {
            image: "../../img/accom/accom03.jpg",
            caption: "Within My Room, 2021. Oil on canvas, 60 x 80 cm"
        },
        {
            image: "../../img/accom/accom01.jpg",
            caption: "No Way For You Pt.1 Diptych, 2021. Oil on canvas, 90 x 40 cm"
        },
        {
            image: "../../img/accom/accom02.jpg",
            caption: "No Way For You Pt.2 Diptych, 2021. Oil on canvas, 90 x 40 cm"
        }
    ]

    const captionStyle = {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000'
    }

    const slideNumberStyle = {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000'
    }

    return (
        <Carousel
            data={accomArr}
            time={2000}
            width="1090px"
            height="810px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#fbfbfb"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "1090px",
                maxHeight: "1050px",
                margin: "0 auto",
            }}
        />
    )
}
