const hired = ['Rebecca', 'Skar']
const students = [
  { name: 'Vitoria', specialty: 'neuro' },
  { name: 'Nikki', specialty: 'mfg' },
  { name: 'Rebecca', specialty: 'retail' },
]

/*function hiredStudents(students) {
  return students.filter((students) => students.hired !== true)
}*/

function hiredStudents(students, hired){
return students.filter(students => {
   return !hired.includes(student.name)
})
}
