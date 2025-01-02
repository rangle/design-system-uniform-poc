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
      <UniformSlot context={context} data={component} slot={slots.content} />
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
