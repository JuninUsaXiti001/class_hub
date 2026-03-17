import { NextRequest, NextResponse } from "next/server"
import pool from "@/app/libs/database/db"
import { HomeWork } from "@/app/libs/models/homework"

export async function POST(request: NextRequest) {
    try {
        const body : HomeWork = await request.json()

        // Validação correta
        if (!body.type || !body.title || !body.author || !body.date) {
            return NextResponse.json(
                { error: "Dados inválidos" },
                { status: 400 }
            )
        }

        const query = await pool.query(
            `INSERT INTO homeworks (type, title, subject, description, date, archives, author)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [body.type, body.title, body.subject, body.description, body.date, body.archives, body.author]
        )

        return NextResponse.json(
            { message: "Tarefa criada", data: query.rows[0] },
            { status: 201 }
        )

    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Erro interno" },
            { status: 500 }
        )
    }
}