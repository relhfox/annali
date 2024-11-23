const MyLink = ({ link, text }) => {
    return (
        <p>
            <a href={link} target="_blank" rel="noreferrer">
                {text}&#128279;
            </a>
        </p>
    )
}

export default MyLink
