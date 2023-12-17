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
            caption: "In Front Of The Mirror, 2021"
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
            caption: "Reflection, 2021"
        },
        {
            image: "../../img/edphoto/edphoto05.jpg",
            caption: "A Way To Go, 2021"
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
        <div className='currpage__row'>
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

            <div className='currpage__body statement nonaction'>
                <p>Since my childhood, I have been surrounded by numerous pictures of healthy body-abled people, which are pervasiveness in our visual culture. These artificial and unattainable beauty standards had a huge impact on my mind, making me feel like an alien to the world. Refusing to take the cancellation of impairments and body flows for granted, I turned to my own body as a template of different beauty. I was trying to erase from my memory the influence of TV and social media's harassment by continuously photographing and drawing my unconventional body. It was a process of purification and resetting of the memory.</p>
                <p>The photos were made in collaboration with Ukrainian photographer Vitaly Krushinsky. It was important for me to work with a man in order to take photos of the “male gaze” like in traditional erotic and commercial photography. Together we were trying to show my body in an attractive way without attempting to hide its flaws. I wanted these photos to hold on the edge of traditional sexuality and to be able to provoke controversial feelings and ask the question: “Do conventional standards of beauty bother you to perceive the beauty of this body? Is it really something we need?”</p>
                <p>Working on this project my focus was on classical artworks of fashion photographers Helmut Newton, Bill Brandt, Fernand Fonssagrives, etc. Their provocative and erotically charged photos had a huge impact on the history of our visual culture. By sign their experience and best practices I wanted to bring the disabled bodies to erotical and fashion-style photographs. I am deeply convinced that if our visual environment contains more pictures of unconventional bodies, it will have a tremendous beneficial effect on everyone. And I would like to be among those people who will make it happen.</p>
            </div>
        </div>
    )
}
