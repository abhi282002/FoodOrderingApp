import Avatar from "./Avatar.js";

function Card({ children }) {

  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar id={"Abhishek"} />
    </Card>
  );
}
