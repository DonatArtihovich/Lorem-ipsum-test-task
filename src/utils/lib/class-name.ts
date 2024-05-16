const classNames = (...args: (string | undefined)[]) => args.filter(arg => !!arg).join(' ');
export default classNames;