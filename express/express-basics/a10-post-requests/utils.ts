export const isValidString = (value: unknown): boolean => {
	return typeof value === 'string' && (value as string).trim() !== '';
};
