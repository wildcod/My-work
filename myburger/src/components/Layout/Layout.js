import React from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css'

const layout = (props) => {

    return (
        <Aux>
               <div> Toolbar, Sidebar ,Bachdrop , </div>
                 <main className="content">
                      {props.children}
                </main>
        </Aux>
    );
}

export default layout;