import * as React from "react";

export const Table = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container timetable-container table-responsive">
      <div className="timetable-inner rounded">
        <table className="table table-light table-bordered m-auto">
          <thead>
            <tr>
              {props.headings.map((heading) => {
                return <th scope="col">{heading}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {props.scheduleReady
              ? props.Schedule[0].schedule.map((sched, outerIndex) => {
                  return (
                    <tr>
                      <th scope="row">{props.days[outerIndex]}</th>
                      {sched.map((lesson) => {
                        return <td>{lesson}</td>;
                      })}
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
});
