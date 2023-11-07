import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-3"
      id="error-page"
    >
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error) && (
          <code className="text-sm">
            {error.statusText} {error.status}
          </code>
        )}
      </p>
    </div>
  );
}

export default ErrorPage;
