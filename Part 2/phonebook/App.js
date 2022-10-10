import { useState, useEffect} from 'react'
import axios from 'axios'

const Filter = (props)=>{
  return(
    <form>
    <div>
      fiter shown with
      <input
      value = {props.filterName}
      onChange = {props.addFilterName} />
    </div>
  </form>
  )
}
const PersonForm = (props)=>{
  return(
    <form onSubmit={props.addPerson}>
        <div>
          name: <input
          value = {props.newName}
          onChange = {props.addName} />
        </div>
        <div>
          number: <input
          value = {props.newNumber}
          onChange = {props.addNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}
const ShowPerson = ({person}) => {
  return(
    <div>
      <p>{person.name} {person.number}</p>
    </div>
  )
}

const Persons = (props) =>{
  return(
    <div>
        {props.personToShow.map((person,index) => 
        <ShowPerson key = {index} person = {person}></ShowPerson>)}
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    console.log('submitted',event.target)
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person=>JSON.stringify(newPerson) === JSON.stringify(person))){
      alert(newName+' is already added to phonebook')
      return 0
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const addName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addFilterName = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }
  const addNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const personToShow = persons.filter(person => person.name.startsWith(filterName.charAt(0).toUpperCase() + filterName.slice(1)))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} addFilterName={addFilterName}></Filter>
      <h3>Add new person</h3>
      <PersonForm addPerson={addPerson} newName={newName} addName={addName} newNumber={newNumber} addNumber={addNumber}></PersonForm>
      <h2>Numbers</h2>
      <Persons personToShow={personToShow}></Persons>
      
    </div>
  )
}


export default App
