import { NextRequest, NextResponse } from "next/server"
import pool from "@/app/libs/database/db"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const { type, title, description, date, author } = body

        // Validação correta
        if (!type || !title || !author || !date) {
            return NextResponse.json(
                { error: "Dados inválidos" },
                { status: 400 }
            )
        }

        const query = await pool.query(
            `INSERT INTO homeworks (type, title, description, date, author)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [type, title, description, date, author]
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