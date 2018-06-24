import React from 'react';

const Layout = (props) => {
  
    return(

        <div>
            <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-8">
                        {props.children}
                      </div>
                      <div className="col-md-4">
                        Video List
                      </div>
                  </div>
            </div>
        </div>
         
    );

}

export default Layout;