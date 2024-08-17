import React from 'react';
export const DynamicGreeting = () => {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState!('');
  
    const handleInputChange = (event: { target: { value: any; }; }) => {
      setName(event.target.value);
    };
  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      setGreeting(`Hello, ${name}!`);
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={name} 
            onChange={handleInputChange} 
            placeholder="Enter your name" 
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}>
            Greet
          </button>
        </form>
        {greeting && <h2 style={{ marginTop: '20px' }}>{greeting}</h2>}
      </div>
    );
  };

function useState(_arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
