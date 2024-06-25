import React, { useState } from "react";
const buttonStyle = {
  border: "none",
  backgroundColor: "white",
  color: "blue",
};
const ShowMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit </span>
      {isOpen ? "" : "..."}
      {isOpen && (
        <span>
          Ullam dolore repellat atque pariatur tenetur autem, consectetur
          perferendis cupiditate, porro iste nam recusandae. Architecto
          provident quis fuga iusto, magnam dolor eaque delectus, dolorem
          expedita unde possimus alias voluptas eos aspernatur, dolores
          consequatur? Id quae voluptates recusandae quidem quis asperiores quam
          quod? Quae voluptate maiores eligendi nesciunt eos iusto, esse eum
          porro animi, blanditiis omnis fugiat reprehenderit! Eveniet eaque at,
          quibusdam quaerat voluptatum labore cupiditate nemo deleniti. Ullam
          assumenda nam ipsa voluptates saepe, sunt iusto, necessitatibus quae
          ex aspernatur inventore modi facere perspiciatis. Ratione autem vitae
          facere voluptate eos necessitatibus earum iusto.
        </span>
      )}
      <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "show less" : "show more"}
      </button>
    </div>
  );
};

export default ShowMore;
