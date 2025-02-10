"use client";

import { cn } from "~/lib/utils";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import useQueryParameter from "~/hooks/use-queryparamter";

// import { useCurrentLocale } from "@/locales/client";

interface Props {
  placeholder?: string;
  className?: string;
}

const Search = ({ placeholder, className }: Props) => {
  const { handleQuery } = useQueryParameter("searchQuery");
  //   const locale = useCurrentLocale();
  return (
    <div className="relative w-full md:w-auto">
      <SearchIcon className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        id="search"
        onChange={(e) => handleQuery(e.target.value)}
        className={cn(
          "flex h-11 w-full cursor-pointer rounded-md border border-input bg-background px-3 py-2 pl-8 text-base ring-offset-background transition-all duration-300 ease-linear dark:border-[0.1px] lg:min-w-[20rem]",
          "bg-card shadow-none placeholder:text-muted-foreground",
          className,
        )}
        placeholder={""}
      />
    </div>
  );
};

export default Search;
