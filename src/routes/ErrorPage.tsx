import { useRouteError } from "react-router-dom";

type RouterError = {
  statusText?: string;
  message?: string;
};
export function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="card bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-gray-500">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
