import {
    ComponentProps,
    UniformRichText,
    UniformText,
  } from "@uniformdev/canvas-next-rsc/component";
  import { ResolveComponentResultWithType } from "../../uniform/models";
  import "./hero.css";
  import { Button } from "ds-ui/button";
  import { headers } from 'next/headers';
  
  export const HeroComponent = ({
    component,
    context,
    actionLabel,
  }: ComponentProps<HeroProps>) => {
    const geoCity = headers?.["x-vercel-ip-city"]
    const geoCountry = headers?.["x-vercel-ip-country"] 
    const geoRegion = headers?.["x-vercel-ip-country-region"] 
    return (
      <>
     <header className="header-bg">
      <div className="container">
        <div className="content">
          Location: { geoRegion }
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