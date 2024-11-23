export default function Footer() {

    const styles = {
        display: 'flex',
        height: '20px',
        margin: '20px 0 0 0',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Quicksand", sans-serif',
        color: '#959595'
    }

    return (
        <footer className='container'>
            <div style={styles}>
                <div className='footer_links'>
                    2025{' '}
                    <a href='https://github.com/relhfox' target="_blank" rel="noreferrer" style={{margin: '0 5px'}}>Dev</a>
                    <a href='https://reactjs.org/' target="_blank" rel="noreferrer" style={{margin: '0 5px'}}>React</a>
                </div>
            </div>
        </footer>
    )
}
