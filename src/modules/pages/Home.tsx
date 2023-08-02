import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
            <nav>
        <ul>
          <li>
            <Link to="/todolist">Todo List</Link>
          </li>
          <li>
            <Link to="/increment">Increment</Link>
          </li>
        </ul>
      </nav>
      <h2>Task Details</h2>
    </div>
  );
}

export default Home;
