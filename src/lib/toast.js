import { toast } from "react-toastify";

export const toastError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 2000,
  });
};

export const toastWarn = (message) => {
  toast.warning(message, {
    position: "top-center",
    autoClose: 2000,
  });
};

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
  });
};
