import MyLink from "../components/MyLink"

export default function Press() {
    return (
        <div className='currpage__row'>

            <div className='currpage__head'>
                <h1>PRESS, REVIEWS, ETC.</h1>
            </div>

            <div className='currpage__body statement link'>

                <MyLink
                    link='https://typography-worldwide.org/en/2023/02/16/second-life-en/'
                    text='Translocal Dialogues on Home, Migration and Solidarity, Typography, February 2023'
                />

                <MyLink
                    link='https://syg.ma/@iana-sidorkina/the-edge-of-sexuality'
                    text='Anna Li: The Edge of Sexuality, Sygma, 25 April 2022'
                />

                <MyLink
                    link='https://www.theartnewspaper.com/2022/04/22/the-ukrainian-artist-making-disability-visible-through-painting-and-photography'
                    text='The Ukrainian artist making disability visible through painting and photography, The Art Newspaper, 22 April 2022'
                />
            </div>
        
        </div>
    )
}
