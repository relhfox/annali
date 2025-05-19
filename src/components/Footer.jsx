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
                    <a href='https://github.com/relhfox' target="_blank" rel="noreferrer" style={{margin: '0 5px'}}>dev</a>
                </div>
            </div>
        </footer>
    )
}
