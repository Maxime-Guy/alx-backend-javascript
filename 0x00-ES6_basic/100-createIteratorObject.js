export default function createIteratorObject(report) {
  const employeeNames = Object.values(report.allEmployees).flat();
  let nextIndex = 0;

  return {
    next: function () {
      if (nextIndex < employeeNames.length) {
        return {
          value: employeeNames[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

