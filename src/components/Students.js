import React, {useState} from 'react'
import Card from '@mui/material/Card';
import Searches from './Searches'

const Students = ({students}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (isClicked === false) {
      setIsClicked(true)
    } else {
      setIsClicked(false)
    }
  }

  const grades = students.map((student) => {
    return student.grades
  })

  const gradeNumber = grades.map((grade) => {
    return grade
  })

  const testAverage = gradeNumber.map((grades) => {
    return grades
  })

  const numbers = testAverage.map((grade) => {
    return grade.map(grade => parseInt(grade)) 
  })

  return (
    <div className='card-div'>
      <Searches students={students} />
      {students.map((student) => (
        <Card className='student-cards' key={student.id}>
          <div className='card-flex'>
          
            <div className='student'>

              <div>
                <img className='student-pic' src={student.pic} alt={student.firstName + ' profile pic'} />
              </div>

              <div>
                <h1 className='name'>{student.firstName} {student.lastName}</h1>
                <div className='student-details'>
                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: 
                    {/* {
                      numbers.map((scores) => {
                        return scores.reduce((a,b) => a+ b, 0) / scores.length 
                      })
                    } */}
                  </p>

                  {(isClicked === true) ? (
                    (student.grades.map((grade, index) => (
                      <div className='test' key={index}>
                        <p>Test {index + 1}: </p>
                        <p className='scores'>{grade}%</p>
                      </div>
                  )))) : null }
                </div>
              </div>

            </div>

            <div>
              { (isClicked !== true) ?        
                ( <button className='button button-show' onClick={() => handleClick()}>+</button> )
                :
                ( <button className='button button-hide' onClick={() => handleClick()}>-</button> )
              }
            </div>

          </div>
        </Card>
      ))}
    </div>
  )
}

export default Students