import React from 'react';

class Splash extends React.Component{

    render(){
        return (
            <div>
                <div className='splash-page-container'>
                    <div className='splash-inputs'>
                        <label>Find
                            <input type="text" />
                        </label>
                        <label>Near
                            <input type="text" />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;