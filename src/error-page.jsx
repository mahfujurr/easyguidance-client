import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center">
      <h1 className="font-bold text-5xl  mt-48 py-5">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-5">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className='text-white bg-black p-3 font-semibold rounded-lg'>Go back home</Link>
    </div>
  );
}