import ViewTransactionButton from '../ViewTransactionButton';
import './style.css';


function AccountContent({title , amount , description}) {
    return (
        <div className='account-content'>
            <div>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p>{description}</p>
            </div>
                <ViewTransactionButton/>
        </div>
    )
}

export default AccountContent