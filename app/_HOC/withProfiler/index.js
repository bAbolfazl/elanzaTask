/* eslint-disable react/display-name */
import Loading from "@/app/_components/loading";

const WithProfiler =
  (ControlledComponent) =>
  ({ isLoading, ...props }) =>
    isLoading ? <Loading /> : <ControlledComponent {...props} />;

export default WithProfiler;
