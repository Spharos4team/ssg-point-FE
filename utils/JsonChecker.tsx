export default function JsonChecker(inputValue: any): boolean {
  return typeof inputValue === 'object' && inputValue !== null && !Array.isArray(inputValue);
}
