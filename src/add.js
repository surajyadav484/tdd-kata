export default function add(args) {
  if (!args) {
    return 0;
  }
  args = args.trim();

  let customSeparator = null;
  let numbers = [];

  if (args.startsWith("//")) {
    const newLineIndex = args.indexOf("\n");
    customSeparator = args.substring(2, newLineIndex);
    numbers = args.slice(newLineIndex + 1).split(customSeparator);
  } else {
    numbers = args.replace(/\n/g, ",").split(",");
  }

  const negativeNumbers = [];
  const sum = numbers.reduce((acc, cur) => {
    if (cur < 0) {
      negativeNumbers.push(cur);
    } else {
      return acc + parseInt(cur);
    }
  }, 0);

  if (negativeNumbers.length) {
    return `Negative numbers not allowed ${negativeNumbers.join(",")}`;
  }
  return sum;
}
