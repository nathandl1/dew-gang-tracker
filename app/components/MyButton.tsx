import {extendVariants, Button} from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    size: {
      xl: "px-8 min-w-28 h-[3vh] text-[1.5vh] gap-4 rounded-medium",
    },
  }
});