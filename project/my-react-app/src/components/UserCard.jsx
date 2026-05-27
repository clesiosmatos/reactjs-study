function UserCard({ name, age, children }) {
  return (
    <div>
      <h3>User Card</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {children}
    </div>
  )
}

export default UserCard