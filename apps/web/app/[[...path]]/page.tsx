import {
    UniformComposition,
    PageParameters,
    createServerUniformContext,
    retrieveRoute,
  } from "@uniformdev/canvas-next-rsc";
  import { resolveComponent } from "../../uniform/resolver";
  
  export default async function HomePage(props: PageParameters) {
    const route = await retrieveRoute(props);
    const serverContext = await createServerUniformContext({
      searchParams: props.searchParams,
    });
    return (
      <>
        <UniformComposition
          {...props}
          resolveComponent={resolveComponent}
          mode="server"
          route={route}
          serverContext={serverContext}
        />
      </>
    );
  }