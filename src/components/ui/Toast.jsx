function Toast({ message = "" }) {
    return (
        <div className="toast toast-center toast-middle z-99">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    );
}

export default Toast;