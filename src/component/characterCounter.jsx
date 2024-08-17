export const CharacterCounter = () => {
    const [text, setText] = useState('');
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <textarea value={text}
          onChange={handleTextChange}
          rows="5"
          cols="30"
          style={{ display: 'block', margin: '20px auto' }}
        ></textarea>
        <div>Character Count: {text.length}</div>
      </div>
    );
  };
  