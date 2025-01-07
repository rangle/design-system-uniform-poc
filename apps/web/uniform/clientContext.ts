"use client";

import {
  ClientContextComponent,
  createClientUniformContext,
  useInitUniformContext,
} from "@uniformdev/canvas-next-rsc/component";

export const UniformClientContext: ClientContextComponent = ({ manifest }) => {
  useInitUniformContext(() => {
    return createClientUniformContext({
      manifest,
      defaultConsent: true,
    });
  });

  return null;
};
