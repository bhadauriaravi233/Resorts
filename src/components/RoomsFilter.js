import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'




// const getUnique = (items ,value) =>{
//     console.log(items)
//     return [... new Set(items.map(item => item[value]))]
// }
const RoomsFilter = (rooms) => {
    const context = useContext(RoomContext);
    // console.log(context)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        MaxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;
    // let types = getUnique(rooms, 'type');
    // types = ['all', ...types];

    // types = types.map((item, index) =>{
    //     return <option value={item} key={index}>{item}</option>
    // })
  return (
    <section className='filer-container'>
        <Title title="Search rooms" />
        <form className='filter-form'>
            <div className='form-group'>
                <label htmlFor='type'>room type</label>
                <select 
                name='type'
                id='type'
                value={type}
                className='form-control'
                onChange={handleChange} >
                    {/* {types} */}
                </select>
            </div>

        </form>
    </section>
  )
}

export default RoomsFilter

