import React from 'react'
import { Carousel } from 'react-carousel-minimal'

export default function Edphoto() {

    const edphotoArr = [
        {
            image: "../../img/edphoto/edphoto12.jpg",
            caption: "I’m Afraid You’ll Let Me Fall, 2021"
        },
        {
            image: "../../img/edphoto/edphoto11.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto10.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto09.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto08.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto07.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto06.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto05.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto04.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto03.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto02.jpg",
            caption: "The Edge of Sexuality, 2021"
        },
        {
            image: "../../img/edphoto/edphoto01.jpg",
            caption: ""
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
            data={edphotoArr}
            time={2000}
            width="900px"
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
            thumbnailWidth="80px"
            style={{
                textAlign: "center",
                maxWidth: "900px",
                maxHeight: "970px",
                margin: "0 auto",
            }}
        />
    )
}
