"use client";

import { SliderPicker } from "@nickick/components/slider-picker";
import { cx } from "../../../packages/components/src/utils";
import { useState } from "react";

const items = [
  "https://via.assets.so/game.jpg?w=1280&h=720",
  "https://via.assets.so/game.jpg?w=1280&h=720",
  "https://via.assets.so/game.jpg?w=1280&h=720",
  "https://via.assets.so/game.jpg?w=1280&h=720",
  "https://via.assets.so/game.jpg?w=1280&h=720",
  "https://via.assets.so/game.jpg?w=1280&h=720",
];

const selectedIndexToLeftOffsetMap = {
  0: ["1%", "0px", "15%"],
  1: ["12%", "17px", "-23%"],
  2: ["24%", "35px", "-10%"],
  3: ["36%", "52px", "1%"],
  4: ["48%", "70px", "12%"],
  5: ["60%", "88px", "-10%"],
};

const SliderPickerItem = ({
  url,
  selectedIndex,
  index,
}: {
  url: string;
  selectedIndex: number;
  index: number;
}) => {
  const offsets =
    selectedIndexToLeftOffsetMap[
      selectedIndex as keyof typeof selectedIndexToLeftOffsetMap
    ];
  return (
    <div
      className={cx(
        "relative w-[150px] h-[200px] shrink-0 rounded-lg transition-all duration-300",
        selectedIndex === index
          ? `w-[200px] h-[300px] left-[${offsets[1]}]`
          : `left-[${selectedIndex < index ? offsets[0] : offsets[2]}]`,
        `z-[${100 - index * 10}]`
      )}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    />
  );
};

export default function CarouselSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="relative w-[375px] h-[812px] border-4 rounded-xl border-black">
      {/* <div className="absolute w-1 h-full bg-black/50 left-[22%]" />
      <div className="absolute w-1 h-full bg-black/50 right-[22%]" />
      <div className="absolute w-1 h-full bg-black/50 left-[11%]" />
      <div className="absolute w-1 h-full bg-black/50 right-[11%]" /> */}
      <div className="grid h-full place-items-center">
        <SliderPicker
          sliderClassName="gap-4"
          onChangeSelected={(index) => setSelectedIndex(index)}
        >
          {items.map((item, index) => (
            <SliderPickerItem
              key={index}
              url={item}
              index={index}
              selectedIndex={selectedIndex}
            />
          ))}
        </SliderPicker>
      </div>
    </div>
  );
}
