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
  brand,
  mode,
}: ComponentProps<PageProps, PageSlots>) => {
  const brandTheme = brand || 'brand-1';
  const modeTheme = mode || 'light';
  const theme = `${brandTheme} ${modeTheme} desktop default`;

  return (
    <main className={theme}>
      <UniformSlot context={context} data={component} slot={slots.header} />
      <UniformSlot context={context} data={component} slot={slots.content} />
      <UniformSlot context={context} data={component} slot={slots.footer} />
    </main>
  );
};

type PageProps = ComponentProps<
  {
    title: string;
    brand: string;
    mode: string;
  },
  PageSlots
>;
type PageSlots = "content" | "header" | "footer";

export const pageMapping: ResolveComponentResultWithType = {
  type: "page",
  component: PageComponent,
};
