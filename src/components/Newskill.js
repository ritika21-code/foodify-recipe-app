import React from 'react'
const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked"
]

function Newskill() {
    return (
        <div className='section skills'>
            <div className='col img'><img src="images/img5.jpg" alt='/'></img></div>
            <div className='col typography'> <h1 className='title'>
                Improve Your Culinary Skills
            </h1>
           { list.map((item,index)=>(
<p className='skillitem' key={index}>{item}</p>
            ))}
                </div>



        </div>
    )
}

export default Newskill