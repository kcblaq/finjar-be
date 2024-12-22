import { Request, Response } from "express";
import prisma from "../../utils/prismaInstance";

class userController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unknown error occurred" });
            }
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
            if (!user) {
                res.status(404).json({ message: "User not found" });
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unknown error occurred" });
            }
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const user = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                },
            });
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unknown error occurred" });
            }
        }
    }
}

export default new userController();