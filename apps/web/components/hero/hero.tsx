import {
    ComponentProps,
    UniformRichText,
    UniformText,
  } from "@uniformdev/canvas-next-rsc/component";
  import { ResolveComponentResultWithType } from "../../uniform/models";
  import "./hero.css";
  
  export const HeroComponent = ({
    component,
    context,
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
          <button className="button">
            Check Availability
          </button>
        </div>
      </div>
    </header>
      </>
    );
  };
  
  export type HeroProps = {
    title: string;
    description: string;
  };
  
  export const heroMapping: ResolveComponentResultWithType = {
    type: "hero",
    component: HeroComponent,
  };