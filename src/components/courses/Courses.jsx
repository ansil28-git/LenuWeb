import React, { useEffect } from 'react'
import aos from 'aos';




function Courses() {

  useEffect(()=>{
    aos.init({
      duration:1000
    })
  
  },[])

  const coursedata = [
    {
        "id": 1,
        "content": "Learn the fundamentals of Frontend Development, including HTML, CSS, and JavaScript.",
        "course_name": "Frontend Development",
        "duration": "5 months",
        "already_enrolled": 150,
        "price": 5999.99,
        "image": "https://plus.unsplash.com/premium_vector-1733734464224-12248f9547af?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "content": "Master the principles of UI/UX Design, focusing on user-centered design and prototyping.",
        "course_name": "UI/UX Design",
        "duration": "2 months",
        "already_enrolled": 120,
        "price": 2999.99,
        "image": "https://plus.unsplash.com/premium_vector-1682310595106-ecf4ee316a54?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "content": "Dive into Python programming, covering basics to advanced topics for data analysis and web development.",
        "course_name": "Python Programming",
        "duration": "4 months",
        "already_enrolled": 200,
        "price": 4500.99,
        "image": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
  return (
    <div className='container px-4' id='course'>
        <h1 className='text-center text-3xl mt-20 font-bold mb-10 '>OUR <span className='text-blue-600'>COURSES</span></h1>
        <div className='grid gap-15 md:gap-20 md:grid-cols-3 mt-6 grid-cols-1 mx-auto max-w-6xl'>
          {coursedata.map((data)=>(
           <div key={data.id} className='bg-white shadow-lg rounded-lg  text-center  p-6 transition-transform duration-300 hover:scale-105'  data-aos="zoom-in">
            <img className='w-full h-32 object-cover rounded-md mb-2' src={data.image} alt="" />
            <div className='flex flex-col p-4 '>
              <h1 className='font-bold text-xl'>{data.course_name}</h1>
              <p className='font-light text-sm mt-2'>{data.content}</p>
              <h3 className='mt-4'>Duration:{data.duration}</h3>
              <h4 className='text-md font-medium mt-1 text-sky-700'>Already Enrolled:{data.already_enrolled}</h4>
              <span className='font-bold text-red-500 mt-2 mb-4'>PRICE:{data.price}/-</span>
              <button className='bg-sky-600 font-bold p-3 rounded-2xl text-white transition-transform duration-300 hover:bg-sky-800 cursor-pointer'>ENROLL NOW</button>
            </div>
           </div>

          ))}

        </div>
    </div>
  )
}

export default Courses
