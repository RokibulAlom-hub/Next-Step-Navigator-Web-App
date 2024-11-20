import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center align-middle w-full min-h-full">
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-2xl ">404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-red-700 font-semibold">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
