import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return (
    <div className="border-white border-2 rounded-md p-4">
      Carousel: {children}
    </div>
  );
};

export { Carousel };
