import Block from '../components/Block'
import accom from '../img/aworks/accom.jpg'
import edge from '../img/aworks/edge.jpg'
import edphoto from '../img/aworks/edphoto.jpg'
import nonact from '../img/aworks/nonact.jpg'
import reenac from '../img/aworks/reenac.jpg'
import ahalf from '../img/aworks/ahalf.jpg'
import tensor from '../img/aworks/tensor.jpg'

export default function Artworks() {

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1000px'
    }

    return (
        <div style={styles}>

            <Block
                link='/ten_sorries'
                year='2023'
                title='10 sorries'
                lineOne='Video performance'
                lineTwo=''
                img={tensor}
                alt='10 sorries by Anna Li'
            />

            <Block
                link='/and_a_half'
                year='2023'
                title='16 and a half'
                lineOne='Video performance series'
                lineTwo=''
                img={ahalf}
                alt='16 and a half by Anna Li'
            />

            <Block
                link='/non_action'
                year='2022'
                title='Non-action'
                lineOne='Video performance'
                lineTwo=''
                img={nonact}
                alt='Non-action by Anna Li'
            />

            <Block
                link='/re_enactment'
                year='2022'
                title='RE-enactment'
                lineOne='Oil on canvas'
                lineTwo=''
                img={reenac}
                alt='RE-enactment by Anna Li'
            />

            <Block
                link='/the_edge_of_photo'
                year='2021'
                title='The Edge of Sexuality, Photo'
                lineOne='Model & author: Anna Li'
                lineTwo='Photographer & co-author: Vitaly Krushinsky'
                img={edphoto}
                alt='The Edge of Sexuality by Anna Li'
            />

            <Block
                link='/the_edge_of'
                year='2021'
                title='The Edge of Sexuality'
                lineOne='Oil on canvas'
                lineTwo=''
                img={edge}
                alt='The Edge of Sexuality by Anna Li'
            />

            <Block
                link='/accomplices'
                year='2021'
                title='For Accomplices project'
                lineOne='Oil on canvas'
                lineTwo='Sreda gallery, Cube.Moscow'
                img={accom}
                alt='Accomplices by Anna Li'
            />

        </div>
    )
}
