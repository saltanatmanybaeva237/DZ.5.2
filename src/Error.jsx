import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      {error.status === 404 ? (
        <h1>Пользователь не найден</h1>
      ) : (
        <h1>Что-то пошло не так</h1>
      )}
      <Link to="/users">← Назад к списку</Link>
    </div>
  );
}

export default ErrorPage;