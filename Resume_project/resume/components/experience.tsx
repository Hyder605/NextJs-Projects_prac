

export const ExperienceP=({data})=>{
    const{title,experiences}=data

    return(


        <section className='bg-grey-light p-4 drop-shadow-md'>
            <h1>{title}</h1>
            {experiences.map(({role,description})=>(
                <div key={role} className='flex flex-col rounded-lg'>
                    <span className="bg-green-200 h-3"/>
                    <div >
							<h2 className="font-medium">{role}</h2>
							<p className='mt-2'>{description}</p>
						</div>

                </div>
            )       
            )}
        </section>

    )
}