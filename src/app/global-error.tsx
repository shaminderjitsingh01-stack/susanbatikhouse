"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "20px",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "24px", marginBottom: "16px", color: "#1f2937" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "24px" }}>
            We apologize for the inconvenience. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "12px 24px",
              backgroundColor: "#EC4899",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
