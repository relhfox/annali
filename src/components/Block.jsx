import { Link } from 'react-router-dom'
import '../styles/tooltip.css'

const Block = ({ link, year, title, lineOne, lineTwo, img, alt }) => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 50%',
        minWidth: '340px'
    }

    return (
        <div style={styles} className='link'>
            <Link to={link}>
                <div className='currpage__head tooltip'>
                    <img src={img} alt={alt} style={{maxWidth: '100%'}}/>
                    <span className='tooltiptext'>Open for details...</span>
                </div>

                <div style={{margin: '30px 0 0 0', padding: '0 15px'}} className='tooltip'>
                    <h2>{year}</h2>
                    <p style={{lineHeight: '1.3'}}>{title}</p>
                    <p style={{lineHeight: '1.3'}}>{lineOne}</p>
                    <p style={{lineHeight: '1.3'}}>{lineTwo}</p>
                    <span className='tooltiptext'>Open for details...</span>
                </div>
            </Link>
        </div>
    )
}

export default Block
