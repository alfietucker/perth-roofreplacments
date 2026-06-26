let lastCapturedError: Error | undefined;

export function captureError(error: Error) {
  lastCapturedError = error;
}

export function consumeLastCapturedError(): Error | undefined {
  const err = lastCapturedError;
  lastCapturedError = undefined;
  return err;
}

if (typeof window === "undefined") {
  process.on("uncaughtException", captureError);
  process.on("unhandledRejection", (reason) => {
    captureError(reason instanceof Error ? reason : new Error(String(reason)));
  });
}
