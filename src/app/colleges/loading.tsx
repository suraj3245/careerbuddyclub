export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "3px solid #ebf9f7",
          borderTopColor: "#079db4",
          animation: "colleges-loading-spin 0.8s linear infinite",
        }}
      />
      <style>{`
        @keyframes colleges-loading-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
