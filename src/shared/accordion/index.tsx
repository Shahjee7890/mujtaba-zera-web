import { AccordionItem as Item } from "@szhsin/react-accordion";
import type { AccordionItemProps } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";
import { Typography } from "../../components/shared/typography";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({
  header,
  ...rest
}: AccordionItemProps & { header: React.ReactNode }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <Typography size="lg">{header}</Typography>

        <IoIosArrowDown
          className={`ml-auto transition-transform duration-200 ease-out cursor-pointer ${
            isEnter && "rotate-180"
          }`}
        />
      </>
    )}
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full px-4 text-left items-center cursor-pointer  ${
          isEnter ? "text-secondary-dark pb-1 pt-4" : "py-4"
        }`,
    }}
    contentProps={{
      className:
        "transition-height duration-300 ease-out text-slate-light font-[14px] text-sm inter",
    }}
    panelProps={{
      className: ({ isEnter }) => `px-4  ${isEnter ? "pt-1 pb-4" : "py-4"}`,
    }}
  />
);
export default AccordionItem;
