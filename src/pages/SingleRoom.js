import React, { Component } from 'react';
import defaultBcg from '../Images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import withRouter from '../components/withRouter';


class SingleRoom extends Component{
  constructor(props) {
    super(props);
    this.state ={
      slug: '',
    };
  };
  static contextType = RoomContext;
  
  componentDidMount() {
    const {slug} = this.props.params;
    console.log({slug});
    this.setState({slug: slug});

  };
  
  render(){
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return(
        <div className='error'>
          <h3>No such could be found...</h3>
          <Link to="/rooms" className='btn-primary'>
            back to rooms
          </Link>
        </div>
      );
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title={`${name} room`}>
        <Link to='/rooms' className='btn-primary'>
          back to rooms
        </Link>
      </Banner>
    </Hero>
    <section className='single-room'>
      <div className='single-room-images'>
      {images.map((item, index) => {
        return <img key={index} src={item} alt={name} />;
      })}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>details</h3>
          <p>{description}</p>
        </article>
        <article className='info'>
          <h3>info</h3>
          <h6>price : ${price}</h6>
          <h6>size : ${size} SQRT</h6>
          <h6>
            max capacity : {" "}
            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
          </h6>
          <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
          <h6>{breakfast && "free breakfast included"}</h6>
        </article>
      </div>
    </section>
    <section className='room-extras'>
      <h6>extras</h6>
      <ul className='extras'>
        {extras.map((item, index)=>{
          return <li key={index}> -{item}</li>
        })}
      </ul>
    </section>
    </>
    );
}
};

export default withRouter(SingleRoom);
