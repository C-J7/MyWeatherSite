export const ButtonbehaviourApp = () => {
    const handleButtonClick = () => {
      alert('Button clicked!');
        };
  
      return (
      <div className="App">
      <InputButtonComponent
      inputPlaceholder="Enter text here..."
      buttonLabel="Submit"
      onButtonClick={handleButtonClick}
      />
      </div>
      );
      };