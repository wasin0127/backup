import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const userbackup = await prisma.userbackup.findMany({
                    // skip: (page - 1) * pageSize,
                    // take: pageSize,
                });

                const totaluserbackup = await prisma.userbackup.count();
                const totalPage: number = Math.ceil(totaluserbackup / pageSize);
                res.status(200).json({ userbackup });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the userbackup" });
            }
            break;

        case 'POST':
            try {
                const newuserbackup = await prisma.userbackup.create({
                    data: req.body,
                });

                res.status(201).json(newuserbackup);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the userbackup" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}