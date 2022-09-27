
import { useState} from 'react'

const Highrating = (props) => {
  var maxVote = 0
  var maxIndex = 0
  for(var i = 0; i < props.array.length; i++) {
    if (props.array[i][1] > maxVote) {
      maxVote = props.array[i][1]
      maxIndex = i
    }
  }
  if (maxVote===0){
    return (
      <div>
      </div>
    ) } else {
      return (
        <div>
          <h1>Anecdotes with most votes</h1>
          <p>{props.array[maxIndex][0]}</p>
          <p>has {maxVote} votes</p>
        </div>
      )
    }
  
  } 

const App = () => {
  const [vote1,setVote1] = useState(0)
  const [vote2,setVote2] = useState(0)
  const [vote3,setVote3] = useState(0)
  const [vote4,setVote4] = useState(0)
  const [vote5,setVote5] = useState(0)
  const [vote6,setVote6] = useState(0)
  const [vote7,setVote7] = useState(0)

  const [voteQuoute,setvoteQuoute] = useState(0)

  const tongHop = 
  [['If it hurts, do it more often.',vote1],
  ['Adding manpower to a late software project makes it later!',vote2],
  ['The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',vote3],
  ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',vote4],
  ['Premature optimization is the root of all evil.',vote5],
  ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',vote6],
  ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',vote7]]
  const vote= () => {
    if (voteQuoute === 0 ) {
      setVote1(vote1+1)
    } else if (voteQuoute === 1) {
      setVote2(vote2+1)
    } else if (voteQuoute === 2) {
      setVote3(vote3+1)
    } else if (voteQuoute === 3) {
      setVote4(vote4+1)
    } else if (voteQuoute === 4) {
      setVote5(vote5+1)
    } else if (voteQuoute === 5) {
      setVote6(vote6+1)
    } else {
      setVote7(vote7+1)
    }
  }
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{tongHop[voteQuoute][0]}</p>
      <p>has {tongHop[voteQuoute][1]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={()=> setvoteQuoute(Math.floor(Math.random()*7))}>next anecdotes</button>
      { <Highrating array={tongHop}></Highrating> }
    </div>
  )
}

export default App
