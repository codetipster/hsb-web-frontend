


const Part = ({parts, exe}) => {
    

    return (
      <li>
       {parts} {exe} 
      </li>
    )
}



const Course =({title, parts})=> {
    
    let v =  []
    for(const part of parts){
        v.push(part.exercises)
    }
    const sum = v.reduce((a, b) => a + b)
    
    return(
    <div>
        <h4>{title}</h4>
        <ul>
            {parts.map(part => 
                <Part key={part.id} parts={part.name} exe={part.exercises}/>
            )}
        </ul>
       <p>Total sum of exercise:  {sum}</p>
    </div>
    )
}



const Courses = () => {
    
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    




    return (
      <div>
        <h1>My Courses application from Learning pathways</h1>
        <ul>
        {courses.map(course => 
            <Course key={course.id} title={course.name} parts={course.parts}/>
        )}
        </ul>
        
      </div>
    )
  }

  export default Courses