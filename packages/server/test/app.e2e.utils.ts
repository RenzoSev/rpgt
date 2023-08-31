export const getValidationPipeError = (error: string[]) => ({
  error: 'Bad Request',
  message: error,
  statusCode: 400,
});
