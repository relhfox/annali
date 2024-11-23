import { Carousel } from 'react-carousel-minimal'

export default function Edge() {

    const edgeArr = [
        {
            image: "../../img/edge/edge04.jpg",
            caption: "Reconstruction of Beauty, 2021. Oil on canvas, 90 x 70 cm"
        },
        {
            image: "../../img/edge/edge03.jpg",
            caption: "Quintessence, 2021. Oil on canvas, 50 x 60 cm"
        },
        {
            image: "../../img/edge/edge02.jpg",
            caption: "Touch, 2021. Oil on canvas, 70 x 50 cm"
        },
        {
            image: "../../img/edge/edge01.jpg",
            caption: "Dissolution, 2021. Oil on canvas, 70 x 90 cm"
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
            data={edgeArr}
            time={2000}
            width="1040px"
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
                maxWidth: "1040px",
                maxHeight: "960px",
                margin: "0 auto",
            }}
        />
    )
}
