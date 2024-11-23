import { Carousel } from 'react-carousel-minimal'

export default function Musea() {

    const museaArr = [
        {
            image: "../../img/musea/musea21.jpg",
            caption: "Water Meets Air, 2018. Oil on canvas, 60 x 70 cm"
        },
        {
            image: "../../img/musea/musea20.jpg",
            caption: "Water Meets Air 2, 2019. Oil on canvas, 60 x 80 cm"
        },
        {
            image: "../../img/musea/musea19.jpg",
            caption: "Overcoming Pt.1 Diptych, 2019. Oil on canvas, 140 x 90 cm"
        },
        {
            image: "../../img/musea/musea18.jpg",
            caption: "Overcoming Pt.2 Diptych, 2019. Oil on canvas, 140 x 90 cm"
        },
        {
            image: "../../img/musea/musea17.jpg",
            caption: "On the Beach, 2019. Oil on canvas, 90 x 70 cm"
        },
        {
            image: "../../img/musea/musea16.jpg",
            caption: "Sail, 2018. Oil on canvas, 70 x 60 cm"
        },
        {
            image: "../../img/musea/musea15.jpg",
            caption: "Unity, 2018. Oil on canvas, 50 x 50 cm"
        },
        {
            image: "../../img/musea/musea14.jpg",
            caption: "Unity 4, 2019. Oil on canvas, 50 x 50 cm"
        },
        {
            image: "../../img/musea/musea13.jpg",
            caption: "Unity 2, 2018. Oil on canvas, 50 x 50 cm"
        },
        {
            image: "../../img/musea/musea12.jpg",
            caption: "Unity 3, 2019. Oil on canvas, 75 x 45 cm"
        },
        {
            image: "../../img/musea/musea11.jpg",
            caption: "Sea Expression, 2019. Oil on canvas, 50 x 70 cm"
        },
        {
            image: "../../img/musea/musea10.jpg",
            caption: "Calm, 2018. Oil on canvas, 70 x 50 cm"
        },
        {
            image: "../../img/musea/musea09.jpg",
            caption: "Expectation, 2018. Oil on canvas, 70 x 50 cm"
        },
        {
            image: "../../img/musea/musea08.jpg",
            caption: "Survival 2 (Beluga Whale), 2018. Oil on canvas, 90 x 70 cm"
        },
        {
            image: "../../img/musea/musea07.jpg",
            caption: "Survival, 2017. Oil on canvas, 80 x 60 cm"
        },
        {
            image: "../../img/musea/musea06.jpg",
            caption: "Point by Point 3, 2018. Oil on canvas, 40 x 40 cm"
        },
        {
            image: "../../img/musea/musea05.jpg",
            caption: "Point by Point, 2017. Oil on canvas, 50 x 40 cm"
        },
        {
            image: "../../img/musea/musea04.jpg",
            caption: "Point by Point 2, 2017. Oil on canvas, 40 x 60 cm"
        },
        {
            image: "../../img/musea/musea03.jpg",
            caption: "Fleeting, 2017. Oil on canvas, 70 x 90 cm"
        },
        {
            image: "../../img/musea/musea02.jpg",
            caption: "Lighting the Hope Pt.1 Diptych, 2018. Oil on canvas, 40 x 90 cm"
        },
        {
            image: "../../img/musea/musea01.jpg",
            caption: "Lighting the Hope Pt.2 Diptych, 2018. Oil on canvas, 40 x 90 cm"
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
            data={museaArr}
            time={2000}
            width="1060px"
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
            thumbnailWidth="96px"
            style={{
                textAlign: "center",
                maxWidth: "1060px",
                maxHeight: "970px",
                margin: "0 auto",
            }}
        />
    )
}
