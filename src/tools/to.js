export const to = async (promise) => {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
