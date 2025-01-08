"use client";

import {
  ClientContextComponent,
  createClientUniformContext,
  useInitUniformContext,
} from "@uniformdev/canvas-next-rsc/component";
import { ContextPlugin, enableContextDevTools } from "@uniformdev/context";
import { useRouter } from "next/navigation";

export const UniformClientContext: ClientContextComponent = ({ manifest }) => {
  const router = useRouter();

  useInitUniformContext(() => {
    const plugins: ContextPlugin[] = [];

    plugins.push(
      enableContextDevTools({
        onAfterMessageReceived: () => {
          router.refresh();
        },
      })
    );
    return createClientUniformContext({
      manifest,
      plugins,
      defaultConsent: true,
    });
  });

  return null;
};
