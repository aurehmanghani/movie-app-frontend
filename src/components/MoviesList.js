import React, { useState }  from 'react'
import { Table, Button } from 'antd';
import FilmAddFrm from '../components/FilmAddFrm'
import {Constants} from '../services/Constants'
import { useDispatch } from 'react-redux';

const columns = [
    {
      title: 'Movie_Name',
      dataIndex: 'Movie_Name',
      key: 'Movie_Name',
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
    },
    {
      title: 'Realease Date',
      dataIndex: 'Realease_Date',
      key: 'Realease_Date',
    },
    {
      title: 'Rating',
      dataIndex: 'Rating',
      key: 'Rating',
    },
    {
      title: 'Ticket Price',
      dataIndex: 'Ticket_Price',
      key: 'Ticket_Price',
    },
    {
        title: 'Country',
        dataIndex: 'Country',
        key: 'Country',
      },
      {
        title: 'Genre',
        dataIndex: 'Genre',
        key: 'Genre',
      },
      {
        title: 'Photo',
        dataIndex: 'Photo',
        key: 'Photo',
      }
];

  const MoviesList = (props) => {

      const dispatch = useDispatch();
      const [visible, setVisible] = useState(false);

        const onCreate = async (values) => {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(values)
            };
            try {
                const fetchResponse = await fetch("http://localhost:3001/films", settings);
                const data = await fetchResponse.json();
                dispatch({type: Constants.ADD_MOVIES,data: data})
                //console.log("-------",data);
            } catch (e) {
                return e;
            } 
            setVisible(false);
        };

    return(
        <>
            <Button
                style={{float: 'right'}}
                type="primary"
                onClick={() => {
                setVisible(true);
                }}
            >
                + New Film
            </Button>
            <FilmAddFrm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
            setVisible(false);
            }}
        />
            <Table dataSource={props.movies} columns={columns} pagination={true} />
        </>
    )
}







// import React from 'react'props.movies

// const MoviesList = (props) => {
//     console.log("Movies list",props.movies)

//     let itemsToRender;
//     if (props.movies) {
//         itemsToRender = props.movies.map((movie) => {
//         return (        
//             <div className="row text-center">
//                 <div className="col-sm-4">
//                     <div className="thumbnail">
//                         <img src={movie.Photo} alt={movie.Name} width="211" height="158"/>
//                         <p><strong>{movie.Name}</strong></p>
//                         <p>{movie.Description}</p>
//                         <p>{movie.Release_Date}</p>
//                         <p>{movie.Rating}</p>
//                         <button className="btn">Buy Tickets</button>
//                     </div>
//                 </div>
//             </div>
//         )
//         });
//     }else{
//         itemsToRender = "Please Search..."
//     }
//     return(
//         <React.Fragment>
//             {itemsToRender}
//         </React.Fragment>
//     )
// }

export default MoviesList