import { Carousel } from 'react-carousel-minimal'

export default function Mother() {

    const mothArr = [
        {
            image: "../../img/mother/mother02.jpg",
            caption: "Message, 2019. Oil on canvas, 60 x 80 cm"
        },
        {
            image: "../../img/mother/mother01.jpg",
            caption: "River, 2019. Oil on canvas, 60 x 80 cm"
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
            data={mothArr}
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
