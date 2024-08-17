
export const ColorSwitcher = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    const currentColorIndex = colors.indexOf(currentColor);
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColor(colors[nextColorIndex]);
  };

  const resetColor = () => {
    setCurrentColor(colors[0]);
  };

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomIndex]);
        <button onClick={changeColor}>Change Color</button>

  return (
    <div>
      <div style={{ backgroundColor: currentColor, height: '100px', width: '100px', margin: '20px auto' }}></div>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={resetColor}>Reset Color</button>
      <button onClick={randomColor}>Random Color</button>
    </div>
  );
}};
//   export default ColorSwitcher;