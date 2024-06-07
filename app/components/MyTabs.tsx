import {extendVariants, Tabs} from "@nextui-org/react";

export const MyTabs = extendVariants(Tabs, {
    variants:{
        size:{
            xl:{
                tab: "h-[3vh]",
                tabContent: "text-[1.5vh]"
            }
        }
    }
})