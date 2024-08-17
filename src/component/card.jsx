export const Card = () => {
    const products = {
        img: "vite.svg",
    }
};

    return (
        <div>
            {products.map((product, index) => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
