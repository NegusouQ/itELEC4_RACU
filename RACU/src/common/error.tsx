import { AlertOutlined } from '@ant-design/icons';
import './error.css'

function Error () {
    return <>
    <div className='error-main-container'>
        <h1
        style={{ fontSize:'70px', color:'#660000' }}><AlertOutlined
            style={{ marginRight: '5px' }}
        />Error 404</h1>
        <p className='message'>Sorry, the page you were looking for could snot be found.</p>
    </div>
    </>
}

export default Error;