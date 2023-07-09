const Phonebook = ({ phonebook }) => {
  return (
    <div>
      <li key={phonebook.name}>{phonebook.name}</li>
      <li>{phonebook.job}</li>
      <li>{phonebook.number}</li>
    </div>
  );
};

export default Phonebook;