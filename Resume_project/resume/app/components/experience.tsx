import { FC } from "react";


interface ExpProps {
    data: {
      title: string;
      experiences: {
        role:string,
        description:string[],
      }[]
    };
  }

export const ExperienceP:FC<ExpProps>=({data})=>{
    const{title,experiences}=data

    return(


        <section className='bg-grey-light p-4 drop-shadow-md'>
            <h1>{title}</h1>
            {experiences.map(({role,description})=>(
                <div key={role} className='flex flex-col rounded-lg my-3'>
                    <span className="bg-green-200 h-1"/>
                    <div >
							<h2 className="font-medium">{role}</h2>
							<p className='mt-2 mx-5 text-lg'>{description}</p>
						</div>

                </div>
            )       
            )}
        </section>

    )
}