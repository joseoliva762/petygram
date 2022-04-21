export const to = async (promise) => {
  console.log('llego');
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
