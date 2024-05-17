const classNames = (...args: (string | undefined | null | false)[]) => args.filter(arg => !!arg).join(' ');
export default classNames;