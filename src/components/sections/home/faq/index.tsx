import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "../../../../shared/accordion";
import { faqQuestions } from "../../../../data";
import { Typography } from "../../../shared/typography";

const Faqs = () => {
  return (
    <section
      id="faqs"
      className="w-full flex px-0 pb-5 lg:pb-0 pt-10 items-center justify-center"
    >
      {/* child */}
      <div className="max-w-section flex flex-col lg:flex-row w-[85%] gap-10">
        {/* title */}
        <div className="w-full lg:leading-12 lg:px-2 xl:px-0 lg:w-[40%]">
          <Typography size="h2" as="h2">
            Frequently Asked{" "}
            <span className="text-gradient-secondary">Questions</span>
          </Typography>
          <Typography size="xl" className="inter text-slate-light">
            Questions commonly asked by our users.{" "}
          </Typography>
        </div>
        {/* faqs */}
        <div className="w-full overflow-y-auto lg:w-[60%] h-auto">
          <Accordion
            transition
            transitionTimeout={200}
            className="w-full flex flex-col justify-between"
          >
            {faqQuestions?.map((currrentData) => {
              const { question, answer,id } = currrentData;

              return (
                <div key={id}>
                  <AccordionItem header={question}>{answer}</AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
