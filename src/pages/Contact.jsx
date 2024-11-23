import fb from '../img/fb.png'
import ig from '../img/ig.png'

export default function Contact() {
    return (
        <div className='currpage__row'>

            <div className='currpage__head'>
                <h1>CONTACT</h1>
            </div>

            <div className='currpage__body'>
                <p>E-mail: artist.annaliart@gmail.com</p>
                <p style={{textAlign: 'center'}}>
                    <br /><br />
                    <a href='https://www.facebook.com/Anna.Li.artist/' target="_blank" rel="noreferrer" style={{margin: '0 5px'}}>
                        <img src={fb} alt="facebook"/>
                    </a>
                    <a href='https://www.instagram.com/anna_liart/' target="_blank" rel="noreferrer" style={{margin: '0 5px'}}>
                        <img src={ig} alt="instagram"/>
                    </a>
                </p>
            </div>
        </div>
    )
}
