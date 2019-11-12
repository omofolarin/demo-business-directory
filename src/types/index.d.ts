declare module "rc-upload" {
  import * as React from "react";
  interface uploadProps {
    type?: string;
    percent?: number;
    status?: string;
    theme?: any;
  }
  const Upload: React.SFC<uploadProps>;
  export default Upload;
}
