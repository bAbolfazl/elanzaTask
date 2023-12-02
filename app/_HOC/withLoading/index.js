/* eslint-disable react/display-name */
import { Profiler } from "react";

const WithProfiler =
  (ControlledComponent) =>
  ({ title, ...props }) =>
    (
      <Profiler
        id={title}
        onRender={(id, phase, actualTime, baseTime, startTime, commitTime) =>
          console.table({
            id,
            phase,
            actualTime,
            baseTime,
            startTime,
            commitTime,
          })
        }
      >
        <ControlledComponent {...props} />
      </Profiler>
    );

export default WithProfiler;
