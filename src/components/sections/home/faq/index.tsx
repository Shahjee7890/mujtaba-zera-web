import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "../../../../shared/accordion";
import { faqQuestions } from "../../../../data";
import { Typography } from "../../../shared/typography";

const Faqs = () => {
  return (
    <section id="faqs" className="w-full pb-5 lg:pb-0 pt-10">
      {/* child */}
      <div className="max-w-section">
        <div className="max-w-content w-full flex flex-col lg:flex-row lg:justify-between gap-10 px-5 lg:px-0">
          {/* title */}
          <div className="w-full lg:leading-12 px-4 lg:px-6 xl:px-0 ">
            <Typography size="h2" as="h2">
              Frequently Asked <br />
              <span className="text-gradient-secondary">Questions</span>
            </Typography>
            <Typography size="xl" className="inter text-slate-light">
              Questions commonly asked by our users.
            </Typography>
          </div>
          {/* faqs */}
          <div className="w-full overflow-y-auto h-auto">
            <Accordion
              transition
              transitionTimeout={200}
              className="w-full flex flex-col justify-between"
            >
              {faqQuestions?.map((currrentData) => {
                const { question, answer, id } = currrentData;

                return (
                  <div
                    key={id}
                    className="border-b border-[#F3F3F3] last:border-b-0"
                  >
                    <AccordionItem header={question}>{answer}</AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
