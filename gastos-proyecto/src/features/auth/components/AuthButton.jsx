export default function AuthButton({ children, isLoading }) {
  return (
    <button type="submit" className="auth-button" disabled={isLoading}>
      {isLoading ? (
        <span className="btn-loader">
          <span className="loader-dot" />
          <span className="loader-dot" />
          <span className="loader-dot" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}