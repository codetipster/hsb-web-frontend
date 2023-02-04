import { useEffect, useState } from "react";
import axios from "axios";

const Part = ({ parts, exe }) => {
  return (
    <li className="border w-1/2">
      {parts} {exe}
    </li>
  );
};

const Course = ({ title, parts }) => {
  let v = [];
  for (const part of parts) {
    v.push(part.exercises);
  }
  const sum = v.reduce((a, b) => a + b);

  return (
    <div>
      <h4 className="font-bold text-green-800">{title}</h4>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} parts={part.name} exe={part.exercises} />
        ))}
      </ul>
      <p className="font-bold">Total sum of exercise: {sum}</p>
    </div>
  );
};

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    axios
      .post("http://localhost:3001/persons", personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const contactDisplay = search
    ? persons.filter((person) => person.name.includes(search))
    : persons;

  const handleDelete = (id) => {
    const url = `http://localhost:3001/persons/${id}`;
    axios
      .delete(url)
      .then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => console.log("fetch failed"));
  };

  return (
    <div className="px-4">
      <h2>Phonebook</h2>
      <div>
        Filter contact list by name:{" "}
        <input onChange={handleSearch} className="border" />
      </div>

      <form onSubmit={addName}>
        <div className="flex-1 p-2">
          <div>
            name:{" "}
            <input value={newName} onChange={handleChange} className="border" />
          </div>
          <div className="py-2">
            number:{" "}
            <input
              value={newNumber}
              onChange={handleNumber}
              className="border"
            />
          </div>
        </div>

        <div className="font-bold bg-blue-500 text-center items-align w-[80px] h-[40px] px-2 hover:bg-white text-black-500 rounded">
          <button type="submit" className="py-2">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {contactDisplay.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}{" "}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-green-700 px-2">
        My Courses application from Learning pathways
      </h1>
      <ul className="border p-4">
        {courses.map((course) => (
          <Course key={course.id} title={course.name} parts={course.parts} />
        ))}
      </ul>
      <Phonebook />
    </div>
  );
};

export default Courses;
