import character from '../assets/images/21.png'
import { Button } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import './error.css'

function Error () {
    return <>
    <div className='error-main-container'>
        <h1
        style={{ fontSize:'70px' }}
        ><AlertOutlined
            style={{ marginRight: '5px' }}
        />Error 404</h1>
        <div className="error-message">
        <img className='char' src={ character } alt="" />
        <div
            style={{ 
                display:'flex',
                justifyContent: 'start',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '5em'
             }}
        >
            <h2> Page Not Found!</h2>
            <p className='message'>Sorry, the page you were looking for could not be found.</p>
        </div>
        </div>
    </div>
    </>
    
    
        
}

export default Error;