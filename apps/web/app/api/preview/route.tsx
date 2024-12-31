import {
    createPreviewGETRouteHandler,
    createPreviewPOSTRouteHandler,
    createPreviewOPTIONSRouteHandler,
  } from '@uniformdev/canvas-next-rsc/handler';
  
  export const GET: any = createPreviewGETRouteHandler({
    playgroundPath: '/playground',
    resolveFullPath: ({ path }) => (path ? path : '/playground'),
  });
  export const POST: any = createPreviewPOSTRouteHandler();
  export const OPTIONS = createPreviewOPTIONSRouteHandler();