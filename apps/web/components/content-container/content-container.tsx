import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "../../uniform/models";
import "./content-container.css";

export const ContentContainerComponent = ({
  component,
  context,
  slots,
  title,
  layout = "grid",
}: ComponentProps<ContentContainerProps>) => {
  return (
    <section className="section-bg">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {layout === "grid" && (
          <div className="grid-container">
            <UniformSlot
              context={context}
              data={component}
              slot={slots.item}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export type ContentContainerProps = ComponentProps<
  {
    title: string;
    layout: "grid" | "list";
  },
  ContentContainerSlots
>;
type ContentContainerSlots = "item";

export const contentContainerMapping: ResolveComponentResultWithType = {
  type: "contentContainer",
  component: ContentContainerComponent,
};
