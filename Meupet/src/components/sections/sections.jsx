const Sections = ({srcImage, altImage ,text}) =>{
    return(
        <div>
            <img src={srcImage} alt={altImage} />
            <button>{text}</button>
        </div>
    )
} 

export default Sections;