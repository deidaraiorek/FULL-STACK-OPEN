import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick= {props.goodValue} >{props.good}</button>
      <button onClick= {props.neutralValue} >{props.neutral}</button>
      <button onClick= {props.badValue} >{props.bad}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <div>
      <table>
        <tr>
          <td>{props.text1}</td>
          <td>{props.value1}</td>
        </tr>
        <tr>
          <td>{props.text2}</td>
          <td>{props.value2} </td>
        </tr>
        <tr>
          <td>{props.text3}</td>
          <td>{props.value3} </td>
        </tr>
        <tr>
          <td>{props.text4}</td>
          <td>{props.value4}</td>
        </tr>
        <tr>
          <td>{props.text5}</td>
          <td>{props.value5}</td>
        </tr>
        <tr>
          <td>{props.text6}</td>
          <td>{props.value6} {props.sign}</td>
        </tr>
      </table>
    </div>
  )
}
const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )}
  return(
    <div>
      <StatisticLine 
      text1="good" value1={props.good}
      text2="neutral" value2={props.neutral}
      text3="bad" value3={props.bad}
      text4="all" value4={props.good + props.neutral + props.bad}
      text5="average" value5={(props.good-props.bad)/(props.good + props.neutral + props.bad)}
      text6="positive" value6={props.good*100/(props.good + props.neutral + props.bad)} sign = '%'></StatisticLine>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
  }
  const clickNeutral = () => {
    setNeutral(neutral +1)
  }
  const clickBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button 
      goodValue ={clickGood} good='good'
      neutralValue ={clickNeutral} neutral ='neutral'
      badValue = {clickBad} bad = 'bad'
      ></Button>
      <h1>statistics</h1>
      <Statistics good ={good} neutral ={neutral} bad ={bad}></Statistics>
    </div>
  )
}

export default App
