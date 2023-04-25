import { useState } from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import Image from "next/image";
import  { items } from "../../../public/Items"

interface CarouselItem {
    title: string;
    docs: string;
    imageUrl: string;
  }
  
interface Props {
  interval?: number;
}

const Carousel: React.FC<Props> = ({ interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <BootstrapCarousel activeIndex={index} onSelect={handleSelect} interval={interval}>
      {items.map((item: CarouselItem, i: number ) => (
        <BootstrapCarousel.Item key={i}>
          <Image src={item.imageUrl} alt={item.title} width="400" height="400" />
          <BootstrapCarousel.Caption>
            <h3>{item.title}</h3>
            {/* <p>{item.docs}</p> */}
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;
