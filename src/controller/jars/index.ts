import prisma from "../../utils/prismaInstance";
import { Request, Response } from 'express';


class JarsController {
    async getUserJar(req: Request, res: Response) {
        const { id } = req.params;
        const jars = await prisma.user.findFirst({
            where: {
                id: id,
            },
            include: {
                jars: {
                    include: {
                        items: true
                    }
                },

            },
        })
        res.json({result: jars});
    }

    async createUserJar(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        const result = await prisma.jars.create({
            data: {
                name,
                owner: {
                    connect: {
                        id: id,
                    },
                },
            }
        });
        res.json({result: result});
    }

     async createItem(req: Request, res: Response) {
        const { id } = req.params;
        const { name, amount } = req.body;
        const result = await prisma.item.create({
            data: {
                name,
                amount: amount,
                jar: {
                    connect: {
                        id,
                    },
                },
            }
        });
        res.json({result: result});
    }
}

export default new JarsController();