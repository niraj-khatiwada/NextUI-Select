"use client";

import { Select, SelectItem } from "@nextui-org/select";

const presets = ["ironclad", "thunderstorm"];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Select
        label="Compression preset:"
        className="w-[300px] flex-shrink-0 rounded-2xl"
        size="sm"
        selectedKeys={["ironclad"]}
        selectionMode="single"
        disallowEmptySelection
      >
        {presets?.map((preset) => (
          <SelectItem
            key={preset}
            value={preset}
            className="flex justify-center items-center"
          >
            {preset}
          </SelectItem>
        ))}
      </Select>
    </section>
  );
}
