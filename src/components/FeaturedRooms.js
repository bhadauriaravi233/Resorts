import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Room from './Room';


export default class FeaturedRooms extends Component {
    static contextType = RoomContext
  render() {
    let {loading, featuredRooms }= this.context;
    console.log({featuredRooms})
    let rooms = featuredRooms.map(
        room =>{
         return <Room key={room.id} room={room} />   
        }
    )
    
    console.log({rooms})

    return (
      <section className='featured-rooms'>
        <Title title="featured rooms" />
        <div className='featured-rooms-center'>
            {/* {rooms.length ? rooms : 'rooms'} */}
            {loading ? <loading/> : rooms}
        </div>

      </section>
    )
  }
}
