const express = require('express')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const app = express()
const cors = require('cors')
const prisma = new PrismaClient()
const port = 3000

// Middleware para processar JSON
app.use(express.json())

app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));

// {
//     "usuario": "Nome do Usuário",
//     "senha": "senha123",
//     "data": "2024-12-05",
//     "hora": "14:30:00",
//     "local": "Sala 101"
// }

app.post('/api/agendamento', async (req, res) => {
    try {
        const { usuario, senha, data, horario, local } = req.body

        const hashedSenha = await bcrypt.hash(senha, 10)

        // Formatação correta para Prisma
        const dataFormatada = new Date(`${data}T00:00:00.000Z`)
        const horaFormatada = new Date(`1970-01-01T${horario}:00.000Z`)

        const novoAgendamento = await prisma.usuario.create({
            data: {
                usuario,
                senha: hashedSenha,
                data: dataFormatada,
                hora: horaFormatada,
                local
            }
        })

        res.status(201).json({
            message: "Agendamento criado com sucesso",
            id: novoAgendamento.id
        })

    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar agendamento",
            details: error.message
        })
    }
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
