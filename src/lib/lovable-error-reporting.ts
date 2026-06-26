type ErrorContext = Record<string, unknown>;

export function reportLovableError(error: Error, context?: ErrorContext): void {
  console.error("[error]", error, context);
}
