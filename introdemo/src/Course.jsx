// Course.js

const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => {
      console.log('what is happening', sum, part);
      return sum + part.exercises;
    }, 0);
    
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total total={totalExercises} />
        <p>Total exercises: {totalExercises}</p>
      </div>
    );
  };
  
  const Header = ({ course }) => <h1>{course}</h1>;
  
  const Content = ({ parts }) => (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
  
  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );
  
  const Total = ({ total }) => <p>Number of exercises {total}</p>;
  
  export default Course;