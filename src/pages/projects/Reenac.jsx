import { Carousel } from 'react-carousel-minimal'

export default function Reenac() {

    const reenArr = [
        {
            image: "../../img/reenac/reenac02.jpg",
            caption: "Blue disabled dancers, 2022. Oil on canvas, 50 x 40 cm"
        },
        {
            image: "../../img/reenac/reenac01.jpg",
            caption: "A wheelchair user on the bridge over the water-lily pond, 2022. Oil on canvas, 40 x 50 cm"
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
            data={reenArr}
            time={2000}
            width="1100px"
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
                maxWidth: "1100px",
                maxHeight: "960px",
                margin: "0 auto",
            }}
        />
    )
}
