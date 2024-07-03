import { ComponentPropsWithoutRef } from "react";
import { cn } from "./utils";

let loadingIcon = new URL("/assets/loading.svg", import.meta.url);

export type LoadingProps = Omit<ComponentPropsWithoutRef<"img">, "src">;

export const Loading = ({ className, ...rest }: LoadingProps) => (
  <img
    className={cn("h-16 w-16 animate-spin", className)}
    src={loadingIcon.toString()}
    alt="loading"
    {...rest}
  />
);
