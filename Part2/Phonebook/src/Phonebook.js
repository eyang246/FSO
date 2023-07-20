const Phonebook = ({ phonebook,toggleRemoval }) => {
  return (
    <div>
      <li>{phonebook.name}</li>
      <li>{phonebook.job}</li>
      <li>{phonebook.number}</li>
      <button onClick={toggleRemoval}>DELETE</button>
    </div>
  );
};

export default Phonebook;