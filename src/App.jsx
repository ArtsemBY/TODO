import React from 'react';

import List from './coponets/Liste/List.jsx'


function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <List items = {[
                    {
                        icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                   width="24px" fill="#434343">
                            <path
                                d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/>
                        </svg>),
                        name: 'Все задачи',
                        active: true,
                    }
                ]}/>
                <List items = {[
                    {
                       color: 'green',
                       name: 'Покупки'
                    },{
                        color: 'blue',
                        name: 'Фронтенд'
                    },{
                        color: 'pink',
                        name: 'Фильмы и сериалы'
                    },{
                        color: 'lettuce',
                        name: 'Книги'
                    },{
                        color: 'gray',
                        name: 'Личное'
                    }
                ]}/>
                <List items = {[
                    {
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="#434343">
                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                            </svg>),
                        name: 'Добавить папку',
                    }
                ]}/>
            </div>
            <div className="todo__tasks"></div>
        </div>
    )
}

export default App
