export const MyButton = ({textContent, bgcolor, textcolor}) => {

    return (
        <div style={{backgroundColor: bgcolor, Color: textcolor}}>
        <button> {textContent} </button>
        </div>

    )
}