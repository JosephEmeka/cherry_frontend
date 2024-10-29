import { toast } from 'react-toastify';

const ErrorHandler = (error) => {

    console.error("An error occurred:", error);

    toast.error(error.response?.data?.message || "An unexpected error occurred. Please try again.");
};

export default ErrorHandler