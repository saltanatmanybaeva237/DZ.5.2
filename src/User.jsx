import { Link, useLoaderData } from "react-router-dom";

export async function userLoader({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  if (!response.ok) {
    throw new Response("Пользователь не найден", { status: 404 });
  }

  const user = await response.json();
  return user;
}

function User() {
  const user = useLoaderData();

  return (
    <div>
      <Link to="/users">← Назад к списку</Link>

      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Город: {user.address.city}</p>
      <p>Компания: {user.company.name}</p>
    </div>
  );
}

export default User;