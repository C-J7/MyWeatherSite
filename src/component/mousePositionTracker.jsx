export const MousePositionTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInside, setIsInside] = useState(false);
  
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
  
    const handleMouseEnter = () => {
      setIsInside(true);
    };
  
    const handleMouseLeave = () => {
      setIsInside(false);
      setPosition({ x: 0, y: 0 });
    };
  
    return (
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          border: '1px solid black',
          height: '300px',
          position: 'relative',
          textAlign: 'center',
          marginTop: '20px',
          backgroundColor: isInside ? '#f0f0f0' : '#e0e0e0',
          transition: 'background-color 0.3s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            display: isInside ? 'block' : 'none',
          }}
        >
          X: {position.x}, Y: {position.y}
        </div>
      </div>
    );
  };