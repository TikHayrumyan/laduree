"use client";

import { useState } from "react";

type CategoryBarProps = {
  categories: string[];
  filtersLabel: string;
};

function Categories({
  categories,
  active,
  onSelect,
}: {
  categories: string[];
  active: number;
  onSelect: (index: number) => void;
}) {
  return categories.map((label, index) => {
    const selected = index === active;

    return (
      <div key={label} className="flex shrink-0 items-center gap-4">
        {index > 0 ? (
          <span className="size-1 rounded-full bg-ink" aria-hidden />
        ) : null}
        <button
          type="button"
          aria-pressed={selected}
          onClick={() => onSelect(index)}
          className={`cursor-pointer whitespace-nowrap text-[20px] leading-6 tracking-[-0.2px] lg:text-[28px] lg:leading-8.5 lg:tracking-[-0.28px] ${
            selected ? "text-ink" : "text-muted lg:text-ink"
          }`}
        >
          {label}
        </button>
      </div>
    );
  });
}

export function CategoryBar({ categories, filtersLabel }: CategoryBarProps) {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="flex w-full items-stretch lg:hidden">
        <button
          type="button"
          className="flex h-10 shrink-0 cursor-pointer items-center border-[0.5px] border-nav-line px-5 text-[20px] leading-6 tracking-[-0.2px] text-ink"
        >
          {filtersLabel}
        </button>
        <div className="flex h-10 min-w-0 flex-1 items-center gap-4 overflow-x-auto border-y-[0.5px] border-r-[0.5px] border-nav-line px-5 scrollbar-none">
          <Categories
            categories={categories}
            active={active}
            onSelect={setActive}
          />
        </div>
      </div>
      <div className="hidden h-16.5 w-full items-center justify-between border-[0.5px] border-nav-line pl-12.5 lg:flex">
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto scrollbar-none">
          <Categories
            categories={categories}
            active={active}
            onSelect={setActive}
          />
        </div>
        <button
          type="button"
          className="flex h-full shrink-0 cursor-pointer items-center border-l-[0.5px] border-nav-line px-12.5 text-[28px] leading-8.5 tracking-[-0.28px] text-ink"
        >
          {filtersLabel}
        </button>
      </div>
    </>
  );
}
