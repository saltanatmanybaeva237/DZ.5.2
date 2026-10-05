import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export async function usersLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

function Users() {
  const users = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") || "";

  const filteredUsers = users.filter(function (user) {
    return user.name.toLowerCase().includes(q.toLowerCase());
  });

  function handleChange(event) {
    setSearchParams({ q: event.target.value });
  }

  return (
    <div>
      <h1>Пользователи</h1>

      <input
        type="text"
        placeholder="Поиск по имени"
        value={q}
        onChange={handleChange}
      />

      {filteredUsers.map(function (user) {
        return (
          <div key={user.id}>
            <h3>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </h3>
            <p>Email: {user.email}</p>
            <p>Город: {user.address.city}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;