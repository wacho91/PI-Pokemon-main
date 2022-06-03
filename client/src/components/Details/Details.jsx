import { React, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanPokemons, deletePokemon } from '../../actions';
// import styles from './Details.module.css'
import Loader from '../Loader/Loader.jsx'

// import bug from '../../images/logos/bug.png'
// import dark from '../../images/logos/dark.png'
// import dragon from '../../images/logos/dragon.png'
// import electric from '../../images/logos/electric.png'
// import fairy from '../../images/logos/fairy.png'
// import fighting from '../../images/logos/fighting.png'
// import fire from '../../images/logos/fire.png'
// import flying from '../../images/logos/flying.png'
// import ghost from '../../images/logos/ghost.png'
// import grass from '../../images/logos/grass.png'
// import ground from '../../images/logos/ground.png'
// import ice from '../../images/logos/ice.png'
// import normal from '../../images/logos/normal.png'
// import psychic from '../../images/logos/psychic.png'
// import poison from '../../images/logos/poison.png'
// import rock from '../../images/logos/rock.png'
// import steel from '../../images/logos/steel.png'
// import water from '../../images/logos/water.png'
// import unknown from '../../images/logos/unknown.png'
// import shadow from '../../images/logos/shadow.jpg'

function Details() {
    const myPokemon = useSelector((state) => state.detail);
    console.log(myPokemon)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])
    
    function handleClick() {
        // dispatch(cleanDetail());
        dispatch(cleanPokemons());
    }


    function handleDelete() {
      if (myPokemon[0].createdInDb) {
              dispatch(deletePokemon(id));
              dispatch(cleanPokemons());
              alert('Pokemon deleted');
              navigate('/home')
      }
      else alert("You can't delete an original pokemon.")
    }

    function handleUpdate() {
      if (myPokemon[0].createdInDb) {
        navigate("/update/" + id)
      }
      else window.alert("You can't update an original pokemon")
    }

    // function getLogoType(type) {
    //     switch(type) {
    //       case 'bug':
    //         return bug;
    //       case 'dark':
    //         return dark;
    //       case 'dragon':
    //         return dragon
    //       case 'electric':
    //         return electric;
    //       case 'fairy':
    //         return fairy;
    //       case 'fighting':
    //         return fighting
    //       case 'fire':
    //         return fire;
    //       case 'flying':
    //         return flying;
    //       case 'ghost':
    //         return ghost
    //       case 'grass':
    //         return grass;
    //       case 'ground':
    //         return ground;
    //       case 'ice':
    //         return ice;
    //       case 'normal':
    //         return normal;
    //       case 'psychic':
    //         return psychic;
    //       case 'poison':
    //         return poison
    //       case 'rock':
    //         return rock;
    //       case 'steel':
    //         return steel;
    //       case 'water':
    //         return water
    //       case 'shadow':
    //         return shadow;
    //       case 'unknown':
    //         return unknown;
    //       default: 
    //         break
    //     }
    //   }
      
  return (
    <div>
            <nav >
                <div >
                    <Link to="/home"><h1 onClick={() => handleClick()}>Home</h1></Link>
                </div>
            </nav>
        {
            myPokemon.length > 0 ?
            <div>
              <button onClick={() => handleDelete()}>Delete</button>
              
                <button onClick={() => handleUpdate()}>Update</button>


                <h2>#{(myPokemon[0].id.length > 5 ? myPokemon[0].id.substring(0, 4) + "..." : myPokemon[0].id)}</h2>
                <div>
                    <h1>{myPokemon[0].name}</h1>
                    <img src={myPokemon[0].img} alt="" />
                    <h4>Stats:</h4>
                    <div>
                        <h3>Hp:</h3><p>{myPokemon[0].hp}</p>
                    </div>
                    <div>
                        <h3>Attack:</h3><p>{myPokemon[0].attack}</p>
                    </div>
                    <div>
                        <h3>Defense:</h3><p>{myPokemon[0].defense}</p>
                    </div>
                    <div>
                        <h3>Speed:</h3><p>{myPokemon[0].speed}</p>
                    </div>
                        <div>
                    <h3>Height:</h3><p>{myPokemon[0].height}cms</p>
                    </div>
                    <div>
                        <h3>Weight:</h3><p>{myPokemon[0].weight}kgs</p>
                    </div>
                    <div>
                        <div>
                            <h5>{myPokemon[0].types[0]}</h5> 
                            {/* <img  src={getLogoType(myPokemon[0].types[0][0])} alt="" /> */}
                        </div>
                        <div>
                            <h5>{myPokemon[0].types[1]}</h5>
                            {/* { myPokemon[0].types[1] ?
                            <img  src={getLogoType(myPokemon[0].types[1][0])} alt="" />
                            : null
                            } */}
                        </div>
                    </div>
                </div>
            </div>
            : <Loader />
        }
    </div>
  )
}

export default Details