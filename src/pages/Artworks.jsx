import { Link } from 'react-router-dom'
import musea from '../img/aworks/musea.jpg'
import mother from '../img/aworks/mother.jpg'
import accom from '../img/aworks/accom.jpg'
import edge from '../img/aworks/edge.jpg'
import edphoto from '../img/aworks/edphoto.jpg'
import nonact from '../img/aworks/nonact.jpg'
import reenac from '../img/aworks/reenac.jpg'
import ahalf from '../img/aworks/ahalf.jpg'
import tensor from '../img/aworks/tensor.jpg'

export default function Artworks() {
    return (
        <div className='artworks__row'>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/ten_sorries"><img src={tensor} alt="10 sorries by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2023</h2>
                    <p>10 sorries</p>
                    <p>Video performance</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/and_a_half"><img src={ahalf} alt="16 and a half by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2023</h2>
                    <p>16 and a half</p>
                    <p>Video performances</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/non_action"><img src={nonact} alt="Non-action by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2022</h2>
                    <p>Non-action</p>
                    <p>Video performance</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/re_enactment"><img src={reenac} alt="RE-enactment by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2022</h2>
                    <p>RE-enactment</p>
                    <p>Oil on canvas</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/the_edge_of_photo"><img src={edphoto} alt="The Edge of Sexuality by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2021</h2>
                    <p>The Edge of Sexuality, Photo</p>
                    <p>Model & author: Anna Li</p>
                    <p>Photographer & co-author: Vitaly Krushinsky</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/the_edge_of"><img src={edge} alt="The Edge of Sexuality by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2021</h2>
                    <p>The Edge of Sexuality</p>
                    <p>Oil on canvas</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/accomplices"><img src={accom} alt="Accomplices by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2021</h2>
                    <p>Oil on canvas, for Accomplices project</p>
                    <p>Sreda gallery, Cube.Moscow, Russia</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/mother_africa"><img src={mother} alt="Mother Africa by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2019</h2>
                    <p>Oil on canvas, for Mother Africa project</p>
                    <p>Museum of Western & Eastern Art, Odesa, Ukraine</p>
                </div>

            </div>

            <div className='artworks__column'>

                <div className='currpage__head'>
                    <Link to="/music_of_the_sea"><img src={musea} alt="Music of the Sea by Anna Li" /></Link>
                </div>

                <div className='currpage__body_art'>
                    <h2>2019</h2>
                    <p>Music of the Sea</p>
                    <p>Oil on canvas</p>
                </div>

            </div>

        </div>
    )
}
