import { Button } from "ds-ui/button";
import { ResolveComponentResultWithType } from "../uniform/models";

export const FooterComponent = () => (
    <footer>
        Sign up for our newsletter to get the latest news
        <Button variant="primary" label="Sign Up" />
    </footer>
);

export const footerMapping: ResolveComponentResultWithType = {
  type: "footer",
  component: FooterComponent,
};