import { ErrorHandler } from "../utils/errorHandler.js";

const isAdmin = (req, res, next) => {
    if (req.user.role.toLowerCase() !== "admin") {
        next(
            new ErrorHandler(
                `Role : ${req.user.role} is not allowed to access`,
                401
            )
        );
    }
    next();
};

export { isAdmin };
