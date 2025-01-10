import {
    ComponentProps,
    UniformRichText,
    UniformText,
  } from "@uniformdev/canvas-next-rsc/component";
  import { ResolveComponentResultWithType } from "../../uniform/models";
  import "./hero.css";
  import { Button } from "ds-ui/button";
  
  export const HeroComponent = ({
    component,
    context,
    actionLabel,
  }: ComponentProps<HeroProps>) => {
    return (
      <>
     <header className="header-bg">
      <div className="container">
        <div className="content">
          <UniformText
            component={component}
            context={context}
            parameterId="title"
            as="h1"
            className="title"
          />
          <UniformRichText
            component={component}
            parameterId="description"
            className="subtitle"
          />
          <Button
            label={actionLabel}
            variant="secondary"
          />
        </div>
      </div>
    </header>
      </>
    );
  };
  
  export type HeroProps = {
    title: string;
    description: string;
    actionLabel: string;
  };
  
  export const heroMapping: ResolveComponentResultWithType = {
    type: "hero",
    component: HeroComponent,
  };