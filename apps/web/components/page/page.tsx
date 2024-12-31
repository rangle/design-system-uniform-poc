import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "../../uniform/models";
import './page.css';

export const PageComponent = ({
  component,
  context,
  slots,
  title,
}: ComponentProps<PageProps, PageSlots>) => {
  return (
    <>
      <UniformSlot context={context} data={component} slot={slots.header} />
      <section className="section-bg">
      <div className="container">
        <h2 className="section-title">Choose Your Perfect Plan</h2>
        <div className="grid-container">
          <UniformSlot context={context} data={component} slot={slots.content} />
        </div>
      </div>
    </section>
      <UniformSlot context={context} data={component} slot={slots.footer} />
    </>
  );
};

type PageProps = ComponentProps<
  {
    title: string;
  },
  PageSlots
>;
type PageSlots = "content" | "header" | "footer";

export const pageMapping: ResolveComponentResultWithType = {
  type: "page",
  component: PageComponent,
};
