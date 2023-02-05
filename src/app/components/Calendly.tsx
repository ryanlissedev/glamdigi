"use client";

import { InlineWidget } from "react-calendly";

export const Calendly = () => {
  return (
    <div>
      <div
        className="h-fit overscroll-none rounded-3xl
      "
      >
        <InlineWidget
          styles={{
            height: "800px",
          }}
          url="https://calendly.com/glamdiginl/30min"
        />
      </div>
      <div></div>
    </div>
  );
};
