export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iteratorResult = reportWithIterator.next();

  while (!iteratorResult.done) {
    result += iteratorResult.value;
    iteratorResult = reportWithIterator.next();

    if (!iteratorResult.done) {
      result += ' | ';
    }
  }

  return result;
}

