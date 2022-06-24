import "./Cards.scss";

export default function Cards({user}) {
  return (
    <div className="card">
      <h1>
        Username: {user.first_name} {user.last_name}
      </h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
