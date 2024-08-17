
export const PopUpMessage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePopUp}>Open Pop-up</button>
            {isOpen && (
                <div className="popup">
                    <h2>Pop-up Message</h2>
                    <p>This is a pop-up message!</p>
                    <button onClick={togglePopUp}>Close</button>
                </div>
            )}
        </div>
    );
};

