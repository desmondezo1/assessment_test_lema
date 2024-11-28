export const waitForCondition = async (
  conditionFn: () => boolean,
  timeout = 3000
) => {
  const start = Date.now();
  while (!conditionFn()) {
    if (Date.now() - start > timeout) {
      throw new Error("Condition not met within timeout");
    }
    await new Promise((resolve) => setTimeout(resolve, 50)); // Poll every 50ms
  }
};
