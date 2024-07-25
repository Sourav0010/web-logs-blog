import React from 'react'

function ToggleItem({
    question,
    answer,
    id,
    sk,
    index,
    length
}) {



    if(index == length-1){
        return (
            <div>
                <h2 id="accordion-collapse-heading-3">
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3" onClick={()=>{
                    document.getElementById(`accordion-collapse-body-1 ${id}`).classList.toggle('hidden')
                    document.getElementById(sk).classList.toggle('rotate-180')
                }}>
                    <span>{question}</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" id={sk} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id={`accordion-collapse-body-1 ${id}`} class="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                         <p class="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='w-full '>
        {index == 0 ?  <div>
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={()=>{
                    document.getElementById(`accordion-collapse-body-1 ${id}`).classList.toggle('hidden')
                    document.getElementById(sk).classList.toggle('rotate-180')
                }}>
                <span>{question}</span>
                <svg data-accordion-icon id={sk} class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id={`accordion-collapse-body-1 ${id}`} class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
                </div>
            </div>
        </div> :
        
        <div>
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2"  onClick={()=>{
                    document.getElementById(`accordion-collapse-body-2 ${id}`).classList.toggle('hidden')
                    document.getElementById(sk).classList.toggle('rotate-180')
                }}>
                <span>{question}</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" id={sk} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id={`accordion-collapse-body-2 ${id}`} class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
                </div>
            </div>
        </div>
        
        }
        
        
    </div>
  )
}

export default ToggleItem