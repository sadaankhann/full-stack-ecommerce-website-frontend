import React from 'react'

const SuppliersByRegion = () => {
  return (
    <div className='flex flex-col justify-center h-[300px] w-full' style={{padding : 'min(4em, 6%)'}}>
      <h2 className='text-2xl font-bold font-sans mb-6'>Suppliers by region</h2>
      <div className="grid grid-cols-5 grid-rows-2 gap-10">
        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/uae.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>United Arab Emirates</h6>
                <p className='text-gray-600 text-sm'>shopname.ae</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/russia.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>Russia</h6>
                <p className='text-gray-600 text-sm'>shopname.ru</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/uk.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>United Kingdom</h6>
                <p className='text-gray-600 text-sm'>shopname.uk</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/us.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>United States</h6>
                <p className='text-gray-600 text-sm'>shopname.us</p>
            </div>
        </div>


        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/uae.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>United Arab Emirates</h6>
                <p className='text-gray-600 text-sm'>shopname.ae</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/denmark.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>Denmark</h6>
                <p className='text-gray-600 text-sm'>shopname.dk</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/france.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>France</h6>
                <p className='text-gray-600 text-sm'>shopname.fr</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/china.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>China</h6>
                <p className='text-gray-600 text-sm'>shopname.ch</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/italy.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>Italy</h6>
                <p className='text-gray-600 text-sm'>shopname.it</p>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center items-center'><img src="../src/assets/flags/australia.png" className='h-[23px]' alt="" /></div>
            <div>
                <h6 className='text-sm'>Australia</h6>
                <p className='text-gray-600 text-sm'>shopname.au</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SuppliersByRegion
