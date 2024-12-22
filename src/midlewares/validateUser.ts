

import { Request, Response, NextFunction } from 'express';

interface UserRequest extends Request {
    body: {
        name: string;
        email: string;
    };
}

const validateUser = (req: UserRequest, res: Response, next: NextFunction) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ message: "Name and email are required" });
    } else {

        next();
    }
}
;

export default validateUser;