import error from '../../assets/others/404.gif'

const ErrorPage = () => {
    return (
        <div className=' flex justify-center items-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;