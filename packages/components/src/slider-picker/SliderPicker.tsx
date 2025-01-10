import { Children, useCallback, useState, ReactNode, useEffect } from "react";
import { cx } from "../utils";
import { motion, useMotionValue } from "motion/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const SliderArrow = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cx(
        "ui-absolute ui-h-12 ui-w-12 ui-bg-black/30 ui-z-10 ui-top-1/2 ui-translate-y-[-50%] ui-rounded-full ui-flex ui-items-center ui-justify-center ui-cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <ArrowRightIcon className="ui-size-6 ui-text-white" />
    </div>
  );
};

const SliderPicker = ({
  children,
  sliderClassName,
  onChangeSelected,
  slideDisabled,
}: {
  children: ReactNode;
  sliderClassName?: string;
  onChangeSelected?: (index: number) => void;
  slideDisabled?: boolean;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const childrenArray = Children.toArray(children);

  const onDragStart = useCallback(() => {
    setDragging(true);
  }, []);

  const onDragEnd = useCallback(() => {
    setDragging(false);

    const x = dragX.get();

    if (x <= 0) {
      if (selectedIndex === childrenArray.length - 1) return;
      setSelectedIndex((prev) => prev + 1);
    } else if (x >= 0) {
      if (selectedIndex === 0) return;
      setSelectedIndex((prev) => prev - 1);
    }
  }, [selectedIndex]);

  useEffect(() => {
    onChangeSelected?.(selectedIndex);
  }, [selectedIndex]);

  const dragX = useMotionValue(0);

  return (
    <div className="ui-relative ui-w-full ui-overflow-x-hidden ui-overflow-y-visible">
      <SliderArrow
        className="ui-left-4 ui-rotate-180"
        onClick={() => setSelectedIndex((prev) => Math.max(prev - 1, 0))}
      />
      <SliderArrow
        className="ui-right-4"
        onClick={() =>
          setSelectedIndex((prev) =>
            Math.min(prev + 1, childrenArray.length - 1)
          )
        }
      />
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        dragListener={slideDisabled}
        animate={{ translateX: `${-50 * selectedIndex}%` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={cx("ui-flex ui-shrink-0 ui-items-center", sliderClassName)}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="ui-relative ui-left-[50%] ui-translate-x-[-50%]"
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export { SliderPicker };
