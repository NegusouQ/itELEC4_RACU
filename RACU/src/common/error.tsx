import { AlertOutlined } from '@ant-design/icons';
import './error.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

function Error () {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Use the navigate function to go to a specific route
        navigate('/'); // Replace '/' with your desired route
      };
    
    return <>
    <div className='error-main-container'>
        <h1
        style={{ fontSize:'70px', color:'#660000' }}
        ><AlertOutlined
            style={{ marginRight: '5px' }}
        />Error 404</h1>
        <p className='message'>Sorry, the page you were looking for could not be found.</p>
        <Button className='back' onClick={handleNavigate}>
            BACK
        </Button>
    </div>
    </>



}

export default Error;