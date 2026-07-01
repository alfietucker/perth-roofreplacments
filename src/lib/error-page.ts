export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Error — Ironbark Roofing</title>
  <style>
    body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f9fafb; color: #1f2937; }
    .box { max-width: 400px; text-align: center; padding: 2rem; }
    h1 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
    p { font-size: 0.875rem; color: #6b7280; }
    a { display: inline-block; margin-top: 1.5rem; padding: 0.5rem 1rem; background: #1f2937; color: #fff; border-radius: 4px; text-decoration: none; font-size: 0.875rem; }
  </style>
</head>
<body>
  <div class="box">
    <h1>Something went wrong</h1>
    <p>We hit an unexpected error. Please try again or head back home.</p>
    <a href="/">Go home</a>
  </div>
</body>
</html>`;
}
